import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagicalButton } from "@/components/MagicalButton";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Card } from "@/components/ui/card";
import { Flower, TreePine, Lightbulb, Heart } from "lucide-react";

interface GardenElement {
  id: number;
  icon: React.ReactNode;
  message: string;
  position: { top: string; left: string };
  delay: string;
}

export const MagicalGarden = () => {
  const [revealedMessages, setRevealedMessages] = useState<number[]>([]);
  const navigate = useNavigate();

  const gardenElements: GardenElement[] = [
    {
      id: 1,
      icon: <Flower className="w-8 h-8 text-magical-pink" />,
      message: "Like this tulip, you bloom more beautiful each day ❤️",
      position: { top: "60%", left: "20%" },
      delay: "0s"
    },
    {
      id: 2,
      icon: <TreePine className="w-10 h-10 text-magical-purple" />,
      message: "Under this sakura tree, I dream of all our future memories 🌸",
      position: { top: "30%", left: "70%" },
      delay: "1s"
    },
    {
      id: 3,
      icon: <Lightbulb className="w-6 h-6 text-magical-gold" />,
      message: "This lantern glows with the warmth of my love for you ✨",
      position: { top: "80%", left: "60%" },
      delay: "2s"
    },
    {
      id: 4,
      icon: <Flower className="w-6 h-6 text-magical-blue" />,
      message: "Every petal whispers how much you mean to me 💙",
      position: { top: "45%", left: "40%" },
      delay: "1.5s"
    },
    {
      id: 5,
      icon: <Heart className="w-7 h-7 text-magical-pink" />,
      message: "Like this butterfly, you bring magic wherever you go 🦋",
      position: { top: "25%", left: "30%" },
      delay: "0.5s"
    }
  ];

  const handleElementClick = (id: number) => {
    if (!revealedMessages.includes(id)) {
      setRevealedMessages([...revealedMessages, id]);
    }
  };

  return (
    <div className="min-h-screen starry-background relative overflow-hidden">
      <FloatingParticles count={35} />
      
      {/* Garden Title */}
      <div className="text-center pt-8 pb-4">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold magical-text">
          Enchanted Garden of Love
        </h1>
        <p className="text-magical-star-white/80 font-inter mt-4 text-lg">
          Click on the magical elements to reveal hidden messages
        </p>
      </div>

      {/* Garden Elements */}
      <div className="relative h-screen">
        {gardenElements.map((element) => (
          <div key={element.id}>
            {/* Interactive Element */}
            <button
              onClick={() => handleElementClick(element.id)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float hover:scale-110 transition-transform duration-300"
              style={{
                top: element.position.top,
                left: element.position.left,
                animationDelay: element.delay
              }}
            >
              <div className="bg-magical-night/40 backdrop-blur-sm border border-magical-gold/30 rounded-full p-4 hover:bg-magical-night/60 transition-all duration-300 magical-glow">
                {element.icon}
              </div>
            </button>

            {/* Revealed Message */}
            {revealedMessages.includes(element.id) && (
              <div
                className="absolute animate-fade-in pointer-events-none"
                style={{
                  top: `calc(${element.position.top} - 80px)`,
                  left: element.position.left,
                  transform: "translateX(-50%)"
                }}
              >
                <Card className="bg-magical-night/90 backdrop-blur-lg border-magical-gold/50 p-4 rounded-2xl max-w-xs">
                  <p className="text-magical-star-white font-inter text-sm text-center">
                    {element.message}
                  </p>
                </Card>
              </div>
            )}
          </div>
        ))}

        {/* Garden to Gallery Button */}
        {revealedMessages.length >= 3 && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
            <MagicalButton
              onClick={() => navigate("/gallery")}
              variant="portal"
            >
              Visit Memory Gallery
            </MagicalButton>
          </div>
        )}
      </div>

      {/* Magical Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-40 h-40 bg-magical-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-magical-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-magical-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
    </div>
  );
};