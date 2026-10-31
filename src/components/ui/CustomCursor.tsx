import React, { useEffect, useRef } from 'react';

/**
 * Premium Antique-Gold Mouse Cursor Accent
 *
 * Designed exclusively for desktop devices with fine pointers.
 * - Hardware-accelerated with requestAnimationFrame and direct DOM updates (zero React re-renders).
 * - Smooth lerp interpolation for fluid movement without jitter.
 * - Directional antique-gold arrow that rotates toward mouse movement.
 * - Automatic disable on touch devices, mobile screens, or prefers-reduced-motion.
 * - Non-interfering pointer-events: none; preserves native cursor functionality.
 * - Smart RAF scheduling: idle on mount, runs only during active animation, stops when settled.
 */
export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop with fine pointers and when reduced motion is not requested
    if (typeof window === 'undefined') return;

    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    const cursor = cursorRef.current;
    const arrow = arrowRef.current;
    const dot = dotRef.current;
    if (!cursor || !arrow || !dot) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    let targetAngle = 0;
    let currentAngle = 0;
    let isMoving = false;
    let moveTimeout: ReturnType<typeof setTimeout> | null = null;
    let isHoveringInteractive = false;
    let isVisible = false;

    let animationFrameId: number | null = null;
    let isLoopRunning = false;

    const startLoop = () => {
      if (!isLoopRunning) {
        isLoopRunning = true;
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      // 1. Strictly ignore touch pointer events and non-mouse pointers
      if (e.pointerType !== 'mouse') {
        return;
      }

      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = '1';
      }

      const dx = targetX - currentX;
      const dy = targetY - currentY;
      const dist = Math.hypot(dx, dy);

      if (dist > 2) {
        targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        isMoving = true;
        if (moveTimeout) clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => {
          isMoving = false;
          startLoop(); // Settle animation and fade arrow
        }, 150);
      }

      // Check if hovering over clickable or input elements
      const target = e.target as HTMLElement | null;
      if (target) {
        isHoveringInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], label')
        );
      } else {
        isHoveringInteractive = false;
      }

      // Start/continue the animation frame loop
      startLoop();
    };

    const onPointerLeave = () => {
      isVisible = false;
      cursor.style.opacity = '0';
    };

    const onPointerEnter = () => {
      isVisible = true;
      cursor.style.opacity = '1';
      startLoop();
    };

    const loop = () => {
      // Linear interpolation (easing)
      const ease = 0.18;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      // Shortest angle interpolation to prevent 360-degree flips
      let angleDiff = targetAngle - currentAngle;
      while (angleDiff < -180) angleDiff += 360;
      while (angleDiff > 180) angleDiff -= 360;
      currentAngle += angleDiff * 0.14;

      // Position container
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      // Rotate arrow and handle dynamic visibility
      arrow.style.transform = `rotate(${currentAngle}deg)`;
      arrow.style.opacity = isMoving && !isHoveringInteractive ? '0.85' : '0';

      // Interactive state styling
      if (isHoveringInteractive) {
        dot.style.transform = 'scale(1.4)';
        dot.style.borderColor = '#D9A323';
        dot.style.backgroundColor = 'rgba(217, 163, 35, 0.18)';
        dot.style.boxShadow = '0 0 16px rgba(217, 163, 35, 0.35)';
      } else {
        dot.style.transform = 'scale(1)';
        dot.style.borderColor = 'rgba(217, 163, 35, 0.7)';
        dot.style.backgroundColor = 'rgba(16, 43, 78, 0.2)';
        dot.style.boxShadow = '0 0 10px rgba(217, 163, 35, 0.2)';
      }

      // Check if settled: cursor has reached target, angle settled, and movement timeout finished
      const distToTarget = Math.hypot(targetX - currentX, targetY - currentY);
      const angleSettled = Math.abs(angleDiff) < 0.1;
      const isSettled = distToTarget < 0.1 && angleSettled && !isMoving;

      if (isSettled) {
        // Snap exact coordinates to prevent micro-drifts
        currentX = targetX;
        currentY = targetY;
        currentAngle = targetAngle;
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        arrow.style.transform = `rotate(${currentAngle}deg)`;
        arrow.style.opacity = '0';

        // Stop requesting animation frames - go idle
        isLoopRunning = false;
        animationFrameId = null;
        return;
      }

      // Continue animating until settled
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave);
    document.addEventListener('mouseenter', onPointerEnter);

    // Loop is intentionally NOT started on mount. It remains idle until first mouse interaction.

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseleave', onPointerLeave);
      document.removeEventListener('mouseenter', onPointerEnter);
      if (moveTimeout) clearTimeout(moveTimeout);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      isLoopRunning = false;
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 transition-opacity duration-300 will-change-transform hidden md:block"
      style={{ marginLeft: -14, marginTop: -14 }}
      aria-hidden="true"
    >
      {/* Central antique-gold halo ring */}
      <div
        ref={dotRef}
        className="w-7 h-7 rounded-full border border-gold/70 bg-navy/20 backdrop-blur-[1px] transition-all duration-200 ease-out flex items-center justify-center shadow-gold-sm"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
      </div>

      {/* Directional antique-gold arrow indicator */}
      <svg
        ref={arrowRef}
        viewBox="0 0 24 24"
        className="absolute top-0 left-0 w-7 h-7 text-gold pointer-events-none transition-opacity duration-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Sleek directional arrow pointing right along positive x-axis */}
        <path d="M5 12h14" stroke="#D9A323" />
        <path d="m14 7 5 5-5 5" stroke="#D9A323" />
      </svg>
    </div>
  );
};
