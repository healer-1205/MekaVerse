import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./team.css";
import Mattey from "../../../assets/images/mattey.jpg";
import Mattey_work_01 from "../../../assets/images/mattey_work_01.jpg";
import Mattey_work_02 from "../../../assets/images/mattey_work_02.jpg";
import Mattey_work_03 from "../../../assets/images/mattey_work_03.jpg";
import Mattey_work_04 from "../../../assets/images/mattey_work_04.jpg";
import Bracco from "../../../assets/images/bracco.jpg";
import Bracco_work_01 from "../../../assets/images/bracco_work_01.jpg";
import Bracco_work_02 from "../../../assets/images/bracco_work_02.jpg";
import Bracco_work_03 from "../../../assets/images/bracco_work_03.jpg";
import Bracco_work_04 from "../../../assets/images/bracco_work_04.jpg";

export const Team = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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
      // onMove,
      // index,
      active
      // carouselState: { currentSlide, deviceType }
    } = rest;
    return (
      <button
        className={active ? "active slideDot" : "inactive slideDot"}
        onClick={() => onClick()}
      >
      </button>
    );
  };

  // const MyDot = ({...rest}) => {
  //   function onClick(){return goToSlide(nextSlide)}
  // }

  return (
    <section id="team" className="container">
      <div className="intro_team d-flex">
        <div className="title">
          <div className="question">Who are we?</div>
          <div className="answer degrade">Creative teams</div>
        </div>
        <div className="presentation">
          <p>
            Hi! Mattey & Matt. B are two friends currently focusing on 3D & Art direction. We have been working hard to establish our own style, and we're continuously looking for new ways to push ourselves. We also worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more!
          </p>
        </div>
      </div>

      <div className="member d-flex">
        <div className="who column">
          <div className="top d-flex">
            <h2>Mattey</h2>
            <div className="social d-flex">
              <div className="link">
                <a href="https://twitter.com/Matteyy_" name="twitter-matteyy_" rel="noopener" target="_blank" className="network twitter d-flex"></a>
              </div>
              <div className="link">
                <a href="https://www.instagram.com/matteyyy_/?hl=fr" name="instagram-matteyy_" rel="noopener" target="_blank" className="network instagram d-flex"></a>
              </div>
            </div>
          </div>
          <img src={Mattey} alt="Mattey" />
        </div>
        <div className="spacer sr-opacity-delayed"></div>
        <div className="works column sr-right-fast-delayed">
          <div className="top d-flex">
            <h4>NFTs Artworks</h4>
            <CustomDot />
          </div>
          <section className="carousel examples" label="Gallery">
            <Carousel
              showDots
              customDot={<CustomDot />}
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay={false}
              slidesToSlide={2}
            >
              <div><img src={Mattey_work_01} alt="meka_01" /></div>
              <div><img src={Mattey_work_02} alt="meka_02" /></div>
              <div><img src={Mattey_work_03} alt="meka_03" /></div>
              <div><img src={Mattey_work_04} alt="meka_04" /></div>
            </Carousel>
          </section>
        </div>
      </div>

      <div className="member d-flex" style={{marginTop: "100px"}}>
        <div className="who column">
          <div className="top d-flex">
            <h2>Matt.B</h2>
            <div className="social d-flex">
              <div className="link">
                <a href="https://twitter.com/Matteyy_" name="twitter-matteyy_" rel="noopener" target="_blank" className="network twitter d-flex"></a>
              </div>
              <div className="link">
                <a href="https://www.instagram.com/matteyyy_/?hl=fr" name="instagram-matteyy_" rel="noopener" target="_blank" className="network instagram d-flex"></a>
              </div>
            </div>
          </div>
          <img src={Bracco} alt="Mattey" />
        </div>
        <div className="spacer sr-opacity-delayed"></div>
        <div className="works column sr-right-fast-delayed">
          <div className="top d-flex">
            <h4>NFTs Artworks</h4>
          </div>
          <section className="carousel examples" label="Gallery">
            <Carousel
              showDots
              customDot={<CustomDot />}
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay={false}
              slidesToSlide={2}
            >
              <div><img src={Bracco_work_01} alt="meka_01" /></div>
              <div><img src={Bracco_work_02} alt="meka_02" /></div>
              <div><img src={Bracco_work_03} alt="meka_03" /></div>
              <div><img src={Bracco_work_04} alt="meka_04" /></div>
            </Carousel>
          </section>
        </div>
      </div>
    </section>
  );
};