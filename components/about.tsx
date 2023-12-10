import { Scene } from "react-scrollmagic-r18";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="section section--light section--about">
      <div className="wrapper">
        <div className="wrapper--push">
          <h3 className="tagline tagline--long tagline--dark">About</h3>
          <div className="section--about-content">
            <div className="large">
              <Scene classToggle="scroll-effect" reverse={true} offset={-300}>
                <h4>
                  I&apos;m a front-end web developer who aims to combine the beauty of design with the latest
                  technology. Training myself every day and pushing my own limits with 12 years of great industry
                  experience.
                </h4>
              </Scene>
              <Scene classToggle="scroll-effect" reverse={true} offset={-300}>
                <p>
                  I have diverse experience as I have worked with agencies and brands dealing in different industries.
                  This includes Enterprise software companies, eCommerce, Media houses, Branding and Advertising
                  agencies. Each has its own set of challenges and learnings. This has enabled me to venture into
                  unknown territories without much thought.
                </p>
              </Scene>
              <Scene classToggle="scroll-effect" reverse={true} offset={-300}>
                <p className="social-list first contact-social">
                  <FaLinkedin />
                  <a href="https://www.linkedin.com/in/shahadat-hussain-97256988/" target="_blank">
                    https://www.linkedin.com/in/shahadat-hussain-97256988/
                  </a>
                </p>
              </Scene>
              <Scene classToggle="scroll-effect" reverse={true} offset={-300}>
                <p className="social-list contact-social">
                  <FaGithub />
                  <a href="https://github.com/shahadat321" target="_blank">
                    https://github.com/shahadat321
                  </a>
                </p>
              </Scene>
            </div>
          </div>
          <Scene classToggle="scroll-left" reverse={true} offset={-300}>
            <a
              className="link--arrow link--dark fade-left"
              href="https://www.linkedin.com/in/shahadat-hussain-97256988/"
              target="_blank"
              rel="noreferrer"
            >
              <span>About Me</span>
            </a>
          </Scene>
        </div>
      </div>
    </section>
  );
};

export default About;
