import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lightbulb, Target, Rocket, Users, Award, Globe, Linkedin, X, Mail, Quote } from "lucide-react";

// Replace these with your own images
import aboutImage from "@/assets/aboutus-img.png";
import aboutBc from "@/assets/aboutus-bc.png";
import founderImage from "@/assets/founder-placeholder.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={aboutBc} 
            alt="About Rovolnix" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
              About <span className="relative">
                <span className="text-brand-purple">Rovol</span>
                <span className="text-black">ni</span>
                <span className="text-brand-purple">x</span>
              </span>
            </h1>
            <p className="text-xl text-white/90">
              An Unique Revolution in Technology
            </p>
          </div>
        </div>
      </section>

      {/* Story section with image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image - Replace this with your own */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={aboutImage} 
                alt="About Rovolnix - Replace with your image" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="text-foreground font-semibold">Rovolnix Technologies</span> stands at the forefront of 
                technological innovation. Our name embodies our mission — to bring <span className="text-primary font-medium">revolution</span> to 
                the technology landscape through unique, groundbreaking solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From enterprise software solutions through Stop404 to pioneering fintech innovations, 
                we are committed to building technology that makes a difference. Every venture we undertake 
                is driven by our core belief that technology should empower, not complicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our <span className="text-gradient-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "We challenge conventional thinking to create solutions that set new industry standards.",
              },
              {
                icon: Target,
                title: "Precision Focus",
                description: "Every project receives our undivided attention and commitment to excellence.",
              },
              {
                icon: Rocket,
                title: "Future Ready",
                description: "We build for tomorrow, ensuring our solutions scale with your ambitions.",
              },
              {
                icon: Users,
                title: "Client Centric",
                description: "Your success is our success. We partner with you to achieve your goals.",
              },
              {
                icon: Award,
                title: "Quality Driven",
                description: "Excellence is not negotiable. We deliver nothing less than the best.",
              },
              {
                icon: Globe,
                title: "Global Vision",
                description: "We think globally while delivering locally relevant solutions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-6 text-center shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
              Meet the <span className="text-brand-purple">Proprietor</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The driving force behind Rovolnix Technologies
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Image column */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-elevated">
                    <img 
                      src={founderImage} 
                      alt="Proprietor - Muhammed Muthasir" 
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-medium">Proprietor & Business Finance Lead</p>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <a
                    href="https://www.linkedin.com/in/muthasir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
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
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  Muhammed Muthasir
                </h3>
                <p className="text-primary font-medium text-lg mb-6">Proprietor & Business Finance Lead</p>

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
                    As the proprietor and Chief Financial Officer of Rovolnix Technologies, I am dedicated to building 
                    a technology company that stands for excellence, innovation, and financial integrity. 
                    With a passion for solving complex problems through elegant solutions, I lead 
                    our ventures with a vision to create lasting impact in the technology and fintech sectors.
                  </p>

                  <p>
                    My journey in technology has been driven by a simple belief: that the right 
                    technology, in the right hands, can revolutionize industries and improve lives. 
                    This philosophy is embedded in every venture under Rovolnix Technologies.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-heading font-semibold text-lg mb-4">Highlights</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Technology Entrepreneur",
                      "Fintech Systems Architect",
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

      <Footer />
    </div>
  );
};

export default About;
