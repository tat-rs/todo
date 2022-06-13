import "./HamburgerButton.css";

function HamburgerButton(props) {
  return (
    <div className="hamburger-btn" onClick={props.isMenuOpen ? props.closeNavMenu : props.openNavMenu}>
      <span className={`hamburger-btn__line ${props.isMenuOpen ? 'hamburger-btn__line_left' : '' }`}/>
      <span className={`hamburger-btn__line ${props.isMenuOpen ? 'hamburger-btn__line_hidden' : '' }`}/>
      <span className={`hamburger-btn__line ${props.isMenuOpen ? 'hamburger-btn__line_right' : '' }`}/>
    </div>
  )
}

export default HamburgerButton