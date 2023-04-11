import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/heroSection/Hero';
import About from '../components/AboutWeb/About';
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {navigateToDashboard} from "../utils/routing";

const HomePage = () => {
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    useEffect(() => {
        navigateToDashboard(navigate, cookies)
        document.querySelector("html").classList.remove("overflow-hidden");
  }, []);
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
    </>
  )
}

export default HomePage
