import './App.css'
import About from './components/about/About';
import Title from './components/title/Title';
import { NavbarContainer } from './components/navbar/Navbar'
import Footer from './components/footer/Footer'; 

function App() {
  return (
    <>
      <NavbarContainer />
      <Title />
      <hr></hr>
      <About />
      <Footer />
    </>
  );
}

export default App
