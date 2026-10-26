import { useRef, useCallback } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import "./HunterLicense.css";
import { LicenseFront, LicenseBack } from "./LicenseFaces";
import type { CardTheme } from "./LicenseFaces";

// App.tsx imports this type from here, so keep exporting it.
export type { CardTheme };
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

// ─── Export-only flat panels ─────────────────────────────────────────────────
// Rendered into an off-screen React root for PNG capture. They use the SAME
// face components as the interactive card (LicenseFront / LicenseBack), but
// with no 3D transforms, perspective, animation or backface-visibility.

type ExportPanelProps = {
  name: string;
  licenseNumber: string;
  theme: CardTheme;
  side: "front" | "back";
};

export function LicenseExportPanel({
  name,
  licenseNumber,
  theme,
  side,
}: ExportPanelProps) {
  // --hl-cqw = 1% of the 420px panel width = 4.2px.
  // This replaces container-query cqw units, which do not resolve inside
  // the SVG foreignObject that html-to-image uses for capture.
  const cqwPx = 420 * 0.01; // 4.2

  return (
    <div
      className={`hl-scene hl-theme-${theme} hl-export-scene`}
      style={{ "--hl-cqw": `${cqwPx}px` } as CSSProperties}
    >
      <div
        className={`hl-face ${
          side === "front" ? "hl-front" : "hl-back"
        } hl-export-face`}
      >
        {side === "front" ? (
          <LicenseFront
            name={name}
            licenseNumber={licenseNumber}
            theme={theme}
          />
        ) : (
          <LicenseBack
            name={name}
            licenseNumber={licenseNumber}
            theme={theme}
          />
        )}
      </div>
    </div>
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
    [reducedMotion],
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
            <div className="hl-face hl-front">
              <LicenseFront
                name={name}
                licenseNumber={licenseNumber}
                theme={theme}
              />
            </div>

            <div className="hl-face hl-back">
              <LicenseBack
                name={name}
                licenseNumber={licenseNumber}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HunterLicense;
