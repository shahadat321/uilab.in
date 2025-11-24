import { Scene } from "react-scrollmagic-r18";
import { useState, useEffect } from "react";
import { HiArrowsPointingOut } from "react-icons/hi2";
import Image from "next/image";
// import Port from "./portAPI";
// import PortCard from "./portCard";
import HoverImage from "./HoverImage";

interface IData {
  id: number;
  href: string;
  title: string;
  description: string;
  imgJPG: string;
  imgWEBP: string;
  imgAVIF: string;
  btnTitle: string;
}

const Portfolio = () => {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    fetch("/api/portfolioAPI")
      .then((res) => res.json())
      .then((res) =>
        // console.log(res)
        setData(res)
      );
  }, []);

  return (
    <section id="portfolio" className="section section--dark section--work">
      <div className="wrapper">
        <div className="wrapper--push work-push-up" style={{padding: "0"}}>

          
          <div className="port-recent">
            <div className="port-recent--box">
              <div className="port-recent--box-wrap">
                <div className="port-recent--border-animation"></div>
                <div className="port-recent--border-animation"></div>
              </div>
              {/* <img loading="eager" src="https://cdn.prod.website-files.com/66c89c41b01a092340805473/6740f422caf5c6dee90981b0_Frame%201413372376.avif" alt="" className="bg-img is-video" /> */}
              <figure>
                <picture>
                  <img decoding="async" loading="lazy" src="/images/dash.jpg" alt="Portfolio" className="bg-img is-video" />
                </picture>
                <figcaption className="work-overlay">
                  <div className="work-overlay--content">
                    <h4 className="work-item--text item-title">Dashboard</h4>
                    <h5 className="work-item--text item-description">
                      ReactJS, Redux, RESTful API, JSON, HTML5, TailwindCSS, HeadlessUI, Heroicons Git and Azure DevOps.
                    </h5>
                    <a href="https://quickwerx.com/app/dashboard/" target="_blank" rel="noreferrer" className="work-item--text item-btn" type="button" title="Dashboard" style={{textDecoration: "none"}}>
                      View Project
                    </a>
                  </div>
                </figcaption>
              </figure>
              {/* <Image
                layout="responsive"
                loading="lazy"
                src="/images/dash.jpg"
                alt="Portfolio"
                width="1188"
                height="743"
                className="bg-img is-video"
              /> */}

            </div>
          </div>

          <Scene classToggle="fade-up" reverse={true} offset={-300}>
            <div className="fade-effect">
              <div style={{paddingTop: "50px"}}>
                <div className="text-center fade-effect fade-up">
                  <h3 className="tagline tagline--long tagline--light">About</h3>
                  {/* <h3 className="about-sub-heading">I am a front-end web developer who aims to combine the beauty of design with the latest technology. Training myself every day and pushing my own limits with 13+ years of great industry experience. This includes [ Enterprise software companies ], [ eCommerce ], [ Media houses ], [Branding] and [Advertising agencies].</h3> */}

                  <h3 className="about-sub-heading img-new">I am a front-end web developer who aims to combine the beauty of design with the latest technology. Training myself every day and pushing my own limits with 13+ years of great industry experience. This includes {" "}
                    <HoverImage title="[ Enterprise software companies ]" image="/images/ws.jpg" />, {" "}
                    <HoverImage title="[ eCommerce ]" image="/images/port-pdf.jpg" />, {" "}
                    <HoverImage title="[ Media houses ]" image="/images/port-2.jpg" />, {" "}
                    <HoverImage title="[ Branding ]" image="/images/qw.jpg" /> and  {" "}
                    <HoverImage title="[ Advertising agencies ]" image="/images/port-8.jpg" />.
                  </h3>
                  

                  {/* <p className="img-new">
                    I have diverse experience as I have worked with agencies and brands dealing in different industries.
                    This includes <HoverImage title="Enterprise software companies" image="/images/port-2.jpg" />,{" "}
                    <HoverImage title="eCommerce" image="/images/port-3.jpg" />,{" "}
                    <HoverImage title="Healthcare" image="/images/port-4.jpg" />,{" "}
                    <HoverImage title="Media houses" image="/images/port-5.jpg" />,{" "}
                    <HoverImage title="Branding" image="/images/port-6.jpg" /> and{" "}
                    <HoverImage title="Advertising agencies" image="/images/port-7.jpg" />. Each has its own set of
                    challenges and learnings. This has enabled me to venture into unknown territories without much
                    thought.
                  </p> */}


                </div>
              </div>
              
              <div className="dividerline">
                <span className="dividerline-left"></span>
                {/* <img src="https://cdn.prod.website-files.com/66c89c41b01a092340805473/66c89c41b01a092340805af7_Star%204.svg" loading="lazy" alt="" className="dividerline-icon" /> */}
                <HiArrowsPointingOut className="w-24 h-24 dividerline-icon" style={{width:"40px"}} />
                <span className="dividerline-right"></span>
              </div>
            </div>
          </Scene>



          <div className="work-thumbs">
            {/* <Scene classToggle="fade-up" reverse={true} offset={-300}>
              <div className="work-thumbs--item fade-effect">
                <div className="hover-effect">
                  <a href="https://resumebuild.com/app/introduction/" target="_blank" rel="noreferrer nofollow">
                    <figure>
                      <picture>
                        <source type="image/webp" srcSet="/images/webp/port-recent-new.webp" />
                        <source type="image/avif" srcSet="/images/avif/port-recent-new.avif" />
                        <source type="image/jpeg" srcSet="/images/port-recent-new.jpg" /> */}
                        {/* <img decoding="async" loading="lazy" src={props.imgJPG} alt="Portfolio" /> */}
                        {/* <Image
                          layout="responsive"
                          loading="lazy"
                          src="/images/port-recent-new.jpg"
                          alt="Portfolio"
                          width="1068"
                          height="600"
                        />
                      </picture>
                      <figcaption className="work-overlay">
                        <div className="work-overlay--content">
                          <h4 className="work-item--text item-title">ResumeBuild.com</h4>
                          <h5 className="work-item--text item-description">
                            ReactJS, Redux, REST API, JSON, HTML5, SCSS/SASS, React-Bootstrap, Git and Azure DevOps.
                          </h5>
                          <button className="work-item--text item-btn" type="button" title="ResumeBuild.com">
                            View Project
                          </button>
                        </div>
                      </figcaption>
                    </figure>
                    <span className="link--icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </Scene> */}
            {/* {Port.map((data) => (<PortCard {...data} key={data.id} />))} */}
            {data?.map((item) => (
              <Scene classToggle="fade-up" reverse={true} offset={-300} key={item.title}>
                <div className="work-thumbs--item fade-effect">
                  <div className="hover-effect">
                    <a href={item.href} target="_blank" rel="noreferrer nofollow">
                      <figure>
                        <picture>
                          <source type="image/webp" srcSet={item.imgWEBP} />
                          <source type="image/avif" srcSet={item.imgAVIF} />
                          <source type="image/jpeg" srcSet={item.imgJPG} />
                          {/* <img decoding="async" loading="lazy" src={props.imgJPG} alt="Portfolio" /> */}
                          <Image
                            layout="responsive"
                            loading="lazy"
                            src={item.imgJPG}
                            alt="Portfolio"
                            width="495"
                            height="495"
                          />
                        </picture>
                        <figcaption className="work-overlay">
                          <div className="work-overlay--content">
                            <h4 className="work-item--text item-title">{item.title}</h4>
                            <h5 className="work-item--text item-description">{item.description}</h5>
                            <button className="work-item--text item-btn" type="button" title={item.btnTitle}>
                              View Project
                            </button>
                          </div>
                        </figcaption>
                      </figure>
                      <span className="link--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path
                            d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                            width="26"
                            height="50"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </Scene>
            ))}
          </div>

          <Scene classToggle="fade-up" reverse={true} offset={-300}>
            <div className="text-center fade-effect">
              {/* <a href="#portfolio" className="btn btn-primary">View all work</a>
                            <div className="btn-group"><a href="" className="btn-pixels">View all work</a></div> */}
              <div className="btn-effect">
                <div className="btn-effect-point">
                  <a href="#portfolio" className="btn-effect-link">
                    <span>View all work</span>
                  </a>
                </div>
              </div>
            </div>
          </Scene>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
