import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './page/Home'
import About from './page/About'
import E404 from "./page/404";
import Detail from "./page/Detail";

// import Header from './components/header/Header'

export default function App() {
  return (
        <Routes>
          <Route path="/about"  element={<About />}/>
          <Route path="/detail"  element={<Detail />}/>
          <Route path="/detail/*"  element={<Detail />}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/*" element={<E404/>}/>
        </Routes>
  );
}