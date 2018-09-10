import React from 'react';
import Tanker from '../static/images/tanker.jpeg';

export default class TacSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'section'}>
        <div className="content" style={{display: this.props.onSection ? 'block' : 'none'}}>
          <h1 style={{
            animationFillMode: 'both',
            animationDuration: '2000ms',
            animationDelay: '0ms',
            animationIterationCount: 1,
            opacity: 1
          }}
              className={this.props.onSection ? 'fadeInLeft' : ''}>
            The <br/> Arnold <br/> Companies
          </h1>
          <div
            style={{
              animationFillMode: 'both',
              animationDuration: '1682ms',
              animationDelay: '0ms',
              animationIterationCount: 1,
              opacity: 1
            }}
            className={`line-break ${this.props.onSection ? `fadeInLeft` : ``}`}
          >
            <span/>
            <span/>
          </div>
          <p
            style={{
              animationFillMode: 'both',
              animationDuration: '1414ms',
              animationDelay: '0ms',
              animationIterationCount: 1,
              opacity: 1
            }}
            className={this.props.onSection ? 'fadeInLeft' : ''}
          >
            Website<br/>Development & Design
          </p>
          <a href="/works/tac">
            <button
              style={{
                animationFillMode: 'both',
                animationDuration: '1189ms',
                animationDelay: '0ms',
                animationIterationCount: 1,
                opacity: 1
              }}
              className={`explore ${this.props.onSection ? `fadeInLeft` : ``}`}
            >
              Explore
              <span className="icon-right"/>
              <span className="icon-right after"/>
            </button>
          </a>
        </div>
        <div
          className={`space-card-tac ${this.props.onSection ? `fadeInUp` : ``}`}
          style={{
            display: this.props.onSection ? 'block' : 'none',
            animationFillMode: 'both',
            animationDuration: '1000ms',
            animationDelay: '0ms',
            animationIterationCount: 1,
            opacity: 1
          }}/>
        <div className={`top-card ${this.props.onSection ? `fadeInUp` : ``}`} style={{
          display: this.props.onSection ? 'block' : 'none',
          animationFillMode: 'both',
          animationDuration: '1000ms',
          animationDelay: '250ms',
          animationIterationCount: 1,
          opacity: 1
        }}>
          <img src={Tanker}/>
          <div
            className={`page-num ${this.props.onSection ? `fadeInUp` : ``}`}
            style={{
              animationFillMode: 'both',
              animationDuration: '1414ms',
              animationDelay: '0ms',
              animationIterationCount: 1,
              opacity: 1
            }}
          >
            <p>01</p>
          </div>
        </div>

      </div>
    );
  }
}