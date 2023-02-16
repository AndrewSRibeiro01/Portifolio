import AppRoute from '../src/Routes/Routes'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>

  )
}

export default App