import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Html } from "@react-three/drei";
import * as THREE from "three";

function findCameraByNameRecursive(
  object: THREE.Object3D,
  name: string
): THREE.PerspectiveCamera | undefined {
  if (
    object instanceof THREE.PerspectiveCamera &&
    object.name.toLowerCase() === name.toLowerCase()
  ) {
    return object;
  }
  for (const child of object.children) {
    const found = findCameraByNameRecursive(child, name);
    if (found) return found;
  }
  return undefined;
}

interface PortsModelProps {
  cameraName?: string;
  animationName?: string;
  position?: [number, number, number]; // <--- Added this
}

function PortsModel({
  cameraName = "Cam",
  animationName = "Animation",
  position = [0, 0, 0], // <--- Default position
}: PortsModelProps) {
  const { scene, animations } = useGLTF("/models/scene8.gltf");
  const { actions } = useAnimations(animations, scene);
  const { set } = useThree();

  if (!scene || !animations) {
    return (
      <Html center>
        <span>Loading 3D Model...</span>
      </Html>
    );
  }

  const customCamera = useMemo(
    () =>
      findCameraByNameRecursive(scene, cameraName) ||
      scene.children.find((obj) => obj instanceof THREE.PerspectiveCamera),
    [scene, cameraName]
  );

  const animName =
    animations.find((a) => a.name === animationName)?.name ||
    animations[0]?.name;
  const animAction = actions[animName];

  useEffect(() => {
    if (animAction) {
      animAction.reset().play();
      console.log(`Playing animation: ${animName}`);
    }
    return () => {
      if (animAction) animAction.stop();
    };
  }, [animAction, animName]);

  useEffect(() => {
    if (scene && customCamera) {
      set({ camera: customCamera });
      console.log(`Set camera: ${customCamera.name}`);
    }
  }, [scene, customCamera, set]);

  return <primitive object={scene} position={position} />; // <--- Set position here
}

export default function PortsGLBViewer() {
  return (
    <div className="w-full h-full aspect-square">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={0.5} />
        <Suspense
          fallback={
            <Html center className="text-white font-semibold text-lg">
              <span>Loading 3D Map...</span>
            </Html>
          }
        >
          {/* Pass desired X and Y position, e.g. [x, y, z] */}
          <PortsModel
            cameraName="Cam"
            animationName="Animation"
            position={[0.3, -0.6, 0]}
          />
        </Suspense>
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/scene8.gltf");
