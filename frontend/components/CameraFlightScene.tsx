"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function AnimatedCamera({ frames }: { frames: any[] }) {
  const { camera } = useThree();
  const frameIndexRef = useRef(0);

  useFrame(() => {
    if (
      !frames ||
      frames.length === 0 ||
      frameIndexRef.current >= frames.length
    )
      return;
    const frame = frames[frameIndexRef.current];

    camera.position.set(frame.position.x, frame.position.y, frame.position.z);

    const rx = THREE.MathUtils.degToRad(frame.rotation.x);
    const ry = THREE.MathUtils.degToRad(frame.rotation.y);
    const rz = THREE.MathUtils.degToRad(frame.rotation.z);
    camera.rotation.set(rx, ry, rz);

    frameIndexRef.current = Math.min(
      frameIndexRef.current + 1,
      frames.length - 1
    );
  });

  return null;
}

export function CameraFlightScene() {
  const [frames, setFrames] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/hhgc.json")
      .then((res) => res.json())
      .then((data) => setFrames(data.cameraFrames));
  }, []);

  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 1000000, position: [0, 0, 2000] }}
      style={{ height: "600px", width: "100%" }}
    >
      <AnimatedCamera frames={frames} />
      <ambientLight />
      <mesh>
        <boxGeometry args={[500, 500, 500]} />
        <meshStandardMaterial color="skyblue" wireframe />
      </mesh>
    </Canvas>
  );
}
