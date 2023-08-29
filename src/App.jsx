import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

         <Route path='/' element={<HomePage />} />
         <Route path='/saludo' element={<h1>Esta es la página de saludo!</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
