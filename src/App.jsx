import { useState } from 'react'
import NavBar from './NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './Footer'

function App() {
  const [page, setPage] = useState("home")

  return (
    <div className="app">
      <NavBar page={page} setPage={setPage} />
      {page === "home" && <Home />}
      {page === "contact" && <Contact />}
      {page === "about" && <About />}
      <Footer />
    </div>
  )
}

export default App
