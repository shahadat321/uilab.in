// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const data = [
  {
    title: "ResumeBuild.com",
    description: "ReactJS, Redux, REST API, JSON, HTML5, SCSS/SASS, React-Bootstrap, Git and Azure DevOps.",
    href: "https://resumebuild.com/app/introduction",
    imgJPG: "/images/port-resume.jpg",
    imgWEBP: "/images/webp/port-resume.webp",
    imgAVIF: "/images/avif/port-resume.avif",
    btnTitle: "ResumeBuild.com",
  },
  {
    title: "Quint Digital Media Limited",
    description: "ReactJS, Grids susy grids, HTML5, SCSS/SASS, JSON, JavaScript, CSS Animations Git and GitHub. test",
    href: "https://www.thequint.com/",
    imgJPG: "/images/port-2.jpg",
    imgWEBP: "/images/webp/port-2.webp",
    imgAVIF: "/images/avif/port-2.avif",
    btnTitle: "TheQuint.com",
  },
  {
    title: "UILab.in",
    description: "ReactJS, NextJS, JSON, TailwindCSS, HTML5, JavaScript, CSS Animations and GitHub.",
    href: "https://www.uilab.in/",
    imgJPG: "/images/port-13.jpg",
    imgWEBP: "/images/webp/port-13.webp",
    imgAVIF: "/images/avif/port-13.avif",
    btnTitle: "UILab.in",
  },
  {
    title: "Chat App for Fun - The Quint",
    description: "HTML5, CSS3, BEM, JavaScript, jQuery, JSON, CSS Animations, Git and GitHub.",
    href: "https://www.thequint.com/the-quint-lab/mahatma-gandhi-jayanti-celebrations-2nd-october-chat-app",
    imgJPG: "/images/port-chat.jpg",
    imgWEBP: "/images/webp/port-chat.webp",
    imgAVIF: "/images/avif/port-chat.avif",
    btnTitle: "TheQuint.com",
  },
  {
    title: "PDFSimpli.com",
    description:
      "Created component-based layout, ASP.NET MVC framework, Bootstrap, CSS pre-processor SCSS/SASS and Azure.",
    href: "https://pdfsimpli.com/",
    imgJPG: "/images/port-pdf.jpg",
    imgWEBP: "/images/webp/port-pdf.webp",
    imgAVIF: "/images/avif/port-pdf.avif",
    btnTitle: "PDFSimpli.com",
  },
  {
    title: "SignSimpli.com",
    description:
      "Created component-based layout, ASP.NET MVC framework, Bootstrap, CSS pre-processor SCSS/SASS and Azure.",
    href: "https://signsimpli.com/",
    imgJPG: "/images/port-12.jpg",
    imgWEBP: "/images/webp/port-12.webp",
    imgAVIF: "/images/avif/port-12.avif",
    btnTitle: "SignSimpli.com",
  },
  {
    title: "Care4Life",
    description:
      "Developed mobile-first responsive code with latest technology HTML5, CSS3, Bootstrap, JavaScript and Slick Slider.",
    href: "https://care4life.com/",
    imgJPG: "/images/port-3.jpg",
    imgWEBP: "/images/webp/port-3.webp",
    imgAVIF: "/images/avif/port-3.avif",
    btnTitle: "Care4Life.com",
  },
  {
    title: "Text4Baby.org",
    description:
      "Developed mobile-first responsive code with latest technology HTML5, CSS3, Bootstrap, JavaScript and Slick Slider.",
    href: "https://text4baby.org/",
    imgJPG: "/images/port-4.jpg",
    imgWEBP: "/images/webp/port-4.webp",
    imgAVIF: "/images/avif/port-4.avif",
    btnTitle: "Text4Baby.org",
  },
  {
    title: "Beyond the Orphanage",
    description:
      "Developed mobile-first responsive code with latest technology HTML5, CSS3, Bootstrap, JavaScript and Swiper Slider.",
    href: "https://beyondtheorphanage.org/",
    imgJPG: "/images/port-11.jpg",
    imgWEBP: "/images/webp/port-11.webp",
    imgAVIF: "/images/avif/port-11.avif",
    btnTitle: "BeyondTheOrphanage.org",
  },
  {
    title: "Buri Ladki - The Quint",
    description: "Who is a 'Buri Ladki'? You decide. Developed interactive game with full screen slider.",
    href: "https://www.thequint.com/quintlab/buri-ladki-game/",
    imgJPG: "/images/port-5.jpg",
    imgWEBP: "/images/webp/port-5.webp",
    imgAVIF: "/images/avif/port-5.avif",
    btnTitle: "BuriLadkiGame",
  },
  {
    title: "Braahmam Net Solutions Pvt Ltd",
    description: "Converted PSD to WordPress, theme customization, manage widget and plugins.",
    href: "https://braahmam.net/",
    imgJPG: "/images/port-6.jpg",
    imgWEBP: "/images/webp/port-6.webp",
    imgAVIF: "/images/avif/port-6.avif",
    btnTitle: "braahmam.net",
  },
  {
    title: "Motorola Company Partner - The Quint",
    description: "Developed a full screen parallax microsite for Phone-Life Balance.",
    href: "https://www.thequint.com/quintlab/phone-life-balance/",
    imgJPG: "/images/port-8.jpg",
    imgWEBP: "/images/webp/port-8.webp",
    imgAVIF: "/images/avif/port-8.avif",
    btnTitle: "PhoneLifeBalance",
  },
  {
    title: "Concept of Consent - The Quint",
    description: "Custom Animated slider with transition effect quiz.",
    href: "https://www.thequint.com/quintlab/concept-of-consent/",
    imgJPG: "/images/port-9.jpg",
    imgWEBP: "/images/webp/port-9.webp",
    imgAVIF: "/images/avif/port-9.avif",
    btnTitle: "Concept Of Concent",
  },
  {
    title: "WebCircle.com.au",
    description:
      "Developed mobile-first responsive code with latest technology HTML5, CSS3, Bootstrap, JavaScript and Slider.",
    href: "https://webcircle.com.au/",
    imgJPG: "/images/port-10.jpg",
    imgWEBP: "/images/webp/port-10.webp",
    imgAVIF: "/images/avif/port-10.avif",
    btnTitle: "WebCircle.com.au",
  },
  {
    title: "Sandesh to a Soldier - The Quint",
    description: "Developed a full screen parallax microsite to send a message to the Soldier.",
    href: "https://www.thequint.com/quintlab/sandesh-to-a-soldier/",
    imgJPG: "/images/port-7.jpg",
    imgWEBP: "/images/webp/port-7.webp",
    imgAVIF: "/images/avif/port-7.avif",
    btnTitle: "Sandesh to a Soldier",
  },
  {
    title: "Jal Mahotsav - The Quint",
    description: "Developed a full screen parallax microsite for Jal Mahotsav is the ultimate watercation.",
    href: "https://www.thequint.com/quintlab/jal-mahotsav/",
    imgJPG: "/images/port-jal-mahotsav.jpg",
    imgWEBP: "/images/webp/port-jal-mahotsav.webp",
    imgAVIF: "/images/avif/pport-jal-mahotsav.avif",
    btnTitle: "PhoneLifeBalance",
  },
  {
    title: "About 2.0 Movie - AMP Story",
    description: "Develop component-based layout,  Card based layout, Accelerated Mobile Pages (AMP).",
    href: "https://www.thequint.com/quintlab/ampstories/2-point-0-movie-interesting-facts/",
    imgJPG: "/images/port-amp-1.jpg",
    imgWEBP: "/images/webp/port-amp-1.webp",
    imgAVIF: "/images/avif/port-amp-1.avif",
    btnTitle: "About 2.0 Movie - AMP Story",
  },
  {
    title: "Sanjay Dutt Life - AMP Story",
    description: "Develop component-based layout,  Card based layout, Accelerated Mobile Pages (AMP).",
    href: "https://www.thequint.com/quintlab/what-sanju-missed-about-sanjay-dutts-life/",
    imgJPG: "/images/port-amp-2.jpg",
    imgWEBP: "/images/webp/port-amp-2.webp",
    imgAVIF: "/images/avif/port-amp-2.avif",
    btnTitle: "Sanjay Dutt Life - AMP Story",
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
