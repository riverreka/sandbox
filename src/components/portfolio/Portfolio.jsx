import './portfolio.scss';

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/Project_todo_DOM.png" alt="" />
          <h3>ToDo App with JS</h3>
        </div>
        <div className="item">
          <img src="assets/Project_todo_React.png" alt="" />
          <h3>ToDo App with React</h3>
        </div>
        <div className="item">
          <img src="assets/Project_todo_Redux.png" alt="" />
          <h3>ToDo App with Redux</h3>
        </div>
        <div className="item">
          <img src="assets/Project_BlackFriday_hackdayProject.png" alt="" />
          <h3>Black Friday budget tracker</h3>
        </div>
        <div className="item">
          <img src="assets/ProjectFinal_WebShop.png" alt="" />
          <h3>webshop by Team Pepper</h3>
        </div>
      </div>
    </div>
  );
}
