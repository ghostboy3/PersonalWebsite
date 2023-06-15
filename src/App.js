import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Bibliography from './components/tutorials/Bibliography';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{document.title = "Charlie To"}, [])
  return (
    <>
      <BrowserRouter>

        <MyNavbar />
        <ScrollToTop/>
        <Routes>
          <Route path="PersonalWebsite" element={<Intro />} />
          <Route path="PersonalWebsite/about" element={<About />} />
          <Route path="PersonalWebsite/skills" element={<Skills />} />
          <Route path="PersonalWebsite/portfolio" element={<Portfolio />} />
          <Route path="PersonalWebsite/arrays" element={<Arrays />} />
          <Route path="PersonalWebsite/arraylist" element={<Arraylist />} />
          <Route path="PersonalWebsite/oop" element={<Oop />} />
          <Route path="PersonalWebsite/search" element={<Search />} />
          <Route path="PersonalWebsite/sort" element={<Sort />} />
          <Route path="PersonalWebsite/recursion" element={<Recursion />} />
          <Route path="PersonalWebsite/bibliography" element={<Bibliography />} />
          <Route path= "" element={ <Navigate to="/PersonalWebsite" />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
 