import { useState, useRef } from "react";
import "./App.css";
import HunterLicense from "./components/HunterLicense";
import type { CardTheme, AuraStyle } from "./components/HunterLicense";
import { textToHunter } from "./utils/hunterGlyphs";
import { toPng } from "html-to-image";

const THEMES: { id: CardTheme; label: string }[] = [
  { id: "green", label: "Green" },
  { id: "blue", label: "Blue" },
  { id: "red", label: "Red" },
];

function App() {
  const [name, setName] = useState("GON FREECSS");
  const [licenseNumber, setLicenseNumber] = useState("405");
  const [showBack, setShowBack] = useState(false);
  const [turns, setTurns] = useState(0); // quarter turns; 0 = upright
  const [theme, setTheme] = useState<CardTheme>("green");
  const [aura, setAura] = useState<AuraStyle>("ten");
  const [musicOn, setMusicOn] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setMusicOn((v) => !v);
  };

  // How the name will be written in Hunter script (shown so users can check it).
  const reading = textToHunter(name);

  const handleExport = async () => {
    const licenseElement = document.querySelector(".hl-scene");

    if (!(licenseElement instanceof HTMLElement)) {
      console.error("Could not find the Hunter License element.");
      return;
    }

    try {
      const dataUrl = await toPng(licenseElement, {
        pixelRatio: 3,
        cacheBust: true,
      });

      const link = document.createElement("a");
      link.download = `hunter-license-${licenseNumber}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Failed to export Hunter License:", error);
      alert("Failed to export the license. Please try again.");
    }
  };

  return (
    <main className="studio">
      <header className="topbar">
        <a className="brand" href="#">
          <img
            className="brand-logo"
            src="/images/hxh-logo.png"
            alt="Hunter License Studio"
          />
          <span>
            <strong>HUNTER</strong>
            <small>LICENSE STUDIO</small>
          </span>
        </a>
        <span className="topbar-label"></span>
        <div className="topbar-actions">
          {/* Buy Me A Coffee */}
          <a
            className="icon-btn"
            href="https://buymeacoffee.com/ardyerni"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy me a coffee"
            title="Buy me a coffee"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z" />
            </svg>
          </a>

          {/* My Github Link */}
          <a
            className="icon-btn"
            href="https://github.com/ArdyErni"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 98 96"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              />
            </svg>
          </a>
          {/* Youtube Link of 8bit OP */}
          <a
            className="icon-btn"
            href="https://www.youtube.com/watch?v=hqXYKpO-65M&list=RDhqXYKpO-65M&start_radio=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my YouTube channel"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.376.55A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.376-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
            </svg>
          </a>
          <button
            className="icon-btn"
            aria-label="Toggle background music"
            aria-pressed={musicOn}
            onClick={toggleMusic}
          >
            {musicOn ? (
              // Speaker with sound waves
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            ) : (
              // Speaker muted (X)
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            )}
          </button>
          <input
            className="volume-slider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => {
              const newVolume = Number(e.target.value);
              setVolume(newVolume);

              if (audioRef.current) {
                audioRef.current.volume = newVolume;
              }
            }}
            aria-label="Music volume"
          />
        </div>
      </header>

      <section className="workspace">
        <aside className="editor">
          <div className="section-heading">
            {/* <span className="eyebrow">CUSTOMIZATION</span> */}
            <h1>Create your license.</h1>
            <p>Make your mark as a Hunter.</p>
          </div>
          <div className="form-section">
            <label htmlFor="hunter-name">Hunter name</label>
            <input
              id="hunter-name"
              type="text"
              value={name}
              maxLength={24}
              onChange={(event) => setName(event.target.value.toUpperCase())}
              placeholder="Enter hunter name"
            />
            <p className="field-hint">
              Written as{" "}
              <strong className="field-reading">{reading.kana || "—"}</strong>
              {reading.skipped.length > 0 && (
                <span className="field-warning">
                  {" "}
                  · can’t be written: {reading.skipped.join(" ")}
                </span>
              )}
            </p>
            <p className="field-hint field-hint--faint">
              English names are converted by sound, so the reading is an
              approximation. Type katakana (e.g. ゴン) to set it exactly.
            </p>
          </div>
          <div className="form-section">
            <label htmlFor="license-number">License number</label>
            <input
              id="license-number"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={licenseNumber}
              maxLength={12}
              onChange={(event) =>
                setLicenseNumber(event.target.value.replace(/\D/g, ""))
              }
              placeholder="Enter license number"
            />
          </div>
          <div className="form-section">
            <label>Card color</label>
            <div className="side-selector side-selector--three">
              {THEMES.map((option) => (
                <button
                  key={option.id}
                  className={
                    theme === option.id ? "side-option active" : "side-option"
                  }
                  onClick={() => setTheme(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <div className="form-section">
            <label>Nen Aura</label>
            <div className="side-selector aura-selector">
              {(
                [
                  { id: "ten", label: "TEN", sub: "Protective" },
                  { id: "zetsu", label: "ZETSU", sub: "Concealed" },
                  { id: "ren", label: "REN", sub: "Intense" },
                  { id: "hatsu", label: "HATSU", sub: "Personalized" },
                ] as { id: AuraStyle; label: string; sub: string }[]
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`side-option aura-option aura-option--${opt.id}${
                    aura === opt.id ? " active" : ""
                  }`}
                  onClick={() => setAura(opt.id)}
                >
                  <span className="aura-label">{opt.label}</span>
                  <span className="aura-sub">{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="editor-note">
            <div className="editor-note-top">
              <span className="note-symbol">✳</span>
              <p>
                Your license is a fan-made design inspired by Hunter × Hunter.
                Customize it and make it your own.
              </p>
            </div>

            <div className="editor-actions">
              <button
                type="button"
                className="export-button"
                onClick={handleExport}
              >
                Export PNG
              </button>

              <button
                type="button"
                className="reset-button"
                onClick={() => {
                  setName("JULIE FREAKS");
                  setLicenseNumber("0717");
                  setShowBack(false);
                  setTurns(0);
                  setTheme("blue");
                  setAura("ten");
                }}
              >
                Reset
              </button>
            </div>
          </div>
          {/* audio element */}
          <audio
            ref={audioRef}
            loop
            preload="auto"
            src="/sound/studio-megaane-departure.mp3"
          />
        </aside>

        <section className="preview-area">
          <div className="preview-heading">
            <div>
              {/* <span className="eyebrow">LIVE PREVIEW</span> */}
              {/* <h2>Your Hunter License</h2> */}
            </div>
            {/* <span className="preview-status">
              <span className="status-dot" />
              REAL-TIME
            </span> */}
          </div>

          <div className="card-stage">
            <div className="card-glow" />
            <HunterLicense
              name={name}
              licenseNumber={licenseNumber}
              showBack={showBack}
              turns={turns}
              theme={theme}
              aura={aura}
              onFlip={() => setShowBack((current) => !current)}
              onRotate={(direction) =>
                setTurns((current) => current + direction)
              }
            />
          </div>

          <div className="preview-controls">
            <span>✳ &nbsp; Tap the card to flip · swipe to rotate</span>
            <button onClick={() => setTurns((current) => current + 1)}>
              Rotate ↻
            </button>
          </div>
        </section>
      </section>

      <footer className="studio-footer">
        <span>HUNTER LICENSE STUDIO</span>
        <span>INSPIRED BY THE WORLD OF HUNTER × HUNTER</span>
      </footer>
    </main>
  );
}

export default App;
