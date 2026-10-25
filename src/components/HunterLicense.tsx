import { useMemo, useRef, useCallback } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import "./HunterLicense.css";
import HunterText from "./HunterText";
import { kanaToTokens, textToHunter } from "../utils/hunterGlyphs";

export type CardTheme = "green" | "blue" | "red";
export type AuraStyle = "ten" | "zetsu" | "ren" | "hatsu";

type HunterLicenseProps = {
  name: string;
  licenseNumber: string;
  showBack: boolean;
  /** Quarter turns clockwise (negative = counter-clockwise). 0 = upright portrait. */
  turns: number;
  theme: CardTheme;
  aura: AuraStyle;
  /** Called on tap / click / Enter / Space. */
  onFlip: () => void;
  /** Called on a horizontal swipe / drag / arrow key: 1 = clockwise, -1 = counter-clockwise. */
  onRotate: (direction: 1 | -1) => void;
};

// Gesture thresholds, in pixels.
const TAP_MAX_MOVE = 10; // moved less than this = a tap
const SWIPE_MIN_DISTANCE = 40; // moved at least this far sideways = a swipe

// Fixed fine print, written in kana and drawn in Hunter script.
const LINE_ONE = kanaToTokens("ハンターライセンス"); // "Hunter License"
const LINE_TWO = kanaToTokens("ライセンスナンバー"); // "License number"

/** Fan-drawn approximation of the XX mark with a red diamond. */
function HunterMark() {
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

function HunterLicense({
  name,
  licenseNumber,
  showBack,
  turns,
  theme,
  aura,
  onFlip,
  onRotate,
}: HunterLicenseProps) {
  const number = licenseNumber.trim();
  const digits = number ? number.split("") : ["", "", "", ""];
  const { tokens } = useMemo(() => textToHunter(name), [name]);

  // --- gestures: tap = flip, horizontal swipe/drag = rotate ---
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  // --- tilt + holographic ---
  const sceneRef = useRef<HTMLDivElement>(null);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (reducedMotion) return;
      const scene = sceneRef.current;
      if (!scene) return;
      const rect = scene.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // Normalised -1..1
      const nx = (event.clientX - cx) / (rect.width / 2);
      const ny = (event.clientY - cy) / (rect.height / 2);
      // Tilt: max ±12 deg
      const ry = nx * 12;
      const rx = -ny * 12;
      // Holographic position 0..1
      const hx = (nx + 1) / 2;
      const hy = (ny + 1) / 2;
      scene.style.setProperty("--tilt-x", `${rx}deg`);
      scene.style.setProperty("--tilt-y", `${ry}deg`);
      scene.style.setProperty("--hx", `${hx}`);
      scene.style.setProperty("--hy", `${hy}`);
    },
    [reducedMotion]
  );

  const handlePointerLeave = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.style.setProperty("--tilt-x", "0deg");
    scene.style.setProperty("--tilt-y", "0deg");
    scene.style.setProperty("--hx", "0.5");
    scene.style.setProperty("--hy", "0.5");
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
    // keep receiving events even if the pointer leaves the card mid-swipe
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;

    if (Math.abs(dx) >= SWIPE_MIN_DISTANCE && Math.abs(dx) > Math.abs(dy)) {
      onRotate(dx > 0 ? 1 : -1); // swipe right = clockwise, left = counter-clockwise
    } else if (Math.hypot(dx, dy) < TAP_MAX_MOVE) {
      onFlip();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onFlip();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      onRotate(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      onRotate(-1);
    }
  };

  return (
    <div
      className="hl-orient"
      role="button"
      tabIndex={0}
      aria-label={`Hunter license, showing the ${
        showBack ? "back" : "front"
      }. Tap to flip, swipe to rotate.`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={() => {
        pointerStart.current = null;
        handlePointerLeave();
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="hl-float">
        <div
          ref={sceneRef}
          className={`hl-scene hl-theme-${theme} hl-aura-${aura}`}
          style={{
            transform: `rotate(${turns * 90}deg) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))`,
          }}
        >
          <div className={`hl-card ${showBack ? "flipped" : ""}`}>
            {/* FRONT */}
            <div className="hl-face hl-front">
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
                        tokens={LINE_ONE}
                        align="start"
                        label="Hunter License"
                      />
                    </div>
                    <div className="hl-line">
                      <HunterText
                        className="hl-glyphs"
                        tokens={LINE_TWO}
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
            </div>

            {/* BACK */}
            <div className="hl-face hl-back">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HunterLicense;
