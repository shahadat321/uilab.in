import { Scene } from "react-scrollmagic-r18";
import { FaReact, FaSass, FaHtml5, FaCss3Alt, FaBootstrap, FaWordpress, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiAzuredevops, SiJquery } from "react-icons/si";
// import { VscJson } from "react-icons/Vsc";
import { TbApi, TbBrandNextjs } from "react-icons/tb";
// import { DiJqueryLogo, DiGit, DiPhotoshop } from "react-icons/Di";
const techLogos = [
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
    name: "JavaScript",
    imageUrl: "/images/logos/javascript.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-5 w-5 text-yellow-300 icon-javascript",
    icon: SiJavascript,
  },

  {
    name: "SCSS/SASS",
    imageUrl: "/images/logos/sass.svg",
    iconWidth: "h-6 w-6",
    brandsColor: "h-6 w-6 text-pink-500 icon-scss-sass",
    icon: FaSass,
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
];
const Banner = () => {
  return (
    <section id="home" className="hero hero--dark">
      <div className="wrapper">
        <div className="wrapper--push">
          <div className="wrapper--content">
            <span className="tag-line">Hi, my name is</span>
            <h1 className="main-headline">Shahadat Hussain.</h1>
            {/* <h1 className="main-headline">What was Impossible Technology makes Possible.</h1> */}
            <h2 className="sub-headline">I&apos;m a front-end developer.</h2>
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
    </section>
  );
};

export default Banner;
