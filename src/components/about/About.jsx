import "./about.scss";
import Navarrow from '../navarrow/Navarrow';
import { EmojiEvents, Code, Book } from '@material-ui/icons';

export default function About() {
  const natureIcon = () => (
    <svg class="MuiSvgIcon-root user" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NaturePeopleIcon"><path d="M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"></path></svg>
  );
  
  const data = [
    {
      id: 1,
      name: "",
      title: "Coding journey",
      img: Code,
      icon: "assets/twitter.png",
      desc: "I first met with coding in Morgan Stanley, where folks from Finance and IT departments paddled together in the company's dragonboat team. I loved the way of their thinking and later they started to introduce us to the basics of algorythms and data structures. Since then I improved myself and lately graduated at School of Applied Technology where I was seleced from more than 1500 applicants. Now I am eager to use my knowledge in real projects and become a valuable part of a developer team.",
    },
    {
      id: 2,
      name: "",
      title: "Things I care and love",
      img: natureIcon,
      icon: "assets/youtube.png",
      desc:
        "As a nature-lover, I enjoy to spend time in the forest after a long day, try out new things like skating recently or just delve into one of Knausgård's books in front of our fireplace",
      featured: true,
    },
    {
      id: 3,
      name: "Testimonial by Rita Anson",
      title: "Oslo International Hub",
      img: EmojiEvents,
      icon: "assets/linkedin.png",
      desc:
      "It is with much enthusiasm that I recommend Reka Vida. She has been my collaborator for multiple tasks during her volunteer work at Oslo International Hub. She displayed a level of analytical thought that has been very useful in our projects. Her skills are truly phenomenal, with wide-ranging intellect. She is ready to assume a job position and possesses the self-motivation to successfully create and execute the tasks required. Please let me know if I can provide any more information to strengthen her candidacy. She has a very special spark, and I trust she will go far in making every working place a better company.",
    },
  ];

  const Name = (props) => {
    if (props.name === "") {
      return "";
    }
    return (<h3>{props.name}</h3>)
  }

  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <div className="top-content">
                <d.img className="user"/>
              </div>
            </div>
            <div className="center">
              <div className="center-content">
                {d.desc}
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-content">
                <Name name={d.name} />
                <h4>{d.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Navarrow next="#contact" />
    </div>
  );
}

