import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Shield, Zap, ArrowRight, Lock, TrendingUp, Globe, Clock } from "lucide-react";
import logoStop404 from "@/assets/logo-stop404.png";
import stop404Hero from "@/assets/stop404-hero.jpg";
import fintechHero from "@/assets/fintech-hero.jpg";

const Ventures = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="text-gradient-primary">Ventures</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Specialized brands delivering exceptional value across technology and finance
            </p>
          </div>
        </div>
      </section>

      {/* Stop404 Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated order-2 lg:order-1">
              <img 
                src={stop404Hero} 
                alt="Stop404 Software Services - Replace with your image" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-stop404" />
              <div className="absolute bottom-6 left-6">
                <p className="text-sm text-white/70 bg-black/50 px-3 py-1 rounded-full">
                  📷 Replace with your image
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <img src={logoStop404} alt="Stop404" className="h-16 w-auto" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                Software Services Division
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Stop404 delivers cutting-edge software solutions that ensure your digital presence never faces downtime. 
                From custom development to system maintenance, we keep your business running 24/7. 
                Specializing in emerging technologies like AI, automation, and fintech innovations, 
                we empower your business with future-ready solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Code, label: "Custom Development" },
                  { icon: Shield, label: "System Security" },
                  { icon: Zap, label: "High Performance" },
                  { icon: Globe, label: "Scalable Solutions" },
                  { icon: TrendingUp, label: "Unlimited Innovation" },
                  { icon: ArrowRight, label: "Quick Delivery" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <feature.icon className="w-4 h-4 text-brand-red" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>

              <Button variant="stop404">
                Learn More About Stop404
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fintech Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">Coming Soon</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Fintech Innovation
              </h2>

              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                A revolutionary fintech product is in development. We are building something 
                that will transform how you interact with financial technology. Stay tuned 
                for an announcement that will change everything.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Lock, label: "Secure by Design" },
                  { icon: TrendingUp, label: "Future-Ready" },
                  { icon: Zap, label: "Lightning Fast" },
                  { icon: Shield, label: "Investment Accelerator" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-500">
                    <feature.icon className="w-4 h-4 text-blue-400" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero-outline" className="border-blue-500/30 text-white hover:border-blue-400 hover:bg-blue-500/10">
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={fintechHero} 
                alt="Fintech Product Coming Soon - Replace with your image" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-fintech" />
              <div className="absolute bottom-6 left-6">
                <p className="text-sm text-white/70 bg-black/50 px-3 py-1 rounded-full">
                  📷 Replace with your image
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to <span className="text-gradient-primary">Partner</span> With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need software services or want to be first in line for our fintech launch
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ventures;
