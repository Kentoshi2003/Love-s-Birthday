import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MagicalButton } from "@/components/MagicalButton";
import { FloatingParticles } from "@/components/FloatingParticles";

export const MessagePage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const fullMessage = "My love, on this day the world was blessed with your light, and I was blessed with you. Your smile shines brighter than the stars above, and your love is the sweetest melody my heart will ever know. You are my greatest gift, my forever dream. So I made this little world of magic just for you because you deserve nothing less than wonder itself. Happy Birthday, my love.  Come, let’s wander through the enchantment together..."
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullMessage.length) {
        setDisplayedText(fullMessage.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 1000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen starry-background flex items-center justify-center relative overflow-hidden p-8">
      <FloatingParticles count={20} />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold magical-text mb-12">
          A Message From the Heart
        </h1>
        
        <div className="bg-magical-night/60 backdrop-blur-lg border border-magical-gold/30 rounded-3xl p-8 md:p-12">
          <p className="font-inter text-lg md:text-xl text-magical-star-white leading-relaxed typewriter">
            {displayedText}
          </p>
        </div>

        {showButton && (
          <div className="animate-fade-in">
            <MagicalButton
              onClick={() => navigate("/garden")}
              variant="portal"
            >
              Enter the Magical Garden
            </MagicalButton>
          </div>
        )}
      </div>

      {/* Aurora Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-magical-purple/10 via-transparent to-magical-pink/10 pointer-events-none" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-magical-blue/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-magical-pink/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
    </div>
  );
};