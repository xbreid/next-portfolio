import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactImg from '../static/images/contact.jpg';


export default class ContactSection extends React.Component {
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
            Get In Touch
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
          <a
            style={{
              animationFillMode: 'both',
              animationDuration: '1414ms',
              animationDelay: '0ms',
              animationIterationCount: 1,
              opacity: 1,
              color: 'black'
            }}
            className={this.props.onSection ? 'fadeInLeft' : ''}
            href="mailto:brandonareid2@gmail.com">
            <p>brandonareid2@gmail.com</p>
          </a>
          <div
            style={{
              animationFillMode: 'both',
              animationDuration: '1414ms',
              animationDelay: '0ms',
              animationIterationCount: 1,
              opacity: 1,
              color: 'black',
              margin: '25px 0px'
            }}
            className={`social ${this.props.onSection ? `fadeInLeft` : ``}`}
          >
            <a target="_blank" href="https://github.com/bar0191"><FaGithub size={38} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/brandon-reid/"><FaLinkedin size={38}  /></a>
          </div>
        </div>
        <div
          className={`space-card-contact ${this.props.onSection ? `fadeInUp` : ``}`}
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
          <img src={ContactImg}/>
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
            <p>03</p>
          </div>
        </div>
      </div>
    );
  }
}