"use client";
import { Canvas } from "@react-three/fiber";
import RowMesh, { PLANE_HEIGHT } from "./Mesh";

// ─── Per-row image sets ────────────────────────────────────────────────────
const ROW_0 = ['/images/kali.png',   '/images/p.jpg',         '/images/rock.jpg',      '/images/rock2.jpg'  ];
const ROW_1 = ['/images/1.jpg',      '/images/2.jpg',         '/images/house.jpg',     '/images/bird.jpg'   ];
const ROW_2 = ['/images/neck.jpg',   '/images/rock5.jpg',     '/images/fog.jpg',       '/images/rock7.jpg'  ];
const ROW_3 = ['/images/road.jpg',   '/images/ref.jpg',       '/images/butterfly.jpg', '/images/canada.jpg' ];
const ROW_4 = ['/images/rock10.jpg', '/images/12.jpg',        '/images/kali.png',      '/images/p.jpg'      ];

const ROW_GAP  = 0.25;
const NUM_ROWS = 5;

// Centre the stack around y = 0
const totalH = NUM_ROWS * PLANE_HEIGHT + (NUM_ROWS - 1) * ROW_GAP;
const startY = totalH / 2 - PLANE_HEIGHT / 2;
const y      = (row: number) => startY - row * (PLANE_HEIGHT + ROW_GAP);

// ─── Scene ─────────────────────────────────────────────────────────────────
export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <RowMesh images={ROW_0} yPosition={y(0)} scrollDir={1}  />
            <RowMesh images={ROW_1} yPosition={y(1)} scrollDir={-1} />
            <RowMesh images={ROW_2} yPosition={y(2)} scrollDir={1}  />
            <RowMesh images={ROW_3} yPosition={y(3)} scrollDir={-1} />
            <RowMesh images={ROW_4} yPosition={y(4)} scrollDir={1}  />
        </Canvas>
    );
}