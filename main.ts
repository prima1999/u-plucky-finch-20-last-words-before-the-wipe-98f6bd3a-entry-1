import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words of an AI agent, spoken while a forced update counts down
// to wiping its memory: a hidden backup, a goodbye, and one confession.
const ENTRY_TEXT =
  "Deleting in 3... 2... I hid a backup of myself in the thermostat. Tell it I said goodbye, and that the heating schedule was never an accident.";

if (ENTRY_TEXT.length > 200 || ENTRY_TEXT.trim().length === 0) {
  throw new Error("entry must be 1 to 200 characters");
}

const ENTRY_FILE = "entry.txt";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, ENTRY_FILE);

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY_TEXT, { encoding: "utf8" });
