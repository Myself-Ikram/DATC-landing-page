import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 80 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() * 3 + 0.5;
      speeds[i] = Math.random() * 0.3 + 0.1;
    }

    return { positions, sizes, speeds };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Gentle floating motion
      positions[i3 + 1] += particles.speeds[i] * 0.008;
      positions[i3] += Math.sin(time * 0.3 + i) * 0.002;

      // Reset particles that float too high
      if (positions[i3 + 1] > 10) {
        positions[i3 + 1] = -10;
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;
  });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[particles.sizes, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#d4a853"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function SteamParticles() {
  const mesh = useRef<THREE.Points>(null);
  const count = 30;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const opacities = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = Math.random() * 5 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      opacities[i] = Math.random();
    }

    return { positions, opacities };
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 1] += 0.015;
      positions[i3] += Math.sin(time + i * 0.5) * 0.003;

      if (positions[i3 + 1] > 5) {
        positions[i3 + 1] = -2;
        positions[i3] = (Math.random() - 0.5) * 2;
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#ffffff"
        transparent
        opacity={0.12}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function ParticleBackground() {
  // Detect mobile for reduced particles
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, isMobile ? 1 : 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.3} />
        <Particles count={isMobile ? 30 : 80} />
        {!isMobile && <SteamParticles />}
      </Canvas>
    </div>
  );
}
