import { Zap, Shield, Users, Lightbulb, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality"
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description: "Enterprise-grade security in every product"
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your success is our top priority"
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Cutting-edge technology and fresh ideas"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance when you need it"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and quality standards"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(123,63,160,0.08),transparent_40%)]"
        style={{ backgroundAttachment: 'fixed' }}
      />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="text-gradient-primary">Rovolnix</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence through innovation, dedication, and a relentless pursuit of quality
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
