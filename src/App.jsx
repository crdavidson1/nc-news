import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import SingleArticle from './components/SingleArticle'

function App() {
  const [articles, setArticles] = useState([])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home articles={articles} setArticles={setArticles}/>} />
        <Route
          path="/articles/:article_id"
          element={
            <SingleArticle articles={articles}/>
          }
        />
      </Routes>
    </>
  )
}

export default App
