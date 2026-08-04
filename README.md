# AION EVE — Mobile Product Map Prototype

> Public prototype for visual and interaction review. Not a production AION runtime.

## Repository role

This repository presents the owner-approved mobile/landscape direction for:

- AION EVE;
- Product Map;
- Owner Command;
- navigation between selected AION worlds and product surfaces.

It is a prototype and public review surface.

## Current demonstrated scope

- interactive navigation between approved prototype screens;
- visual composition of AION CORE and selected product worlds;
- owner-device review on an iPhone in landscape mode for part of the flow;
- technical browser-fit improvements;
- static or demonstration content.

## Current maturity

| Area | Status |
|---|---|
| Visual direction | Approved prototype scope |
| Three-screen navigation | Implemented and owner-device observed |
| v0.13.7 dynamic-height correction | Implemented; exact device verification remains required unless newer Evidence supersedes it |
| Production backend | Not included |
| Real authentication | Not included |
| Operational database | Not included |
| Commercial value | Not proven |
| Finished product | No |

## Canonical visual boundary

The approved composition, colors, labels, central worlds, side panels and analytics must not be changed without a new owner decision.

Allowed without changing the visual canon:

- reversible browser compatibility fixes;
- touch and navigation fixes;
- scale and viewport corrections;
- Evidence and regression tooling.

## Important architecture boundary

The current iframe/scaled-canvas implementation is a prototype delivery technique, not the target architecture of AION Experience Layer.

This repository is not:

- the canonical AION platform core;
- the Service CRM implementation source;
- a production database;
- proof that EVE intelligence is implemented;
- proof of commercial readiness.

## Sources of truth

- AION architecture and discovery:
  `PROAiCRM/AIONOS`
- Service Business OS implementation:
  `PROAiCRM/AION-Service-CRM`

## Evidence rule

Every maturity claim must identify:

- exact commit;
- tested device/browser;
- verified screens and actions;
- what remains untested.

Visual completeness must never be converted into a production-readiness claim.
