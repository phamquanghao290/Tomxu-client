import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Wallet from './components/Wallet'

function App() {
  return (
    <>
      <Sidebar />
      <Home />
      <Wallet />
    </>
  )
}

export default App
