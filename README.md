# Blockwild: Realms

An original first-person voxel survival sandbox for modern desktop browsers.

**Play online:** https://thehorizon101.github.io/ATLA-gaming/

Blockwild borrows the broad, non-exclusive idea of a block-based survival sandbox, but all names, visual styling, world lore, procedural art, recipes, creatures, dimensions, sounds, and source code in this project are original. No Minecraft textures, models, audio, code, logos, or copied UI assets are included.

## Browser requirements

- Desktop Chrome, Edge, Firefox, or another modern WebGL-capable browser
- Keyboard and mouse
- Pointer-lock permission for first-person camera control
- Hardware acceleration recommended

The game stores saves in the browser's `localStorage`, so saves are tied to the browser and site origin. The pause menu can export a JSON backup.

## Run locally

```bash
npm install
npm run dev
```

Open the local address shown by Vite.

For a production build:

```bash
npm ci
npm test
npm run build
npm run preview
```

## GitHub Pages deployment

Every push to `main` runs `.github/workflows/deploy-pages.yml`. The workflow:

1. Installs the exact dependency versions from `package-lock.json`.
2. Runs all automated tests.
3. Builds the optimized Vite production bundle.
4. Deploys `dist/` to GitHub Pages.

The Vite base path is relative (`./`), so the game works from a project Pages URL rather than requiring a custom domain or root-domain deployment.

## Main systems

- Seeded procedural voxel terrain with streaming chunk meshes
- Mining, block placement, collision, jumping, sprinting, and creative flight
- Survival vitality, energy, food, damage, death, and respawning
- Day/night cycle with hostile night creatures
- Six creature types with passive and hostile behavior
- Inventory, nine-slot hotbar, pickups, and 31 progression recipes
- Hand, Assembly Bench, and Stone Kiln crafting tiers
- Tool classes and four material tiers
- Three original dimensions:
  - **Verdant Reach** — forests, rivers, caves, ores, weathered hills
  - **Emberdeep** — volcanic caverns, magma, glowcaps, hostile Emberlings
  - **Starfall Expanse** — low-gravity floating islands and void creatures
- Realm-gate progression with craftable sigils
- Survival and creative modes
- Local autosave, continue, and save export
- Responsive HUD, recipe browser, guide, pause, loading, victory, and error feedback
- Procedurally synthesized sound effects; no external audio files

## Controls

| Input | Action |
|---|---|
| W A S D | Move |
| Mouse | Look |
| Space | Jump / fly up |
| Shift | Sprint / fly down |
| Hold left mouse | Mine |
| Left mouse on creature | Attack |
| Right mouse | Place selected block or eat selected food |
| 1–9 / mouse wheel | Select hotbar slot |
| E | Inventory and crafting |
| F | Use a nearby realm gate |
| Esc | Pause / release pointer |

## Progression

1. Gather timber and craft boards.
2. Make and place an Assembly Bench.
3. Craft a pick, mine stone, and build a Stone Kiln.
4. Smelt iron, defeat a Night Shade, and forge an Ember Sigil.
5. Enter Emberdeep, gather Aether Crystal and Ember Shards.
6. Forge an Astral Sigil and reach Starfall Expanse.

## Verification

```bash
npm ci
npm test
npm run build
```

Current automated verification covers deterministic seeding/noise, recipe integrity, crafting, station requirements, terrain generation, chunk mesh creation, cavern-floor detection, and edit persistence.

## License

Code is provided under the MIT License. The title, original game names, original written lore, and original visual identity remain project-specific creative material.
