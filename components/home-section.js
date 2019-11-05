import React from 'react';
import Typist from 'react-typist';
import Nebula from '../static/images/rainbow-nebula.jpg';

export default class HomeSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section">
        <div className="banner-container">
          <div className="title" style={{backgroundImage:`url(${Nebula})`}}>BRANDON REID</div>
          <Typist startDelay={1250}>
            <span className="subtitle">Hi!</span>
            <Typist.Backspace count={3} delay={500} />
            <span className="subtitle">Welcome to my portfolio</span>
            <Typist.Backspace count={23} delay={400} />
            <span className="subtitle">I'm a Freelancer</span>
            <Typist.Backspace count={10} delay={400} />
            <span className="subtitle">Web Designer</span>
            <Typist.Backspace count={12} delay={400} />
            <span className="subtitle">Full Stack Developer</span>
          </Typist>
        </div>
      </div>
    );
  }
}
