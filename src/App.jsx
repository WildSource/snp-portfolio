import './App.css';
import About from './components/about/About';
import Title from './components/title/Title';
import { NavbarContainer } from './components/navbar/Navbar';
import Footer from './components/footer/Footer'; 
import Skills from './components/skills/Skills';
import Project from './components/projects/Project.jsx';
import Contacts from './components/contacts/Contacts';
import SpinninModel from './components/spinningmodel/Spinningmodel.jsx';

function App() {
  return (
    <>
      <SpinninModel />
      <NavbarContainer />
      <Title />
      <hr></hr>
      <About />
      <Skills />
      <Project />
      <Contacts />
      <Footer />
    </>
  );
}

export default App
