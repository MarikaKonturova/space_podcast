import React from 'react';
import logo from './logo.svg';
import './styles/css/styles.css';
import {Header} from "./components/header"
import { Intro } from './components/intro';
import { Plans } from './components/plans';
import { Singers } from './components/singers';
import { Others } from './components/others';
import { Devices } from './components/devices';
import { Footer } from './components/footer';
import ScrollReveal from './containers/ScrollReveal'

//rafc
function App() {
  return (
    <div className="app">
     <Header/>
     <ScrollReveal>
     <Intro/>
     </ScrollReveal>
     <ScrollReveal>
     <Plans/>
     </ScrollReveal>
     <Singers/>
     <Others/>
     <ScrollReveal>
     <Devices/>
     </ScrollReveal>
     <Footer/>
    </div>
  );
}

export default App;
