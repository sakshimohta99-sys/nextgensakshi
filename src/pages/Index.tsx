import { useState, useEffect } from "react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import nextgenLogo from "@/assets/nextgen-logo.png";
import { ChevronDown, Rocket, Mail } from "lucide-react";

const companies = [
  "Round Table India",
  "ICF",
  "Arihant Group",
  "Vinayak Group",
  "Nipch Plastics",
  "Ambika Dhatoo",
  "Company Logo 7",
  "Company Logo 8",
  "Company Logo 9",
  "Company Logo 10",
  "Company Logo 11",
  "Company Logo 12",
  "Company Logo 13",
  "Company Logo 14",
  "Company Logo 15",
];

const steps = [
  {
    number: "01",
    title: "Let's Talk AI",
    description: "A quick call to understand your team, your goals, and where AI fits in.",
  },
  {
    number: "02",
    title: "Find Your Fit",
    description: "We match you with the right program — no fluff, just what your team actually needs.",
  },
  {
    number: "03",
    title: "Watch Your Team Level Up",
    description: "Live, hands-on workshops. Your team walks out using AI from day one.",
  },
];

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
            The one thing more dangerous than AI is someone who is using it
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
      >
        {/* Full shader background (same as Page 1) */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatedShaderBackground />
        </div>

        {/* Sticky Nav */}
        <nav className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-sm bg-black/30">
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2">
            <Rocket size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary-foreground font-montserrat">
              Are You Ready to Become AI-Powered?
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-8 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight font-montserrat text-white">
            Make Your Company/Organization
            <br />
            AI-First
          </h1>

          {/* CTA Button */}
          <a
            href="https://calendly.com/sakshi-mohta99"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center rounded-full border-2 border-white bg-white px-8 py-4 text-base md:text-lg font-semibold text-foreground transition-all hover:bg-transparent hover:text-white font-montserrat"
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

      {/* ===== PAGE 4: SOCIAL PROOF + HOW IT WORKS ===== */}
      <section
        id="social-proof"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F5F0FF 0%, #FFFFFF 7%, #FFFFFF 100%)",
        }}
      >
        {/* Sticky Nav */}
        <nav className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-sm bg-white/70">
          <img src={nextgenLogo} alt="NextGen Logo" className="h-10 w-10 object-contain" />
          <a
            href="mailto:sakshi.mohta99@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 font-montserrat"
          >
            <Mail size={16} />
            Get in Touch
          </a>
        </nav>

        {/* ── PART A: Logo Marquee ── */}
        <div className="pt-20 pb-16">
          <h2
            className="text-center font-montserrat font-bold text-[#1a1a1a] mb-14 px-6"
            style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
          >
            Organizations We've Powered with AI
          </h2>

          <div className="relative overflow-hidden">
            {/* Fade left */}
            <div
              className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #ffffff 50%, transparent)" }}
            />
            {/* Fade right */}
            <div
              className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #ffffff 50%, transparent)" }}
            />

            {/* Two copies for seamless loop */}
            <div className="animate-marquee">
              {[0, 1].map((ci) => (
                <div key={ci} className="flex items-center gap-8 px-4">
                  {companies.map((name, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center rounded-xl px-7 py-4 min-w-[152px] h-16 cursor-default transition-all duration-300"
                      style={{
                        background: "#f3f4f6",
                        filter: "grayscale(1)",
                        opacity: 0.72,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.filter = "grayscale(0)";
                        (e.currentTarget as HTMLDivElement).style.opacity = "1";
                        (e.currentTarget as HTMLDivElement).style.background = "#ede9fa";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.filter = "grayscale(1)";
                        (e.currentTarget as HTMLDivElement).style.opacity = "0.72";
                        (e.currentTarget as HTMLDivElement).style.background = "#f3f4f6";
                      }}
                    >
                      <span className="text-sm font-semibold font-montserrat text-gray-600 text-center whitespace-nowrap leading-tight">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PART B: How It Works ── */}
        <div className="py-20 px-6">
          <h2
            className="text-center font-montserrat font-bold text-[#1a1a1a] mb-20"
            style={{ fontSize: "clamp(30px, 4.5vw, 48px)" }}
          >
            How It Works
          </h2>

          {/* Desktop zigzag */}
          <div className="max-w-4xl mx-auto hidden md:block">
            {/* Step 1 – left */}
            <div className="flex justify-start">
              <div className="w-5/12 bg-white rounded-2xl shadow-md p-8">
                <span className="block text-5xl font-bold text-[#7555C0] font-montserrat mb-3">01</span>
                <h3 className="text-xl font-semibold text-[#1a1a1a] font-montserrat mb-3">Let's Talk AI</h3>
                <p className="text-[#6B7280] font-montserrat text-base leading-relaxed">
                  A quick call to understand your team, your goals, and where AI fits in.
                </p>
              </div>
            </div>

            {/* Connector 1: down → right */}
            <div className="relative h-24 w-full">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 24"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 21 0 L 21 12 L 79 12 L 79 24"
                  fill="none"
                  stroke="#7555C0"
                  strokeWidth="1.2"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                  className="animate-dash"
                />
              </svg>
            </div>

            {/* Step 2 – right */}
            <div className="flex justify-end">
              <div className="w-5/12 bg-white rounded-2xl shadow-md p-8">
                <span className="block text-5xl font-bold text-[#7555C0] font-montserrat mb-3">02</span>
                <h3 className="text-xl font-semibold text-[#1a1a1a] font-montserrat mb-3">Find Your Fit</h3>
                <p className="text-[#6B7280] font-montserrat text-base leading-relaxed">
                  We match you with the right program — no fluff, just what your team actually needs.
                </p>
              </div>
            </div>

            {/* Connector 2: down → left */}
            <div className="relative h-24 w-full">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 24"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 79 0 L 79 12 L 21 12 L 21 24"
                  fill="none"
                  stroke="#7555C0"
                  strokeWidth="1.2"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                  className="animate-dash"
                  style={{ animationDelay: "0.7s" }}
                />
              </svg>
            </div>

            {/* Step 3 – left */}
            <div className="flex justify-start">
              <div className="w-5/12 bg-white rounded-2xl shadow-md p-8">
                <span className="block text-5xl font-bold text-[#7555C0] font-montserrat mb-3">03</span>
                <h3 className="text-xl font-semibold text-[#1a1a1a] font-montserrat mb-3">Watch Your Team Level Up</h3>
                <p className="text-[#6B7280] font-montserrat text-base leading-relaxed">
                  Live, hands-on workshops. Your team walks out using AI from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: straight vertical */}
          <div className="max-w-lg mx-auto md:hidden flex flex-col">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full bg-white rounded-2xl shadow-md p-8">
                  <span className="block text-5xl font-bold text-[#7555C0] font-montserrat mb-3">{step.number}</span>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] font-montserrat mb-3">{step.title}</h3>
                  <p className="text-[#6B7280] font-montserrat text-base leading-relaxed">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="h-16 flex justify-center">
                    <svg width="20" viewBox="0 0 20 64" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M 10 0 L 10 64"
                        fill="none"
                        stroke="#7555C0"
                        strokeWidth="2"
                        strokeDasharray="4 5"
                        strokeLinecap="round"
                        className="animate-dash"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Custom note */}
          <p className="text-center font-montserrat text-base italic text-[#6B7280] mt-16 mb-10 max-w-2xl mx-auto px-4">
            Have unique training needs? We also build custom programs for organizations.
          </p>

          {/* CTA */}
          <div className="flex justify-center px-6">
            <a
              href="https://calendly.com/sakshi-mohta99"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center rounded-full bg-[#7555C0] px-10 py-4 text-white font-semibold font-montserrat text-base transition-all hover:bg-[#8a68d4] hover:shadow-xl"
              style={{ boxShadow: undefined }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(117,85,192,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
              }}
            >
              Book Your Meeting →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
