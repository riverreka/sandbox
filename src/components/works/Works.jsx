import './works.scss';

export default function Works() {
  return (
    <div className='works' id='works'>
          <div className="slider">
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src="assets/mobile.png" alt="" />
                    </div>
                    <h2>Title</h2>
                    <p>Lorem ipsum</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="right">
                  <img src="assets/sg.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <img src="assets/sideArrow.png" className='arrow left' alt="" />
          <img src="assets/sideArrow.png" className='arrow right' alt="" />
    </div>
  );
}
