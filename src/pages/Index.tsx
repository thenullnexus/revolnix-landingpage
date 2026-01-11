import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ClientsSection from "@/components/ClientsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, TrendingUp, Rocket, Globe, Heart } from "lucide-react";
import logoStop404 from "@/assets/logo-stop404.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(123,63,160,0.05),transparent_50%)]"
          style={{ backgroundAttachment: 'fixed' }}
        />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Driving <span className="text-gradient-primary">Innovation</span> Forward
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Rovolnix Technologies stands at the forefront of technological innovation, 
                building solutions that transform industries and empower businesses to achieve more.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With our flagship software services brand Stop404 and upcoming fintech ventures, 
                we're committed to delivering excellence in every project we undertake.
              </p>
              <Button variant="hero-outline" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-2">Global</h3>
                <p className="text-sm text-muted-foreground">Serving clients worldwide</p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card mt-8">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-2">Passionate</h3>
                <p className="text-sm text-muted-foreground">Dedicated to excellence</p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <Code className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-2">Expert</h3>
                <p className="text-sm text-muted-foreground">Technical mastery</p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card mt-8">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-2">Growing</h3>
                <p className="text-sm text-muted-foreground">Expanding horizons</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisionMissionSection />
      
      {/* Quick ventures preview */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(123,63,160,0.05),transparent_40%)]"
          style={{ backgroundAttachment: 'fixed' }}
        />
        <div className="container relative z-10 mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our <span className="text-gradient-primary">Ventures</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the future through specialized brands
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <img src={logoStop404} alt="Stop404" className="h-12 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Software Services</h3>
              <p className="text-muted-foreground mb-4">Cutting-edge software solutions that keep your business running 24/7.</p>
              <div className="flex items-center gap-2 text-primary">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">Development & Maintenance</span>
              </div>
            </div>

            <div className="bg-gradient-dark rounded-2xl p-8 shadow-elevated hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">Coming Soon</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-white">Fintech Innovation</h3>
              <p className="text-gray-400 mb-4">A revolutionary fintech product in development.</p>
              <div className="flex items-center gap-2 text-blue-400">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Financial Technology</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" asChild>
              <Link to="/ventures">
                View All Ventures
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <ClientsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
