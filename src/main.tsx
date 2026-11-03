import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LoadingScreen from './components/LoadingScreen.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingScreen>
      {(startupComplete) => <App startupComplete={startupComplete} />}
    </LoadingScreen>
  </StrictMode>,
)
