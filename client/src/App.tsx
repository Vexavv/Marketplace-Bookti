import React from "react";
import {Routes, Route,} from "react-router-dom";
import  './App.css'

import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import Blog from "./pages/Blog/Blog";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import LogIn from "./pages/LogIn/LogIn";
import Registration from "./pages/Registration/Registration";
import MyAccount from "./pages/MyAccount/MyAccount";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/terms" element={<TermsAndConditions/>}/>
                <Route path="/privacy" element={<PrivacyPolicy/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/account" element={<MyAccount/>}/>
                <Route path="*" element={<PageNotFound/>}/>

            </Route>
        </Routes>

<Modal/>
    </div>
  )
}

export default App
