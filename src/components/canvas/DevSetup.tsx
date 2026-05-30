import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Text, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ────── Holographic Ring ────── */
const HoloRing = ({
  radius,
  color,
  speed,
  rotationAxis,
}: {
  radius: number;
  color: string;
  speed: number;
  rotationAxis: [number, number, number];
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * rotationAxis[0];
      ref.current.rotation.y += delta * speed * rotationAxis[1];
      ref.current.rotation.z += delta * speed * rotationAxis[2];
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

/* ────── Floating Code Block ────── */
const FloatingCode = ({
  position,
  text,
  color,
  size,
}: {
  position: [number, number, number];
  text: string;
  color: string;
  size: number;
}) => {
  const ref = useRef<THREE.Group>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.6 + offset) * 0.3;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + offset) * 0.2;
    }
  });
  return (
    <group ref={ref} position={position}>
      <Text fontSize={size} color={color} anchorX="center" anchorY="middle">
        {text}
      </Text>
    </group>
  );
};

/* ────── Data Stream Particles ────── */
const DataStream = ({
  count,
  radius,
  height,
  color,
  speed,
}: {
  count: number;
  radius: number;
  height: number;
  color: string;
  speed: number;
}) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      arr[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.3;
      arr[i * 3 + 1] = (Math.random() - 0.5) * height;
      arr[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.3;
    }
    return arr;
  }, [count, radius, height]);

  useFrame((state) => {
    if (ref.current) {
      const pos = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += speed * 0.02;
        if (pos[i * 3 + 1] > height / 2) pos[i * 3 + 1] = -height / 2;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color={color} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

/* ────── Floating Cube ────── */
const FloatingCube = ({
  position,
  size,
  color,
  speed,
}: {
  position: [number, number, number];
  size: number;
  color: string;
  speed: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01 * speed;
      ref.current.rotation.y += 0.015 * speed;
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5 + offset) * 0.4;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        transparent
        opacity={0.85}
        wireframe
      />
    </mesh>
  );
};

/* ────── DNA Helix ────── */
const DNAHelix = ({ color1, color2 }: { color1: string; color2: string }) => {
  const ref = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const pts: { p1: THREE.Vector3; p2: THREE.Vector3 }[] = [];
    for (let i = 0; i < 40; i++) {
      const t = (i / 40) * Math.PI * 4;
      const y = (i / 40) * 4 - 2;
      pts.push({
        p1: new THREE.Vector3(Math.cos(t) * 0.5, y, Math.sin(t) * 0.5),
        p2: new THREE.Vector3(Math.cos(t + Math.PI) * 0.5, y, Math.sin(t + Math.PI) * 0.5),
      });
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={ref} position={[3, 1.5, -1]}>
      {points.map((pt, i) => (
        <React.Fragment key={i}>
          <mesh position={pt.p1}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial color={color1} emissive={color1} emissiveIntensity={1.5} />
          </mesh>
          <mesh position={pt.p2}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial color={color2} emissive={color2} emissiveIntensity={1.5} />
          </mesh>
          {i % 3 === 0 && (
            <mesh position={pt.p1.clone().lerp(pt.p2, 0.5)}>
              <cylinderGeometry args={[0.01, 0.01, pt.p1.distanceTo(pt.p2), 4]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} transparent opacity={0.4} />
            </mesh>
          )}
        </React.Fragment>
      ))}
    </group>
  );
};

/* ────── Hexagonal Grid Platform ────── */
const HexPlatform = () => {
  const hexagons = useMemo(() => {
    const arr: { x: number; z: number }[] = [];
    for (let q = -3; q <= 3; q++) {
      for (let r = -3; r <= 3; r++) {
        if (Math.abs(q + r) <= 3) {
          arr.push({
            x: q * 0.9 + r * 0.45,
            z: r * 0.78,
          });
        }
      }
    }
    return arr;
  }, []);

  return (
    <group position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {hexagons.map((hex, i) => (
        <mesh key={i} position={[hex.x, hex.z, 0]}>
          <circleGeometry args={[0.35, 6]} />
          <meshStandardMaterial
            color="#0a1628"
            emissive="#1a3a5c"
            emissiveIntensity={0.3 + Math.random() * 0.4}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

/* ────── Main Scene ────── */
const DevSetup = ({ isMobile }: { isMobile: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 0.9 : 1.2}
      position={isMobile ? [0, -0.3, 0] : [0, 0, 0]}
    >
      {/* ── Central Monitor ── */}
      <mesh position={[0, 0.5, -0.8]} castShadow>
        <boxGeometry args={[3.5, 2, 0.08]} />
        <meshStandardMaterial color="#0f0f1a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0.5, -0.75]}>
        <planeGeometry args={[3.3, 1.8]} />
        <meshStandardMaterial
          color="#0d1117"
          emissive="#112240"
          emissiveIntensity={1.2}
        />
      </mesh>
      {/* Screen content - IDE layout */}
      {/* Sidebar */}
      <mesh position={[-1.4, 0.5, -0.74]}>
        <planeGeometry args={[0.4, 1.7]} />
        <meshStandardMaterial color="#161b22" emissive="#161b22" emissiveIntensity={0.8} />
      </mesh>
      {/* Code lines */}
      {[
        { y: 1.15, w: 1.8, color: "#ff7b72", x: -0.3 },
        { y: 0.98, w: 2.2, color: "#79c0ff", x: -0.1 },
        { y: 0.81, w: 1.0, color: "#a5d6ff", x: -0.6 },
        { y: 0.64, w: 2.5, color: "#ffa657", x: 0.1 },
        { y: 0.47, w: 1.4, color: "#7ee787", x: -0.4 },
        { y: 0.30, w: 2.0, color: "#d2a8ff", x: 0.0 },
        { y: 0.13, w: 1.6, color: "#79c0ff", x: -0.2 },
        { y: -0.04, w: 0.8, color: "#ff7b72", x: -0.7 },
        { y: -0.21, w: 2.3, color: "#ffa657", x: 0.05 },
        { y: -0.38, w: 1.2, color: "#7ee787", x: -0.5 },
      ].map((line, i) => (
        <mesh key={i} position={[line.x + line.w / 2, line.y, -0.73]}>
          <planeGeometry args={[line.w, 0.07]} />
          <meshStandardMaterial
            color={line.color}
            emissive={line.color}
            emissiveIntensity={0.9}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
      {/* Cursor */}
      <mesh position={[0.4, 0.47, -0.72]}>
        <planeGeometry args={[0.03, 0.14]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      {/* Status bar */}
      <mesh position={[0, -0.42, -0.74]}>
        <planeGeometry args={[3.3, 0.12]} />
        <meshStandardMaterial color="#1f2937" emissive="#3b82f6" emissiveIntensity={0.3} />
      </mesh>
      {/* Terminal */}
      <mesh position={[0, -0.65, -0.74]}>
        <planeGeometry args={[3.3, 0.45]} />
        <meshStandardMaterial color="#0a0e14" emissive="#0a0e14" emissiveIntensity={0.6} />
      </mesh>
      {/* Terminal prompt */}
      <mesh position={[-1.4, -0.55, -0.73]}>
        <planeGeometry args={[0.6, 0.05]} />
        <meshStandardMaterial color="#7ee787" emissive="#7ee787" emissiveIntensity={1} />
      </mesh>
      <mesh position={[-0.5, -0.55, -0.73]}>
        <planeGeometry args={[1.2, 0.05]} />
        <meshStandardMaterial color="#8b949e" emissive="#8b949e" emissiveIntensity={0.6} />
      </mesh>

      {/* ── Keyboard ── */}
      <mesh position={[0, -0.8, 0.6]} rotation={[-0.2, 0, 0]} castShadow>
        <boxGeometry args={[3, 0.08, 1.0]} />
        <meshStandardMaterial color="#161b22" metalness={0.8} roughness={0.2} />
      </mesh>
      {Array.from({ length: 36 }).map((_, i) => (
        <mesh
          key={`k-${i}`}
          position={[
            -1.2 + (i % 12) * 0.22,
            -0.74,
            0.3 + Math.floor(i / 12) * 0.28,
          ]}
          rotation={[-0.2, 0, 0]}
        >
          <boxGeometry args={[0.18, 0.04, 0.22]} />
          <meshStandardMaterial
            color={i % 13 === 0 ? "#58a6ff" : i % 9 === 0 ? "#bc8cff" : "#21262d"}
            emissive={i % 13 === 0 ? "#58a6ff" : i % 9 === 0 ? "#bc8cff" : "#000"}
            emissiveIntensity={i % 13 === 0 || i % 9 === 0 ? 0.6 : 0}
          />
        </mesh>
      ))}

      {/* ── Holographic Rings around center ── */}
      <HoloRing radius={2.5} color="#58a6ff" speed={0.3} rotationAxis={[1, 0, 0.3]} />
      <HoloRing radius={2.8} color="#bc8cff" speed={-0.2} rotationAxis={[0.5, 1, 0]} />
      <HoloRing radius={3.1} color="#3fb950" speed={0.15} rotationAxis={[0, 0.5, 1]} />

      {/* ── Data Streams ── */}
      <DataStream count={120} radius={2.2} height={6} color="#58a6ff" speed={1} />
      <DataStream count={80} radius={2.8} height={5} color="#bc8cff" speed={0.7} />

      {/* ── Floating Code Symbols ── */}
      <FloatingCode position={[-3, 2, 1]} text="<React />" color="#61dafb" size={0.25} />
      <FloatingCode position={[3.2, 1.5, 0.5]} text="{ TypeScript }" color="#3178c6" size={0.2} />
      <FloatingCode position={[-2.5, -0.5, 2]} text="npm run dev" color="#3fb950" size={0.18} />
      <FloatingCode position={[2.8, 2.5, -1]} text="git push" color="#f78166" size={0.18} />
      <FloatingCode position={[-3.5, 1, -1]} text="const" color="#ff7b72" size={0.22} />
      <FloatingCode position={[3, -0.3, 1.5]} text="async/await" color="#ffa657" size={0.16} />

      {/* ── Floating Cubes ── */}
      <FloatingCube position={[-3, 0.5, -1.5]} size={0.25} color="#58a6ff" speed={0.8} />
      <FloatingCube position={[3.5, 1, 0]} size={0.2} color="#bc8cff" speed={1.2} />
      <FloatingCube position={[-2, 2.5, 0.5]} size={0.15} color="#3fb950" speed={0.6} />
      <FloatingCube position={[2.5, -1, -2]} size={0.3} color="#f78166" speed={1} />

      {/* ── DNA Helix ── */}
      <DNAHelix color1="#58a6ff" color2="#bc8cff" />

      {/* ── Hex Platform ── */}
      <HexPlatform />

      {/* ── Lighting ── */}
      <hemisphereLight intensity={0.4} groundColor="#000022" />
      <spotLight
        position={[-10, 15, 10]}
        angle={0.2}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 3, 3]} intensity={1.5} color="#58a6ff" distance={12} />
      <pointLight position={[3, 2, 1]} intensity={0.8} color="#bc8cff" distance={10} />
      <pointLight position={[-3, 1, 2]} intensity={0.6} color="#3fb950" distance={8} />
      <pointLight position={[0, -2, 0]} intensity={0.4} color="#f78166" distance={6} />
    </group>
  );
};

const DevCanvas = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [6, 3, 6], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <DevSetup isMobile={isMobile} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.4}
      />
      <Preload all />
    </Canvas>
  );
};

export default DevCanvas;
