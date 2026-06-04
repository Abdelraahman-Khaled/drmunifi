import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

// 1) Extract the base64 PNG embedded inside the SVG favicon.
const svg = readFileSync("public/assets/img/favicon.svg", "utf8");
const m = svg.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);
if (!m) throw new Error("No embedded PNG found in favicon.svg");
const srcPng = Buffer.from(m[1], "base64");

// 2) Resize to square sizes, padding (contain) onto a transparent canvas.
const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((size) =>
    sharp(srcPng)
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer()
  )
);

// 3) Pack the PNGs into an ICO container (PNG-compressed entries).
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4); // image count

const entrySize = 16;
let offset = 6 + entrySize * sizes.length;
const entries = [];
for (let i = 0; i < sizes.length; i++) {
  const size = sizes[i];
  const data = pngs[i];
  const e = Buffer.alloc(entrySize);
  e.writeUInt8(size >= 256 ? 0 : size, 0); // width
  e.writeUInt8(size >= 256 ? 0 : size, 1); // height
  e.writeUInt8(0, 2); // palette
  e.writeUInt8(0, 3); // reserved
  e.writeUInt16LE(1, 4); // color planes
  e.writeUInt16LE(32, 6); // bits per pixel
  e.writeUInt32LE(data.length, 8); // size of image data
  e.writeUInt32LE(offset, 12); // offset of image data
  offset += data.length;
  entries.push(e);
}

const ico = Buffer.concat([header, ...entries, ...pngs]);
writeFileSync("app/favicon.ico", ico);
console.log(`Wrote app/favicon.ico (${ico.length} bytes, sizes: ${sizes.join(", ")})`);
