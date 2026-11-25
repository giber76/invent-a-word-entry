// Invent a Word We Need — entry for make.fun competition
// u-deranalabs-invent-a-word-we-need-17a020e0.
//
// The entry is one invented word plus a one-line definition (at most
// 140 characters). The program writes that line to /output/entry.txt.
//
// The word: MUTOLOGUE — mute + monologue. A speech delivered at length
// to a video call, only to discover the microphone was muted the whole
// time. Everyone who has worked a remote call has lived it; English
// had no word for it until now. It is built the way English builds
// -logue words (monologue, dialogue), so it is sayable, spellable and
// memorable at first sight, and the definition lands in one reading:
// the word names the gap, the line explains it, nothing more is needed.
//
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Mutologue (n.) \u2014 a long speech delivered to a video call before discovering you were on mute.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, ENTRY, "utf8");

console.log(`wrote ${dest}/entry.txt (${ENTRY.length} characters)`);
