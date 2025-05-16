import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "/src/App.css";
import "/src/reset.css";

// gsap
gsap.registerPlugin(ScrollTrigger);

// Cursor
function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    gsap.to(".cursor", {
      x: position.x,
      y: position.y,
      ease: "power2.out",
      duration: 0.3,
    });
  }, [position]);

  return (
    <div className="cursor-wrap">
      <div className="cursor"></div>
    </div>
  );
}

export default Cursor;
