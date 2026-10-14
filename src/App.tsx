

import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Homepage from './pages/homepage'
import Statement from './pages/statement'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/statement" element={<Statement/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
