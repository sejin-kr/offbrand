import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import "./reset.css";
import Bubble from "./component/Bubble";
import Content from "./component/Content";
import Cursor from "./component/Cursor";
import BubbleOutline from "./component/BubbleOutline";

import "/src/App.css";
import "/src/reset.css";

// App
function App() {
  const [main, setMain] = useState();
  const ref = useRef();

  useEffect(() => {
    setMain(ref.current);
  }, [main]);

  // 캔버스 스타일 설정
  const canvasStyle = (React.CSSProperties = {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "0",
    background: "transparent",
  });

  return (
    <>
      <Cursor />
      <BubbleOutline />
      <Content />
      <Canvas
        // colorManagement
        camera={{ position: [0, 0, 3] }}
        gl={{
          powerPreference: "high-performance",
          alpha: true,
          antialias: false,
          stencil: false,
          depth: false,
        }}
        style={canvasStyle}
      >
        <Bubble mainRef={main} />
      </Canvas>{" "}
      {/* 캔버스 */}
    </>
  );
}
export default App;
