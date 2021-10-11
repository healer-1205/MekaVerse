import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slide.css";
import Meka_01 from "../../../assets/images/meka_01.jpg";
import Meka_02 from "../../../assets/images/meka_02.jpg";
import Meka_03 from "../../../assets/images/meka_03.jpg";
import Meka_04 from "../../../assets/images/meka_04.jpg";
import Meka_05 from "../../../assets/images/meka_05.jpg";
import Meka_06 from "../../../assets/images/meka_06.jpg";
import Meka_07 from "../../../assets/images/meka_07.jpg";
import Meka_08 from "../../../assets/images/meka_08.jpg";
import Meka_09 from "../../../assets/images/meka_09.jpg";

export const Slide = ({ ...rest }) => {
  const {
    active,
  } = rest;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return (
      <button
        className={active ? "active slideDot" : "inactive slideDot"}
        onClick={() => onClick()}
      >
      </button>
    );
  };

  return (
    <section id="gallery" className="sr-top-more-delayed">
      <Carousel
        showDots
        customDot={<CustomDot />}
        responsive={responsive}
        arrows={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <div className={active ? "large" : ""}><img src={Meka_01} alt="meka_01" /></div>
        <div className={active ? "large" : ""}><img src={Meka_02} alt="meka_02" /></div>
        <div className={active ? "large" : ""}><img src={Meka_03} alt="meka_03" /></div>
        <div className={active ? "large" : ""}><img src={Meka_04} alt="meka_04" /></div>
        <div className={active ? "large" : ""}><img src={Meka_05} alt="meka_05" /></div>
        <div className={active ? "large" : ""}><img src={Meka_06} alt="meka_06" /></div>
        <div className={active ? "large" : ""}><img src={Meka_07} alt="meka_07" /></div>
        <div className={active ? "large" : ""}><img src={Meka_08} alt="meka_08" /></div>
        <div className={active ? "large" : ""}><img src={Meka_09} alt="meka_09" /></div>
      </Carousel>
    </section>
  );
}