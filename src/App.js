import AppRoute from '../src/Routes/Routes'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <AppRoute />
      </BrowserRouter>
  )
}

export default App