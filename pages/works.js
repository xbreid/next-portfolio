import React from 'react';
import Parallax from 'parallax-js'
import Dribble from '../static/images/dribble.png';
import DentonSquare from '../static/images/denton-pink-square.jpg';
import LevelTen from '../static/images/levelten.png';
import cpr from '../static/images/cpr.jpg';

export default class WorksPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.parallax = new Parallax(this.scene)
  }
  componentWillUnmount() {
    this.parallax.disable()
  }

  render() {
    return (
      <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
        <div style={{marginTop: '10%'}}/>
        <h1 style={{position: 'absolute', zIndex: 1000, fontSize: '10vh', fontWeight: 500, margin: 20}}>The <br/> Works</h1>
        <section id="scene" ref={el => this.scene = el} data-pointer-events="true" data-origin-x="0" data-origin-y="0"
                 data-scalar-y="5.0" data-scalar-x="75.0" data-friction-x="0.05" data-friction-y="0.05">
          <div className="layer main" data-depth="1.00">
            <div className="col">
              <a href="#">
                <div className="hover">
                  <div className="pad align-bottom">
                    <h2>The Arnold Companies</h2>
                  </div>
                </div>
                <div className="bg-img" style={{backgroundImage:'url(https://cosmic-s3.imgix.net/067f1ed0-b267-11e8-bbde-67678e61b5b7-a75f1469-6b25-4ee7-9010-fb80c72eb1f6-original.jpeg)'}}/>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <div className="hover">
                  <div className="pad align-bottom">
                    <h2>Provitas</h2>
                  </div>
                </div>
                <div className="bg-img" style={{backgroundImage:'url(https://image-store.slidesharecdn.com/1438f8f4-0fa9-405d-b38f-726d6c02b8c6-original.png)'}}/>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <div className="hover">
                  <div className="pad align-bottom">
                    <h2>Denton 311</h2>
                  </div>
                </div>
                <div className="bg-img" style={{backgroundImage:`url(${DentonSquare})`}}/>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <div className="hover">
                  <div className="pad align-bottom">
                    <h2>IntelligenceWP</h2>
                  </div>
                </div>
                <div className="bg-img" style={{backgroundImage:`url(${Dribble})`}}/>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <div className="hover">
                  <div className="pad align-bottom">
                    <h2>LevelTen Interactive</h2>
                  </div>
                </div>
                <div className="bg-img" style={{backgroundImage:`url(${LevelTen})`}}/>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <div className="hover">
                  <div className="pad align-bottom">
                    <h2>Mobile Lifeguard</h2>
                  </div>
                </div>
                <div className="bg-img" style={{backgroundImage:`url(${cpr})`}}/>
              </a>
            </div>
          </div>
          <div className="layer gradient" data-depth="0.00">
            <canvas id="canvas-basic"/>
          </div>
        </section>
      </div>

    );
  }
}
