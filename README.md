# Rwanda Grid Converter Mobile

Mobile-first single-file field tool for converting Rwanda grid references, WGS84 coordinates, and building grid-to-grid navigation on a phone.

## Overview

This project is the mobile edition of the Rwanda Grid Converter. It is designed for field use, touch screens, and quick tactical workflows. The app supports grid conversion, live location, map tools, pin history, route building, grid-to-grid navigation, compass bearing, ETA, and in-map navigation controls.

## Main Mobile Features

- Convert `6-digit grid references` to `WGS84 geographic coordinates`
- Convert `WGS84 coordinates` back to `6-digit grid references`
- Work with `decimal` or `DMS` coordinate input
- Use a full-screen interactive `Leaflet` map that works online and offline
- See a live connection indicator showing whether the app is online or offline
- Get your current phone location with `Me`
- Add pins directly from conversion results or by tapping the map
- Build simple routes from selected pins
- Generate a report and download a `CSV`
- Switch between supported map sheets inside the app
- Build `grid-to-grid` navigation legs across supported sheets
- Start navigation from `current location` or a `manual start grid`
- See `distance`, `estimated time`, `bearing`, `back bearing`, and `movement vector`
- Open the route in `Google Maps`
- Show a `navigation card` directly on the map with `Start Navigation` and `End Navigation`
- Use a floating live navigation bar that can auto-minimize while moving

## Supported Sheets

- `GAKO`
- `GABIRO`
- `MIHINDI`
- `NYAGATARE`

`GAKO` uses its original GPS-calibrated base constants.

`GABIRO`, `MIHINDI`, and `NYAGATARE` use the configured sheet ranges and reference points currently stored in `index.html`.

## Project Files

- `index.html` - complete mobile app UI, styles, map tools, sheet setup, navigation logic, and conversion logic
- `image.png` - logo shown on the unlock screen

## How To Open On Mobile

1. Copy the project to your phone, or host `index.html` on a local/internal server.
2. Open `index.html` in a mobile browser such as Chrome or Safari.
3. Unlock the app.
4. Start working from the bottom navigation tabs.

Current unlock password in this build: `kwizera2026`

## How To Use

### Grid To Geo

1. Choose the sheet you want to use.
2. Open `Grid→Geo`.
3. Enter a `6-digit grid reference`.
4. Tap `Convert Grid`.
5. Use `Show on Map` or `Google Maps` if needed.

### Geo To Grid

1. Open `Geo→Grid`.
2. Choose `Decimal°` or `DMS`.
3. Enter the coordinates.
4. Tap `Convert Coordinates`.
5. Use the resulting grid reference on the map if needed.

### Grid Navigation

1. Open `Grid Nav`.
2. Choose `Current Location` or `Manual Grid` as the start source.
3. Enter the destination grid.
4. If using manual start, also enter the start grid.
5. Choose travel mode: `Foot` or `Vehicle`.
6. Tap `Build Navigation Leg`.
7. Review the `distance`, `ETA`, `bearing`, and route details.
8. Tap `Start Navigation` to begin live navigation.
9. Tap `End Navigation` to stop it.

### Map Workflow

1. Open `Map`.
2. Use `Me` to center on your current location.
3. Tap the map to save named pins.
4. Use `Show Leg on Map` from `Grid Nav` to draw the navigation leg.
5. Use the `Navigation Card` on the map to start or end navigation.
6. Open the route in `Google Maps` if you want external turn-by-turn guidance.

## Navigation Notes

- `Current Location` mode uses browser GPS permission.
- Live navigation updates `remaining distance`, `remaining time`, and `bearing` as you move.
- The internal map shows a straight navigation leg between points.
- `Google Maps Route` is useful when you want road-based routing outside the app.
- If your current GPS point is outside the loaded sheets, the app can still navigate by latitude/longitude even when a local sheet grid is unavailable.

## Mobile Notes

- The layout is optimized for phones and touch interaction.
- Geolocation depends on browser permission being allowed on the phone.
- For the best experience, add the page to the home screen if your browser supports it.
- The app caches its core files and map assets so it can keep working offline after the first successful load.
- Some browsers may block the report popup until popups are allowed.

## Technical Notes

- No build step is required.
- No package installation is required.
- All logic is contained in `index.html`.
- Sheet calibration, anchors, and grid constants are stored directly in the `SHEETS` configuration in `index.html`.
- Navigation UI, floating bar, and map navigation card are also implemented directly in `index.html`.
- A service worker and local assets allow the app to run online and offline with the same interface.

## Support

This mobile app was created by `Kwizera`.

Help line: `0781845528`
