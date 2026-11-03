import { useState, type ReactNode } from 'react'
import './LoadingScreen.css'

export default function LoadingScreen({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [logoReady, setLogoReady] = useState(false)

  return (
    <>
      {/* Preserve the studio's layout while blocking keyboard and pointer input. */}
      <div
        className={loading ? 'intro-app intro-app--hidden' : 'intro-app'}
        inert={loading}
        aria-hidden={loading || undefined}
      >
        {children}
      </div>
      {loading && (
        <div className="loading-screen">
          <img
            className={`loading-screen__logo${logoReady ? ' loading-screen__logo--ready' : ''}`}
            src="/images/anime-hxh-logo.png"
            alt="Hunter × Hunter"
            width={3840}
            height={2160}
            fetchPriority="high"
            onLoad={() => setLogoReady(true)}
            onError={() => setLoading(false)}
            onAnimationEnd={() => setLoading(false)}
          />
        </div>
      )}
    </>
  )
}
