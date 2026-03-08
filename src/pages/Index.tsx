import { useState } from "react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import nextgenLogo from "@/assets/nextgen-logo.png";

const Index = () => {
  const [showTagline, setShowTagline] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden cursor-pointer" onClick={() => setShowTagline(true)}>
      <AnimatedShaderBackground />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <img
          src={nextgenLogo}
          alt="NextGen Logo"
          className="mb-6 w-40 h-40 object-contain animate-float cursor-pointer transition-transform duration-300 hover:scale-110"
          style={{ filter: "drop-shadow(0 0 40px rgba(120, 80, 220, 0.5))" }}
          onClick={() => setShowTagline(true)}
        />
        <p
          className={`max-w-lg text-center text-lg md:text-xl font-bold tracking-widest uppercase transition-all duration-700 ease-out ${
            showTagline
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
          }`}
          style={{
            color: "#000000",
            textShadow: "0 0 30px rgba(0, 0, 0, 0.6)",
            letterSpacing: "0.2em",
          }}
        >
          The one thing more dangerous than AI is someone using it
        </p>
      </div>
    </div>
  );
};

export default Index;
