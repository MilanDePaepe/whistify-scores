import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import RulesPage from './pages/RulesPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="game/:id" element={<GamePage />} />
          <Route path="regels" element={<RulesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
