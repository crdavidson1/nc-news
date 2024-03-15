import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import SingleArticle from './components/SingleArticle'

function App() {
  const [users, setUsers] = useState([])
  const username = 'cooljmessy'
  return (
    <>
      <Header username={username}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="/articles/:article_id"
          element={
            <SingleArticle users={users} setUsers={setUsers} username={username}/>
          }
        />
      </Routes>
    </>
  )
}

export default App
