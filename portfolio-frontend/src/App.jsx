
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './pages/Contact';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Errorpage from './pages/Errorpage';
import './root.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
