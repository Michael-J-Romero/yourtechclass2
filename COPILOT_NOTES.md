# Important Development Notes

## MUI Icon Imports - CRITICAL

**DO NOT import these icons - they cause build errors:**
- `@mui/icons-material/Close` ❌
- `@mui/icons-material/Menu` ❌
- `@mui/icons-material/ExpandMore` ❌
- `@mui/icons-material/DarkMode` ❌
- `@mui/icons-material/Brightness4` ❌

**Safe alternative approaches:**
- Use Unicode characters for simple icons: `☰` (menu), `✕` (close), `▼` (expand)
- Use only icons that have been proven to work in this project:
  - `Terminal` ✓
  - `Mail` ✓
  - `Phone` ✓
  - `SportsEsports` ✓
  - `Psychology` ✓
  - `Lightbulb` ✓
  - `KeyboardArrowDown` ✓

**Why this happens:**
The @mui/icons-material package in this project appears to have missing icon components. Always test icon imports or use Unicode characters for common UI elements instead.

**When adding new icons:**
1. Check if it's been used successfully before in this file
2. If unsure, use Unicode character alternatives
3. Never assume standard MUI icons will work without verification

**Quick reminder (visible):** Verify icon names in `node_modules/@mui/icons-material/esm/index.js`.
If unsure, use simple ASCII labels (e.g., "Dark" / "Light") or Unicode icons.
