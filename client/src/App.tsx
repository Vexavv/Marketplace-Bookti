import React from "react";
import {Routes, Route,} from "react-router-dom";
import './App.css'

import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import Blog from "./pages/Blog/Blog";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {


  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Route>
        </Routes>

    </div>
  )
}

export default App
