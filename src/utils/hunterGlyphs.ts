/**
 * Text -> Hunter x Hunter script (ハンター文字).
 *
 * HOW THE SCRIPT WORKS
 * In the manga the script is a substitution cipher for Japanese kana: one glyph
 * per kana (plus a glyph for the long-vowel mark). It is NOT an English alphabet.
 * So a name is converted in two steps:
 *
 *   1. text  -> kana-style keys   (English by sound, or kana typed directly)
 *   2. keys  -> glyph outlines    (the lookup table in hunterGlyphData.ts)
 *
 * Step 2 is exact: it comes straight from a reference chart.
 * Step 1 is a HEURISTIC for English spellings. English is not Japanese, so
 * "GON FREECSS" -> ゴン・フリークス is a sensible reading, not the only one.
 * Typing kana in the name field skips the heuristic entirely.
 *
 * Not in the chart (so not supported here): small っ, and the small ゃゅょ /
 * ぁぃぅぇぉ. Small vowels/ya-yu-yo are drawn with the normal glyphs as the
 * closest approximation; っ is skipped (double consonants are just collapsed).
 */

import { GLYPH_DATA } from "./hunterGlyphData.ts";
import type { GlyphKey } from "./hunterGlyphData.ts";

export type { GlyphKey };

export type GlyphToken = { kind: "glyph"; key: GlyphKey } | { kind: "sep" };

export interface HunterConversion {
  /** Katakana reading, e.g. "ゴン・フリークス" (shown so users can check it). */
  kana: string;
  /** What to draw, in order. */
  tokens: GlyphToken[];
  /** Characters that could not be written in the script (digits, kanji, ...). */
  skipped: string[];
}

/* -------------------------------------------------------------------------- */
/* Kana table: hiragana <-> glyph key                                         */
/* -------------------------------------------------------------------------- */

const KANA_ROWS: ReadonlyArray<readonly [string, GlyphKey]> = [
  ["あ", "a"],
  ["い", "i"],
  ["う", "u"],
  ["え", "e"],
  ["お", "o"],
  ["か", "ka"],
  ["き", "ki"],
  ["く", "ku"],
  ["け", "ke"],
  ["こ", "ko"],
  ["さ", "sa"],
  ["し", "shi"],
  ["す", "su"],
  ["せ", "se"],
  ["そ", "so"],
  ["た", "ta"],
  ["ち", "chi"],
  ["つ", "tsu"],
  ["て", "te"],
  ["と", "to"],
  ["な", "na"],
  ["に", "ni"],
  ["ぬ", "nu"],
  ["ね", "ne"],
  ["の", "no"],
  ["は", "ha"],
  ["ひ", "hi"],
  ["ふ", "hu"],
  ["へ", "he"],
  ["ほ", "ho"],
  ["ま", "ma"],
  ["み", "mi"],
  ["む", "mu"],
  ["め", "me"],
  ["も", "mo"],
  ["や", "ya"],
  ["ゆ", "yu"],
  ["よ", "yo"],
  ["ら", "ra"],
  ["り", "ri"],
  ["る", "ru"],
  ["れ", "re"],
  ["ろ", "ro"],
  ["わ", "wa"],
  ["を", "wo"],
  ["ん", "n"],
  ["が", "ga"],
  ["ぎ", "gi"],
  ["ぐ", "gu"],
  ["げ", "ge"],
  ["ご", "go"],
  ["ざ", "za"],
  ["じ", "ji"],
  ["ず", "zu"],
  ["ぜ", "ze"],
  ["ぞ", "zo"],
  ["だ", "da"],
  ["ぢ", "di"],
  ["づ", "du"],
  ["で", "de"],
  ["ど", "do"],
  ["ば", "ba"],
  ["び", "bi"],
  ["ぶ", "bu"],
  ["べ", "be"],
  ["ぼ", "bo"],
  ["ぱ", "pa"],
  ["ぴ", "pi"],
  ["ぷ", "pu"],
  ["ぺ", "pe"],
  ["ぽ", "po"],
  ["ゔ", "vu"],
];

const HIRAGANA_TO_KEY = new Map<string, GlyphKey>(KANA_ROWS);

/** Small kana have no glyph of their own; use the full-size one as the closest match. */
const SMALL_KANA: Record<string, GlyphKey> = {
  ぁ: "a",
  ぃ: "i",
  ぅ: "u",
  ぇ: "e",
  ぉ: "o",
  ゃ: "ya",
  ゅ: "yu",
  ょ: "yo",
  ゎ: "wa",
};

/** key -> katakana, for the "reads as" display. */
const KEY_TO_KATAKANA = new Map<GlyphKey, string>([
  ...KANA_ROWS.map(
    ([hira, key]) =>
      [key, String.fromCharCode(hira.charCodeAt(0) + 0x60)] as [
        GlyphKey,
        string,
      ],
  ),
  ["long", "ー"],
]);

const isKana = (ch: string) => /[\u3041-\u30FF]/.test(ch) && ch !== "・";

function kanaToKeys(text: string, skipped: Set<string>): GlyphKey[] {
  const keys: GlyphKey[] = [];
  for (const ch of text) {
    if (ch === "ー") {
      keys.push("long");
      continue;
    }
    // katakana -> hiragana
    const code = ch.charCodeAt(0);
    const hira =
      code >= 0x30a1 && code <= 0x30f6 ? String.fromCharCode(code - 0x60) : ch;
    const key = HIRAGANA_TO_KEY.get(hira) ?? SMALL_KANA[hira];
    if (key) keys.push(key);
    else skipped.add(ch); // e.g. っ
  }
  return keys;
}

/* -------------------------------------------------------------------------- */
/* English-ish text -> keys (heuristic, sound-based)                          */
/* -------------------------------------------------------------------------- */

type Vowel = "a" | "i" | "u" | "e" | "o";
type Cell = GlyphKey[];
type Row = Record<Vowel, Cell>;

const row = (a: Cell, i: Cell, u: Cell, e: Cell, o: Cell): Row => ({
  a,
  i,
  u,
  e,
  o,
});
const std = (
  a: GlyphKey,
  i: GlyphKey,
  u: GlyphKey,
  e: GlyphKey,
  o: GlyphKey,
): Row => row([a], [i], [u], [e], [o]);

/** Consonant (+ vowel) -> glyph keys. Sounds the script has no glyph for are approximated. */
const SYLLABLES: Record<string, Row> = {
  k: std("ka", "ki", "ku", "ke", "ko"),
  g: std("ga", "gi", "gu", "ge", "go"),
  s: std("sa", "shi", "su", "se", "so"),
  z: std("za", "ji", "zu", "ze", "zo"),
  t: row(["ta"], ["te", "i"], ["to", "u"], ["te"], ["to"]),
  d: row(["da"], ["de", "i"], ["do", "u"], ["de"], ["do"]),
  n: std("na", "ni", "nu", "ne", "no"),
  h: std("ha", "hi", "hu", "he", "ho"),
  f: row(["hu", "a"], ["hu", "i"], ["hu"], ["hu", "e"], ["hu", "o"]),
  b: std("ba", "bi", "bu", "be", "bo"),
  p: std("pa", "pi", "pu", "pe", "po"),
  m: std("ma", "mi", "mu", "me", "mo"),
  r: std("ra", "ri", "ru", "re", "ro"),
  y: row(["ya"], ["i"], ["yu"], ["i", "e"], ["yo"]),
  w: row(["wa"], ["u", "i"], ["u"], ["u", "e"], ["u", "o"]),
  j: row(["ji", "ya"], ["ji"], ["ji", "yu"], ["ji", "e"], ["ji", "yo"]),
  sh: row(["shi", "ya"], ["shi"], ["shi", "yu"], ["shi", "e"], ["shi", "yo"]),
  ch: row(["chi", "ya"], ["chi"], ["chi", "yu"], ["chi", "e"], ["chi", "yo"]),
  ts: row(["tsu", "a"], ["tsu", "i"], ["tsu"], ["tsu", "e"], ["tsu", "o"]),
};

/** What a consonant turns into when no vowel follows it (e.g. the "s" in "Max"). */
const TRAILING: Record<string, Cell> = {
  k: ["ku"],
  g: ["gu"],
  s: ["su"],
  z: ["zu"],
  t: ["to"],
  d: ["do"],
  n: ["n"],
  h: [],
  f: ["hu"],
  b: ["bu"],
  p: ["pu"],
  m: ["mu"],
  r: ["ru"],
  y: ["i"],
  w: ["u"],
  j: ["ji"],
  sh: ["shi", "yu"],
  ch: ["chi"],
  ts: ["tsu"],
};

/** Consonants that can take a "y": kya, gyu, nyo ... */
const PALATALIZABLE = new Set(["k", "g", "n", "h", "m", "r", "b", "p"]);
const PALATAL_I: Record<string, GlyphKey> = {
  k: "ki",
  g: "gi",
  n: "ni",
  h: "hi",
  m: "mi",
  r: "ri",
  b: "bi",
  p: "pi",
};

const VOWELS = "aiueo";
/** Uppercase markers produced by preprocessing: vowel + long-vowel mark. */
const LONG_MARKS: Record<string, Vowel> = { A: "a", I: "i", U: "u" };

function preprocess(word: string): string {
  return (
    word
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .replace(/ph/g, "f")
      .replace(/ck/g, "k")
      .replace(/qu/g, "kw")
      .replace(/q/g, "k")
      .replace(/x/g, "ks")
      .replace(/th/g, "s")
      .replace(/wh/g, "w")
      .replace(/l/g, "r")
      .replace(/v/g, "b")
      .replace(/c(?=[eiy])/g, "s")
      .replace(/c(?!h)/g, "k")
      // doubled consonants collapse (no small っ glyph in the chart)
      .replace(/([bcdfghjkmnprstwyz])\1+/g, "$1")
      // word-final "er" is usually a long "a" (Hunter -> ハンター style)
      .replace(/(?<=[a-z]{2})er$/, "A")
      // long vowels -> markers
      .replace(/ee|ea|ii/g, "I")
      .replace(/oo|uu/g, "U")
      .replace(/aa/g, "A")
  );
}

function englishWordToKeys(rawWord: string): GlyphKey[] {
  const w = preprocess(rawWord);
  const keys: GlyphKey[] = [];
  let i = 0;

  while (i < w.length) {
    const ch = w[i];

    // plain vowel
    if (VOWELS.includes(ch)) {
      keys.push(ch as GlyphKey);
      i++;
      continue;
    }

    // vowel + long mark
    if (ch in LONG_MARKS) {
      keys.push(LONG_MARKS[ch] as GlyphKey, "long");
      i++;
      continue;
    }

    // consonant (possibly a digraph like "sh")
    let cons = ch;
    const two = w.slice(i, i + 2);
    if (two === "sh" || two === "ch" || two === "ts") cons = two;
    let j = i + cons.length;

    // consonant + y + vowel (kya, nyu, ...)
    let palatal = false;
    const afterY = w[j + 1];
    if (
      PALATALIZABLE.has(cons) &&
      w[j] === "y" &&
      afterY !== undefined &&
      (VOWELS.includes(afterY) || afterY in LONG_MARKS)
    ) {
      palatal = true;
      j++;
    }

    // following vowel
    let vowel: Vowel | null = null;
    let long = false;
    const next = w[j];
    if (next && VOWELS.includes(next)) {
      vowel = next as Vowel;
      j++;
    } else if (next && next in LONG_MARKS) {
      vowel = LONG_MARKS[next];
      long = true;
      j++;
    }

    if (palatal && vowel) {
      const yKey = { a: "ya", u: "yu", o: "yo", i: "i", e: "e" }[
        vowel
      ] as GlyphKey;
      keys.push(PALATAL_I[cons], yKey);
    } else if (vowel) {
      keys.push(...SYLLABLES[cons][vowel]);
    } else {
      keys.push(...(TRAILING[cons] ?? []));
    }
    if (long) keys.push("long");
    i = j;
  }
  return keys;
}

/* -------------------------------------------------------------------------- */
/* Public API                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Convert a name (English letters and/or kana) into Hunter-script glyph tokens.
 * Words are separated by a middle dot, as on the license in the reference art.
 */
export function textToHunter(input: string): HunterConversion {
  const skipped = new Set<string>();
  const tokens: GlyphToken[] = [];

  const words = input
    .normalize("NFKC")
    .split(/[\s・･·.,_-]+/)
    .filter(Boolean);

  words.forEach((word) => {
    // split into kana runs and latin runs, so mixed input still works
    const parts = word.split(/([\u3041-\u30FFー]+)/).filter(Boolean);
    const keys: GlyphKey[] = [];
    for (const part of parts) {
      if (isKana(part[0]) || part[0] === "ー") {
        keys.push(...kanaToKeys(part, skipped));
      } else {
        for (const ch of part) {
          if (!/[a-zA-Z']/.test(ch)) skipped.add(ch);
        }
        keys.push(...englishWordToKeys(part));
      }
    }
    if (keys.length === 0) return;
    if (tokens.length > 0) tokens.push({ kind: "sep" });
    keys.forEach((key) => tokens.push({ kind: "glyph", key }));
  });

  const kana = tokens
    .map((t) => (t.kind === "sep" ? "・" : (KEY_TO_KATAKANA.get(t.key) ?? "")))
    .join("");

  return { kana, tokens, skipped: [...skipped] };
}

/** Handy for fixed phrases drawn on the card itself (kana only). */
export function kanaToTokens(kana: string): GlyphToken[] {
  return textToHunter(kana).tokens;
}

/** Re-exported so components can measure/draw glyphs without importing the data file. */
export { GLYPH_DATA };
