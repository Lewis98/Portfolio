"use client";
import React, { useEffect, useRef, useMemo } from "react";



export type NodeMapBackgroundProps = {
  className?: string;
  /** approximate nodes per 10,000 px^2 */
  density?: number; // default 0.08
  maxConnectionDistance?: number; // px, default 140
  baseNodeRadius?: number; // px at 1x DPR, default 1.2
  nodeColor?: string; // CSS color, default "var(--node-color, rgba(148,163,184,0.8))"
  lineColor?: string; // CSS color, default "var(--line-color, rgba(148,163,184,0.35))"
  interactive?: boolean; // pointer repulsion, default true
  speed?: number; // 0.5 (slow) .. 2 (fast), default 1
  interactSpeed?: number;
};

export default function NodeMapBackground({
  className,
  density = 0.08,
  maxConnectionDistance = 140,
  baseNodeRadius = 1.2,
  nodeColor = "var(--node-color, rgba(148,163,184,0.8))",
  lineColor = "var(--line-color, rgba(148,163,184,0.35))",
  interactive = true,
  speed = 1,
  interactSpeed = 1,
}: NodeMapBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      s: number;
    };

    const nodes: Node[] = [];

    function resize() {
      const c = canvasRef.current;
      if (!c || !ctx) return;
    
      const { clientWidth, clientHeight } = c;
      width = clientWidth;
      height = clientHeight;
    
      if (width === 0 || height === 0) return;
    
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      c.width = Math.floor(width * dpr);
      c.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    
      const targetCount = Math.floor((width * height * density) / 10000);
      if (nodes.length < targetCount) {
        const toAdd = targetCount - nodes.length;
        for (let i = 0; i < toAdd; i++) nodes.push(makeNode());
      } else if (nodes.length > targetCount) {
        nodes.length = targetCount;
      }
    }
    

    function makeNode(): Node {
      const angle = Math.random() * Math.PI * 2;
      const baseSpeed = (0.15 + Math.random() * 0.25) * speed; // px per frame
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * baseSpeed,
        vy: Math.sin(angle) * baseSpeed,
        s: baseSpeed,
      };
    }

    function step() {
      if (!ctx) return; // ctx Guard
      // Physics
      const mouse = mouseRef.current;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        // pointer repulsion
        if (interactive && mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist2 = dx * dx + dy * dy;
          const influenceR = 120; // px
          const influence2 = influenceR * influenceR;
          if (dist2 < influence2 && dist2 > 0.01) {
            const f = (influence2 - dist2) / influence2; // 0..1
            const invDist = 1 / Math.sqrt(dist2);
            n.vx += (dx * invDist) * f * interactSpeed;
            n.vy += (dy * invDist) * f * interactSpeed;
          }
        }

        n.x += n.vx;
        n.y += n.vy;

        // soft wrap at edges
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;

        // keep velocity magnitude constant
        const sp = Math.hypot(n.vx, n.vy) || 1;
        n.vx = (n.vx / sp) * n.s;
        n.vy = (n.vy / sp) * n.s;
      }

      // Render
      ctx.clearRect(0, 0, width, height);

      // connections
      ctx.lineWidth = 1;
      ctx.strokeStyle = lineColor;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxConnectionDistance) {
            const alpha = 1 - dist / maxConnectionDistance;
            ctx.globalAlpha = Math.max(0.05, alpha * 0.9);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // nodes
      ctx.fillStyle = nodeColor;
      const r = baseNodeRadius;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    }

    function start() {
      if (prefersReducedMotion) return; // respect user setting
      cancel();
      rafRef.current = requestAnimationFrame(step);
    }

    function cancel() {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    // listeners
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => (mouseRef.current.active = false);

    if (interactive) {
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);
    }

    const onVis = () => {
      if (document.hidden) {
        cancel();
      } else {
        start();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    resize();
    start();

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      ro.disconnect();
      if (interactive) {
        canvas.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("pointerleave", onLeave);
      }
      cancel();
    };
  }, [density, maxConnectionDistance, baseNodeRadius, nodeColor, lineColor, interactive, speed, prefersReducedMotion, interactSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={
        "block h-full w-full bg-transparent [contain:layout_paint_size] " +
        (className ?? "")
      }
      aria-hidden
      role="img"
    />
  );
}
