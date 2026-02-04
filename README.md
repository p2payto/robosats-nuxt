# robosats-nuxt

`robosats-nuxt` is the Nuxt-side integration layer for RoboSats.

It is responsible for:
- RoboSats identity generation
- cryptographic setup
- authentication state
- exposing high-level composables to the application

It can be used either as a **stand-alone Nuxt project** or as an **importable Nuxt module**.

This package is intended to become one of the selectable payment rails in **p2pay-core**.

---

## What already exists

### Cryptography & Authentication (client-side)

All RoboSats cryptographic requirements are already implemented here:

- Robot token generation
- SHA256 hashing
- Base91 encoding (RoboSats-compatible)
- PGP keypair generation
- Encryption of the PGP private key with the token
- Construction of the RoboSats Authorization header
- Nostr public key derivation from the token hash

The resulting identity can be:
- stored locally
- persisted via Nuxt storage / Pinia
- reused across sessions

This identity is then consumed by the backend layer (`robosats-nitro`).

---

## Existing composables

The module already provides composables to:

- initialize and persist a RoboSats robot identity
- interact with RoboSats via backend APIs
- create offers
- poll contracts and trade state
- manage payment-request flows

All composables are:
- SSR-safe
- framework-native
- reusable across projects

---

## Tor / onion routing

The Nuxt layer is onion-aware but does not handle Tor directly.

All Tor / onion routing is delegated to the backend (`robosats-nitro`), keeping the client clean and portable.

---

## Usage modes

### 1. Stand-alone Nuxt app
- Minimal or full UI
- Useful for testing and development

### 2. Importable Nuxt module
- Plugged into an existing Nuxt project
- Exposes composables automatically
- Intended usage inside p2pay-core

---

## Role inside p2pay-core

Inside p2pay-core, RoboSats is:

- not a default payment rail
- manually selectable per payment request
- intended only when the merchant explicitly opts in

The Nuxt layer handles:
- rail selection UI / logic
- identity and auth
- request orchestration

---

## Bond-aware payment requests

Because RoboSats requires a bond:

- the merchant selects this rail **explicitly**
- the bond commitment is a conscious decision
- the rail is used only for high-confidence payments

The Nuxt layer orchestrates this choice but does not hide its implications.

---

## Status

- Cryptography & auth: **implemented**
- Nuxt composables: **implemented**
- Backend dependency: `robosats-nitro`
- p2pay-core integration: **ongoing**

This module is infrastructure-first and intentionally non-consumer-facing.
