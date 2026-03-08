import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import nextgenLogo from "@/assets/nextgen-logo.png";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedShaderBackground />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <img
          src={nextgenLogo}
          alt="NextGen Logo"
          className="mb-6 w-40 h-40 object-contain animate-float"
          style={{ filter: "drop-shadow(0 0 40px rgba(120, 80, 220, 0.5))" }}
        />
        <p
          className="max-w-lg text-center text-base md:text-lg font-light tracking-widest uppercase"
          style={{
            color: "rgba(180, 160, 220, 0.55)",
            textShadow: "0 0 20px rgba(120, 80, 220, 0.3)",
            letterSpacing: "0.25em",
          }}
        >
          The one thing more dangerous than AI is someone using it
        </p>
      </div>
    </div>
  );
};

export default Index;
