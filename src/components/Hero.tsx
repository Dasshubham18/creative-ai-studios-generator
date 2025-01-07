import { Button } from "@/components/ui/button";
import { Brain, Rocket, ChartBar } from "lucide-react";
import Background3D from "./Background3D";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-primary/5 to-primary/10">
      <Background3D />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Empowering Businesses with AI-Driven Strategies & Marketing Solutions
          </h1>
          <p className="text-lg md:text-xl text-primary/80 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Partner with us to accelerate your growth through tailored AI strategies,
            data-driven marketing approaches, and robust Go-To-Market plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <Brain className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">AI Strategy</h3>
            <p className="text-primary/70">
              Craft scalable AI strategies tailored to your business goals
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <Rocket className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">Marketing Solutions</h3>
            <p className="text-primary/70">
              Data-driven AI marketing strategies for sustainable growth
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <ChartBar className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">GTM Planning</h3>
            <p className="text-primary/70">
              Comprehensive strategies to launch products effectively
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;