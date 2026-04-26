import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null);

  // 5000 stars in a unit sphere
  const positions = useMemo(() => {
    const count = 5000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // random point inside a sphere of radius 1.2
      let x = 0,
        y = 0,
        z = 0,
        d = 2;
      while (d > 1) {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        d = x * x + y * y + z * z;
      }
      const r = 1.2;
      arr[i * 3] = x * r;
      arr[i * 3 + 1] = y * r;
      arr[i * 3 + 2] = z * r;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 12;
    ref.current.rotation.y -= delta / 18;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#a78bfa"
          size={0.0035}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function StarsCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
