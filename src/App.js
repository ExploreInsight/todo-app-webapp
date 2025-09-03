import React from 'react'
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import TaskPage from './pages/TaskPage';
function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/task' element={<TaskPage/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App