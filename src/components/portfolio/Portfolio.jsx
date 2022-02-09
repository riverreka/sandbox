import './portfolio.scss';

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Applications</h1>
      {/*<ul>
        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul> */}
      <div className="container">
        {/* <div className="item">
          <img src="assets/Project_todo_DOM.png" alt="" />
          <h3>ToDo App with JS</h3>
        </div>
        <div className="item">
          <img src="assets/Project_todo_React.png" alt="" />
          <h3>ToDo App with React</h3>
        </div> */}
        <div className="item">
          <img className="img-desktop" src="assets/Project_todo_Redux_desktop.png" alt="" />
          <img className="img-mobile" src="assets/Project_todo_Redux_mobile.png" alt="" />
          <div className='item__descr'>
            <h3 classname='item__title'>ToDo App with Redux</h3>
            <p>A handy app for listing everyday tasks to do with a possibility to edit, remove and mark as done.</p>
          </div>
        </div>
        <div className="item">
          <img className="img-desktop" src="assets/Project_BlackFriday_hackdayProject_desktop.png" alt="" />
          <img className="img-mobile" src="assets/Project_BlackFriday_hackdayProject_mobile.png" alt="" />
          <div className='item__descr'>
            <h3 classname='item__title'>Black Friday budget tracker</h3>
            <p>BF is always stressed by the limited time and money. My app helps to set an initial threshold for the availble budget and easily track the spendings. Your only task is to focus on the best deals then :)</p>
          </div>
        </div>
        <div className="item">
          <img className="img-desktop" src="assets/ProjectFinal_WebShop_desktop.png" alt="" />
          <img className="img-mobile" src="assets/ProjectFinal_WebShop_mobile.png" alt="" />
          <div className='item__descr'>
            <h3 classname='item__title'>Webshop by Team Pepper</h3>
            <p>Our mob built a TechShop using Gatsby, Contentful, ProsgresQL, React and Stripe</p>
          </div>
        </div>
      </div>
    </div>
  );
}
