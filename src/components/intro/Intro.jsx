import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import { ArrowDownward } from '@material-ui/icons';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['develop webpages', 'find solutions', 'contribute teams']
    });
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Welcome! My name is</h2>
          <h1>Reka</h1>
          <h3>
            Yes, I can <span ref={ textRef }></span>
          </h3>
        </div>
       {/* <a href="#portfolio">
          <ArrowDownward className='iconArrowDownward'/>
        </a> */}
      </div>
    </div>
  );
}
