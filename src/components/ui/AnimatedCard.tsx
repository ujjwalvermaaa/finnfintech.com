
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue, type MotionValue } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface AnimatedCardProps {
  className?: string;
  children: ReactNode;
  spotlight?: boolean;
  hoverEffect?: boolean;
}

export function AnimatedCard({ className, children, spotlight = false, hoverEffect = true }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function onMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    if (!hoverEffect) return;
    
    const bounds = currentTarget.getBoundingClientRect();
    const x = clientX - bounds.left;
    const y = clientY - bounds.top;
    
    mouseX.set(x);
    mouseY.set(y);
    
    setPosition({ 
      x: (x / bounds.width - 0.5) * 4, 
      y: (y / bounds.height - 0.5) * 4 
    });
  }

  function onMouseLeave() {
    if (!hoverEffect) return;
    setPosition({ x: 0, y: 0 });
  }

  const maskImage = useMotionTemplate`radial-gradient(140px at ${mouseX}px ${mouseY}px, rgb(255, 255, 255), rgba(255, 255, 255, 0.3))`;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-finn-50/20 to-white/80 shadow-md transition-all",
        className
      )}
      initial={hoverEffect ? { y: 10, opacity: 0 } : {}}
      whileInView={hoverEffect ? { y: 0, opacity: 1 } : {}}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={hoverEffect ? {
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${position.y}deg) rotateY(${-position.x}deg)`
      } : {}}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 100% 0%, rgba(34, 197, 94, 0.1), rgba(0, 0, 0, 0) 70%)" }} />
        {spotlight && (
          <div className="absolute inset-0">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-finn-500/40 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-finn-500/40 to-transparent" />
            <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-finn-500/40 to-transparent" />
          </div>
        )}
      </div>
      
      {hoverEffect && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
          style={{ maskImage }}
        />
      )}
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
