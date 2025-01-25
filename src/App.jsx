import './App.css'
import About from './components/about/About';
import Title from './components/title/Title';
import { NavbarContainer } from './components/navbar/Navbar'
import Footer from './components/footer/Footer'; 
import Project from './components/projects/Project.jsx';
function App() {
  return (
    <>
      <NavbarContainer />
      <Title />
      <hr></hr>
      <About />
      <Project />
      <Footer />
    </>
  );
}

export default App
