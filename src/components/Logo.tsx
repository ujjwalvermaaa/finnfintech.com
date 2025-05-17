import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <img src="/favicon.ico" alt="Finn Fintech Logo" className="hidden lg:block h-8 w-8 rounded-md object-contain" />
      <span className="font-display font-bold text-xl uppercase tracking-wide">FINN FINTECH PVT LTD</span>
    </div>
  );
};

export default Logo;
