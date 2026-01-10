import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Grid pattern overlay with parallax */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(123,63,160,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,63,160,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        style={{ backgroundAttachment: 'fixed' }}
      />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">An Unique Revolution in Technology</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">REVOL</span>
          <span className="text-gradient-primary">NIX</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-slide-up font-medium" style={{ animationDelay: '0.2s' }}>
          TECHNOLOGIES
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Pioneering the future through innovative software solutions and fintech ventures. 
          We transform ideas into revolutionary digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="lg" asChild>
            <Link to="/ventures">
              Explore Our Ventures
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { value: "2+", label: "Ventures" },
            { value: "100%", label: "Innovation" },
            { value: "∞", label: "Possibilities" },
            { value: "1", label: "Vision" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
