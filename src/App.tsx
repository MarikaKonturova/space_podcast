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


//rafc
function App() {
  return (
    <div className="app">
     <Header/>
     <Intro/>
     <Plans/>
     <Singers/>
     <Others/>
     <Devices/>
     <Footer/>
    </div>
  );
}

export default App;
