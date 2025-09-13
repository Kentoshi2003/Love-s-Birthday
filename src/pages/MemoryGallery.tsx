import { useState } from "react";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MagicalButton } from "@/components/MagicalButton";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

interface MemoryItem {
  id: number;
  type: "image" | "video";
  title: string;
  description: string;
  placeholder: string;
  src: string | string[]; // allow single or multiple
}

export const MemoryGallery = () => {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  // Memories with actual media
  const memories: MemoryItem[] = [
    {
      id: 1,
      type: "image",
      title: "Our First Date",
      description: "The moment I knew you were special ❤️",
      placeholder: "🌹 Beautiful sunset",
      src: [
        "/assets/d1.jpeg",
        "/assets/d2.jpg",
        "/assets/d3.jpg",
        "/assets/d4.jpg",
        "/assets/d5.jpg",
        "/assets/d6.jpg",
        "/assets/d7.jpg",
      ],
    },
    {
      id: 2,
      type: "video",
      title: "Birthday Video Edit",
      description: "A little gift I made, just for you 🎥❤️",
      placeholder: "🎂 Your special day",
      src: "/assets/v1.mp4",
    },
    {
      id: 3,
      type: "image",
      title: "Mesmerizing You",
      description: "Every glance steals my heart ❤️",
      placeholder: "💕 My beautiful love",
      src: [
        "/assets/l1.jpg",
        "/assets/l2.jpg",
        "/assets/l3.jpg",
        "/assets/l4.jpg",
        "/assets/l5.jpg",
        "/assets/l6.jpg",
        "/assets/l7.jpg",
        "/assets/l8.jpg",
        "/assets/l9.jpg",
      ],
    },

    {
      id: 4,
      type: "video",
      title: "Your Favorite Flower",
      description: "A bloom as beautiful as you 🌷❤️",
      placeholder: "🌸 My love in every petal",
      src: "/assets/tulips.mp4",
    },
    {
      id: 5,
      type: "image",
      title: "Adventure Together",
      description: "Our first overnight camping ⛰️",
      placeholder: "📸 Camping memories",
      src: [
        "/assets/c1.jpeg",
        "/assets/c2.jpg",
        "/assets/c3.jpg",
        "/assets/c4.jpg",
        "/assets/c5.jpeg",
      ],
    },

    {
      id: 6,
      type: "image",
      title: "AI Generated Picture",
      description: "LDR Means nothing with our love ❤️",
      placeholder: "❤️ Love and Loyalty",
      src: ["/assets/ai1.jpg", "/assets/ai2.jpg"],
    },
  ];

  // Sync carousel index with API
  const handleSelect = (api: CarouselApi) => {
    setCurrentIndex(api.selectedScrollSnap());
  };

  return (
    <div className="min-h-screen starry-background relative overflow-hidden p-8">
      <FloatingParticles count={25} />

      {/* Header */}
      <div className="text-center mb-12">
        <button
          onClick={() => navigate("/garden")}
          className="absolute left-8 top-8 text-magical-gold hover:text-magical-gold-glow transition-colors"
        >
          <ArrowLeft className="w-8 h-8" />
        </button>

        <h1 className="font-playfair text-4xl md:text-6xl font-bold magical-text mb-4">
          Gallery of Memories
        </h1>
        <p className="text-magical-star-white/80 font-inter text-lg">
          Click on any frame to relive our magical moments together
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memories.map((memory, index) => (
          <Card
            key={memory.id}
            className="bg-magical-night/60 backdrop-blur-lg border-magical-gold/30 rounded-3xl p-6 hover:border-magical-gold/60 transition-all duration-300 cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={() => {
              setSelectedMemory(memory);
              setCurrentIndex(0);
            }}
          >
            <div className="relative aspect-square mb-4 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
              {memory.type === "image" ? (
                <img
                  src={Array.isArray(memory.src) ? memory.src[0] : memory.src}
                  alt={memory.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <video
                  src={memory.src as string}
                  muted
                  loop
                  autoPlay
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}

              {/* Glow overlay */}
              <div className="absolute inset-0 bg-magical-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Placeholder text */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-magical-star-white text-lg font-inter">
                  {memory.placeholder}
                </span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="font-playfair text-xl font-semibold text-magical-gold">
                {memory.title}
              </h3>
              <p className="text-magical-star-white/80 font-inter text-sm">
                {memory.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Selected Memory Modal */}
      {selectedMemory && (
        <div className="fixed inset-0 bg-magical-deep-night/90 backdrop-blur-lg flex items-center justify-center z-50 p-4">
          <Card className="bg-magical-night/90 border-magical-gold/50 rounded-3xl p-6 inline-block">
            <div className="text-center space-y-6">
              <h2 className="font-playfair text-3xl font-bold magical-text">
                {selectedMemory.title}
              </h2>

              <div className="relative flex items-center justify-center">
                {selectedMemory.type === "image" ? (
                  Array.isArray(selectedMemory.src) ? (
                    <>
                      <Carousel
                        setApi={(api) => {
                          setCarouselApi(api);
                          api.on("select", () => handleSelect(api));
                        }}
                        className="w-[90vw] max-w-3xl"
                      >
                        <CarouselContent>
                          {selectedMemory.src.map((image, idx) => (
                            <CarouselItem
                              key={idx}
                              className="flex justify-center"
                            >
                              <img
                                src={image}
                                alt={`${selectedMemory.title} ${idx + 1}`}
                                className="max-h-[70vh] rounded-2xl object-contain"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>

                      {/* Dots */}
                      <div className="flex justify-center mt-4 space-x-2">
                        {selectedMemory.src.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => carouselApi?.scrollTo(idx)}
                            className={`w-3 h-3 rounded-full transition ${
                              idx === currentIndex
                                ? "bg-magical-gold"
                                : "bg-magical-star-white/40"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <img
                      src={selectedMemory.src}
                      alt={selectedMemory.title}
                      className="max-w-[90vw] max-h-[70vh] rounded-2xl object-contain"
                    />
                  )
                ) : (
                  <video
                    src={selectedMemory.src as string}
                    controls
                    className="max-w-[90vw] max-h-[70vh] rounded-2xl object-contain"
                  />
                )}
              </div>

              <p className="text-magical-star-white/80 font-inter text-lg">
                {selectedMemory.description}
              </p>

              <MagicalButton
                onClick={() => setSelectedMemory(null)}
                variant="portal"
              >
                Close
              </MagicalButton>
            </div>
          </Card>
        </div>
      )}

      {/* Magical Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-magical-purple/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-28 h-28 bg-magical-pink/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-20 w-24 h-24 bg-magical-blue/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </div>
  );
};
