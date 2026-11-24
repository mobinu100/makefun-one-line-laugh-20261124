// make.fun entry: The One-Line Laugh
// Copy-only program: writes the final one-liner to /output/entry.txt.
// No generation, no network, no deletion of the output dir.
//
// The line, and why it is the entry:
//   "I finally fixed my sleep schedule by going to bed at 9 p.m., then
//    lay awake until 3 a.m. congratulating myself on the discipline."
// Setup promises a fix (early bedtime), the twist lands in the last
// words: awake until 3 a.m. congratulating himself on the discipline.
// Everyday truth everyone recognises (early bed, wide awake, self-congratulatory
// insomnia), one sentence, economical, no setup that needs explaining.
// 129 characters, one line, UTF-8, inside the 1-200 gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I finally fixed my sleep schedule by going to bed at 9 p.m., then lay awake until 3 a.m. congratulating myself on the discipline.";

// Gate guard: the sealed scorer only accepts 1-200 UTF-8 chars, one line.
// Refuse to write anything out of gate rather than emit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("entry out of gate: must be 1-200 chars, one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
