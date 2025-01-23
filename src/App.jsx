import './App.css'
import { useRef, useState } from 'react';
import { RenderNavbar } from './components/navbar/Navbar.jsx'
import MenuButton from './components/menuButton/menuButton'
import About from './components/about/About';
import Title from './components/title/Title.css';

function App() {
  const menuButtonRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const toggleAnimation = 
    () => {
       setToggle(!toggle);
       menuButtonRef.current.classList.toggle('change');
    };
       
  return (
    <>
      <MenuButton 
        clickFun={ toggleAnimation } 
        reference={ menuButtonRef } 
      />
      <RenderNavbar toggled={toggle} />
      <Title />
      <About />
    </>
  );
}

export default App
