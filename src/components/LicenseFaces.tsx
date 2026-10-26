/**
 * The artwork for each license face.
 *
 * Every theme can have its own front and back layout. The interactive card
 * and the PNG export BOTH render these same components, so the export can
 * never drift from what the user sees.
 *
 *   blue  -> BlueFront / BlueBack       (Basic Hunter License, matches the reference)
 *   red   -> RedFront / RedBack         (yellow frame, white triangle with XX)
 *   green -> GreenFront / GreenBack     (green logo panel, crimson back with dark stripe)
 *   other -> ClassicFront / ClassicBack (fallback for any theme without its own design)
 *
 * To add a layout for another theme, write its two components and add a
 * line to LicenseFront / LicenseBack at the bottom of this file.
 */

import { useMemo } from "react";
import "./BlueLicense.css";
import "./RedLicense.css";
import "./GreenLicense.css";
import HunterText from "./HunterText";
import { kanaToTokens, textToHunter, GLYPH_DATA } from "../utils/hunterGlyphs";

export type CardTheme = "green" | "blue" | "red";

export type FaceProps = {
  name: string;
  licenseNumber: string;
  theme: CardTheme;
};

/* -------------------------------------------------------------------------- */
/* Shared pieces                                                              */
/* -------------------------------------------------------------------------- */

/**
 * The Hunter mark: two serif X's whose thick strokes meet to frame a red diamond.
 * Drawn from straight-edged geometry fitted to the reference logo (every stroke
 * leans at the same angle), so it stays crisp at any size and in the PNG export.
 *
 * By default the viewBox hugs the artwork. Pass `inset` for the old 5:3 box with
 * breathing room around the mark, for badges and tags that were sized for it.
 */
const MARK_INK = "#070a08";
const MARK_RED = "#c22035";

export function HunterMark({ inset = false }: { inset?: boolean }) {
  return (
    <svg
      viewBox={inset ? "-16 -7 300 180" : "0 0 268 166"}
      className="hl-mark"
      aria-hidden="true"
      shapeRendering="geometricPrecision"
    >
      {/* red diamond first, so the black strokes sit on top of its edges */}
      <polygon
        points="133.86,5.17 84.95,93.99 122.16,160 145.18,160 182.9,93.61"
        fill={MARK_RED}
      />
      <polygon points="110.23,5 134.6,5 50.52,161 23.96,161" fill={MARK_INK} />
      <polygon
        points="133.11,5 157.27,5 243.54,161 217.81,161"
        fill={MARK_INK}
      />
      <polygon points="32.09,5 38.09,5 123.19,161 117.19,161" fill={MARK_INK} />
      <polygon
        points="229.95,5 235.95,5 150.15,161 144.15,161"
        fill={MARK_INK}
      />
      <polygon points="1,2 68,2 68,7 5.5,7" fill={MARK_INK} />
      <polygon points="99,2 168,2 168,7 99,7" fill={MARK_INK} />
      <polygon points="199,2 265,2 261.5,7 199,7" fill={MARK_INK} />
      <polygon points="5,159 69,159 69,164 1.5,164" fill={MARK_INK} />
      <polygon points="99,159 168,159 168,164 99,164" fill={MARK_INK} />
      <polygon points="199,159 262,159 266.5,164 199,164" fill={MARK_INK} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Classic layout (green + red for now)                                       */
/* -------------------------------------------------------------------------- */

const CLASSIC_LINE_ONE = kanaToTokens("ハンターライセンス");
const CLASSIC_LINE_TWO = kanaToTokens("ライセンスナンバー");

function ClassicFront({ name, licenseNumber }: FaceProps) {
  const number = licenseNumber.trim();
  const { tokens } = useMemo(() => textToHunter(name), [name]);

  return (
    <div className="hl-front-inner">
      <div className="hl-top">
        <div className="hl-frame">
          <div className="hl-logo-box">
            <HunterMark />
          </div>
          <div className="hl-hatch" />
        </div>
      </div>

      <div className="hl-band">
        <div className="hl-plate">
          <HunterText
            className="hl-glyphs"
            tokens={tokens}
            label={name.trim() || "Hunter name"}
          />
        </div>

        <div className="hl-lines">
          <div className="hl-line">
            <HunterText
              className="hl-glyphs"
              tokens={CLASSIC_LINE_ONE}
              align="start"
              label="Hunter License"
            />
          </div>
          <div className="hl-line">
            <HunterText
              className="hl-glyphs"
              tokens={CLASSIC_LINE_TWO}
              align="start"
              label="License number"
            />
          </div>
        </div>

        <div className="hl-number-row">
          <span>NO.</span>
          <strong>{number || "000"}</strong>
        </div>
      </div>
    </div>
  );
}

function ClassicBack({ licenseNumber }: FaceProps) {
  const number = licenseNumber.trim();
  const digits = number ? number.split("") : ["", "", "", ""];

  return (
    <div className="hl-back-inner">
      <div className="hl-digits">
        {digits.map((digit, index) => (
          <span key={index} className="hl-digit">
            {digit}
          </span>
        ))}
      </div>
      <div className="hl-stripe" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Blue: Basic Hunter License                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Decorative fine print, written in kana and drawn in Hunter script.
 * The reference card's real text is unknown, so these are our own plain lines:
 *   1. Hunter License
 *   2. This card is proof of being a Hunter
 *   3. The license number is on the reverse side
 *   4. Keep it safe
 * Edit freely; any kana that exists in the chart works (no small っ/ゃゅょ).
 */
const BLUE_FINE_PRINT = [
  "ハンターライセンス",
  "コノカードハ ハンターノ アカシデス",
  "ライセンスナンバーハ ウラメンニ アリマス",
  "ダイジニ ホカンスルコト",
].map(kanaToTokens);

function BlueFront({ name }: FaceProps) {
  const { tokens } = useMemo(() => textToHunter(name), [name]);

  return (
    <div className="hl-bl-inner">
      {/* Black panel: logo + hatched strip */}
      <div className="hl-bl-panel">
        <div className="hl-bl-logo">
          <HunterMark />
        </div>
        <div className="hl-bl-hatch" />
      </div>

      {/* Light-blue info area: name plate + fine print */}
      <div className="hl-bl-info">
        <div className="hl-bl-plate">
          <HunterText
            className="hl-glyphs"
            tokens={tokens}
            label={name.trim() || "Hunter name"}
          />
        </div>

        <div className="hl-bl-lines">
          {BLUE_FINE_PRINT.map((lineTokens, index) => (
            <div className="hl-bl-line" key={index}>
              <HunterText
                className="hl-glyphs"
                tokens={lineTokens}
                align="start"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Black stripe on the left; the number runs UP the right edge, turned 90 degrees
 * counter-clockwise (digits read bottom to top, tops facing left), as in the reference.
 */
function BlueBack({ licenseNumber }: FaceProps) {
  const number = licenseNumber.trim();

  return (
    <div className="hl-bl-back-inner">
      <div className="hl-bl-stripe" />
      <div className="hl-bl-number-slot">
        <div
          className="hl-bl-number"
          aria-label={number ? `License number ${number}` : undefined}
        >
          {number}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Red: yellow frame, white triangle with XX                                  */
/* -------------------------------------------------------------------------- */

/**
 * One serif "X" (thick stroke top-left to bottom-right, hairline the other way,
 * with serifs). Drawn in a 34 x 50 box and placed by `x`; colours live in CSS.
 */
function RedX({ x }: { x: number }) {
  return (
    <g
      className="hl-rd-x"
      transform={`translate(${x} 14.5)`}
      stroke="#111"
      strokeLinecap="butt"
    >
      <line x1="6" y1="3" x2="28" y2="47" strokeWidth="6.5" />
      <line x1="28" y1="3" x2="6" y2="47" strokeWidth="1.4" />
      <g strokeWidth="2">
        <line x1="0" y1="2" x2="12" y2="2" />
        <line x1="22" y1="2" x2="34" y2="2" />
        <line x1="0" y1="48" x2="12" y2="48" />
        <line x1="22" y1="48" x2="34" y2="48" />
      </g>
      <g strokeWidth="1.2">
        <line x1="0.6" y1="2" x2="0.6" y2="4.6" />
        <line x1="33.4" y1="2" x2="33.4" y2="4.6" />
        <line x1="0.6" y1="45.4" x2="0.6" y2="48" />
        <line x1="33.4" y1="45.4" x2="33.4" y2="48" />
      </g>
    </g>
  );
}

/**
 * The front has no text in the reference, so the whole face is a single SVG.
 * The hunter's name is still exposed to assistive tech through aria-label,
 * and appears visibly on the back.
 */
function RedFront({ name }: FaceProps) {
  const label = name.trim();

  return (
    <div className="hl-rd-front">
      <svg
        className="hl-rd-art"
        viewBox="0 0 94 137"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={label ? `Hunter license of ${label}` : "Hunter license"}
      >
        {/* White triangle pointing down */}
        <polygon
          className="hl-rd-triangle"
          points="4,13 90,13 47,133"
          fill="#fff"
        />

        {/* Goblet on top, stem running down to the crossbar */}
        <polygon
          className="hl-rd-yellow"
          points="33,4 61,4 47,12"
          fill="#f2d51b"
        />
        <rect
          className="hl-rd-stem"
          x="45.8"
          y="12"
          width="2.4"
          height="67.5"
          fill="none"
          stroke="#f2d51b"
        />

        {/* Crossbar with a pennant on each side */}
        <line
          className="hl-rd-bar"
          x1="14"
          y1="79.5"
          x2="80"
          y2="79.5"
          stroke="#f2d51b"
        />
        <polygon
          className="hl-rd-yellow"
          points="5,67 5,92 15,79.5"
          fill="#f2d51b"
        />
        <polygon
          className="hl-rd-yellow"
          points="89,67 89,92 79,79.5"
          fill="#f2d51b"
        />

        <RedX x={10} />
        <RedX x={50} />
      </svg>
    </div>
  );
}

const RED_GLYPH_W = 50; // wider than the widest glyph (49)
const RED_GLYPH_GAP = 6;
const RED_WORD_GAP = 16;

/** Name as upright Hunter glyphs stacked top to bottom, one shared scale. */
function RedNameGlyphs({ name }: { name: string }) {
  const { tokens } = useMemo(() => textToHunter(name), [name]);

  const { items, height } = useMemo(() => {
    let y = 0;
    const out: { d: string; x: number; y: number }[] = [];
    for (const t of tokens) {
      if (t.kind === "sep") {
        y += RED_WORD_GAP;
        continue;
      }
      const g = GLYPH_DATA[t.key];
      out.push({ d: g.d, x: (RED_GLYPH_W - g.w) / 2, y });
      y += g.h + RED_GLYPH_GAP;
    }
    return { items: out, height: Math.max(y - RED_GLYPH_GAP, 1) };
  }, [tokens]);

  // Nothing drawable (e.g. digits only): keep the old plain-text fallback.
  if (items.length === 0) return <span>{name}</span>;

  return (
    <svg
      className="hl-rd-glyphs"
      viewBox={`0 0 ${RED_GLYPH_W} ${height}`}
      preserveAspectRatio="xMidYMin meet"
      role="img"
      aria-label={name}
    >
      {items.map((it, i) => (
        <path
          key={i}
          d={it.d}
          fill="#fff"
          transform={`translate(${it.x} ${it.y})`}
        />
      ))}
    </svg>
  );
}
/**
 * Black stripe near the left edge; the number runs UP the right edge (tops of
 * the digits face left); a small name tag sits at the bottom right.
 */
function RedBack({ name, licenseNumber }: FaceProps) {
  const number = licenseNumber.trim();
  const hunterName = name.trim();

  return (
    <div className="hl-rd-back">
      <div className="hl-rd-stripe" />

      <div
        className="hl-rd-number"
        aria-label={number ? `License number ${number}` : undefined}
      >
        {number}
      </div>

      <div className="hl-rd-tag">
        <div className="hl-rd-tag-mark">
          <HunterMark />
        </div>
        <div className="hl-rd-tag-name">
          <RedNameGlyphs name={hunterName} />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Green: green logo panel, crimson back with a dark stripe                   */
/* -------------------------------------------------------------------------- */

/**
 * Decorative fine print, written in kana and drawn in Hunter script.
 * The reference's real text is unreadable, so these are our own plain lines,
 * roughly matching the reference's line lengths (short to long):
 *   1. Hunter License number
 *   2. This card is proof of being a Hunter
 *   3. The Hunter License is an important proof
 *   4. Keep the license safe; it is a Hunter's important proof
 * Edit freely; any kana that exists in the chart works (no small っ/ゃゅょ).
 */
const GREEN_FINE_PRINT = [
  "ハンターライセンス ナンバー",
  "コノカードハ ハンターノ アカシデス",
  "ハンターライセンスハ ダイジナ アカシデス",
  "ライセンスハ ホカンスルコト ハンターノ ダイジナ アカシ",
].map(kanaToTokens);

function GreenFront({ name }: FaceProps) {
  const { tokens } = useMemo(() => textToHunter(name), [name]);

  return (
    <div className="hl-gn-front">
      {/* Green panel: big XX mark in a thick black frame */}
      <div className="hl-gn-top">
        <div className="hl-gn-logo">
          <HunterMark />
        </div>
      </div>

      {/* Pale-green band: name plate + fine print */}
      <div className="hl-gn-info">
        <div className="hl-gn-plate">
          <HunterText
            className="hl-glyphs"
            tokens={tokens}
            label={name.trim() || "Hunter name"}
          />
        </div>

        <div className="hl-gn-lines">
          {GREEN_FINE_PRINT.map((lineTokens, index) => (
            <div className="hl-gn-line" key={index}>
              <HunterText
                className="hl-glyphs"
                tokens={lineTokens}
                align="start"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Crimson panel with a dark stripe that runs the full height of the card, a round
 * logo and two short rules at the top left, and a long rule near the bottom.
 * The reference shows no number, so ours sits just above the long rule.
 */
function GreenBack({ licenseNumber }: FaceProps) {
  const number = licenseNumber.trim();

  return (
    <div className="hl-gn-back">
      <div className="hl-gn-badge">
        <HunterMark />
      </div>
      <div className="hl-gn-rule hl-gn-rule-a" />
      <div className="hl-gn-rule hl-gn-rule-b" />

      <div className="hl-gn-number">
        <span>NO.</span>
        <strong>{number || "000"}</strong>
      </div>
      <div className="hl-gn-rule hl-gn-rule-c" />

      <div className="hl-gn-stripe" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Pick the layout for a theme                                                */
/* -------------------------------------------------------------------------- */

export function LicenseFront(props: FaceProps) {
  switch (props.theme) {
    case "green":
      return <GreenFront {...props} />;
    case "blue":
      return <BlueFront {...props} />;
    case "red":
      return <RedFront {...props} />;
    default:
      return <ClassicFront {...props} />;
  }
}

export function LicenseBack(props: FaceProps) {
  switch (props.theme) {
    case "green":
      return <GreenBack {...props} />;
    case "blue":
      return <BlueBack {...props} />;
    case "red":
      return <RedBack {...props} />;
    default:
      return <ClassicBack {...props} />;
  }
}
