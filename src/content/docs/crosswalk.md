---
title: Crosswalk
description: A free, open player ID crosswalk — mapping identities across MLBAM, FanGraphs, Baseball Reference, and more.
---

[crosswalk.prism.statsvine.com](https://crosswalk.prism.statsvine.com) serves pure ID mappings across the major sports data providers. No enrichment, no metadata — just the identifiers. Currently covers MLB (~1,700 players), with NFL and NBA planned.

Source data lives in [prism-crosswalk-data](https://github.com/StatsVine/prism-crosswalk-data) (the canonical CSV). Built artifacts — JSON, CSV, NDJSON, and compressed variants — are published to [prism-crosswalk](https://github.com/StatsVine/prism-crosswalk).

## Supported namespaces

| Key | Provider |
|---|---|
| `prism_id` | PRISM (canonical) |
| `mlbam_id` | MLB Advanced Media |
| `fangraphs_id` | FanGraphs |
| `bbref_id` | Baseball Reference |
| `sfbb_id` | SmartFantasyBaseball |
| `yahoo_id` | Yahoo Sports |
| `nfbc_id` | NFBC |

## API

Look up by any known ID:

```
GET /{sport}/players/by_id/{source}/{source_id}.json
```

Or look up directly by PRISM ID:

```
GET /{sport}/players/{prism_id}.json
```

**Example** — resolve Shohei Ohtani's MLBAM ID:

```
GET https://crosswalk.prism.statsvine.com/mlb/players/by_id/mlbam/660271.json
```

```json
{
  "prism_id": "pr2r5vzrqm",
  "mlbam_id": "660271",
  "fangraphs_id": "19755",
  "bbref_id": "ohtansh01",
  "sfbb_id": "ohtansh01",
  "yahoo_id": "10835",
  "nfbc_id": "9810"
}
```

## Bulk exports

For bulk use, [crosswalk.prism.statsvine.com](https://crosswalk.prism.statsvine.com) hosts file exports at:

```
/exports/{sport}/players/{dataset}/
```

Two datasets are available:

- **`full`** — includes names and birth dates alongside IDs; useful for human inspection and QA
- **`ids`** — identifier mappings only; optimized for pipeline joins

Each dataset is available as `players.json`, `players.min.json`, `players.csv`, `players.ndjson`, and `.gz` variants. The `ids` dataset also includes pre-keyed lookup files per namespace (e.g. `by_id/players.mlbam_id.json`) for fast lookups without a server.

## Data quality

Daily automated checks validate mappings against MLB rosters, the Chadwick Bureau register, FanGraphs redirects, and SFBB. Known discrepancies are documented in the source repo.
