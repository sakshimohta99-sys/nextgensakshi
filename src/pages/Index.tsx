import { useState, useEffect } from "react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import nextgenLogo from "@/assets/nextgen-logo.png";
import { ChevronDown, Rocket, Mail } from "lucide-react";

const courses = [
  {
    title: "Brand Yourself with AI",
    tagline:
      "Build a powerful personal brand using AI tools — from content to visibility.",
  },
  {
    title: "Train Your Team in AI",
    tagline:
      "Role-based AI training to make every employee faster and smarter.",
  },
  {
    title: "Work Smarter with AI",
    tagline:
      "Automate the mundane. Focus on what actually matters.",
  },
];

const Index = () => {
  const [showTagline, setShowTagline] = useState(false);
  const [showChevron, setShowChevron] = useState(false);

  useEffect(() => {
    const taglineTimer = setTimeout(() => setShowTagline(true), 3000);
    const chevronTimer = setTimeout(() => setShowChevron(true), 4200);
    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(chevronTimer);
    };
  }, []);

  return (
    <div className="scroll-smooth">
      {/* ===== PAGE 1: HERO ===== */}
      <section className="relative h-screen overflow-hidden">
        <AnimatedShaderBackground />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <img
            src={nextgenLogo}
            alt="NextGen Logo"
            className="mb-6 w-36 h-36 md:w-44 md:h-44 object-contain"
            style={{ filter: "drop-shadow(0 0 40px rgba(120, 80, 220, 0.5))" }}
          />

          <p
            className={`max-w-lg text-center text-base md:text-lg font-bold tracking-widest uppercase transition-all duration-700 ease-out font-montserrat ${
              showTagline
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
            style={{
              color: "#000000",
              textShadow: "0 0 30px rgba(0, 0, 0, 0.6)",
              letterSpacing: "0.18em",
            }}
          >
            The one thing more dangerous than AI is someone using it
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 ${
            showChevron ? "opacity-70" : "opacity-0"
          }`}
        >
          <a href="#cta" aria-label="Scroll down">
            <ChevronDown className="animate-bounce-subtle" size={32} color="#FFFFFF" />
          </a>
        </div>
      </section>

      {/* ===== PAGE 2: CTA SECTION ===== */}
      <section
        id="cta"
        className="relative min-h-screen overflow-hidden"
        style={{ background: "#FAFAFA" }}
      >
        {/* Faded shader background */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
          <AnimatedShaderBackground />
        </div>

        {/* Sticky Nav */}
        <nav className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-sm bg-white/70">
          <img
            src={nextgenLogo}
            alt="NextGen Logo"
            className="h-10 w-10 object-contain"
          />
          <a
            href="mailto:sakshi.mohta99@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 font-montserrat"
          >
            <Mail size={16} />
            Get in Touch
          </a>
        </nav>

        {/* Main CTA content */}
        <div className="relative z-20 flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2">
            <Rocket size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary font-montserrat">
              Are You Ready to Become AI-Powered?
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-8 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight font-montserrat text-foreground">
            Make Your Company/Organization
            <br />
            AI-First
          </h1>

          {/* CTA Button */}
          <a
            href="https://calendly.com/sakshi-mohta99"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center rounded-full border-2 border-foreground bg-foreground px-8 py-4 text-base md:text-lg font-semibold text-background transition-all hover:bg-transparent hover:text-foreground font-montserrat"
          >
            Book Your Meeting
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* ===== PAGE 3: OUR COURSES ===== */}
      <section
        id="courses"
        className="relative min-h-screen overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #EDE5FF 0%, #F5F0FF 15%, #FFFFFF 40%, #FFFFFF 100%)",
        }}
      >
        {/* Light Nav */}
        <nav className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-sm bg-white/70">
          <img
            src={nextgenLogo}
            alt="NextGen Logo"
            className="h-10 w-10 object-contain"
          />
          <a
            href="mailto:sakshi.mohta99@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 font-montserrat"
          >
            <Mail size={16} />
            Get in Touch
          </a>
        </nav>

        {/* Courses content */}
        <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 py-16">
          <h2 className="mb-16 text-3xl md:text-5xl font-bold text-foreground font-montserrat text-center">
            Our Services
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-16">
            {courses.map((course, i) => (
              <div key={i} className="glow-card-wrapper group">
                <div className="glow-card-border" />
                <div className="glow-card-content">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary font-montserrat mb-4">
                    {course.title}
                  </h3>
                  <p className="text-sm md:text-base font-normal font-montserrat" style={{ color: "#D1D5DB" }}>
                    {course.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://calendly.com/sakshi-mohta99"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center rounded-full bg-primary px-8 py-4 text-base md:text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/85 font-montserrat"
          >
            Book Your Meeting
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
