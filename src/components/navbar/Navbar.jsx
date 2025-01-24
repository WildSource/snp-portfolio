import './Navbar.css'
import { useRef, useState } from 'react';

function Navbar() {
  return (
    <div className='NavbarClass'>
      <ul>
        <li><h3>Home</h3></li>
        <li><h3>Projects</h3></li>
        <li><h3>About</h3></li>
        <li><h3>Contacts</h3></li>
       </ul>
    </div>
  )
}

function MenuButton({ clickFun, reference }) {
  return (
    <div className='menuButtonContainer' ref={ reference } onClick={ clickFun } >
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </div>
  )
}

function RenderNavbar({ toggled }) {
  if (toggled) {
    return (<Navbar />);
  } else {
    return (<></>);
  }
}

function NavbarContainer() {
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
      </>
    );
}

export { NavbarContainer };
