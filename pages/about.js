import React from 'react';
import Head from 'next/head';
import Fade from 'react-reveal/Fade';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <article className="about">
        <Head>
          <title>About</title>
        </Head>
        <Fade ssrFadeout top cascade delay={100}>
          <section className="container">
            <div className="about-inner">
              <h1>About</h1>
              <p>I'm a full stack developer specialized in Full Stack Web Development, currently living in Richmond, Virginia. Currently working as a Freelancer and full time developer for Mobelux. </p>
            </div>
            <div className="about-inner skills flex-end">
              <h1>Skills</h1>
              <div className="about-skills">
                <div>
                  <ul>
                    <li>Web Design</li>
                    <li>Front End</li>
                    <li>Back End</li>
                    <li>Mobile Apps</li>
                    <li>Security</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>HTML5 / CSS3</li>
                    <li>Javascript</li>
                    <li>React / React Native</li>
                    <li>Ruby / Rails</li>
                    <li>Python / Django</li>
                    <li>SQL / NoSQL</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-inner education">
              <h1>Study</h1>
              <div className="education-inner">
                <span>Fall 2015 - Fall 2018</span>
                <span>University of North Texas </span>
                <span> Bachelor's in Information Technology</span>
                <span>Denton, TX</span>
              </div>
            </div>
            <div className="about-inner experience flex-end">
              <h1>Work</h1>
              <div className="exp-outer">
                <div className="exp-inner">
                  <span>Nov 2018 - Current</span>
                  <span>Full Stack Developer, Simple Media</span>
                  <span>React | Django | Rails</span>
                  <span>Richmond, VA</span>
                </div>
                <div className="exp-inner">
                  <span>Feb 2018 - Oct 2018</span>
                  <span>Lead Developer, Simple Media</span>
                  <span>React | Wordpress | CosmicJS</span>
                  <span>Dallas, TX</span>
                </div>
                <div className="exp-inner">
                  <span>Jun 2017 - Feb 2018</span>
                  <span>Lead Developer, LevelTen Interactive</span>
                  <span>Drupal | Wordpress | Genesis</span>
                  <span>Dallas, TX</span>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <div style={{padding: '100px 0px'}}/>
      </article>
    )
  }
}
