import './Navbar.css'

function RenderNavbar({ toggled }) {
  if (toggled) {
    return (<Navbar />);
  } else {
    return (<></>);
  }
}

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

export { RenderNavbar , Navbar } 
