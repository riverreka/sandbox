import './skills.scss';
import scssVars from '../../global.scss';
import Navarrow from '../navarrow/Navarrow';
import { useState, useEffect } from "react";

export default function Skills() {
  
  const maxWidth = parseInt(scssVars.maxWidth.replace('px',''));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth < maxWidth ? window.innerWidth : maxWidth);
  
  const data = [
    {
      id: '1',
      icon: 'assets/man.png',
      title: "Frontend",
      desc: "Lorem ipsum is",
      icons: ["html5", "css3", "sass", "javascript", "babel", "webpack", "react", "redux", "gatsby"]
      // img: 'assets/Project_todo_DOM.png'
    },
    {
      id: '2',
      icon: 'assets/man.png',
      title: "Backend & DB",
      desc: "Lorem ipsum",
      icons: ["nodejs", "express-original ", "graphql", "postgresql", "mysql", "mongodb"]
      // img: 'assets/Project_todo_React.png'
    },
    {
      id: '3',
      icon: 'assets/man.png',
      title: "Test & Tools",
      desc: "Lorem",
      icons: ["mocha", "jest", "git", "docker", "figma", "google"]
      // img: 'assets/Project_todo_Redux.png'
    }
  ];

  
  const updateCurrentWidth = () => {
    if (window.innerWidth < maxWidth) {
      setCurrentWidth(window.innerWidth);
    } else {
      setCurrentWidth(maxWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateCurrentWidth);
  });

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='skills' id='skills'>
      <h1>Skills</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * currentWidth}px)` }}>
        { data.map(d => (
        <div className="container" style={{ width: `${currentWidth}px`}}>
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                {/* <div className="imgContainer">
                  <img src={ d.icon } alt="" />
                </div> */}
                <h2>{ d.title }</h2>
                {/* <p>{ d.desc }</p> */}
                {/* <span>Projects</span> */}
              </div>
            </div>
            <div className="right">
              { d.icons.map( i => (
                <i class={`devicon-${i}-plain colored`}>
                  <p>{i.split('-')[0]}</p>
                </i>
              ))}
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/sideArrow.png" className='arrow left' alt="" onClick={() => handleClick("left")}/>
      <img src="assets/sideArrow.png" className='arrow right' alt="" onClick={() => handleClick()}/>
      <Navarrow next="#about" />
    </div>
  );
}
