"use client";

import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "@/lib/Shaders";
import { Suspense, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@/hooks/useScroll";

const PLANE_WIDTH = 2.5;
const PLANE_HEIGHT = 1.5;
const COL_GAP = 1.5;
const ROW_GAP = 1.5;
const STEP = PLANE_WIDTH + COL_GAP;

const images: string[][] = [
    ['/images/kali.png', '/images/p.jpg', '/images/rock.jpg', '/images/rock2.jpg'],
    ['/images/1.jpg', '/images/2.jpg', '/images/house.jpg', '/images/bird.jpg'],
    ['/images/3']
]