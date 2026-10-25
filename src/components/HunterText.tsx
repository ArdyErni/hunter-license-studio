import { GLYPH_DATA } from "../utils/hunterGlyphs";
import type { GlyphToken } from "../utils/hunterGlyphs";

const CELL_HEIGHT = 40; // a little taller than the tallest glyph
const GLYPH_GAP = 9;
const SEPARATOR_WIDTH = 16;
const EDGE = 2;

type HunterTextProps = {
  tokens: GlyphToken[];
  /** Accessible description, e.g. the original name. */
  label?: string;
  align?: "start" | "center" | "end";
  className?: string;
};

/**
 * Draws a row of Hunter-script glyphs as one SVG. The SVG scales to fit its
 * container, so long names shrink instead of overflowing. Color follows the
 * CSS `color` of the parent (fill is currentColor).
 */
function HunterText({
  tokens,
  label,
  align = "center",
  className,
}: HunterTextProps) {
  let x = EDGE;
  const placed = tokens.map((token) => {
    if (token.kind === "sep") {
      const item = { token, x, w: SEPARATOR_WIDTH };
      x += SEPARATOR_WIDTH + GLYPH_GAP;
      return item;
    }
    const shape = GLYPH_DATA[token.key];
    const item = { token, x, w: shape.w };
    x += shape.w + GLYPH_GAP;
    return item;
  });

  const width = Math.max(x - GLYPH_GAP + EDGE, CELL_HEIGHT);
  const xAlign = align === "start" ? "xMin" : align === "end" ? "xMax" : "xMid";

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${CELL_HEIGHT}`}
      preserveAspectRatio={`${xAlign}YMid meet`}
      role="img"
      aria-label={label}
      fill="currentColor"
    >
      {placed.map(({ token, x: gx }, index) => {
        if (token.kind === "sep") {
          return (
            <circle
              key={index}
              cx={gx + SEPARATOR_WIDTH / 2}
              cy={CELL_HEIGHT / 2}
              r={3}
            />
          );
        }
        const shape = GLYPH_DATA[token.key];
        return (
          <path
            key={index}
            d={shape.d}
            fillRule="evenodd"
            transform={`translate(${gx} ${(CELL_HEIGHT - shape.h) / 2})`}
          />
        );
      })}
    </svg>
  );
}

export default HunterText;
