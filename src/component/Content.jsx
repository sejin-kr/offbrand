import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";

import "/src/App.css";
import "/src/reset.css";

// gsap
gsap.registerPlugin(ScrollTrigger);

// App
function Content() {
  const ref = useRef();

  // gsap
  useEffect(() => {
    // hero variables
    const splitTextWrap = document.querySelector(".hero .ht01");
    const splitTextWrap2 = document.querySelector(".hero .ht02");
    const splitTextWrap3 = document.querySelector(".hero .ht03");
    const splitText = document.querySelectorAll(".hero .ht01 span");
    const splitText2 = document.querySelectorAll(".hero .ht02 span");
    const splitText3 = document.querySelectorAll(".hero .ht03 span");

    // sec-01 variables
    const splitWord = document.querySelectorAll(".sec-01 .line .word");

    // sec-02 variables
    const gridBox = document.querySelectorAll(".sec-02 .grid-list li.le");

    // sec-03 variables
    const gridText = document.querySelectorAll(
      ".sec-03 .text-content .line .word"
    );
    const gridWrap = document.querySelector(".sec-03 .grid-content");
    const grid1 = document.querySelector(".sec-03 .grid-content .c-01");
    const grid2 = document.querySelector(".sec-03 .grid-content .c-02");
    const grid3 = document.querySelector(".sec-03 .grid-content .c-03");
    const grid4 = document.querySelector(".sec-03 .grid-content .c-04");
    const grid5 = document.querySelector(".sec-03 .grid-content .c-05");
    const grid6 = document.querySelector(".sec-03 .grid-content .c-06");
    const grid7 = document.querySelector(".sec-03 .grid-content .c-07");
    const grid8 = document.querySelector(".sec-03 .grid-content .c-08");

    // sec-04 variables
    const lists = document.querySelectorAll(".sec-04 .list-wrap .list-item");

    // sec-05 variables
    const svg = document.querySelector(".sec-05 .svgIcon");
    const svgText = document.querySelector(".sec-05 .text-wrap .text");
    const svgSection = document.querySelector(".sec-05");
    const w01 = document.querySelectorAll(".sec-05 .line .w-01");
    const w02 = document.querySelectorAll(".sec-05 .line .w-02");

    // footer variables
    const footerLines = document.querySelectorAll(
      "footer .footer-text .line .word"
    );
    const footerLogo = document.querySelector("footer .footer-logo span");

    // * ========================== Hero Text Timeline ============================== * //
    // hero Timeline 1
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "80% top",
        // snap: 1,
        scrub: 1,
        // markers: true,
      },
    });
    heroTl.from(splitText, {
      opacity: 1,
      y: "0%",
    });
    heroTl.from(splitTextWrap, {
      x: "0%",
    });

    heroTl.add("heroLabel");

    heroTl.to(
      splitText,
      {
        opacity: 0,
        y: "100%",
        duration: 10,
        stagger: {
          amount: 10,
          from: "random",
        },
      },
      "heroLabel"
    );
    heroTl.to(
      splitTextWrap,
      {
        x: "-30%",
        duration: 10,
      },
      "heroLabel"
    );

    // hero Timeline 2
    const heroTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "80% top",
        // snap: 1,
        scrub: 1,
        // markers: true,
      },
    });
    heroTl2.from(splitText2, {
      opacity: 1,
      y: "0%",
    });
    heroTl2.to(
      splitText2,
      {
        opacity: 0,
        y: "100%",
        duration: 10,
        stagger: {
          amount: 10,
          from: "random",
        },
      },
      "heroLabel+=0.3"
    );
    heroTl2.to(
      splitTextWrap2,
      {
        x: "-30%",
        duration: 10,
      },
      "heroLabel+=0.3"
    );

    // hero Timeline 3
    const heroTl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "80% top",
        // snap: 1,
        scrub: 1,
        // markers: true,
      },
    });
    heroTl3.from(splitText3, {
      opacity: 1,
      y: "0%",
    });
    heroTl3.to(
      splitText3,
      {
        opacity: 0,
        y: "100%",
        duration: 10,
        stagger: {
          amount: 10,
          from: "random",
        },
      },
      "heroLabel+=0.5"
    );
    heroTl3.to(
      splitTextWrap3,
      {
        x: "-10%",
        duration: 10,
      },
      "heroLabel+=0.5"
    );

    // * ========================== Sec-01 Timeline ============================== * //
    const splitWordTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec-01",
        start: "top center",
        end: "center center",
        scrub: 1,
        // markers: true,
      },
    });
    splitWordTl.from(splitWord, {
      opacity: 0,
      y: "-100%",
    });
    splitWordTl.to(splitWord, {
      opacity: 1,
      y: "0%",
      stagger: {
        amount: 0.5,
        from: "random",
      },
    });

    // * ========================== Sec-02 Timeline ============================== * //
    const gridBoxTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec-02",
        start: "top bottom",
        end: "30% bottom",
        scrub: 1,
        // markers: true,
      },
    });

    gridBoxTl.from(gridBox, {
      y: "40%",
    });

    gridBoxTl.to(gridBox, {
      y: "0%",
    });

    // * ========================== Sec-03 Grid Timeline ============================== * //
    // Grid image Timeline
    const gridCard = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec-03",
        start: "top 70%",
        end: "bottom top",
        scrub: 1,
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    gridCard.add("gridTl");

    gridCard.from(gridWrap, {
      z: "-40000px",
      scale: (1, 1, 1),
    });
    gridCard.from(gridText, {
      opacity: 0,
      y: "-100%",
    });

    gridCard.from(grid1, {
      x: 0,
      y: 0,
      z: "-5582px",
      opacity: 0.5,
      rotateX: -37,
      scale: (1, 1, 1),
    });
    gridCard.from(grid2, {
      x: "-200%",
      y: "-250%",
      z: "-5582px",
      opacity: 0.5,
      rotateX: -37,
      scale: (1, 1, 1),
    });
    gridCard.from(grid3, {
      x: "-100%",
      y: "-180%",
      z: "-5582px",
      opacity: 0.5,
      rotateX: -37,
      scale: (1, 1, 1),
    });
    gridCard.from(grid4, {
      x: "-69%",
      y: "-230%",
      z: "-5582px",
      opacity: 0.5,
      rotateX: -37,
      scale: (1, 1, 1),
    });
    gridCard.from(grid5, {
      x: "-39%",
      y: "-95%",
      z: "-5582px",
      opacity: 0.5,
      rotateX: -37,
      scale: (1, 1, 1),
    });
    gridCard.from(grid5, {
      x: "300%",
      y: "-200%",
      z: "-5582px",
      opacity: 0.5,
      rotateX: -37,
      scale: (1, 1, 1),
    });
    gridCard.from(grid6, {
      x: "300%",
      y: "-420%",
      z: "-100px",
      opacity: 0.5,
      rotateX: -37,
      scale: (1, 1, 1),
    });
    gridCard.from(grid7, {
      x: "10%",
      y: "380%",
      z: "-2000px",
      opacity: 0.5,
      rotateX: -37,
      scale: (1, 1, 1),
    });
    gridCard.from(grid8, {
      x: "300%",
      y: "-200%",
      z: "-5582px",
      opacity: 0.5,
      rotateX: -37,
      scale: (1, 1, 1),
    });

    gridCard.to(
      gridWrap,
      {
        z: "6500px",
        scale: (0.8, 0.8, 0.8),
      },
      "gridTl"
    );
    gridCard.to(
      grid2,
      {
        x: "100%",
        y: "100%",
        opacity: 2,
        rotateX: 0,
        scale: (1.5, 1.5, 1.5),
      },
      "gridTl"
    );
    gridCard.to(
      grid3,
      {
        x: "100%",
        y: "120%",
        z: "-4500px",
        opacity: 2,
        rotateX: 0,
        scale: (1.5, 1.5, 1.5),
      },
      "gridTl"
    );
    gridCard.to(
      grid4,
      {
        x: "380%",
        y: "100%",
        opacity: 2,
        rotateX: 0,
        scale: (1.5, 1.5, 1.5),
      },
      "gridTl"
    );
    gridCard.to(
      grid5,
      {
        x: "500%",
        y: "83%",
        opacity: 2,
        rotateX: 0,
        scale: (1.5, 1.5, 1.5),
      },
      "gridTl"
    );
    gridCard.to(
      grid6,
      {
        x: "140%",
        y: "115%",
        opacity: 2,
        rotateX: 0,
        scale: (1.1, 1.1, 1.1),
      },
      "gridTl"
    );
    gridCard.to(
      grid7,
      {
        x: "10%",
        y: "380%",
        opacity: 2,
        rotateX: 0,
        scale: (1.5, 1.5, 1.5),
      },
      "gridTl"
    );
    gridCard.to(
      grid8,
      {
        x: "1670%",
        y: "0%",
        opacity: 2,
        rotateX: 0,
        scale: (1.5, 1.5, 1.5),
      },
      "gridTl"
    );

    // GridText
    gridCard.to(
      gridText,
      {
        opacity: 1,
        y: "0%",
        duration: 2,
        stagger: {
          amount: 0.7,
        },
      },
      "gridTl+=1"
    );

    // * ========================== Sec-04 Timeline ============================== * //
    const tl3 = gsap.timeline({
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".sec-04",
        start: "top bottom",
        end: "center top",
        // markers: true,
      },
    });
    tl3.from(lists, {
      y: "-100%",
      opacity: 0,
    });
    tl3.to(lists, {
      stagger: 0.1,
      y: "0%",
      opacity: 1,
    });

    // * ========================== SVG Timeline ============================== * //
    // SVG Timeline
    const svgTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec-05",
        start: "top bottom",
        end: "center top",
        scrub: 1,
        // markers: true,
      },
    });

    // svg
    svgTl.from(svg, {
      scale: (0, 0),
      rotate: 0,
    });
    svgTl.from(svgText, {
      x: "50vw",
    });

    svgTl.to(svg, {
      scale: (1, 1),
      rotate: 45,
      duration: 1,
    });

    svgTl.add("orbSpinWithText");

    svgTl.to(
      svg,
      {
        scale: (30, 30),
        rotate: 180,
        duration: 2,
      },
      "orbSpinWithText"
    );
    svgTl.to(
      svgText,
      {
        x: "0vw",
        duration: 1,
      },
      "orbSpinWithText"
    );

    svgTl.add("splitText");

    svgTl.to(
      w01,
      {
        y: "-100%",
        duration: 1,
      },
      "splitText"
    );
    svgTl.to(
      w02,
      {
        y: "100%",
        duration: 1,
      },
      "splitText"
    );

    // * ========================== Footer Timeline ============================== * //

    const footerTl = gsap.timeline({
      ease: "power1.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "center bottom",
        scrub: 1,
        // markers: true,
      },
    });

    footerTl.from(svgSection, {
      scale: (1, 1),
    });
    footerTl.to(svgSection, {
      scale: (0.98, 0.98),
    });

    const footerTl2 = gsap.timeline({
      ease: "power1.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "center top",
        // markers: true,
      },
    });
    footerTl2.from(footerLines, {
      y: "-100%",
      opacity: 0,
    });
    footerTl2.from(footerLogo, {
      y: "100%",
      opacity: 0,
    });

    footerTl2.to(footerLines, {
      stagger: 0.1,
      y: "0%",
      opacity: 1,
    });
    footerTl2.to(footerLogo, {
      y: "0%",
      opacity: 1,
    });
  }, []);

  // split text
  return (
    <div className="content" ref={ref}>
      <header>
        <h1 className="logo">OFF+BRAND.</h1>
      </header>

      <section className="hero">
        <div className="text ht01">
          <h2>
            <span>A</span> <span>D</span>
            <span>I</span>
            <span>F</span>
            <span>F</span>
            <span>E</span>
            <span>R</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
          </h2>
        </div>

        <div className="text ht02">
          <h2>
            <span>C</span>
            <span>R</span>
            <span>E</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
            <span>V</span>
            <span>E</span>
          </h2>
        </div>

        <div className="text ht03">
          <h2>
            <span>A</span>
            <span>P</span>
            <span>P</span>
            <span>R</span>
            <span>O</span>
            <span>A</span>
            <span>C</span>
            <span>H</span>
          </h2>
        </div>
      </section>

      <section className="sec-01">
        <div className="grid-content">
          <div className="grid-title">
            <h2>
              <div className="line">
                <div className="word">
                  <span>W</span>
                  <span>I</span>
                  <span>T</span>
                  <span>H&nbsp;</span>
                </div>
                <div className="word">
                  <span>E</span>
                  <span>M</span>
                  <span>O</span>
                  <span>T</span>
                  <span>I</span>
                  <span>O</span>
                  <span>N&nbsp;</span>
                </div>
                <div className="word">
                  <span>+</span>
                </div>
              </div>
              <div className="line">
                <div className="word">
                  <span>I</span>
                  <span>N</span>
                  <span>N</span>
                  <span>O</span>
                  <span>V</span>
                  <span>A</span>
                  <span>T</span>
                  <span>I</span>
                  <span>O</span>
                  <span>N</span>
                  <span>,&nbsp;</span>
                </div>
                <div className="word">
                  <span>W</span>
                  <span>E&nbsp;</span>
                </div>
                <div className="word">
                  <span>P</span>
                  <span>U</span>
                  <span>S</span>
                  <span>H&nbsp;</span>
                </div>
                <div className="word">
                  <span>T</span>
                  <span>H</span>
                  <span>E</span>
                </div>
              </div>
              <div className="line">
                <div className="word">
                  <span>B</span>
                  <span>O</span>
                  <span>U</span>
                  <span>N</span>
                  <span>D</span>
                  <span>A</span>
                  <span>R</span>
                  <span>I</span>
                  <span>E</span>
                  <span>S&nbsp;</span>
                </div>
                <div className="word">
                  <span>O</span>
                  <span>F&nbsp;</span>
                </div>
                <div className="word">
                  <span>D</span>
                  <span>I</span>
                  <span>G</span>
                  <span>I</span>
                  <span>T</span>
                  <span>A</span>
                  <span>L</span>
                </div>
              </div>
              <div className="line">
                <div className="word">
                  <span>C</span>
                  <span>R</span>
                  <span>E</span>
                  <span>A</span>
                  <span>T</span>
                  <span>I</span>
                  <span>V</span>
                  <span>I</span>
                  <span>T</span>
                  <span>Y</span>
                  <span>.</span>
                </div>
              </div>
            </h2>
          </div>

          <div className="grid-desc">
            <div className="desc desc-01">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button>ABOUT US</button>
            </div>
            <div className="desc desc-02">
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-02">
        <div className="grid-content">
          <div className="grid-title">
            <h2>FEATURE WORK</h2>

            <span>ALL WORK</span>
          </div>

          <ul className="grid-list">
            <li className="le">
              <div className="img-box"></div>
              <span>title01</span>
            </li>
            <li className="ri">
              <div className="img-box"></div>
              <span>title01</span>
            </li>
            <li className="le">
              <div className="img-box"></div>
              <span>title01</span>
            </li>
            <li className="ri">
              <div className="img-box"></div>
              <span>title01</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="sec-03">
        <div className="text-track">
          <div className="text-wrap">
            <div className="text-content">
              <div className="grid">
                <h2>
                  <div className="line">
                    <div className="word">
                      <span>E</span>
                      <span>L</span>
                      <span>E</span>
                      <span>V</span>
                      <span>A</span>
                      <span>T</span>
                      <span>I</span>
                      <span>N</span>
                      <span>G</span>
                    </div>
                  </div>
                  <div className="line">
                    <div className="word">
                      <span>B</span>
                      <span>R</span>
                      <span>A</span>
                      <span>N</span>
                      <span>D</span>
                      <span>S&nbsp;</span>
                    </div>
                    <div className="word">
                      <span>I</span>
                      <span>N</span>
                    </div>
                  </div>
                  <div className="line">
                    <div className="word">
                      <span>U</span>
                      <span>N</span>
                      <span>E</span>
                      <span>X</span>
                      <span>P</span>
                      <span>E</span>
                      <span>C</span>
                      <span>T</span>
                      <span>E</span>
                      <span>D</span>
                    </div>
                  </div>
                  <div className="line">
                    <div className="word">
                      <span>W</span>
                      <span>A</span>
                      <span>Y</span>
                      <span>S</span>
                      <span>.</span>
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-track">
          <div className="grid-wrap">
            <div className="grid-content">
              <div className="card c-01">
                <div className="img-box">
                  <ReactPlayer
                    className="react-player"
                    url={"video/content-video-01.mp4"}
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    playsinline={true}
                    muted={true}
                  />

                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-02">
                <div className="img-box">
                  <ReactPlayer
                    className="react-player"
                    url={"video/content-video-02.mp4"}
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    playsinline={true}
                    muted={true}
                  />

                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-03">
                <div className="img-box">
                  <ReactPlayer
                    className="react-player"
                    url={"video/content-video-03.mp4"}
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    playsinline={true}
                    muted={true}
                  />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-04">
                <div className="img-box">
                  <ReactPlayer
                    className="react-player"
                    url={"video/content-video-04.mp4"}
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    playsinline={true}
                    muted={true}
                  />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-05">
                <div className="img-box">
                  <ReactPlayer
                    className="react-player"
                    url={"video/content-video-05.mp4"}
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    playsinline={true}
                    muted={true}
                  />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-06">
                <div className="img-box">
                  <img src={"images/content-img-01.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-07">
                <div className="img-box">
                  <img src={"images/content-img-02.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-08">
                <div className="img-box">
                  <img src={"images/content-img-03.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-09">
                <div className="img-box">
                  <img src={"images/content-img-04.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-10">
                <div className="img-box">
                  <img src={"images/content-img-05.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-11">
                <div className="img-box">
                  <img src={"images/content-img-06.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-12">
                <div className="img-box">
                  <img src={"images/content-img-07.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-13">
                <div className="img-box">
                  <img src={"images/content-img-08.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-14">
                <div className="img-box">
                  <img src={"images/content-img-09.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-15">
                <div className="img-box">
                  <img src={"images/content-img-10.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-16">
                <div className="img-box">
                  <img src={"images/content-img-11.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-17">
                <div className="img-box">
                  <img src={"images/content-img-12.jpg"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>
              <div className="card c-18">
                <div className="img-box">
                  <img src={"images/content-img-13.png"} alt="" />
                  <div className="filter"></div>
                </div>
              </div>

              <div className="card c-19">
                <div className="text-box">ART DIRECTION</div>
              </div>
              <div className="card c-20">
                <div className="text-box">WEB DEVELOPMENT</div>
              </div>
              <div className="card c-21">
                <div className="text-box">WEBGL / VR</div>
              </div>
              <div className="card c-22">
                <div className="text-box">WEB</div>
              </div>
              <div className="card c-22">
                <div className="text-box">
                  BRAND <br /> IDENTITY
                </div>
              </div>
              <div className="card c-23">
                <div className="text-box">BRAND STRATEGY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-04">
        <div className="grid-content">
          <h3>
            RECOGNITIONS <br /> + AWARDS
          </h3>

          <ul className="list-wrap">
            <li className="list-item">
              <p className="num">01</p>
              <p>AWWARDS</p>
              <ul>
                <li>SITE OF THE DAY</li>
                <li>DEVELOPER AWARD</li>
                <li>HONORS</li>
              </ul>
            </li>
            <li className="list-item">
              <p className="num">02</p>
              <p>AWWARDS</p>
              <ul>
                <li>SITE OF THE YEAR</li>
              </ul>
            </li>
            <li className="list-item">
              <p className="num">03</p>
              <p>AWWARDS</p>
              <ul>
                <li>SITE OF THE DAY</li>
              </ul>
            </li>
            <li className="list-item">
              <p className="num">04</p>
              <p>AWWARDS</p>
              <ul>
                <li>SITE OF THE DAY</li>
                <li>SITE OF THE MONTH</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="sec-05">
        <div className="overlay">
          <div className="text-wrap">
            <div className="text">
              <h2>
                <div className="line">
                  <p className="word w-01">WHERE&nbsp;</p>
                  <p className="word w-02">DIFFERENT&nbsp;</p>
                  <p className="word w-01">IS&nbsp;</p>
                  <p className="word w-02">THE&nbsp;</p>
                  <p className="word w-01">STANDARD.&nbsp;</p>
                  <p className="word w-02">CHOOSE&nbsp;</p>
                  <p className="word w-01">OFF+BRAND.</p>
                </div>
              </h2>
            </div>
          </div>

          <div className="svg-wrap">
            <div className="svgIcon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162">
                <path
                  className="hsc-img-path"
                  d="M108 88.7c-10.8 0-19.7 8.8-19.7 19.7v47.4c0 1.9-1.5 3.4-3.4 3.4h-8.6c-1.9 0-3.4-1.5-3.4-3.4v-47.4c0-10.8-8.8-19.7-19.7-19.7H6.4c-1.9 0-3.4-1.5-3.4-3.4v-8c0-1.9 1.5-3.4 3.4-3.4h46.9c10.8 0 19.7-8.8 19.6-19.7V6.4c0-1.9 1.5-3.4 3.4-3.4H85c1.9 0 3.4 1.5 3.4 3.4v47.8c0 10.8 8.8 19.7 19.7 19.7h46.6c1.9 0 3.4 1.5 3.4 3.4v8c0 1.9-1.5 3.4-3.4 3.4H108z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="gradient-bg"></div>
        </div>
      </section>

      <footer>
        <div className="grid-content">
          <div className="footer-text">
            <h2>
              <div className="line">
                <div className="word">
                  <span>H</span>
                  <span>O</span>
                  <span>W&nbsp;</span>
                </div>
                <div className="word">
                  <span>A</span>
                  <span>B</span>
                  <span>O</span>
                  <span>U</span>
                  <span>T&nbsp;</span>
                </div>
              </div>
              <div className="line">
                <div className="word">
                  <span>W</span>
                  <span>E&nbsp;</span>
                </div>
                <div className="word">
                  <span>D</span>
                  <span>O&nbsp;</span>
                </div>
                <div className="word">
                  <span>A&nbsp;</span>
                </div>
                <div className="word">
                  <span>T</span>
                  <span>H</span>
                  <span>I</span>
                  <span>N</span>
                  <span>G</span>
                </div>
              </div>

              <div className="line">
                <div className="word">
                  <span>O</span>
                  <span>R&nbsp;</span>
                </div>
                <div className="word">
                  <span>T</span>
                  <span>W</span>
                  <span>O</span>
                  <span>,</span>
                </div>
              </div>

              <div className="line">
                <div className="word">
                  <span>T</span>
                  <span>O</span>
                  <span>+</span>
                  <span>G</span>
                  <span>E</span>
                  <span>T</span>
                  <span>H</span>
                  <span>E</span>
                  <span>R</span>
                </div>
              </div>
            </h2>
          </div>
          <div className="footer-logo">
            <span>OFF+BRAND.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Content;
