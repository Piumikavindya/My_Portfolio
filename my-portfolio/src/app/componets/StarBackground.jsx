"use Client"
import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const StarBackground = (props) => {
  const ref = useRef();

  const [sphere] = useState(() => {
    return random.inSphere(new Float32Array(5000), { radius: 1.2 });
  });

  useFrame((state, delta) => {
    ref.current.rotation.y -= delta / 10;
    ref.current.rotation.x -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} position={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const StarCanvas = () => {
  return (
    <div className="w-full h-full fixed top-10 left-30 z-0 pointer-events-none">
      <Canvas camera={{ position: [1, 1, 0] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default StarCanvas;
