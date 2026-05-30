---
title: Philosophy
description: The design principles behind PRISM.
---

## ID resolution is infrastructure

Every sports data pipeline eventually needs to join across providers. Doing that join reliably — without manual reconciliation or fragile name matching — is solved infrastructure. PRISM treats it that way: a shared, maintained foundation that anyone can build on.

## Narrow scope

Each component does one thing. The crosswalk maps identifiers. The registry enriches them with metadata. Tools validate and build. Keeping the layers distinct makes each one simpler to consume, trust, and evolve independently.

## Stability as a contract

Downstream systems shouldn't have to watch for silent breakage. Schema changes are coordinated, not casual. When something must change, it's versioned and announced.

## Automation over vigilance

Data quality shouldn't depend on someone remembering to check. Automated validation catches stale or missing mappings before they propagate to consumers.

## Open by default

PRISM is infrastructure, and infrastructure should be open. Source data is licensed ODC-By 1.0; code is MIT. Everything is public on GitHub.
