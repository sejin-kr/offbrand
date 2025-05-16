import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// css
import "../App.css";
import "../reset.css";

// gsap
gsap.registerPlugin(ScrollTrigger);

// Bubble Outline
function BubbleOutline() {
  const ref = useRef();

  useEffect(() => {
    const ol1 = document.querySelector(".outline-wrap .outline.ol-01");
    const ol2 = document.querySelector(".outline-wrap .outline.ol-02");

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        endTrigger: ".sec-01",
        end: "top center",
        scrub: 1,
        // snap: 1,
        // markers: true,
      },
    });
    tl1.add("ol");

    tl1.to(
      ol1,
      {
        x: "40%",
        scale: (1.3, 1.3, 1.3),
      },
      "ol"
    );
    tl1.to(
      ol2,
      {
        x: "40%",
        scale: (1.4, 1.4, 1.4),
      },
      "ol"
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec-01",
        start: "top top",
        endTrigger: ".sec-02",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
    });
    tl2.add("ol");

    tl2.to(
      ol1,
      {
        x: "-45%",
        y: "-35%",
        scale: (1.4, 1.4, 1.4),
      },
      "ol"
    );
    tl2.to(
      ol2,
      {
        x: "-45%",
        y: "-35%",
        scale: (1.2, 1.2, 1.2),
      },
      "ol"
    );

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec-03",
        start: "center bottom",
        endTrigger: ".sec-04",
        end: "top bottom",
        scrub: 1,
        // markers: true,
      },
    });
    tl3.add("ol");
    tl3.to(
      ol1,
      {
        x: "0%",
        y: "50%",
        scale: (0, 0, 0),
      },
      "tl3"
    );
    tl3.to(
      ol2,
      {
        x: "0%",
        y: "50%",
        scale: (0, 0, 0),
      },
      "tl3"
    );

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec-04",
        start: "top center",
        endTrigger: ".sec-04",
        end: "center center",
        // markers: true,
        scrub: 1,
      },
    });

    tl4.add("ol");

    tl4.to(
      ol1,
      {
        x: "0%",
        y: "0%",
        scale: (1.3, 1.3, 1.3),
      },
      "ol"
    );
    tl4.to(
      ol2,
      {
        x: "0%",
        y: "0%",
        scale: (1.4, 1.4, 1.4),
      },
      "ol"
    );

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec-05",
        start: "top bottom",
        end: "center bottom",
        scrub: 1,
        // markers: true,
      },
    });

    tl5.add("ol");

    tl5.to(
      ol1,
      {
        x: "-45%",
        y: "-20%",
      },
      "ol"
    );
    tl5.to(
      ol2,
      {
        x: "-45%",
        y: "-20%",
      },
      "ol"
    );

    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "center bottom",
        scrub: 1,
        // markers: true,
      },
    });

    tl6.add("ol");

    tl6.to(
      ol1,
      {
        x: "50%",
        y: "50%",
        scale: (1.1, 1.1, 1.1),
      },
      "ol"
    );
    tl6.to(
      ol2,
      {
        x: "50%",
        y: "50%",
        scale: (1.4, 1.4, 1.4),
      },
      "ol"
    );
  }, []);

  return (
    <>
      <div className="outline-wrap" ref={ref}>
        <div className="outline ol-01">
          <div className="ol"></div>
        </div>
        <div className="outline ol-02">
          <div className="ol"></div>
        </div>
      </div>
    </>
  );
}

export default BubbleOutline;
