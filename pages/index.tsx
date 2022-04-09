import type { NextPage } from 'next'

import { Controller } from "react-scrollmagic-r18";

import Header from '../components/header';
import Banner from '../components/banner';
import About from '../components/about';
import Portfolio from '../components/Portfolio';
import Experience from '../components/experience';
import Contact from '../components/contact';


const Home: NextPage = () => {
  return (
    <div className="app">
      <Controller>
        <Header />
        <Banner />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </Controller>
    </div>
  )
}

export default Home
