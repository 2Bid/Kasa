import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './page/home/Home'
import About from './page/about/About'
import E404 from "./page/404/404";
import Detail from "./page/detail/Detail";
import Layout from "./components/Layout";

export default function App() {
  return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/about"  element={<About />}/>
            <Route path="/detail"  element={<Detail />}/>
            <Route path="/detail/:id"  element={<Detail />}/>
            <Route index element={<Home/>}/>
            <Route path="/Kasa/" element={<Home/>}/>
            <Route path="*" element={<E404/>}/>
          </Route>
        </Routes>
  );
}