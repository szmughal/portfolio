'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NetworkTopologyProps {
  reducedMotion?: boolean;
  isMobile?: boolean;
}

export const NetworkTopology: React.FC<NetworkTopologyProps> = ({
  reducedMotion = false,
  isMobile = false,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate spherical node coordinates
  const { nodePositions, connections } = useMemo(() => {
    const count = isMobile ? 6 : 12;
    const positions: [number, number, number][] = [];
    const radius = 2.4;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      positions.push([x, y, z]);
    }

    // Connect nodes
    const lineIndices: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dist = Math.hypot(
          positions[i][0] - positions[j][0],
          positions[i][1] - positions[j][1],
          positions[i][2] - positions[j][2]
        );
        // Connect close neighbors
        if (dist < 2.8) {
          lineIndices.push(i, j);
        }
      }
    }

    return { nodePositions: positions, connections: lineIndices };
  }, [isMobile]);

  // Line segments geometry
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const flatPoints: number[] = [];

    for (let k = 0; k < connections.length; k += 2) {
      const idxA = connections[k];
      const idxB = connections[k + 1];
      flatPoints.push(...nodePositions[idxA], ...nodePositions[idxB]);
    }

    geo.setAttribute('position', new THREE.Float32BufferAttribute(flatPoints, 3));
    return geo;
  }, [nodePositions, connections]);

  // Animation Loop with parallax and rotation
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!reducedMotion) {
      // Slow rotation on Y and X
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

      // Subtle mouse parallax
      const targetX = state.pointer.x * 0.35;
      const targetY = state.pointer.y * 0.25;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    }

    // Core pulse
    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.06;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Server Node (Frosted Glass with Indigo / Cyan emissive glow) */}
      <mesh ref={coreRef}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshPhysicalMaterial
          color="#4F46E5"
          emissive="#3730A3"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.1}
          transmission={0.8}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Outer Wireframe Cage / Globe Frame */}
      <mesh>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial
          color="#06B6D4"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Connecting Network Cables / Splines */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#38BDF8"
          transparent
          opacity={0.45}
          linewidth={1}
        />
      </lineSegments>

      {/* Floating Satellite Nodes */}
      {nodePositions.map((pos, idx) => (
        <group key={idx} position={pos}>
          <mesh>
            <sphereGeometry args={[0.14, 16, 16]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? '#00F2FE' : '#818CF8'}
              emissive={idx % 2 === 0 ? '#0891B2' : '#4F46E5'}
              emissiveIntensity={1.2}
              roughness={0.2}
            />
          </mesh>
          {/* Subtle Outer Halo for select nodes */}
          {idx % 3 === 0 && (
            <mesh>
              <sphereGeometry args={[0.24, 12, 12]} />
              <meshBasicMaterial
                color="#00F2FE"
                transparent
                opacity={0.2}
                wireframe
              />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
};
