import { Brain, MessageSquare, Globe, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Development",
      description:
        "We craft scalable AI strategies tailored to your specific business goals and industry requirements.",
    },
    {
      icon: MessageSquare,
      title: "AI Consultation",
      description:
        "Get personalized consulting on AI adoption, integration, and optimization for your business processes.",
    },
    {
      icon: Globe,
      title: "Marketing Solutions",
      description:
        "Leverage data-driven AI marketing strategies to boost growth and enhance brand visibility.",
    },
    {
      icon: Users,
      title: "GTM Planning",
      description:
        "Comprehensive Go-To-Market strategies to launch your products and services effectively.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive AI solutions to help your business thrive in the
            digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <service.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;