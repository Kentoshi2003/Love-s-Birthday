import { MagicalButton } from "@/components/MagicalButton";
import { FloatingParticles } from "@/components/FloatingParticles";
import { CursorFireflies } from "@/components/CursorFireflies";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen starry-background flex items-center justify-center relative overflow-hidden">
      <FloatingParticles count={30} />
      <CursorFireflies />
      
      {/* Main Content */}
      <div className="text-center z-10 space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold magical-text animate-magical-glow">
            Happy Birthday
          </h1>
          <h2 className="font-playfair text-4xl md:text-6xl text-magical-pink animate-float">
            Love
          </h2>
          <p className="text-magical-star-white/80 text-xl md:text-2xl font-inter mt-8 max-w-md mx-auto">
            A magical journey awaits you on your special day
          </p>
        </div>

        <div className="mt-12">
          <MagicalButton
            onClick={() => navigate("/birthday-verification")}
            className="text-magical-deep-night font-semibold"
          >
            Click Me
          </MagicalButton>
        </div>
      </div>

      {/* Magical Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-magical-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-magical-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-magical-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: "0.5s" }} />
    </div>
  );
};