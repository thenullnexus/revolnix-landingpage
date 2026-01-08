import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(123,63,160,0.15),transparent_50%)]"
        style={{ backgroundAttachment: 'fixed' }}
      />
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Stay Updated</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Join Our <span className="text-gradient-primary">Newsletter</span>
          </h2>
          
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Get the latest updates on our ventures, technology insights, and exclusive 
            announcements delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 pl-12 pr-4 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50"
                required
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="h-14">
              Subscribe
              <Send className="w-4 h-4" />
            </Button>
          </form>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Weekly updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
