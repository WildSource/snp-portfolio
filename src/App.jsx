import './App.css';
import About from './components/about/About';
import Title from './components/title/Title';
import { NavbarContainer } from './components/navbar/Navbar';
import Footer from './components/footer/Footer'; 
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <NavbarContainer />
      <Title />
      <hr></hr>
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default App
