"use client";

import { useEffect, useState } from "react";

type P = { id: number; x: number; y: number; size: number; dur: number; delay: number; op: number; color: string };

// Warm Miami palette — visible on both bright beach and dark navy backgrounds
const COLORS = ["#25D0E6", "#25D0E6", "#FFA84D", "#FF8A6B", "#ffffff"];

export default function Particles({ count = 55 }: { count?: number }) {
  const [particles, setParticles] = useState<P[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.8 + 0.6,
        dur: Math.random() * 18 + 10,
        delay: -(Math.random() * 25),
        op: Math.random() * 0.35 + 0.08,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    );
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            "--op": p.op,
            opacity: p.op,
            animation: `particleFloat ${p.dur}s ${p.delay}s ease-in-out infinite`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
