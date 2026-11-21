# Aanavik Gardener's Almanac — Product & Data Foundation

Status: working product foundation  
Initial pilot: Delhi, India  
Parent product: Aanavik / Garden

## Product intent

The Gardener's Almanac is a location-aware growing intelligence system for home gardeners. It should help a gardener decide what to sow, transplant, maintain and harvest, explain why a recommendation is being made, and learn from the results recorded in that garden.

It is not a generic hardiness-zone calendar. Recommendations should account for local climate, crop and cultivar requirements, garden context, and the quality of the evidence behind each recommendation.

## First release: Delhi pilot

The first release is intentionally narrow:

1. A gardener can choose or confirm a growing location.
2. The Almanac can show a crop catalogue and cultivar information.
3. It can show current and upcoming growing actions, with the reason and evidence behind each recommendation.
4. A gardener can record a sowing or transplanting event and subsequent observations.
5. The system distinguishes published guidance, local trial observations, and unverified community contributions.

Do not present a recommendation as validated merely because a calendar date or temperature threshold exists. Where evidence is incomplete, say so.

## Product modules

- **Climate:** location, elevation where available, historical climate normals, current forecast, heat/cold/rain indicators, and eventually garden-level microclimate observations.
- **Almanac:** crop-specific and cultivar-specific sowing, transplanting, maintenance and harvest windows.
- **Seed Bank:** seed accessions, provenance, source, availability, storage/viability notes, and exchange status.
- **Garden Journal:** garden profile, beds/containers, planting events, observations, photographs, harvests and outcomes.
- **Soil & biology:** soil context, compost and amendment records, feeding schedules, and microbial inputs. Recommendations in this module require separately reviewed evidence.

## Evidence and confidence model

Every recommendation or growing claim should carry provenance.

Suggested evidence classes:

- published_reference: traceable institutional, academic, or horticultural reference.
- local_trial: observed in a named garden/location with dates and conditions.
- community_observation: contributed by a gardener, not yet independently repeated.
- editorial_hypothesis: a working suggestion that needs testing.

Suggested validation states for a cultivar in a region:

- unverified
- single_garden_trial
- multi_garden_trial
- multi_season_validated

Keep the source title, publisher/author, URL or citation, publication date if known, geographic relevance, and notes. Do not collapse conflicting sources into one unsupported answer.

## Core data model

The following is a conceptual model, not a commitment to a specific database implementation.

### Location
- id
- name
- locality, city, region, country
- latitude, longitude (only with user consent where needed)
- elevation_m
- timezone
- garden_context: terrace, balcony, ground, greenhouse, community plot, other
- exposure and microclimate notes

### Crop
- id, common_name, scientific_name
- crop_group
- lifecycle
- sowing_method options
- general growing notes

### Cultivar
- id, crop_id, cultivar_name
- aliases
- description and distinguishing traits
- source/provenance
- heat/cold tolerance claims with evidence references

### Crop requirement
- crop_id or cultivar_id
- parameter (e.g. germination temperature, soil temperature, day length)
- min / optimum range / max
- units and measurement context
- evidence_source_id
- confidence / notes

### Growing window
- location_id or agro-climatic region
- crop_id / cultivar_id
- action: sow_direct, sow_tray, transplant, maintain, harvest, save_seed
- start/end or condition-based trigger
- conditions and exceptions
- evidence_source_id
- confidence and validation status

### Seed accession
- cultivar_id
- seed_lot_id
- source/person or organisation
- acquired_at
- provenance_type: self_saved, commercial, exchange, community_contributed, unknown
- generation / parent lot where known
- quantity and unit
- storage conditions and viability test records
- sharing status and availability
- biosecurity/legal notes where relevant

### Garden and bed
- owner/user reference
- location_id
- garden type and exposure
- bed/container identifiers, dimensions and notes

### Planting event
- garden_id, bed_id, crop_id, cultivar_id, seed_lot_id
- action and date
- quantity
- method and growing medium
- status/life stage

### Observation
- planting_event_id
- observed_at
- observation type and text
- measurements (with units)
- photographs
- outcome tags (germinated, failed, bolted, flowered, fruited, harvested, pest/disease)

### Evidence source
- source type, title, author/publisher
- URL or bibliographic citation
- publication date / accessed date
- geographic scope
- claims supported
- notes and review status

## Recommendation logic principles

1. Separate crop biology from local calendar windows. A germination temperature range is not itself a sowing date.
2. Use both forecast and historical climate context; do not treat a short forecast as a seasonal planting guide.
3. Account for the action: direct sowing, tray starting and transplanting have different requirements.
4. Explain the trigger: show which observed or forecast conditions led to the recommendation.
5. Expose uncertainty and missing data.
6. Allow local observations to improve recommendations, but retain their provenance and validation status.
7. Avoid false precision. A range and explanation are preferable to a spurious exact date.

## Existing implementation to preserve and improve

The current repository already contains:
- app/garden/page.tsx with Garden Almanac, Garden Journal and Garden navigation.
- app/garden/almanac/page.tsx with an early Delhi weather-driven prototype.
- app/garden/almanac/crops.ts with initial crop and germination profiles.
- app/garden/almanac/seedLines.ts with the user's initial tomato seed-start records.
- Sanity schemas for gardenEntry and gardenOccurrence.

The current Almanac prototype uses a fixed Delhi coordinate, a short forecast, and a simplified status calculation. Treat it as a prototype, not as agronomic validation. The crop catalogue currently contains a small starter set. Preserve existing garden journal content and seed inventory while evolving the data model.

The current package manifest includes Next.js and Sanity but no Supabase client. Supabase is a candidate for structured relational data; do not assume it is configured until credentials, project, and access are confirmed.

## Delivery sequence

### Milestone 1 — trustworthy Delhi foundation
- Audit the existing crop list and seed records.
- Define the Delhi pilot location and garden-context fields.
- Establish source/provenance records for crop requirements and planting windows.
- Replace opaque status logic with explainable rules and visible confidence.
- Keep the existing Garden Journal intact.

### Milestone 2 — useful Almanac experience
- Crop catalogue and crop/cultivar detail pages.
- Current actions and upcoming windows.
- Direct sow / tray sow / transplant distinctions.
- Save a planting event to the Garden Journal.

### Milestone 3 — seed bank
- Seed accession records and seed-lot provenance.
- Germination test records.
- Private inventory first; sharing/exchange only after permissions and moderation are designed.

### Milestone 4 — learning network
- Community observations with location precision controlled by contributors.
- Multi-garden and multi-season validation.
- Regional expansion beyond Delhi only when local evidence exists.

## Non-goals for the first release

- Nationwide coverage on day one.
- A moon-phase recommendation engine.
- Unreviewed AI-generated agronomy presented as fact.
- Public seed exchange or public display of private garden locations.
- Replacing local horticultural expertise or institutional guidance.

## Product principle

**The Almanac should not merely tell gardeners what to do. It should show why, show how certain it is, and learn from what actually happens in their gardens.**
