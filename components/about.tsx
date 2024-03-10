import { Scene } from "react-scrollmagic-r18";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

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
                <p className="exp--link">
                  I have diverse experience as I have worked with agencies and brands dealing in different industries.
                  This includes{" "}
                  <a href="">
                    Enterprise software companies <img className="img" src="/images/port-2.jpg" alt="" />
                  </a>
                  <a href="">
                    Enterprise software companies <img className="img" src="/images/port-3.jpg" alt="" />
                  </a>
                  ,{" "}
                  {/* <a href="">
                    eCommerce <Image loading="lazy" className="img" src="/images/port-3.jpg" alt="WhatsAPP" />
                  </a>
                  ,{" "}
                  <a href="">
                    Healthcare <Image loading="lazy" className="img" src="/images/port-4.jpg" alt="WhatsAPP" />
                  </a>
                  ,{" "}
                  <a href="">
                    Media houses <Image loading="lazy" className="img" src="/images/port-5.jpg" alt="WhatsAPP" />
                  </a>
                  ,{" "}
                  <a href="">
                    AMP Stories <Image loading="lazy" className="img" src="/images/port-6.jpg" alt="WhatsAPP" />
                  </a>
                  ,{" "}
                  <a href="">
                    Branding <Image loading="lazy" className="img" src="/images/port-7.jpg" alt="WhatsAPP" />
                  </a>{" "}
                  and{" "}
                  <a href="">
                    Advertising agencies{" "}
                    <Image loading="lazy" className="img" src="/images/port-8.jpg" alt="WhatsAPP" />
                  </a> */}
                  . Each has its own set of challenges and learnings. This has enabled me to venture into unknown
                  territories without much thought.
                </p>
              </Scene>
              <Scene classToggle="scroll-effect" reverse={true} offset={-300}>
                <p className="social-list first contact-social">
                  <FaLinkedin />
                  <a
                    href="https://www.linkedin.com/in/shahadat-hussain-97256988/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    https://www.linkedin.com/in/shahadat-hussain-97256988/
                  </a>
                </p>
              </Scene>
              <Scene classToggle="scroll-effect" reverse={true} offset={-300}>
                <p className="social-list contact-social">
                  <FaGithub />
                  <a href="https://github.com/shahadat321" target="_blank" rel="noreferrer noopener">
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
