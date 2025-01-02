import { Scene } from "react-scrollmagic-r18";
import { FaReact, FaSass, FaHtml5, FaCss3Alt, FaBootstrap, FaWordpress, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiAzuredevops, SiJquery, SiStyledcomponents } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
// import { VscJson } from "react-icons/Vsc";
import { TbApi, TbBrandNextjs } from "react-icons/tb";
// import { DiJqueryLogo, DiGit, DiPhotoshop } from "react-icons/Di";
const techLogos = [
  {
    name: "HTML5",
    imageUrl: "/images/logos/sass.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-orange-600 icon-html",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    imageUrl: "/images/logos/sass.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-blue-400 icon-css",
    icon: FaCss3Alt,
  },
  {
    name: "React",
    imageUrl: "/images/logos/reactjs.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-sky-400 icon-react",
    icon: FaReact,
  },
  {
    name: "NextJS",
    imageUrl: "/images/logos/nextjs.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-gray-100 icon-nextjs",
    icon: TbBrandNextjs,
  },
  {
    name: "REST API",
    imageUrl: "/images/logos/nextjs.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-gray-100 icon-api",
    icon: TbApi,
  },
  
  {
    name: "WordPress",
    imageUrl: "/images/logos/javascript.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-5 w-5 text-yellow-300 icon-wordpress",
    icon: FaWordpress,
  },
  {
    name: "JavaScript",
    imageUrl: "/images/logos/javascript.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-5 w-5 text-yellow-300 icon-javascript",
    icon: SiJavascript,
  },
  {
    name: "jQuery",
    imageUrl: "/images/logos/javascript.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-5 w-5 text-yellow-300 icon-jquery",
    icon: SiJquery,
  },
  {
    name: "SCSS/SASS",
    imageUrl: "/images/logos/sass.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-pink-500 icon-scss-sass",
    icon: FaSass,
  },
  {
    name: "Styled Components",
    imageUrl: "/images/logos/sass.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-pink-500 icon-styled-components",
    icon: SiStyledcomponents,
  },
  {
    name: "TailwindCSS",
    imageUrl: "/images/logos/tailwind.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-sky-500 icon-tailwindcss",
    icon: SiTailwindcss,
  },
  {
    name: "Bootstrap",
    imageUrl: "/images/logos/bootstrap.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-violet-600 icon-bootstrap",
    icon: FaBootstrap,
  },
  {
    name: "GitHub",
    imageUrl: "/images/logos/github.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-gray-100 icon-github",
    icon: FaGithub,
  },
  {
    name: "Azure DevOps",
    imageUrl: "/images/logos/azure.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-5 w-5 text-blue-500 icon-azure-devops",
    icon: SiAzuredevops,
  },
  {
    name: "Azure Pipelines",
    imageUrl: "/images/logos/azure.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-5 w-5 text-blue-500 icon-azure-devops",
    icon: VscAzure,
  },
];
const Banner = () => {
  return (
    <>
    <section id="home" className="hero--dark">
      <div className="">
        <div className="wrapper">
          
            <div className="hero-banner">
              <div className="hero-banner--title">
                  <h1 className="main-heading">
                    {/* <span className="text-gradient-primary">Building AI-Driven </span> Web Apps for Smart Solutions */}
                    <strong className="gradient-primary">Building AI-Powered  </strong>Web Apps for Cutting-Edge Solutions
                  </h1>
                  {/* <h3>Boost website performance and user experience with AI tools for faster, smarter web solutions.</h3> */}
                  {/* <h3 className="sub-heading">Building cutting-edge AI-driven web applications that enhance performance and solve real-world problems.</h3> */}
                  <h3 className="sub-heading">Building AI-powered web applications that enhance user experience, optimize performance, and solve real-world problems with <span>cutting-edge front-end technologies.</span></h3>
                  {/* <h3 className="sub-heading">Creating AI-powered web apps that improve user experience, optimize performance, and solve real-world problems using advanced front-end technologies.</h3> */}
                  <div className="hero-tech">
                    <ul>
                      {techLogos.map((index) => (
                        <li key={index.name}>
                          <index.icon className={"flex-shrink-0 " + index.brandsColor} aria-hidden="true" />
                          <span className="tech-text">{index.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
              {/* <div className="btn-effect">
                  <div className="btn-effect-point">
                      <button className="btn-effect-link" type="submit"><span>Explore More</span></button>
                  </div>
              </div> */}

              <div className="btn-effect" style={{position:"relative", zIndex:"99"}}>
                <div className="btn-effect-point">
                  <a href="https://www.linkedin.com/in/shahadat-hussain-97256988/" target="_blank" rel="noreferrer noopener" className="btn-effect-link">
                    <span>Know More</span>
                  </a>
                </div>
              </div>

              <div style={{textAlign: "center"}}>
                <a className="scroll-mouse" href="#about" aria-label="UILab.in"><span>Scroll Mouse</span></a>
              </div>
            </div>
        </div>
      </div>
    </section>
    {/* <section id="home" className="hero hero--dark">
      <div className="wrapper">
        <div className="wrapper--push">
          <div className="wrapper--content">
            <span className="tag-line">Hi, my name is</span>
            <h1 className="main-headline">Shahadat Hussain.</h1> */}
            {/* <h1 className="main-headline">What was Impossible Technology makes Possible.</h1> */}
            {/* <h2 className="sub-headline">I&apos;m a front-end developer.</h2>
            <h3 className="hero-content">
              I build interactive website that run across <span>platforms &amp; devices.</span>
            </h3>

            <div className="technologies">
              <ul>
                {techLogos.map((index) => (
                  <li key={index.name}>
                    <index.icon className={"flex-shrink-0 " + index.brandsColor} aria-hidden="true" />
                    <span className="tech-text">{index.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a className="scroll-mouse" href="#about" aria-label="UILab.in">
              <span>Scroll Mouse</span>
            </a>
          </div>
        </div>
      </div>
    </section> */}
    
    </>
  );
};

export default Banner;
