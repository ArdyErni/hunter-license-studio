/**
 * The artwork for each license face.
 *
 * Every theme can have its own front and back layout. The interactive card
 * and the PNG export BOTH render these same components, so the export can
 * never drift from what the user sees.
 *
 *   blue  -> BlueFront / BlueBack       (Basic Hunter License, matches the reference)
 *   other -> ClassicFront / ClassicBack (green + red, until they get their own designs)
 *
 * To add a layout for another theme, write its two components and add a
 * line to LicenseFront / LicenseBack at the bottom of this file.
 */

import { useMemo } from "react";
import "./BlueLicense.css";
import HunterText from "./HunterText";
import { kanaToTokens, textToHunter } from "../utils/hunterGlyphs";

export type CardTheme = "green" | "blue" | "red";

export type FaceProps = {
  name: string;
  licenseNumber: string;
  theme: CardTheme;
};

/* -------------------------------------------------------------------------- */
/* Shared pieces                                                              */
/* -------------------------------------------------------------------------- */

/** Fan-drawn approximation of the XX mark with a red diamond. */
export function HunterMark() {
  return (
    <svg viewBox="0 0 200 120" className="hl-mark" aria-hidden="true">
      <polygon points="100,14 134,60 100,106 66,60" fill="#c8102e" />
      <g stroke="#111" fill="none">
        <line x1="96" y1="14" x2="30" y2="106" strokeWidth="11" />
        <line x1="104" y1="14" x2="170" y2="106" strokeWidth="11" />
        <line x1="30" y1="14" x2="96" y2="106" strokeWidth="3" />
        <line x1="170" y1="14" x2="104" y2="106" strokeWidth="3" />
        <g strokeWidth="3.5">
          <line x1="14" y1="14" x2="46" y2="14" />
          <line x1="82" y1="14" x2="118" y2="14" />
          <line x1="154" y1="14" x2="186" y2="14" />
          <line x1="12" y1="106" x2="48" y2="106" />
          <line x1="84" y1="106" x2="116" y2="106" />
          <line x1="152" y1="106" x2="188" y2="106" />
        </g>
      </g>
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
/* Pick the layout for a theme                                                */
/* -------------------------------------------------------------------------- */

export function LicenseFront(props: FaceProps) {
  switch (props.theme) {
    case "blue":
      return <BlueFront {...props} />;
    default:
      return <ClassicFront {...props} />;
  }
}

export function LicenseBack(props: FaceProps) {
  switch (props.theme) {
    case "blue":
      return <BlueBack {...props} />;
    default:
      return <ClassicBack {...props} />;
  }
}
