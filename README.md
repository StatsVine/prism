# PRISM

**PRISM (Player Record Identity Standard Mapping)** is a free, open registry of player identity mappings across major sports data providers. It assigns each player a stable `prism_id` and links it to provider-specific IDs (MLBAM, FanGraphs, Baseball Reference, etc.), so you can reliably join data across sources. Automated daily checks keep it complete and up-to-date.

Currently **MLB only** (~1,700+ players), covering all players who appeared on a 40-man roster during the 2025 or 2026 seasons.

Full documentation at **[prism.statsvine.com](https://prism.statsvine.com)**.

## Using the Data

| What you want | Where to go |
|---|---|
| Browse or query player IDs via JSON | [crosswalk.prism.statsvine.com](https://crosswalk.prism.statsvine.com) |
| Richer player metadata: names, rosters, etc. | [registry.prism.statsvine.com](https://registry.prism.statsvine.com) |
| Consume data in bulk (CSV, NDJSON, etc.) | [prism-crosswalk](https://github.com/StatsVine/prism-crosswalk) (build artifacts) |
| Contribute data or fix mappings | [prism-crosswalk-data](https://github.com/StatsVine/prism-crosswalk-data) |

## Ecosystem

| Repo | What it does |
|---|---|
| [prism-crosswalk-data](https://github.com/StatsVine/prism-crosswalk-data) | Source of truth — authoritative CSV of player ID mappings |
| [prism-crosswalk](https://github.com/StatsVine/prism-crosswalk) | Build artifacts from source data (JSON, CSV, NDJSON, etc.) |
| [prism-registry](https://github.com/StatsVine/prism-registry) | Enriched player metadata (names, rosters, positions) |
| [prism-tools](https://github.com/StatsVine/prism-tools) | Validation scripts, build tools, and CI utilities |
| prism-base *(this repo)* | Documentation site at prism.statsvine.com |

## Philosophy

- **Identifiers only**: The crosswalk focuses purely on stable IDs — no team affiliations, injury statuses, or dynamic data.
- **Stable schema**: Changes are made only when necessary to avoid breaking downstream consumers.
- **Automation over vigilance**: Daily cross-checks against MLB rosters, Chadwick Bureau, SFBB, and FanGraphs catch missing players and stale mappings automatically.
- **Open by default**: Data under ODC-By 1.0, code under MIT.

## License

Code: [MIT](LICENSE). Data and documentation: [ODC-By 1.0](https://opendatacommons.org/licenses/by/1-0/).

---

## This Repo

This is the source for [prism.statsvine.com](https://prism.statsvine.com), built with [Astro Starlight](https://starlight.astro.build/). All documentation lives in `src/content/docs/` as `.md` / `.mdx` files; the sidebar is configured in `astro.config.mjs`.

```bash
npm install
npm run dev       # Dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview built site
npx astro check   # TypeScript type-check
```
