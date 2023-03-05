import './index.css'
import { useState } from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Navbar from './components/Layout/Navbar.jsx'
import Footer from './components/Layout/Footer'
import Alert from './components/Layout/Alert'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/githubContent'
import {AlertProvider} from './context/alert/AlertContext'


function App() {

  return (
    <AlertProvider>
    <GithubProvider>

    <Router>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />

      <main className='container mx-auto px-3 pb-12'>
      <Alert />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/notfound' element={<NotFound />} />
        <Route exact path='/*' element={<NotFound />} />

      </Routes>
      </main>


      <Footer />
    </div>
    
    </Router>
    </GithubProvider>
    </AlertProvider>

  )
}

export default App
