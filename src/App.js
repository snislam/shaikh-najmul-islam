import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Projects from './Pages/Home/Projects';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import NotFound from './shared/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
