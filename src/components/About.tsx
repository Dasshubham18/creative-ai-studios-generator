import { motion } from "framer-motion";
import { Building2, Target, Users2, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Innovation First",
      description: "Pushing boundaries with cutting-edge AI solutions that drive real business growth."
    },
    {
      icon: <Users2 className="w-8 h-8 text-secondary" />,
      title: "Client-Centric",
      description: "Tailoring our strategies to meet unique business needs and goals."
    },
    {
      icon: <Building2 className="w-8 h-8 text-secondary" />,
      title: "Excellence",
      description: "Delivering exceptional results through expertise and dedication."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Forward Thinking",
      description: "Staying ahead of AI trends to future-proof your business."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">About Creative AI Studios</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are pioneers in AI-driven business transformation, partnering with organizations to unlock their full potential through innovative strategies and cutting-edge solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To bridge the gap between AI technology and practical business solutions, empowering organizations to thrive in the digital age through innovative strategies and expert guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading force in AI-driven business transformation, setting new standards for innovation and success in the digital ecosystem.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-primary mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Us?</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            With our deep expertise in AI technology and business strategy, we deliver tailored solutions that drive measurable results. Our team of experts combines technical knowledge with business acumen to help your organization navigate the complexities of AI integration and digital transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;