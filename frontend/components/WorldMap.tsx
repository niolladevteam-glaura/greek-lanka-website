import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Html } from "@react-three/drei";

function WorldMapModel() {
  const { scene, animations } = useGLTF("/models/World_Map v6.glb") as any;
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      if (firstAction) {
        firstAction.play();
      }
    }
  }, [actions]);

  return <primitive object={scene} />;
}

export default function WorldMap() {
  return (
    <div className="w-full max-w-[450px] aspect-square mx-auto relative">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <Suspense
          fallback={
            <Html center>
              <span>Loading 3D Model...</span>
            </Html>
          }
        >
          <WorldMapModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

// (Optional) Preload for performance
useGLTF.preload("/models/World_Map v6.glb");
