import './menuButton.css'

function MenuButton({ clickFun, reference }) {
  return (
    <div className='menuButtonContainer' ref={ reference } onClick={ clickFun } >
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </div>
  )
}

export default MenuButton
