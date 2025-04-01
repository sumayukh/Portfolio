import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, freezeRotation, direction }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef();

  useFrame(() => {
    let tempRotation = meshRef.current.rotation.y;
    if (freezeRotation) {
      meshRef.current.rotation.y = tempRotation;
    } else {
      let index = direction ? 1 : -1;
      meshRef.current.rotation.y = tempRotation + index * 0.015;
    }
  }, []);
  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={3.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.75 : 1.0}
        position={[-2.5, -4.5, -4.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [freezeRotation, setFreezeRotation] = useState(false);
  const [direction, setDirection] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(maxWidth: 48rem)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);
  return (
    <Canvas
      style={{ height: "80vh", cursor: "pointer" }}
      shadows
      camera={{ position: [20, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      onClick={() => {
        setDirection(!direction);
      }}
      onDoubleClick={() => {
        setFreezeRotation(!freezeRotation);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers
          isMobile={isMobile}
          freezeRotation={freezeRotation}
          direction={direction}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
