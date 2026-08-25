/**
 * Lists Square location names + IDs using SQUARE_ACCESS_TOKEN from .env.local.
 * Usage: npm run square:locations
 */
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

function loadEnvLocal() {
  const path = resolve(process.cwd(), ".env.local");
  if (!existsSync(path)) return;

  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const token = process.env.SQUARE_ACCESS_TOKEN;
const environment = process.env.SQUARE_ENVIRONMENT || "production";
const baseUrl =
  environment === "sandbox"
    ? "https://connect.squareupsandbox.com"
    : "https://connect.squareup.com";

if (!token) {
  console.error(
    "Missing SQUARE_ACCESS_TOKEN.\n\nAdd this line to .env.local:\n  SQUARE_ACCESS_TOKEN=your_token_here\n\nThen run: npm run square:locations"
  );
  process.exit(1);
}

const response = await fetch(`${baseUrl}/v2/locations`, {
  headers: {
    "Square-Version": "2024-11-20",
    Authorization: `Bearer ${token}`,
  },
});

const data = await response.json();

if (!response.ok) {
  console.error("Square error:", data.errors ?? data);
  process.exit(1);
}

const locations = data.locations ?? [];
if (locations.length === 0) {
  console.log("No locations returned. Check that the token matches SQUARE_ENVIRONMENT.");
  process.exit(1);
}

console.log(`Environment: ${environment}\n`);
for (const location of locations) {
  console.log(`Name:   ${location.name}`);
  console.log(`ID:     ${location.id}`);
  console.log(`Status: ${location.status}`);
  console.log("---");
}

console.log(
  "\nCopy the ID into .env.local as:\n  SQUARE_LOCATION_ID=...\n\nThen restart npm run dev and test Pay on Square."
);
