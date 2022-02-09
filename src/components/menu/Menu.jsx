import './menu.scss';

export default function Menu( { menuOpen, setMenuOpen }) {
  return (
    <div className= { 'menu '+(menuOpen && 'active') }>
        <ul>
            <li onClick={ () => setMenuOpen(false) }>
                <a href="#intro">Home</a>
            </li>
            <li onClick={ () => setMenuOpen(false) }>
                <a href="#portfolio">Apps</a>
            </li>
            <li onClick={ () => setMenuOpen(false) }>
                <a href="#works">Skills</a>
            </li>
            <li onClick={ () => setMenuOpen(false) }>
                <a href="#testimonials">About</a>
            </li>
            <li onClick={ () => setMenuOpen(false) }>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  );
}
