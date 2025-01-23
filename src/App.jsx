import './App.css'
import { useRef, useState } from 'react';
import { RenderNavbar } from './components/navbar/Navbar.jsx'
import MenuButton from './components/menuButton/menuButton'
import About from './components/about/About';

function CallToAction() {
  return (
    <>
      <h1>Hello! I'm Samuel Nguyen-Phok.</h1>
      <h4>I'm a web developer who prefers backend but can do fullstack.</h4>
    </>
  );
}

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
      <CallToAction />
      <About />
    </>
  );
}

export default App
