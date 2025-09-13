import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface MagicalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "magical" | "portal";
}

export const MagicalButton = ({ children, onClick, className, variant = "magical" }: MagicalButtonProps) => {
  const variants = {
    default: "bg-primary hover:bg-primary/90",
    magical: "magical-button bg-gradient-to-r from-magical-gold/80 to-magical-gold text-magical-deep-night",
    portal: "bg-gradient-to-r from-magical-purple via-magical-pink to-magical-blue hover:from-magical-blue hover:via-magical-purple hover:to-magical-pink"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden font-playfair text-lg px-8 py-6 rounded-2xl group",
        "transition-all duration-500 transform hover:scale-105 active:scale-95",
        "border border-magical-gold/40 backdrop-blur-sm shadow-lg",
        "hover:shadow-2xl hover:shadow-magical-gold/20",
        variants[variant],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-3 font-semibold">
        <Sparkles className="w-5 h-5 animate-magical-glow transition-transform group-hover:rotate-180 duration-500" />
        {children}
        <Sparkles className="w-5 h-5 animate-magical-glow transition-transform group-hover:rotate-180 duration-500" />
      </span>
      
      {/* Magical Effects */}
      {variant === "magical" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-magical-gold-glow/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-magical-gold rounded-full animate-ping" style={{ animationDelay: "0s" }} />
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-magical-gold-glow rounded-full animate-ping" style={{ animationDelay: "0.3s" }} />
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-magical-gold-glow rounded-full animate-ping" style={{ animationDelay: "0.6s" }} />
          </div>
        </>
      )}
      
      {variant === "portal" && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-magical-gold/20 via-transparent to-magical-gold/20 animate-pulse" />
      )}
    </Button>
  );
};