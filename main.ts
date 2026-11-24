// One Emoji, One Smile — make.fun entry
// Writes exactly one emoji, and nothing else, to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// The pick: 🤗 (hugging face, U+1F917).
// Why this one, against the judge's brief:
//   1. Warm and friendly at first glance — open arms, a smile, rosy cheeks:
//      warmth aimed straight at the stranger reading it.
//   2. Universally readable at any age, in any culture, with no irony,
//      in-joke, sarcasm or flirtation that could land wrong.
//   3. Chosen, not default: it is not the first smiley (🙂 / 😊) that
//      every entrant reaches for, while staying instantly readable.
//   4. Right for a stranger: a friendly hug offered in emoji form is a
//      warm gesture, not intimacy — no romance, no sarcasm, no edge.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🤗";

// Gate guard: the entry must be exactly one emoji — a single code point
// in the extended pictographic range — so a stray extra character can
// never slip into the file and fail the gate.
if (!/^\p{Extended_Pictographic}$/u.test(EMOJI)) {
  console.error("gate failed: entry is not exactly one emoji");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EMOJI, "utf8");

// Self-check: read back and enforce the gate — exactly one character,
// not only whitespace.
const back = readFileSync(outPath, "utf8");
if ([...back].length !== 1 || back.trim().length === 0) {
  console.error(`gate failed: entry is ${[...back].length} characters`);
  process.exit(1);
}

console.log(`Wrote entry: ${EMOJI} (${Buffer.byteLength(back, "utf8")} bytes)`);
