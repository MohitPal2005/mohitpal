import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const InteractiveStars = ({ color }) => {
  const points = useRef();
  const { mouse, viewport } = useThree();
  const count = 4000;

  const [positions, distances] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const dist = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      dist[i] = Math.random();
    }
    return [pos, dist];
  }, []);

  useFrame((state) => {
    // Rotation of the whole field
    points.current.rotation.x += 0.0005;
    points.current.rotation.y += 0.0003;

    // Mouse Interaction: Stars subtly lean toward the cursor
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, x * 0.1, 0.1);
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, y * 0.1, 0.1);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color={color}
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending} // Makes them glow!
      />
    </points>
  );
};

const Background3D = ({ color = "#9D4EDD" }) => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020202]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#020202']} />
        <InteractiveStars color={color} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default Background3D;