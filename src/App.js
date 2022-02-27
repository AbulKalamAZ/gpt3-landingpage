import React from 'react';
import './App.css';
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Footer, Header, Possibility, WhatGPT3 } from './containers';





function App() {
  return (
    <div className="app">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Article />
        <Feature />
        <Possibility />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App