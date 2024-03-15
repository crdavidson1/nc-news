import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import SingleArticle from './components/SingleArticle'

function App() {
  const username = 'cooljmessy'
  return (
    <>
      <Header username={username}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="/articles/:article_id"
          element={
            <SingleArticle username={username}/>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </>
  )
}

export default App
