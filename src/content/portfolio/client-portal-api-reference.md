---
title: "A client portal API reference, written docs-as-code"
description: "The full API reference for a multi-tenant client portal — accounts, orders, two payment gateways, webhooks, subscription billing, usage metering and support messaging — written in Markdown alongside the code it documents."
client: "Essay Writing Edge & Edge Tech Gurus"
industry: "Education & technology services"
pillar: "technical-writing"
pubDate: 2026-09-05
stack: ["Markdown", "Git", "Next.js App Router", "Prisma", "PostgreSQL", "NextAuth", "PayPal", "Paystack"]
metrics:
  - value: "25"
    label: "endpoints documented"
  - value: "2"
    label: "brands on one codebase"
featured: true
draft: false
---

> The reference below is reproduced **in full and verbatim**. It was written sanitised from the start — hosts, emails and identifiers are placeholders in the source document, not redactions made for this page. I both built the portal and wrote its documentation.

## The context

One codebase serves two independent service brands — the platforms behind [Essay Writing Edge](/portfolio/essay-writing-edge/) and [Edge Tech Gurus](/portfolio/edge-tech-gurus/). The API covers account creation, order intake, payments across two gateways, webhooks, subscription billing, usage metering, support messaging and published content.

Its readers are the marketing sites calling it cross-origin, a server-to-server metering client, and whoever maintains the portal next — including me, months later.

## What made this one hard to write

**Multi-tenancy is a security property, not a feature.** Brand scoping had to be documented as a rule with teeth: brand is never read from a request body, and a cross-brand lookup returns `404` rather than `403` so the response does not confirm the record exists. Documenting that as "records are scoped by brand" would have been true and useless.

**Money has failure modes prose usually skips.** Retries, duplicate webhook deliveries, rounding drift between a gateway's decimals and the stored total. The reference gives each one a named mechanism and the reason it exists, because an integrator who does not know a webhook can arrive twice will write code that double-credits an order.

**The reader needs the reasoning, not just the contract.** An API reference that only lists shapes gets copied wrongly. Where a rule looks arbitrary — the `0.01` tolerance, the `503` on an unset token, the capped `quantity` — the document says what breaks without it.

## Decisions worth noting

**Rationale sits next to the rule, not in an appendix.** "Three deliberate choices here" appears immediately after the metering error table, where a reader is already asking why.

**Statuses are defined by what they disclose.** The errors section ends on `403` versus `404` and on `500` being a bug rather than an outcome — the two distinctions that most often get implemented backwards.

**Known inconsistencies are documented, not hidden.** Some older endpoints return `message` where newer ones return `error`. The reference says so and tells the reader to handle both, because a reader who discovers that in production trusts nothing else in the document.

**Docs-as-code.** Markdown in Git next to the route handlers, reviewed in the same pull requests. When a route changes, its documentation is in the diff.

---

## The reference

A multi-tenant client portal serving two independent service brands from one
codebase. The API covers account creation, order intake, payments across two
gateways, support messaging, subscription billing, and usage metering.

**Base URL:** `https://api.example.com`
**Stack:** Next.js App Router route handlers, Prisma, PostgreSQL, NextAuth (JWT
sessions)


### Contents

- [Conventions](#conventions)
- [Authentication](#authentication)
- [Accounts](#accounts)
- [Orders](#orders)
- [Payments](#payments)
- [Webhooks](#webhooks)
- [Subscription billing](#subscription-billing)
- [Usage metering](#usage-metering)
- [Support messaging](#support-messaging)
- [Content](#content)
- [Errors](#errors)

---

### Conventions

**Content type.** All endpoints accept and return `application/json` unless
noted. `POST /auth/register` also accepts `multipart/form-data` when the request
carries file attachments.

**Authentication.** Most endpoints require a signed-in session, supplied as an
HTTP-only session cookie. Three categories exist:

| Category | Mechanism | Used by |
| --- | --- | --- |
| Session | Session cookie | Client and admin endpoints |
| Bearer token | `Authorization: Bearer <token>` | Server-to-server metering |
| Public | None | Marketing sites, published content |

**Brand scoping.** Every account belongs to exactly one brand, assigned at
registration and immutable afterwards. Brand is never read from a request body
or query parameter — it is a constant in the route handler or is derived from
the authenticated session. A request for another brand's record returns `404`,
not `403`, so the response does not confirm that the record exists.

**Money.** Amounts are decimal numbers with two places. Currency is an ISO 4217
code, defaulting to `USD`.

**Idempotency.** Payment and billing operations that create external objects
send a stable request identifier derived from the internal record ID, so a
retried or double-clicked request reuses the original object rather than
creating a second one.

---

### Authentication

#### `GET|POST /api/auth/[...nextauth]`

NextAuth's handler. Serves sign-in, sign-out, callback, and session endpoints.
Sessions are JWT-based; no adapter writes session rows to the database.

#### `GET /api/auth/session`

Returns the current session, or an empty object when no session exists.

Sends permissive CORS headers so a marketing site on a different origin can
check sign-in state before rendering a "Sign in" or "Dashboard" link.

**Response `200`**

```json
{
  "user": {
    "id": "clx8f2p010000qw3h",
    "email": "client@example.com",
    "name": "A. Client",
    "brand": "TECH"
  },
  "expires": "2026-10-05T09:14:22.000Z"
}
```

An unauthenticated request also returns `200`, with `{}`. Check for the presence
of `user`, not the status code.

#### `POST /api/auth/verify-auto-token`

Exchanges a short-lived JWT issued during registration for a sign-in token. Part
of the auto-login handoff described under [Accounts](#accounts).

---

### Accounts

#### `POST /api/auth/register`

Creates an account. Optionally creates the caller's first order in the same
request, and optionally returns a token that signs them straight in.

This endpoint is called cross-origin by the marketing sites, so it implements
`OPTIONS` and returns CORS headers on every response, including errors.

**Request — JSON**

```json
{
  "name": "A. Client",
  "email": "client@example.com",
  "password": "correct-horse-battery-staple",
  "serviceType": "academic",
  "autoLogin": true,
  "pendingOrder": {
    "title": "Market analysis brief",
    "type": "research-paper",
    "subject": "Economics",
    "level": "undergraduate",
    "pages": 4,
    "deadline": "2026-09-20T17:00:00.000Z"
  }
}
```

**Request — multipart/form-data**

When the order has attachments, send the JSON above as a `data` field and each
file as a repeated `files` field.

```bash
curl -X POST https://api.example.com/api/auth/register \
  -F 'data={"name":"A. Client","email":"client@example.com","password":"...","autoLogin":true}' \
  -F 'files=@brief.pdf' \
  -F 'files=@rubric.docx'
```

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `name` | string | yes | |
| `email` | string | yes | Unique across all brands |
| `password` | string | yes | Hashed with bcrypt before storage |
| `serviceType` | string | no | Defaults to the brand's standard service |
| `autoLogin` | boolean | no | Defaults to `false` |
| `pendingOrder` | object | no | Creates an order alongside the account |

**Response `201`**

```json
{
  "success": true,
  "userId": "clx8f2p010000qw3h",
  "assignmentId": "clx8f2p010001qw3h",
  "autoLoginToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

`autoLoginToken` is present only when `autoLogin` was `true`. It is short-lived
and single-use.

**Errors**

| Status | Condition |
| --- | --- |
| `400` | Missing required fields, or `multipart` request with no `data` part |
| `409` | Email already registered |
| `500` | Unexpected server error |

##### The auto-login handoff

A visitor who orders on a marketing site should not have to sign in immediately
afterwards. The flow avoids passing credentials between origins:

1. The marketing site posts the order and the new account to `POST /api/auth/register` with `autoLogin: true`.
2. The portal creates the account and the order, then returns a signed, short-lived JWT.
3. The marketing site redirects to `/auth/auto-login?token=…&assignmentId=…`.
4. The portal verifies the JWT and issues a second, even shorter-lived sign-in token.
5. The sign-in page consumes that token, establishes the session, and lands the client on the order awaiting payment.

The password never crosses origins, and neither token survives long enough to be
useful if it leaks into a referrer header or browser history.

#### `POST /api/writers/register`

Creates a contributor account and its associated profile. Validates required
profile fields before creating the user, so a partial submission does not leave
an account without a profile.

---

### Orders

#### `GET /api/assignments/create`

Returns the reference data the order form needs: service categories, order
types, and the rate table. Fetching rather than hardcoding these keeps the
marketing site's calculator and the portal's pricing in agreement.

**Response `200`**

```json
{
  "academicLevels": [
    { "value": "high-school",   "label": "High School",   "baseRate": 11.5, "urgentRate": 18.0 },
    { "value": "college",       "label": "College",       "baseRate": 12.5, "urgentRate": 25.0 },
    { "value": "undergraduate", "label": "Undergraduate", "baseRate": 15.0, "urgentRate": 40.0 },
    { "value": "graduate",      "label": "Graduate",      "baseRate": 25.0, "urgentRate": 45.0 },
    { "value": "phd",           "label": "PhD",           "baseRate": 30.0, "urgentRate": 55.0 }
  ],
  "assignmentTypes": [
    { "value": "essay", "label": "Essay" },
    { "value": "research-paper", "label": "Research Paper" }
  ],
  "serviceTypes": [
    { "value": "academic",    "label": "Academic Writing", "hasPricing": true },
    { "value": "programming", "label": "Programming",      "hasPricing": false }
  ]
}
```

`hasPricing: false` means the service is quoted manually rather than priced by
the calculator. Render those options without a price estimate.

##### Deadline pricing

The rate that applies depends on how much time remains until the deadline:

| Time to deadline | Rate |
| --- | --- |
| 3 hours or less | `urgentRate` |
| 3 to 24 hours | Prorated between `urgentRate` and `baseRate` |
| More than 24 hours | `baseRate` |

Prorating across the 3–24 hour band, rather than stepping between two prices,
avoids a cliff where a deadline one minute later halves the quote.

#### `POST /api/assignments/create`

Creates an order for the signed-in client. Requires a session.

---

### Payments

Two gateways are supported behind one interface. The gateway is chosen per
request, falling back to the configured default.

#### `POST /api/payments/create-intent`

Opens a payment against an order and returns the URL to send the client to.

**Authentication:** session required.

**Request**

```json
{
  "assignmentId": "clx8f2p010001qw3h",
  "amount": 62.50,
  "paymentType": "deposit",
  "gateway": "paypal"
}
```

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `assignmentId` | string | yes | Must belong to the caller |
| `amount` | number | yes | Greater than zero, at most the remaining balance |
| `paymentType` | string | no | `deposit` or `full` |
| `gateway` | string | no | `paypal` or `paystack`; defaults per configuration |

**Response `200`**

```json
{
  "paymentId": "clx8f2p010002qw3h",
  "gateway": "paypal",
  "orderId": "5O190127TN364715T",
  "approvalUrl": "https://www.paypal.com/checkoutnow?token=5O190127TN364715T",
  "currency": "USD"
}
```

Redirect the client to `approvalUrl`. Do not treat this response as payment —
money moves only on capture.

**Errors**

| Status | Condition |
| --- | --- |
| `400` | `assignmentId` or `amount` missing; amount is zero or negative; amount exceeds the remaining balance |
| `401` | No session |
| `404` | Order does not exist, or belongs to another account |
| `500` | Gateway rejected the request |

The order lookup filters on both order ID and the caller's user ID, so another
client's order is indistinguishable from one that does not exist.

#### `POST /api/payments/verify`

Confirms a payment by asking the gateway directly, then captures it.

**Authentication:** session required.

This is the authoritative path. It does not trust the browser's return
redirect, and it does not wait for a webhook. The handler reads the order from
the gateway, captures it if the status is `APPROVED`, and recognises an order
already `COMPLETED` on a repeated call rather than failing.

**Response `200`**

```json
{
  "status": "success",
  "amount": 62.50,
  "currency": "USD",
  "captureId": "3C679366HH908993F",
  "paidAt": "2026-09-05T11:02:44.000Z"
}
```

`status` is `success`, `pending`, or `failed`. A `pending` result means the
client has not completed approval; it is not an error.

---

### Webhooks

Webhooks are a secondary path. Both payment flows confirm by calling the gateway
directly, so a delayed or dropped webhook does not strand a payment.

#### `POST /api/webhooks/paypal`

**Authentication:** signature verification against the configured webhook ID.

**Events handled**

| Event | Effect |
| --- | --- |
| `CHECKOUT.ORDER.APPROVED` | Marks the payment `pending`; the client has approved but nothing is captured |
| `PAYMENT.CAPTURE.COMPLETED` | Marks the payment `completed`, records the capture ID, and updates the order's paid and remaining balances |
| `PAYMENT.CAPTURE.DENIED` | Marks the payment `failed` with a reason |

Unrecognised event types are logged and acknowledged with `200`. Returning an
error for an event you do not handle only invites the provider to retry it.

**On capture, the order's balance is recalculated:**

```
paidAmount      = paidAmount + captureAmount
remainingAmount = max(0, budget - paidAmount)
paymentStatus   = remainingAmount <= 0.01 ? "completed" : "partial"
```

The `0.01` tolerance absorbs rounding differences between the gateway's decimal
handling and the stored total, so a fully paid order is not left one cent short
of complete.

#### `POST /api/webhooks/paystack`

**Authentication:** HMAC signature in the `x-paystack-signature` header,
computed over the raw request body.

Read the body as text, not as parsed JSON. Verifying a signature against
re-serialised JSON fails intermittently, because key order and whitespace are
not preserved.

#### Idempotency

Every delivered event is recorded before it is acted on, keyed by the provider's
event ID under a unique constraint. A replayed delivery loses the insert race
and is skipped.

This matters more than it first appears. Payment providers retry on any
non-`2xx` response and sometimes deliver duplicates even after success. Without
the constraint, a retried `PAYMENT.CAPTURE.COMPLETED` would add the same amount
to the order's paid balance twice, marking an underpaid order complete.

---

### Subscription billing

Recurring billing issues a normal checkout order for each period rather than
using a provider-managed subscription object. The tradeoff: more of the cycle is
our responsibility, in exchange for the same capture path the one-off flow has
run in production for months, and full control over what the client sees on the
gateway's payment page.

#### The cycle

| Step | Trigger |
| --- | --- |
| Issue the next invoice | Scheduled job, `--commit` required |
| Client pays | Billing page → gateway approval |
| Capture and roll the period | Server-side confirmation route |
| Receipt | Transactional email |

The issuing job is **dry-run by default**. It prints what it would create and
exits. Creating things clients are asked to pay for has to be an explicit
choice, not the default outcome of running a command.

The job issues for any active subscription whose period ends within the lead
window, and is safe to run daily.

#### Two invariants

**A subscription never has two open invoices.** The guard tests whether an
unpaid invoice already exists — not whether one matches the period dates.

That distinction is load-bearing. For a subscription that has never been paid,
the next period anchors on the current moment, so matching by exact period start
missed by milliseconds and issued a second bill for the same month.

**A period only ever moves forward.** Confirming an already-paid invoice reports
`alreadyPaid` and changes nothing, and a late payment cannot pull the period end
backwards past a newer one already settled.

#### Branding on the payment page

The one-off gateway helper hardcodes the brand name, soft descriptor, and
description used on the provider's checkout screen. Sending a second brand's
client through it would show them the wrong company name at the moment they pay.

Subscription orders therefore go through a separate call that takes its branding
from a per-brand identity lookup, while making the same underlying request. The
original path is untouched.

---

### Usage metering

#### `POST /api/usage/tech`

Records metered usage against a subscription's included allowance.

**Authentication:** `Authorization: Bearer <PORTAL_USAGE_TOKEN>`

**Request**

```json
{
  "email": "client@example.com",
  "metric": "automation_runs",
  "quantity": 1
}
```

| Field | Type | Required | Constraints |
| --- | --- | --- | --- |
| `email` | string | yes | Resolved within the route's brand only |
| `metric` | string | yes | `chatbot_conversations`, `automation_runs`, or `active_workflows` |
| `quantity` | integer | yes | Whole number, 1 to 10,000 |

**Response `201`**

```json
{
  "ok": true,
  "metric": "automation_runs",
  "used": 400,
  "included": 500,
  "crossed": "warn"
}
```

`crossed` is `null` when the request did not cross a threshold, `"warn"` when it
crossed the warning point, and `"cap"` when it exhausted the allowance.

**Errors**

| Status | Condition |
| --- | --- |
| `401` | Missing or incorrect bearer token |
| `404` | No account with that email in this brand |
| `422` | Unrecognised `metric`, or `quantity` outside 1–10,000 |
| `503` | `PORTAL_USAGE_TOKEN` is not configured |

Three deliberate choices here:

**An unknown metric is rejected, not stored.** Accepting it would create a meter
nobody reads and hide the typo until someone queried an invoice and found the
numbers did not add up.

**An unset token returns `503`, not `200`.** A metering endpoint that accepts
everything when misconfigured is worse than one that is plainly unavailable.

**`quantity` is capped.** One malformed payload cannot burn a month's allowance.

The account lookup is scoped by brand as well as email, so an address belonging
to the other brand does not resolve here even for a caller holding a valid
token.

---

### Support messaging

Support uses HTTP polling rather than WebSockets. The portal runs on serverless
functions, which cannot hold persistent connections.

#### `GET /api/support/tickets`

Returns the caller's tickets, newest first, each with its full message thread in
chronological order and the assigned agent if one exists.

**Authentication:** session required.

**Response `200`**

```json
[
  {
    "id": "clx8f2p010003qw3h",
    "subject": "Deliverable formatting",
    "status": "open",
    "priority": "medium",
    "category": "general",
    "createdAt": "2026-09-01T08:30:00.000Z",
    "messages": [
      {
        "id": "clx8f2p010004qw3h",
        "content": "The exported file has the wrong margins.",
        "createdAt": "2026-09-01T08:30:00.000Z",
        "sender": { "id": "clx8f2p010000qw3h", "name": "A. Client", "email": "client@example.com" }
      }
    ],
    "assignedAdmin": { "id": "clx8f2p010005qw3h", "name": "Support", "email": "support@example.com" }
  }
]
```

**Errors:** `401` when there is no session.

#### `POST /api/support/tickets`

Creates a ticket. The description becomes the thread's first message in the same
transaction, so a ticket never exists with an empty thread.

**Request**

```json
{
  "subject": "Deliverable formatting",
  "description": "The exported file has the wrong margins.",
  "priority": "medium",
  "category": "general"
}
```

`priority` defaults to `medium` and `category` to `general`.

**Response `201`** — the created ticket, in the shape shown above.

#### `POST /api/support/guest-message`

Accepts a message from a visitor who has no account, creating a ticket against a
guest identity. Called cross-origin from the marketing sites.

**Authentication:** none. CORS-restricted to the configured marketing origin.

**Request**

```json
{
  "name": "A. Visitor",
  "email": "visitor@example.com",
  "message": "Do you work with clients in the EU?"
}
```

`email` and `message` are required; `name` is optional.

**Response `201`**

```json
{
  "success": true,
  "message": "Message sent successfully",
  "messageId": "clx8f2p010006qw3h",
  "ticketId": "clx8f2p010007qw3h",
  "guestEmail": "visitor@example.com"
}
```

**Errors:** `400` when `email` or `message` is missing; `500` on server error.

##### Why brand is a constant here

Each marketing site posts to its own endpoint path, and each route sets brand as
a module-level constant:

```ts
const BRAND = ACADEMIC
```

Brand is never read from the request body. A public, unauthenticated endpoint
that took brand from its payload would let anyone file a ticket into the other
brand's support queue by editing one JSON field.

Both routes delegate to one shared implementation, so the two cannot drift apart
as the handling logic changes.

---

### Content

#### `GET /api/public/blog`

Returns published posts. No authentication.

**Query parameters:** `limit`, `offset`, `category`

**Response `200`**

```json
{
  "articles": [
    {
      "id": "clx8f2p010008qw3h",
      "title": "Choosing a payment gateway",
      "slug": "choosing-a-payment-gateway",
      "excerpt": "What underwriting actually looks at.",
      "category": "research",
      "publishedAt": "2026-08-14T09:00:00.000Z",
      "readTime": "6 min",
      "views": 412
    }
  ],
  "total": 37,
  "limit": 10,
  "offset": 0
}
```

#### `GET /api/public/blog/[slug]`

Returns one published post and increments its view counter. Draft posts return
`404` regardless of whether the slug exists.

The returned `views` value includes the current request, so the number the
reader sees matches the number stored.

**Errors:** `404` when no published post has that slug.

#### Authoring endpoints

All require a session with content-authoring permission. A session without it
receives `403`.

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/blog/posts` | List all posts, including drafts |
| `POST` | `/api/blog/posts` | Create a post |
| `GET` | `/api/blog/posts/[id]` | Read one post |
| `PUT` | `/api/blog/posts/[id]` | Update a post |
| `DELETE` | `/api/blog/posts/[id]` | Delete a post |
| `GET` | `/api/blog/categories` | List categories |
| `POST` | `/api/blog/categories` | Create a category |
| `POST` | `/api/blog/upload` | Upload an image |

---

### Errors

Errors return a JSON body with a human-readable message.

```json
{ "error": "Payment amount cannot exceed remaining balance" }
```

Some older endpoints use `message` rather than `error`. Read both.

| Status | Meaning |
| --- | --- |
| `400` | Malformed request or failed validation |
| `401` | No session, or an invalid bearer token |
| `403` | Authenticated but not permitted |
| `404` | Not found, or not visible to the caller |
| `409` | Conflicts with existing state |
| `422` | Well-formed but semantically invalid |
| `500` | Unhandled server error |
| `503` | A required configuration value is missing |

**`403` versus `404`.** `403` means the resource exists and the caller may not
have it. `404` means the caller cannot tell whether it exists. Cross-brand and
cross-account access always returns `404`: confirming that another client's
order ID is real is itself a disclosure.

**`500` is a bug, not an outcome.** A missing record, an unauthorised caller, or
a rejected payment each have their own status. If you receive `500`, something
failed that was not anticipated.
