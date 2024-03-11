import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
