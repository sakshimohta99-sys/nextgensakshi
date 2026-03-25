import { useState, useEffect, useRef } from "react";
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

const animateCount = (target: number, setter: (n: number) => void, duration: number) => {
  const start = performance.now();
  const tick = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setter(Math.round(eased * target));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const Index = () => {
  const [showTagline, setShowTagline] = useState(false);
  const [showChevron, setShowChevron] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [stat1, setStat1] = useState(0);
  const [stat2, setStat2] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsAnimated = useRef(false);

  useEffect(() => {
    const taglineTimer = setTimeout(() => setShowTagline(true), 3000);
    const chevronTimer = setTimeout(() => setShowChevron(true), 4200);
    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(chevronTimer);
    };
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true;
          animateCount(525, setStat1, 1800);
          animateCount(60, setStat2, 1400);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
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
        <div className="flex flex-col items-center px-6 py-20">
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
          background: "linear-gradient(180deg, #EDE5FF 0%, #F5F0FF 20%, #FAF7FF 60%, #FFFFFF 100%)",
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

        {/* ── Section Divider ── */}
        <div className="flex justify-center py-10">
          <div style={{ width: "400px", height: "1.5px", background: "linear-gradient(90deg, transparent, #7555C0, transparent)" }} />
        </div>

        {/* ── PART B: How It Works ── */}
        <div className="py-10 px-6">
          <h2
            className="text-center font-montserrat font-bold text-[#1a1a1a] mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            How It Works
          </h2>

          {/* Desktop zigzag */}
          <div className="max-w-4xl mx-auto hidden md:block">
            {/* Step 1 – left */}
            <div className="flex justify-start">
              <div className="w-5/12 bg-white rounded-2xl shadow-md p-6">
                <span className="block text-4xl font-bold text-[#7555C0] font-montserrat mb-2">01</span>
                <h3 className="text-lg font-semibold text-[#1a1a1a] font-montserrat mb-2">Let's Talk AI</h3>
                <p className="text-[#6B7280] font-montserrat text-sm leading-relaxed">
                  A quick call to understand your team, your goals, and where AI fits in.
                </p>
              </div>
            </div>

            {/* Connector 1: down → right */}
            <div className="relative h-16 w-full">
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
              <div className="w-5/12 bg-white rounded-2xl shadow-md p-6">
                <span className="block text-4xl font-bold text-[#7555C0] font-montserrat mb-2">02</span>
                <h3 className="text-lg font-semibold text-[#1a1a1a] font-montserrat mb-2">Find Your Fit</h3>
                <p className="text-[#6B7280] font-montserrat text-sm leading-relaxed">
                  We match you with the right program — no fluff, just what your team actually needs.
                </p>
              </div>
            </div>

            {/* Connector 2: down → left */}
            <div className="relative h-16 w-full">
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
              <div className="w-5/12 bg-white rounded-2xl shadow-md p-6">
                <span className="block text-4xl font-bold text-[#7555C0] font-montserrat mb-2">03</span>
                <h3 className="text-lg font-semibold text-[#1a1a1a] font-montserrat mb-2">Watch Your Team Level Up</h3>
                <p className="text-[#6B7280] font-montserrat text-sm leading-relaxed">
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

        {/* ── STATS COUNTER ── */}
        <div
          ref={statsRef}
          className="py-20 px-6 flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-32"
        >
          <div className="flex flex-col items-center">
            <span className="font-montserrat font-bold text-[#7555C0]" style={{ fontSize: "clamp(48px, 6vw, 64px)" }}>
              {stat1}+
            </span>
            <span className="font-montserrat font-normal text-[#6B7280] mt-2" style={{ fontSize: "18px" }}>
              Professionals Trained
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-montserrat font-bold text-[#7555C0]" style={{ fontSize: "clamp(48px, 6vw, 64px)" }}>
              {stat2}+
            </span>
            <span className="font-montserrat font-normal text-[#6B7280] mt-2" style={{ fontSize: "18px" }}>
              Workshops Delivered
            </span>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: KNOW YOUR TRAINERS ===== */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F5F0FF 0%, #FFFFFF 30%, #FFFFFF 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2
            className="text-center font-montserrat font-bold text-[#1a1a1a] mb-16"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Know Your Trainers
          </h2>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* LEFT: Bios */}
            <div className="w-full md:w-[60%] flex flex-col gap-10">
              {/* Bio 1 */}
              <div>
                <h3 className="font-montserrat font-bold text-[#1a1a1a] mb-1" style={{ fontSize: "24px" }}>Sakshi Mohta</h3>
                <p className="font-montserrat font-normal text-[#7555C0] mb-4" style={{ fontSize: "16px" }}>Co-Founder</p>
                <p className="font-montserrat font-normal text-[#4B5563]" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                  Sakshi brings a business-first perspective to AI, shaped by her experience at PwC India and a background in marketing, branding, and operations. A B.Com (Hons) graduate from St. Xavier's College, Kolkata, she further honed her strategic thinking through the Executive Education Leadership Development Programme at the Indian School of Business.
                  <br /><br />
                  She focuses on one thing: making AI a practical, everyday tool for teams — not a buzzword. Driven by a mission to make AI accessible for every Indian organization, she's building NextGen to bridge the gap between AI's potential and real-world adoption.
                </p>
              </div>

              {/* Bio 2 */}
              <div>
                <h3 className="font-montserrat font-bold text-[#1a1a1a] mb-1" style={{ fontSize: "24px" }}>Yashvi Bhaia</h3>
                <p className="font-montserrat font-normal text-[#7555C0] mb-4" style={{ fontSize: "16px" }}>Co-Founder</p>
                <p className="font-montserrat font-normal text-[#4B5563]" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                  Yashvi brings a rare combination to AI training — a deep understanding of how people learn, paired with a sharp instinct for communication. With a double major in Psychology and English Literature, she approaches training design with a focus on clarity, engagement, and real retention.
                  <br /><br />
                  As a content strategist, she's helped build LinkedIn audiences of 250,000+ followers and grown her own Instagram community of 27,000+. At NextGen, she ensures every workshop isn't just informative — it's designed to make AI stick. From curriculum structure to delivery flow, she's the reason teams walk out confident, not confused.
                </p>
              </div>
            </div>

            {/* RIGHT: Photo + LinkedIn */}
            <div className="w-full md:w-[40%] flex flex-col items-center md:items-start gap-4 order-first md:order-last">
              {/* Founders photo */}
              <img
                src="/src/assets/founders.jpeg"
                alt="Sakshi Mohta and Yashvi Bhaia, Co-Founders of NextGen"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ maxWidth: "340px", aspectRatio: "3/4" }}
              />
              {/* LinkedIn icon */}
              <a
                href="https://www.linkedin.com/in/sakshi-mohta/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-[#7555C0] hover:bg-[#8a68d4] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H17.21v-5.569c0-1.327-.024-3.036-1.851-3.036-1.853 0-2.136 1.446-2.136 2.94v5.665H9.988V9h3.112v1.561h.044c.434-.823 1.494-1.69 3.075-1.69 3.289 0 3.896 2.165 3.896 4.979v6.602zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.958 20.452H3.714V9h3.244v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: CONTACT + FOOTER ===== */}
      <section className="bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">

            {/* LEFT: Contact Form */}
            <div className="w-full md:w-1/2">
              <h2 className="font-montserrat font-bold text-white mb-2" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
                Get In Touch
              </h2>
              <p className="font-montserrat font-normal text-[#9CA3AF] mb-8" style={{ fontSize: "16px" }}>
                Have questions? We'd love to hear from you.
              </p>

              {formSent ? (
                <div className="rounded-xl bg-[#7555C0]/20 border border-[#7555C0]/40 px-6 py-8 text-center">
                  <p className="font-montserrat font-semibold text-white text-lg">Thanks! We'll get back to you soon.</p>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => { e.preventDefault(); setFormSent(true); }}
                >
                  {[
                    { key: "name", type: "text", placeholder: "Your Name" },
                    { key: "email", type: "email", placeholder: "Your Email" },
                    { key: "phone", type: "tel", placeholder: "Your Phone Number" },
                  ].map(({ key, type, placeholder }) => (
                    <input
                      key={key}
                      type={type}
                      placeholder={placeholder}
                      value={formData[key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-montserrat text-white placeholder-[#6B7280] text-sm focus:outline-none focus:border-[#7555C0] transition-colors"
                      required={key !== "phone"}
                    />
                  ))}
                  <textarea
                    placeholder="Tell us what you're looking for..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-montserrat text-white placeholder-[#6B7280] text-sm focus:outline-none focus:border-[#7555C0] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#7555C0] py-3.5 font-montserrat font-semibold text-white text-sm hover:bg-[#8a68d4] transition-colors"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: Contact Details */}
            <div className="w-full md:w-1/2">
              <h2 className="font-montserrat font-bold text-white mb-8" style={{ fontSize: "clamp(20px, 2.5vw, 24px)" }}>
                Contact Us
              </h2>
              <div className="flex flex-col gap-5">
                <a href="mailto:hello.thenextgen@gmail.com" className="flex items-start gap-3 group">
                  <svg className="mt-0.5 shrink-0 text-[#7555C0]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span className="font-montserrat text-[#9CA3AF] text-sm group-hover:text-white transition-colors">hello.thenextgen@gmail.com</span>
                </a>
                <a href="tel:+919830326808" className="flex items-start gap-3 group">
                  <svg className="mt-0.5 shrink-0 text-[#7555C0]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span className="font-montserrat text-[#9CA3AF] text-sm group-hover:text-white transition-colors">+91 9830326808</span>
                </a>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 shrink-0 text-[#7555C0]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="font-montserrat text-[#9CA3AF] text-sm">2nd Floor, 238B, Acharya Jagdish Chandra Bose Road, Kolkata 700020</span>
                </div>
              </div>

              <a
                href="https://calendly.com/sakshi-mohta99"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full border border-[#7555C0] px-7 py-3 font-montserrat font-semibold text-[#7555C0] text-sm hover:bg-[#7555C0] hover:text-white transition-all"
              >
                Book a Meeting →
              </a>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="border-t border-white/10 py-5 px-6 text-center">
          <p className="font-montserrat font-normal text-[#6B7280]" style={{ fontSize: "14px" }}>
            © 2026 NextGen. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
