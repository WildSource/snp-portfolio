import './App.css'
import About from './components/about/About';
import Title from './components/title/Title';
import { NavbarContainer } from './components/navbar/Navbar'

function App() {
  return (
    <>
      <NavbarContainer />
      <Title />
      <hr></hr>
      <About />
    </>
  );
}

export default App
