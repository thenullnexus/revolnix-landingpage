import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, ArrowRight, Quote } from "lucide-react";

// Replace this with the founder's actual photo
import founderImage from "@/assets/founder-placeholder.jpg";

const Founder = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Meet the <span className="text-gradient-primary">Founder</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The visionary behind Rovolnix Technologies
            </p>
          </div>
        </div>
      </section>

      {/* Founder profile */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Image column */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-elevated">
                    <img 
                      src={founderImage} 
                      alt="Founder - Replace with your photo" 
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-medium">Founder & CEO</p>
                  </div>
                  <p className="mt-8 text-sm text-muted-foreground text-center italic">
                    📷 Replace this with your photo
                  </p>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content column */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  [Your Name Here]
                </h2>
                <p className="text-primary font-medium text-lg mb-6">Proprietor & Founder</p>

                {/* Quote */}
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                  <Quote className="w-8 h-8 text-primary/30 mb-2" />
                  <p className="text-lg italic text-foreground">
                    "Technology should empower, not complicate. At Rovolnix, we build solutions 
                    that make a real difference in people's lives."
                  </p>
                </div>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    As the founder and proprietor of Rovolnix Technologies, I am dedicated to building 
                    a technology company that stands for excellence, innovation, and integrity. 
                    With a passion for solving complex problems through elegant solutions, I lead 
                    our ventures with a vision to create lasting impact in the technology and fintech sectors.
                  </p>

                  <p>
                    My journey in technology has been driven by a simple belief: that the right 
                    technology, in the right hands, can revolutionize industries and improve lives. 
                    This philosophy is embedded in every venture under Rovolnix Technologies.
                  </p>

                  <p>
                    Through Stop404, we provide businesses with reliable software solutions that 
                    keep them running smoothly. And with our upcoming fintech venture, we aim to 
                    transform how people interact with financial technology.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-heading font-semibold text-lg mb-4">Highlights</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Technology Entrepreneur",
                      "Software Architect",
                      "Fintech Innovator",
                      "Business Strategist",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Want to Connect?
            </h2>
            <p className="text-muted-foreground mb-6">
              I'd love to hear from you about potential collaborations or partnerships.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Founder;
