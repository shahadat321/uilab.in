import { Controller } from "react-scrollmagic-r18";
import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/header';
import Banner from '../components/banner';
import About from '../components/about';
import Portfolio from '../components/Portfolio';
import Experience from '../components/experience';
import Contact from '../components/contact';


const Home: NextPage = () => {
  return (
    <div className="app">

      <Head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Shahadat Hussain || Front-end Developer From New Delhi India.</title>
        <meta name="theme-color" content="#0a192f" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Shahadat Hussain - Front-end Developer From New Delhi India." />

        <meta name="description" content="I have diverse experience as I have worked with agencies and brands dealing in different industries. This includes Enterprise software companies, eCommerce, Media houses, Branding and Advertising agencies. Each has its own set of challenges and learnings. This has enabled me to venture into unknown territories without much thought."/>
        <meta name="author" content="Shahadat Hussain" />
        <meta name="copyright" content="uilab" />
        <link rel="canonical" href="https://uilab.in/" />

        {/* <!-- OG Tag --> */}
        <meta property="og:title" content="Shahadat Hussain - Front-end Developer From New Delhi India." />
        <meta property="og:site_name" content="uilab" />
        <meta property="og:url" content="https://uilab.in/" />
        <meta property="og:description" content="I'm a front-end web developer who aims to combine the beauty of design with the latest technology." />
        <meta property="og:type" content="portfolio" />
        <meta property="og:image" content="https://uilab.in/images/og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

        {/* <!-- Twitter card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shahadat15" />
        <meta name="twitter:title" content="Shahadat Hussain - Front-end Developer From New Delhi India." />
        <meta name="twitter:description" content="I'm a front-end web developer who aims to combine the beauty of design with the latest technology." />
        <meta name="twitter:image" content="https://uilab.in/images/og.jpg" />

        <link rel="icon" href="https://uilab.in/images/favicon.ico" />
        <link rel="apple-touch-icon" href="https://uilab.in/images/logo192.png" />

      </Head>
      <Controller>
        
        <main>
          <Header />
          <Banner />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
        </main>

      </Controller>
    </div>
  )
}

export default Home
