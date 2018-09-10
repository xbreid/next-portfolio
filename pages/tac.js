import React from 'react';
import Head from 'next/head';
import Fade from 'react-reveal/Fade';
import tac from '../static/images/tac-portfolio.png';
import tacBlue from '../static/images/tac-blue.jpeg';
import energyLarge from '../static/images/energyLarge.png';
import keystoneLarge from '../static/images/keystone-large.png';

export default class Tac extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="work">
        <Head>
          <title>The Arnold Companies</title>
        </Head>
        <section className="hero">
          <div className="hero-content">
            <h1>The <br/> Arnold <br/> Companies</h1>
            <div className={`line-break`}>
              <span/>
              <span/>
            </div>
            <p> Website<br/>Development & Design</p>
            <a target="_blank" href="https://thearnoldcos.com/">
              <button className={`explore`}>
                View Site
                <span className="icon-right"/>
                <span className="icon-right after"/>
              </button>
            </a>
          </div>
          <img src={tacBlue}/>
          <p className={`scrollDown`}>SCROLLDOWN</p>
        </section>
        <section className="work-content">
          <Fade ssrFadeout top cascade delay={100}>
            <section className="container">
              <div className="work-content-inner overview">
                <h1>About</h1>
                <p>TAC - The Arnold Companies, comprised of 4 companies, TACenergy, TAC Air, TAC Investments, and Keystone Aviation. These companies were on seperate domains and wordpress installations. TAC wanted to get off clunky wordpress, use something modern, and consolidate all of their sites into one place. </p>
              </div>
              <div className="work-content-inner skills flex-end">
                <h1>Tech</h1>
                <div className="work-content-skills">
                  <div>
                    <ul>
                      <li>Cosmic</li>
                      <li>NextJS</li>
                      <li>React</li>
                      <li>Node</li>
                      <li>Jquery</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>CSS3</li>
                      <li>Javascript</li>
                      <li>NoSQL</li>
                      <li>Material UI</li>
                      <li>Babel / Polyfill</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </Fade>
          <div style={{padding: '100px 0px'}}/>
        </section>
        <section style={{background: `url(${tac})`, minHeight: '100vh', backgroundPosition: 'center', backgroundSize: 'cover'}}/>
        <section className="work-content dev">
          <Fade ssrFadeout top cascade delay={100}>
            <section className="container">
              <div className="work-content-inner">
                <h1>Dev</h1>
                <p>TAC’s backend is powered by Node, Next.js, and Express. Next.js is used for server side rendering capabilities for SEO optimization as well as site routing. Next.js also makes it easy to integrate with babel and webpack since they are built right in. I used Next.js routing API to rendering page templates for pages that have the same design layouts. TAC’s frontend is powered by React.js and the world’s most popular react UI framework, Material UI. </p>
              </div>
            </section>
          </Fade>
          <div style={{padding: '100px 0px'}}/>
        </section>
        <section style={{background: "#f3f3f3", paddingTop: 100}}>
          <div className="container" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', maxHeight: '60vh', overflow: 'hidden'}}>
            <div style={{flexBasis: '46%', width: '46%'}}>
              <img style={{width: '100%'}} src={energyLarge}/>
            </div>
            <div style={{flexBasis: '46%', width: '46%'}}>
              <img style={{width: '100%'}} src={keystoneLarge}/>
            </div>
          </div>
        </section>
        <section style={{minHeight: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black'}}>
          <a href="mailto:brandonareid2@gmail.com">
            <p style={{margin: 0, fontSize: '3vh', color: 'white'}}>brandonareid2@gmail.com</p>
          </a>
        </section>
      </article>
    )
  }
}