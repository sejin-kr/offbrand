import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

import { EffectComposer, Vignette } from '@react-three/postprocessing';
import { Icosahedron, MeshDistortMaterial, GradientTexture } from '@react-three/drei';

import { Fluid } from '@whatisjery/react-fluid-distortion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useControls } from "leva";

// css
import '/src/App.css';
import '/src/reset.css';

// gsap
gsap.registerPlugin(ScrollTrigger);

// Sphere
function MainSphere({ material, anim }) {
  const main = useRef();

  // main sphere rotates following the mouse position
  useFrame(({ clock, mouse }) => {
    main.current.rotation.z = clock.getElapsedTime();
    main.current.rotation.y = THREE.MathUtils.lerp(
      main.current.rotation.y,
      mouse.x * (Math.PI / 2),
      0.022
    );
    main.current.rotation.x = THREE.MathUtils.lerp(
      main.current.rotation.x,
      mouse.y * (Math.PI / 2),
      0.022
    );

    // gsap
    main.current.position.x = -1 * anim.x;
    main.current.position.y = -1 * anim.y;
    main.current.scale.set(anim.scale * 1, anim.scale * 1, anim.scale * 1);
  });

  return <Icosahedron args={[1, 20]} ref={main} material={material} position={[0, 0, 0]} />;
}

// Scene
function Scene({ anim }) {
  const [material, setMaterial] = useState();

  // lava controller
  // const {
  //   emissive,
  //   emissiveIntensity,
  //   color,
  //   clearcoat,
  //   clearcoatRoughness,
  //   radius,
  //   distort,
  //   wireframe,
  // } = useControls({
  //   emissive: "#ffffff",
  //   emissiveIntensity: { value: 0.03, min: 0, max: 1, step: 0.01 },
  //   color: "#819fd1", // default: 7aaaff
  //   clearcoat: { value: 0.35, min: 0, max: 1, step: 0.01 },
  //   clearcoatRoughness: { value: 0.52, min: 0, max: 1, step: 0.01 },
  //   radius: { value: 1.3, min: 0, max: 2, step: 0.01 },
  //   distort: { value: 0.42, min: 0, max: 1.5, step: 0.01 },
  //   wireframe: false,
  // });
  return (
    <>
      {/* <MeshDistortMaterial
        ref={setMaterial}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        color={color}
        depthTest={true} // 렌더링 시에 depth buffer 사용하여 검사 여부
        clearcoat={clearcoat} // 코팅 0~1
        clearcoatRoughness={clearcoatRoughness} // 코팅 거칠기 value range:  0~1
        radius={radius}
        distort={distort}
        wireframe={wireframe}
      > */}
      <MeshDistortMaterial
        ref={setMaterial}
        emissive={'#ffffff'}
        emissiveIntensity={0.02}
        color={'#ffffff'}
        depthTest={true} // 렌더링 시에 depth buffer 사용하여 검사 여부
        clearcoat={0.3} // 코팅 0~1
        clearcoatRoughness={0.52} // 코팅 거칠기 value range:  0~1
        radius={1.3}
        distort={0.42}
        wireframe={false}>
        <GradientTexture
          stops={[0, 0.5, 1]} // 필요한 만큼의 stop
          colors={['#FF7DA0', '#FE9567', '#F286AA', '#F1E99B', '#5FB6D5']} // 색상은 stop의 수와 일치
          size={1024} // optional, default value: 1024
        />
      </MeshDistortMaterial>
      {material && <MainSphere material={material} anim={anim} />}
    </>
  );
}

// Bubble
function Bubble() {
  let animable = {
    x: 0,
    y: 0,
    scale: 1,
  };

  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        endTrigger: '.sec-01',
        end: 'top center',
        scrub: 1,
        // markers: true,
      },
    });
    tl1.to(animable, {
      x: -1.5,
      scale: (1.5, 1.5, 1.5),
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.sec-01',
        start: 'top top',
        endTrigger: '.sec-02',
        end: 'bottom bottom',
        scrub: 1,
        // markers: true,
      },
    });
    tl2.to(animable, {
      x: 1.5,
      y: -1,
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.sec-03',
        start: 'center bottom',
        endTrigger: '.sec-04',
        end: 'top bottom',
        scrub: 1,
        // markers: true,
      },
    });
    tl3.to(animable, {
      x: 0,
      y: 2,
      scale: (0, 0, 0),
    });

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.sec-04',
        start: 'top center',
        endTrigger: '.sec-04',
        end: 'center center',
        scrub: 1,
        // markers: true,
      },
    });
    tl4.to(animable, {
      x: 0,
      y: 0,
      scale: (1.3, 1.3, 1.3),
    });

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.sec-05',
        start: 'top bottom',
        end: 'center bottom',
        scrub: 1,
        // markers: true,
      },
    });
    tl5.to(animable, {
      x: 5,
      y: -5,
    });
  }, []);

  // 랜덤 위치 적용을 위한 useRef와 useFrame 생성
  const spotLightRef = useRef();
  const spotLighOppRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (spotLightRef.current) {
      spotLightRef.current.position.x = Math.sin(time) * 5; // x축 랜덤
      spotLightRef.current.position.y = Math.cos(time) * 5; // y축 랜덤

      spotLighOppRef.current.position.x = Math.cos(time) * -5;
      spotLighOppRef.current.position.y = Math.sin(time) * -5;
    }
  });

  return (
    <>
      <ambientLight intensity={2} color="#ffffff" />
      <directionalLight
        color="#ffffff"
        intensity={1}
        position={[10, 10, 10]}
        target-position={[10, 10, 10]}
      />
      <directionalLight
        color="#ffffff"
        intensity={1}
        position={[-4, -4, 1]}
        target-position={[0, 0, 0]}
      />
      <spotLight
        ref={spotLightRef}
        intensity={300}
        color="#ffffff"
        position={[5, 5, 10]}
        angle={0.2}
        penumbra={1}
      />
      <spotLight
        ref={spotLighOppRef}
        intensity={300}
        color="#ffffff"
        position={[5, 5, 10]}
        angle={0.2}
        penumbra={1}
      />

      <Scene anim={animable} />
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <Fluid
          intensity={1.25}
          distortion={1}
          force={0.4} // increase fluid splatter
          curl={1}
          showBackground={false}
          densityDissipation={0.98}
          velocityDissipation={0.99}
          // fluidColor="#e66cbf"
          fluidColor="#000000"
        />
        <Vignette eskil={true} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}

export default Bubble;
