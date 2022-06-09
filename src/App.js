import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Navbar from './shared/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home#about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
