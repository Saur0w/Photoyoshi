"use client";

import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useScroll } from "@/hooks/useScroll";
import { useFrame } from "@react-three/fiber";
import { vertexShader, fragmentShader } from "@/lib/Shaders";
import { Suspense, useMemo, useRef } from "react";

export const PLANE_WIDTH = 0.8;
export const PLANE_HEIGHT = 0.5;
export const COL_GAP = 0.05;
export const STEP = PLANE_WIDTH + COL_GAP;

interface ImagesProps {
    images: string[];
    yPosition: number;
    scrollDir: number;
}

function Meshes({ images, yPosition, scrollDir }: ImagesProps) {
    const textures = useTexture(images) as THREE.Texture[];
    const materialsRef = useRef<(THREE.ShaderMaterial | null)[]>([]);

    return (
        <group position={[0, yPosition, 0]}>
            {textures.map((_, i) => (
                <mesh
                    key={i}
                    position={[i * STEP, 0, 0]}
                >
                    <planeGeometry args={[PLANE_WIDTH, PLANE_HEIGHT, 30, 30]} />
                    <shaderMaterial 
                        ref={(el) => (materialsRef.current[i] = el)}
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                    />
                </mesh>
            ))}
        </group>
    )
}

export default function Mesh(props: ImagesProps) {
    return (
        <Suspense fallback={null}>
            <Meshes { ...props} />
        </Suspense>
    )
}