/**
 * Shared motion runtime.
 *
 * Three effects, one rAF budget:
 *   [data-reveal] / [data-count]  — enter-on-scroll and number count-up
 *   [data-tilt]                   — pointer-driven 3D tilt on a .stage child,
 *                                   which also publishes the pointer position
 *                                   as --mx/--my for the glass hotspot
 *
 * Everything degrades to "correct but still": with JS off, reveals are
 * handled by the CSS fallback in global.css, tilts stay flat, and the
 * glass hotspot simply never lights. Nothing here is load-bearing for content.
 *
 * Pointer effects are skipped entirely on coarse pointers (touch) — there is
 * no hover there, so the listeners would only cost battery — and whenever the
 * user asks for reduced motion.
 */

type Cleanup = () => void;

let cleanups: Cleanup[] = [];

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------------------------------------------------------------- */
/*  Count-up                                                         */
/* ---------------------------------------------------------------- */

function countUp(el: Element) {
  const raw = el.getAttribute("data-count");
  if (!raw) return;
  const target = parseFloat(raw);
  const prefix = el.getAttribute("data-prefix") ?? "";
  const suffix = el.getAttribute("data-suffix") ?? "";
  const decimals = (raw.split(".")[1] || "").length;
  if (reduceMotion() || isNaN(target)) {
    el.textContent = prefix + target.toFixed(decimals) + suffix;
    return;
  }
  const dur = 1400;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------------------------------------------------------------- */
/*  Scroll reveal                                                    */
/* ---------------------------------------------------------------- */

function initReveal() {
  const els = document.querySelectorAll("[data-reveal], [data-count]");
  if (els.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => {
      el.classList.add("is-visible");
      countUp(el);
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        countUp(entry.target);
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
  );
  els.forEach((el) => io.observe(el));
  cleanups.push(() => io.disconnect());
}

/* ---------------------------------------------------------------- */
/*  Pointer tilt + glass hotspot                                     */
/* ---------------------------------------------------------------- */

/**
 * Tilt and the glass hotspot need the same thing — where the pointer is
 * inside an element — so one pointermove handler serves both, with a single
 * rAF write. The read (getBoundingClientRect) happens on enter, not on every
 * move, so a fast drag across a grid never forces layout mid-frame.
 */
function initPointerFx() {
  if (reduceMotion() || !finePointer()) return;

  const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
  if (targets.length === 0) return;

  for (const el of targets) {
    // How many degrees at the extreme corners. Subtle by default: past ~10°
    // the type on the face starts to look distorted rather than dimensional.
    const max = parseFloat(el.getAttribute("data-tilt") || "") || 7;

    let rect: DOMRect | null = null;
    let frame = 0;
    let px = 0;
    let py = 0;

    const write = () => {
      frame = 0;
      if (!rect) return;
      const x = (px - rect.left) / rect.width;
      const y = (py - rect.top) / rect.height;
      el.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
      el.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
      // Pointer right of centre rotates the far edge away (positive Y),
      // pointer above centre lifts the top toward the viewer.
      el.style.setProperty("--ry", `${((x - 0.5) * 2 * max).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${((0.5 - y) * 2 * max).toFixed(2)}deg`);
    };

    const onEnter = (e: PointerEvent) => {
      rect = el.getBoundingClientRect();
      el.classList.add("is-tracking");
      px = e.clientX;
      py = e.clientY;
      write();
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!frame) frame = requestAnimationFrame(write);
    };

    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      rect = null;
      // Dropping is-tracking hands the return-to-flat back to the CSS
      // transition, so the card settles instead of snapping.
      el.classList.remove("is-tracking");
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--mx", "50%");
      el.style.setProperty("--my", "50%");
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    cleanups.push(() => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    });
  }
}

/* ---------------------------------------------------------------- */
/*  Hero parallax                                                    */
/* ---------------------------------------------------------------- */

/**
 * Drifts elements marked [data-parallax="<factor>"] as the page scrolls.
 * Only runs while the hero is on screen, so there is no scroll listener
 * doing work for the other 95% of the page.
 */
function initParallax() {
  if (reduceMotion()) return;
  const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
  if (els.length === 0 || !("IntersectionObserver" in window)) return;

  const live = new Set<HTMLElement>();
  let frame = 0;

  const write = () => {
    frame = 0;
    const y = window.scrollY;
    live.forEach((el) => {
      const factor = parseFloat(el.getAttribute("data-parallax") || "0.1");
      el.style.setProperty("--parallax-y", `${(-y * factor).toFixed(1)}px`);
    });
  };

  const onScroll = () => {
    if (!frame && live.size) frame = requestAnimationFrame(write);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) live.add(el);
      else live.delete(el);
    });
    if (live.size) window.addEventListener("scroll", onScroll, { passive: true });
    else window.removeEventListener("scroll", onScroll);
  });

  els.forEach((el) => io.observe(el));
  write();
  cleanups.push(() => {
    io.disconnect();
    window.removeEventListener("scroll", onScroll);
    if (frame) cancelAnimationFrame(frame);
  });
}

/* ---------------------------------------------------------------- */

export function initMotion() {
  cleanups.forEach((fn) => fn());
  cleanups = [];
  initReveal();
  initPointerFx();
  initParallax();
}
