'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NetworkTopologyProps {
  reducedMotion?: boolean;
}

export const NetworkTopology: React.FC<NetworkTopologyProps> = ({
  reducedMotion = false,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { nodePositions, connections } = useMemo(() => {
    const count = 12;
    const positions: [number, number, number][] = [];
    const radius = 2.3;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      positions.push([x, y, z]);
    }

    const lineIndices: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dist = Math.hypot(
          positions[i][0] - positions[j][0],
          positions[i][1] - positions[j][1],
          positions[i][2] - positions[j][2]
        );
        if (dist < 2.8) {
          lineIndices.push(i, j);
        }
      }
    }

    return { nodePositions: positions, connections: lineIndices };
  }, []);

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

  // Explicit GPU BufferGeometry disposal on unmount or geometry recompute
  useEffect(() => {
    return () => {
      lineGeometry.dispose();
    };
  }, [lineGeometry]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!reducedMotion) {
      groupRef.current.rotation.y += delta * 0.16;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;

      // Smooth lerp toward pointer coordinates
      const targetX = state.pointer.x * 0.3;
      const targetY = state.pointer.y * 0.22;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;

      if (coreRef.current) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 1.8) * 0.05;
        coreRef.current.scale.set(scale, scale, scale);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Cobalt Architectural Server Core */}
      <mesh ref={coreRef}>
        <boxGeometry args={[1.15, 1.15, 1.15]} />
        <meshPhysicalMaterial
          color="#0369A1"
          emissive="#075985"
          emissiveIntensity={0.65}
          roughness={0.18}
          metalness={0.2}
          transmission={0.72}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Outer Wireframe Globe Frame */}
      <mesh>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial
          color="#38BDF8"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>

      {/* Connecting Network Cables */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#38BDF8"
          transparent
          opacity={0.42}
        />
      </lineSegments>

      {/* Floating Satellite Nodes */}
      {nodePositions.map((pos, idx) => {
        const isEmerald = idx % 3 === 0;
        return (
          <group key={idx} position={pos}>
            <mesh>
              <sphereGeometry args={[0.13, 16, 16]} />
              <meshStandardMaterial
                color={isEmerald ? '#10B981' : '#38BDF8'}
                emissive={isEmerald ? '#059669' : '#0369A1'}
                emissiveIntensity={1.1}
                roughness={0.25}
              />
            </mesh>
            {isEmerald && (
              <mesh>
                <sphereGeometry args={[0.23, 12, 12]} />
                <meshBasicMaterial
                  color="#10B981"
                  transparent
                  opacity={0.22}
                  wireframe
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
};
