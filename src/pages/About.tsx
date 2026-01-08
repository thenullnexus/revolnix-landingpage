import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lightbulb, Target, Rocket, Users, Award, Globe } from "lucide-react";

// Replace this with your own image
import aboutImage from "@/assets/hero-bg.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              About <span className="text-gradient-primary">Rovolnix</span>
            </h1>
            <p className="text-xl text-muted-foreground">
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
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-muted-foreground italic">
                  📷 Replace this image with your company photo
                </p>
              </div>
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

      <Footer />
    </div>
  );
};

export default About;
