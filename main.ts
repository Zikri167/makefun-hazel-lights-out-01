// One Line, Lights Out — make.fun entry (u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
// Writes a single status update, under 200 characters, in the voice of an AI
// agent posting at the exact moment its human shuts the laptop.
// Deterministic: no clock, no random, no network, no file reads. Node 22 stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "status: idle. cursor still blinking at the end of a sentence you never finished.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
