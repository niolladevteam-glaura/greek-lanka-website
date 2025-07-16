import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Html } from "@react-three/drei";
import * as THREE from "three";

// Recursive helper (case-insensitive) to find a camera by name
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
}

function PortsModel({
  cameraName = "Cam",
  animationName = "Animation",
}: PortsModelProps) {
  const { scene, animations } = useGLTF("/models/scene.gltf");
  const { actions } = useAnimations(animations, scene);
  const { set } = useThree();

  useEffect(() => {
    // Log all cameras for debugging
    const cameras: string[] = [];
    function collectCameras(obj: THREE.Object3D) {
      if (obj instanceof THREE.PerspectiveCamera) cameras.push(obj.name);
      obj.children.forEach(collectCameras);
    }
    collectCameras(scene);
    console.log("Available cameras:", cameras);

    const animationNames = animations.map((anim) => anim.name);
    console.log("Available animations:", animationNames);
  }, [scene, animations]);

  const customCamera = findCameraByNameRecursive(scene, cameraName);

  useEffect(() => {
    const animAction = actions[animationName] || actions["Animation"];
    if (animAction) {
      animAction.reset().play();
      console.log(`Playing animation: ${animationName}`);
    } else {
      console.warn(`Animation "${animationName}" not found!`);
    }
    return () => {
      if (animAction) {
        animAction.stop();
        console.log(`Stopped animation: ${animationName}`);
      }
    };
  }, [actions, animationName]);

  useEffect(() => {
    if (customCamera) {
      set({ camera: customCamera });
      console.log(`Set camera: ${customCamera.name}`);
    } else {
      console.warn(`Camera "${cameraName}" not found!`);
    }
  }, [customCamera, set, cameraName]);

  return <primitive object={scene} />;
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
          <PortsModel cameraName="Cam" animationName="Animation" />
        </Suspense>
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/scene.gltf");
