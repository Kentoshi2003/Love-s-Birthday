import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagicalButton } from "@/components/MagicalButton";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, Sparkles } from "lucide-react";

export const BirthdayVerification = () => {
  const [birthday, setBirthday] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  
  const correctBirthday = "2003-09-14";

  const handleVerification = () => {
    if (birthday === correctBirthday) {
      navigate("/message");
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen starry-background flex items-center justify-center relative overflow-hidden p-4">
      <FloatingParticles count={35} />
      
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 aurora-bg pointer-events-none opacity-40" />
      
      {/* Main Verification Card */}
      <Card className="magical-card p-8 rounded-3xl max-w-md w-full animate-fade-in shadow-2xl relative z-10">
        <div className="text-center space-y-8">
          {/* Magical Icon */}
          <div className="flex justify-center">
            <div className="relative shimmer-effect">
              <div className="bg-magical-night/60 rounded-full p-6 border border-magical-gold/40">
                <Calendar className="w-12 h-12 text-magical-gold animate-magical-glow" />
                <Sparkles className="w-5 h-5 text-magical-pink absolute -top-1 -right-1 animate-float particle-float" />
                <Sparkles className="w-4 h-4 text-magical-blue absolute -bottom-1 -left-1 animate-float" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </div>
          
          {/* Title Section */}
          <div className="space-y-4">
            <h1 className="font-playfair text-4xl font-bold magical-text">
              Enchanted Portal
            </h1>
            <p className="text-magical-star-white/90 font-inter text-lg leading-relaxed">
              The ancient magic requires your birth date to unlock the celestial gateway...
            </p>
          </div>

          {/* Input Section */}
          <div className="space-y-6">
            <div className="text-left space-y-3">
              <Label htmlFor="birthday" className="text-magical-gold font-inter font-medium text-lg">
                Your Sacred Day
              </Label>
              <div className="relative">
                <Input
                  id="birthday"
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="bg-magical-deep-night/70 border-magical-gold/40 text-magical-star-white focus:border-magical-gold focus:ring-2 focus:ring-magical-gold/30 text-lg p-4 rounded-xl transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-magical-gold/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Error Animation */}
            {showError && (
              <div className="flex items-center justify-center space-x-3 text-magical-pink animate-bounce">
                <Heart className="w-6 h-6 animate-magical-glow" />
                <span className="font-inter text-lg font-medium">The magic needs the correct date, my love!</span>
                <Heart className="w-6 h-6 animate-magical-glow" />
              </div>
            )}

            {/* Magical Submit Button */}
            <MagicalButton
              onClick={handleVerification}
              className="w-full text-lg py-6 relative overflow-hidden"
              variant="portal"
            >
              <span className="relative z-10">✨ Unlock the Magic ✨</span>
            </MagicalButton>
          </div>
        </div>
      </Card>

      {/* Enhanced Floating Orbs */}
      <div className="absolute top-20 left-16 w-24 h-24 bg-magical-purple/30 rounded-full blur-xl animate-float particle-float" />
      <div className="absolute bottom-20 right-16 w-20 h-20 bg-magical-gold/30 rounded-full blur-xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-magical-pink/30 rounded-full blur-xl animate-float particle-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-1/4 w-18 h-18 bg-magical-blue/30 rounded-full blur-xl animate-float" style={{ animationDelay: "0.8s" }} />
    </div>
  );
};