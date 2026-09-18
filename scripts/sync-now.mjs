#!/usr/bin/env node
/**
 * Mirror the site's `now` line into the profile README.
 *
 * The status line is maintained in ONE place — `src/site.ts` in
 * kolisachint.github.io — and rendered on the site. This copies it between the
 * `now:start` / `now:end` markers in README.md so the profile never drifts from
 * the site, and never needs a second edit.
 *
 * Fails loudly rather than writing a half-parsed line: a bad parse leaves the
 * README untouched and exits non-zero.
 */

const SRC =
  "https://raw.githubusercontent.com/kolisachint/kolisachint.github.io/main/src/site.ts";
const README = new URL("../README.md", import.meta.url);

const die = (msg) => {
  console.error(`sync-now: ${msg}`);
  process.exit(1);
};

const res = await fetch(SRC);
if (!res.ok) die(`GET site.ts -> ${res.status}`);
const source = await res.text();

const block = source.match(/export const now\s*=\s*\{([\s\S]*?)\}\s*as const;/);
if (!block) die("no `export const now` block in site.ts");

const updated = block[1].match(/updated:\s*"((?:[^"\\]|\\.)*)"/);
const text = block[1].match(/text:\s*"((?:[^"\\]|\\.)*)"/);
if (!updated || !text) die("`now` block has no updated/text string");

const unescape = (s) => s.replace(/\\(["\\])/g, "$1");
const line = `**Now · ${unescape(updated[1])}** — ${unescape(text[1])}`;

const { readFileSync, writeFileSync } = await import("node:fs");
const readme = readFileSync(README, "utf8");
const markers = /(<!-- now:start -->)[\s\S]*?(<!-- now:end -->)/;
if (!markers.test(readme)) die("README.md has no now:start/now:end markers");

const next = readme.replace(markers, `$1\n${line}\n$2`);
if (next === readme) {
  console.log("sync-now: unchanged");
  process.exit(0);
}

writeFileSync(README, next);
console.log(`sync-now: updated -> ${line}`);
