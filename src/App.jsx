// npm packages
import { Routes, Route } from 'react-router-dom'

// css
import './App.css'

// pages
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage'

// components
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<StarshipList />}/>
        <Route path='/:starshipId' element={<StarshipPage />}/>
      </Routes>
    </>
  )
}

export default App
