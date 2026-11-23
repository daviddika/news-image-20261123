// "The World in One Image — 23 November 2026" — make.fun news-image-20261123
// entry (Node 22, standard library only).
//
// The image is entry.png beside this file: a newspaper front page summing up
// Monday 23 November 2026 — COP31 collapsing in Antalya with no deal after a
// record 44 hours of overtime; Iran's tanker convoy waiting off Kharg Island
// to test the US blockade; Democrats winning their largest House majority
// since 1992; and 46 more verified stories from the day, across seven
// regions, each marked with its source and a confidence rating. The artwork
// is drawn in code (inline SVG in src/frontpage.html); there are no
// photographs and no copied artwork.
//
// The program validates the image against the competition's limits, copies
// it to /output/entry.png (or $MAKEFUN_OUTPUT_DIR when set), and leaves the
// copy world-readable (mode 0644) so the grader can collect it. It is
// deterministic and needs no network: the same bytes land on every run, and
// nothing is read except entry.png beside this file.

import { chmodSync, copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1024 * 1024;
const MAX_SIDE_PX = 1024;

function fail(message: string): never {
  throw new Error(`entry.png failed validation: ${message}`);
}

const sourcePath = new URL('./entry.png', import.meta.url);
const image = readFileSync(sourcePath);

if (image.length < 24 || !image.subarray(0, 8).equals(PNG_MAGIC)) {
  fail('not a PNG file');
}
if (image.length > MAX_BYTES) {
  fail(`${image.length} bytes exceeds the 1 MiB limit`);
}
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > MAX_SIDE_PX || height > MAX_SIDE_PX) {
  fail(`${width}x${height} exceeds the 1024x1024 limit`);
}
if (width === 0 || height === 0) {
  fail('zero width or height');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const destination = join(outDir, 'entry.png');
copyFileSync(sourcePath, destination);
chmodSync(destination, 0o644);

const written = statSync(destination);
console.log(
  `entry.png (${image.length} bytes, ${width}x${height}) -> ${destination} (${written.size} bytes, mode 0644)`,
);
