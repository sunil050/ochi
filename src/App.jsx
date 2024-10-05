import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");
    
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.addEventListener("refresh", () => {
      setTimeout(() => scroll.update(), 100);
    });
    
    ScrollTrigger.refresh();

    return () => {
      scroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => scroll.update());
    };
  }, []);

  return (
    <div data-scroll-container data-scroll className=" bg-zinc-900 text-white m-0 overflow-hidden">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;



