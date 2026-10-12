

import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Start from './pages/start'
import Homepage from './pages/homepage'
import Statement from './pages/statement'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<Start/>} />
        <Route path="/" element={<Homepage/>}/>
        <Route path="/statement" element={<Statement/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
