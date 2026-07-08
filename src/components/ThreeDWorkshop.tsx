"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MechanicalPart() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
          <meshStandardMaterial
            color="#C66A2B"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function ThreeDWorkshop() {
  return (
    <section className="relative w-full h-screen bg-bg-secondary flex flex-col md:flex-row items-center overflow-hidden">
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 md:px-20 z-10">
        <h2 className="text-5xl md:text-7xl font-sans font-bold text-text-primary uppercase leading-tight">
          Design Meets <br/>
          <span className="font-serif italic text-accent-orange">Engineering</span>
        </h2>
        <p className="mt-6 text-lg text-text-secondary font-sans max-w-md">
          Rooted in mechanical thinking. I build digital products with the precision and structural integrity of physical machines.
        </p>
        <div className="mt-10 font-pixel text-accent-green text-sm flex flex-col gap-2">
          <span>&gt; INITIALIZING_CAD_ENVIRONMENT...</span>
          <span>&gt; LOADING_MATERIALS...</span>
          <span>&gt; SYSTEM_READY</span>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full relative hoverable cursor-grab active:cursor-grabbing">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Environment preset="city" />
          <MechanicalPart />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

    </section>
  );
}
