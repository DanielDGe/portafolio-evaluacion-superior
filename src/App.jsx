import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import PortfolioLayout from './layout/PortfolioLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import PurposePage from './pages/PurposePage.jsx'
import LearningPage, { RoutinePlaceholder } from './pages/LearningPage.jsx'
import SqaPage from './pages/SqaPage.jsx'
import ObserveThinkWonderPage from './pages/ObserveThinkWonderPage.jsx'
import InstrumentsPage from './pages/InstrumentsPage.jsx'
import ReflectionPage from './pages/ReflectionPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ReferencesPage from './pages/ReferencesPage.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route index element={<HomePage />} />
          <Route path="proposito" element={<PurposePage />} />
          <Route path="aprendizaje" element={<LearningPage />} />
          <Route path="aprendizaje/sqa" element={<SqaPage />} />
          <Route
            path="aprendizaje/observo-pienso-me-pregunto"
            element={<ObserveThinkWonderPage />}
          />
          <Route
            path="aprendizaje/compara-contrasta"
            element={
              <RoutinePlaceholder
                title="Compara y contrasta"
                subtitle="Rutina de pensamiento"
                description="Esta sección reunirá la evidencia donde se analizan semejanzas y diferencias entre sistemas y enfoques de evaluación."
              />
            }
          />
          <Route
            path="aprendizaje/conectar-extender-desafiar"
            element={
              <RoutinePlaceholder
                title="Conectar, extender, desafiar"
                subtitle="Rutina de pensamiento"
                description="Esta sección mostrará las conexiones con conocimientos previos, las ideas que ampliaron mi comprensión y los nuevos desafíos."
              />
            }
          />
          <Route path="instrumentos" element={<InstrumentsPage />} />
          <Route path="metacognicion" element={<ReflectionPage />} />
          <Route path="autor" element={<AboutPage />} />
          <Route path="referencias" element={<ReferencesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
