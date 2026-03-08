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
          className="mb-8 w-48 h-48 object-contain animate-float drop-shadow-2xl"
        />
        <p className="max-w-xl text-center text-lg md:text-xl font-medium tracking-wide text-hero-tagline drop-shadow-lg">
          The one thing more dangerous than AI is someone using it
        </p>
      </div>
    </div>
  );
};

export default Index;
