import './topbar.scss';
import { GitHub, Mail, LinkedIn } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className= {'topbar ' + (menuOpen && "active")}>
      <div className='wrapper'>
        <div className="left">
          <a href="#intro" className='iconHouse'>
            <svg class="MuiSvgIcon-root iconHouse" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4.2 15.5l1.7 1.06L7 14.8V21h4v-5h2v5h4v-6.21l1.1 1.77 1.7-1.06L12 3zm1 11h-2v-2h2v2z"></path></svg>
          </a>
          <div className="itemContainer">
            <a href="https://github.com/riverreka" target="_blank" rel="noreferrer"><GitHub className='iconGitHub'/>riverreka</a>
          </div>
          <div className="itemContainer">
            <Mail className='iconMail'/>
            <span>reka.vida@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/reka-vida-74846734/" target="_blank" rel="noreferrer">
              <LinkedIn className='iconMail'/>Reka Vida
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={ () => setMenuOpen(!menuOpen) }>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
