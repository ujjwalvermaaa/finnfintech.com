
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

interface FinnButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  isLoading?: boolean;
  loadingText?: string;
  glowEffect?: boolean;
  gradient?: boolean;
}

const FinnButton = forwardRef<HTMLButtonElement, FinnButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default", 
    isLoading = false, 
    loadingText, 
    children, 
    asChild,
    glowEffect = false,
    gradient = false,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonContent = (
      <>
        {isLoading ? (
          <span className="flex items-center">
            <span className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2" />
            <span>{loadingText || "Loading..."}</span>
          </span>
        ) : (
          <span className="relative z-10">{children}</span>
        )}
      </>
    );

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "relative overflow-hidden group font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] rounded-xl",
          {
            "bg-finn-600 hover:bg-finn-700 text-white": variant === "default" && !gradient,
            "border-finn-600 text-finn-600 hover:text-white hover:bg-finn-600": variant === "outline",
            "bg-white text-finn-800 border border-white/10 hover:bg-white hover:text-finn-700": variant === "secondary",
            "opacity-80 pointer-events-none": isLoading,
            "from-finn-500 to-emerald-500 bg-gradient-to-r text-white": gradient && variant === "default",
            "shadow-lg hover:shadow-xl": glowEffect,
            "shadow-finn-500/40": glowEffect && variant === "default",
            "shadow-white/30": glowEffect && variant === "secondary",
          },
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={isLoading || props.disabled}
        asChild={asChild}
        {...props}
      >
        {asChild ? children : (
          <>
            {buttonContent}
            <motion.div
              className={cn(
                "absolute inset-0 bg-white/10",
                { "bg-finn-400/20": variant === "default" }
              )}
              initial={{ scale: 0, opacity: 0 }}
              animate={isHovered ? { scale: 2, opacity: 0.15 } : { scale: 0, opacity: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            {glowEffect && (
              <motion.div 
                className={cn(
                  "absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  {
                    "bg-finn-400": variant === "default",
                    "bg-white/30": variant === "secondary",
                  }
                )}
                initial={{ opacity: 0 }}
                animate={isHovered ? { opacity: 0.4 } : { opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ filter: "blur(8px)" }}
              />
            )}
          </>
        )}
      </Button>
    );
  }
);

FinnButton.displayName = "FinnButton";

export { FinnButton };
