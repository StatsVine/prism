---
title: Registry
description: Enriched player profiles built on top of the PRISM crosswalk — names, birthdates, handedness, position, and roster status.
---

[registry.prism.statsvine.com](https://registry.prism.statsvine.com) enriches the crosswalk with metadata from external sources. Where the crosswalk is strictly IDs, the registry adds names, birthdates, sport-specific attributes, and roster status. Currently covers MLB, with NFL and NBA planned.

Source and build scripts live in [prism-registry](https://github.com/StatsVine/prism-registry).

## Products

| Product | Contents |
|---|---|
| `player_ids` | All crosswalk IDs plus player names |
| `player_profile` | Names, birthdate, birth location |
| `players_mlb_profile` | Batting/throwing hand, primary position |
| `players_mlb_roster` | Active roster status, team, MLB service data |

## API

Look up by PRISM ID:

```
GET /mlb/{product}/{prism_id}
```

Or by any known source ID:

```
GET /mlb/{product}/by_id/{source}/{id}
```

**Example** — get Shohei Ohtani's IDs and names:

```
GET https://registry.prism.statsvine.com/mlb/player_ids/pr2r5vzrqm.json
```

```json
{
  "id": "pr2r5vzrqm",
  "ids": {
    "prism": "pr2r5vzrqm",
    "mlbam": "660271",
    "fangraphs": "19755",
    "bbref": "ohtansh01",
    "sfbb": "ohtansh01",
    "yahoo": "10835",
    "nfbc": "9810"
  },
  "names": {
    "last": "Ohtani",
    "first": "Shohei",
    "middle": null
  }
}
```

## Data sources

Registry data is sourced from the MLB Stats API, the Chadwick Bureau register, and SmartFantasyBaseball. It is rebuilt automatically whenever the crosswalk updates.
