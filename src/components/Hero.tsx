import { Button } from "@/components/ui/button";
import { Brain, Rocket, ChartBar } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fadeIn">
            Empowering Businesses with AI-Driven Strategies & Marketing Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Partner with us to accelerate your growth through tailored AI strategies,
            data-driven marketing approaches, and robust Go-To-Market plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Brain className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Strategy</h3>
            <p className="text-gray-600">
              Craft scalable AI strategies tailored to your business goals
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Rocket className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Marketing Solutions</h3>
            <p className="text-gray-600">
              Data-driven AI marketing strategies for sustainable growth
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ChartBar className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">GTM Planning</h3>
            <p className="text-gray-600">
              Comprehensive strategies to launch products effectively
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;