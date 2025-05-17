import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <img src="/favicon.ico" alt="Finn Fintech Logo" className="hidden lg:block h-8 w-8 rounded-md object-contain" />
      <span className="font-display font-bold text-xs sm:text-sm md:text-lg uppercase tracking-tighter whitespace-nowrap px-0.5" style={{lineHeight: 1, letterSpacing: '-0.04em', maxWidth: '100vw', overflowX: 'auto', display: 'block'}}>FINN FINTECH PVT LTD</span>
    </div>
  );
};

export default Logo;
