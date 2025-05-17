
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  className?: string;
  intensity?: "light" | "medium" | "strong";
  colorScheme?: "default" | "warm" | "cool";
}

const AnimatedBackground = ({ 
  className = "", 
  intensity = "medium",
  colorScheme = "default"
}: AnimatedBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  // Define colors based on color scheme
  let primaryColor = "bg-rose-200/30";
  let secondaryColor = "bg-blue-200/20";
  let tertiaryColor = "bg-amber-200/20";
  
  if (colorScheme === "warm") {
    primaryColor = "bg-orange-200/30";
    secondaryColor = "bg-amber-200/20";
    tertiaryColor = "bg-rose-200/20";
  } else if (colorScheme === "cool") {
    primaryColor = "bg-blue-200/30";
    secondaryColor = "bg-cyan-200/20";
    tertiaryColor = "bg-indigo-200/20";
  }
  
  // Calculate blob movement intensity
  const movementFactor = intensity === "light" ? 15 : intensity === "strong" ? 40 : 25;
  
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <motion.div 
        className={`absolute top-[10%] left-[10%] w-72 h-72 rounded-full ${primaryColor} blur-3xl`}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        style={{
          x: mousePosition.x / movementFactor,
          y: mousePosition.y / movementFactor,
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div 
        className={`absolute top-[40%] right-[15%] w-80 h-80 rounded-full ${secondaryColor} blur-3xl`}
        animate={{
          x: [0, -70, 70, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        style={{
          x: -mousePosition.x / (movementFactor * 1.5),
          y: -mousePosition.y / (movementFactor * 1.5),
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div 
        className={`absolute bottom-[20%] left-[20%] w-96 h-96 rounded-full ${tertiaryColor} blur-3xl`}
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -50, 50, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        style={{
          x: mousePosition.x / (movementFactor * 2),
          y: mousePosition.y / (movementFactor * 2),
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      {/* Additional subtle animations for more visual interest */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-green-100/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-purple-100/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
