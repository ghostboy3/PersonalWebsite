import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import Intro from './components/Intro';
import About from './components/About'
import Arrays from './components/tutorials/Arrays'
import Arraylist from './components/tutorials/Arraylist'
import Oop from './components/tutorials/Oop';
import Search from './components/tutorials/Search';
import Sort from './components/tutorials/Sort';
import Skills from './components/Skills'
import Recursion from './components/tutorials/Recursion';
import Portfolio from './components/Portfolio';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <>
      <BrowserRouter>

        <MyNavbar />
        <ScrollToTop/>
        <Routes>
          <Route path="" element={<Intro />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="arrays" element={<Arrays />} />
          <Route path="arraylist" element={<Arraylist />} />
          <Route path="oop" element={<Oop />} />
          <Route path="search" element={<Search />} />
          <Route path="sort" element={<Sort />} />
          <Route path="recursion" element={<Recursion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
 