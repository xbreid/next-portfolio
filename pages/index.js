import React from 'react';
import TacSection from "../components/tac-section";
import HomeSection from "../components/home-section";
import AboutSection from "../components/about-section";
import ContactSection from "../components/contact-section";
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';


const fullpageOptions = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ["home", "work", "about", "contact"],
  callbacks: ['onLeave', 'afterLoad'],
  fadingEffect: true,
  menu: '#sideNav'
};

class Fullpage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let first = true;
    let second;
    let third;
    let fourth;

    return (
      <ReactFullpage
        {...this.props.fullpageProps}

        render={({ state, fullpageApi }) => {
          //console.log("render prop change", state);

          if (state.callback === "afterLoad") {
            if (state.direction === "down") {
              //console.log("loaded down..." + state.destination.index);
              switch (state.destination.index) {
                case 1:
                  first = false;
                  break;
                case 2:
                  second = false;
                  break;
                case 3:
                  third = false;
                  break;
              }
            } else if (state.direction === "up") {
              //console.log("loaded up..." + state.destination.index);
              switch (state.destination.index) {
                case 0:
                  second = false;
                  break;
                case 1:
                  third = false;
                  break;
                case 2:
                  fourth = false;
                  break;
              }
            } else {
              second = false;
              third = false;
              fourth = false;
            }
          }


          if (state.callback === "onLeave") {
            if (state.direction === "down") {
              //console.log("going down..." + state.destination.index);
              switch (state.destination.index) {
                case 1:
                  second = true;
                  break;
                case 2:
                  third = true;
                  break;
                case 3:
                  fourth = true;
                  break;
              }
            } else if (state.direction === "up") {
              //console.log("going up..." + state.destination.index);
              switch (state.destination.index) {
                case 0:
                  first = true;
                  break;
                case 1:
                  second = true;
                  break;
                case 2:
                  third = true;
                  break;
              }
            }
          }

          return (
            <div>
              <HomeSection/>
              <TacSection onSection={second}/>
              <AboutSection onSection={third}/>
              <ContactSection onSection={fourth}/>
            </div>
          );
        }}
      />
    )
  }
  
}


export default class IndexPage extends React.Component {
  render() {
    return (
      <article className="FullPage">
        <Fullpage fullpageProps={fullpageOptions}/>
        <div id="sideNav" className="Navigation">
          <a
            data-menuanchor="home"
            href="#home"
            className="Navigation-Anchor"
          />
          <a
            data-menuanchor="work"
            href="#work"
            className="Navigation-Anchor"
          />
          <a
            data-menuanchor="about"
            href="#about"
            className="Navigation-Anchor"
          />
          <a
            data-menuanchor="contact"
            href="#contact"
            className="Navigation-Anchor"
          />
        </div>
        <p className={`scrollDown`}>SCROLLDOWN</p>
      </article>
    );
  }
}
