import { motion } from "framer-motion";
import { FinnButton } from "@/components/ui/FinnButton";
import { ArrowRight, Shield, Users, Target, Award, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize the security of your financial information with bank-level encryption and protection."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our dedicated team is committed to providing exceptional service and support at every step."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously evolve our services to meet the changing needs of our customers."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our products to our customer service."
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Quick processing and minimal documentation for faster loan approvals."
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "We're committed to making a positive difference in the communities we serve."
    }
  ];

  const directors = [
    {
      name: "Pankaj Saluja",
      position: "Managing Director",
      image: "/directors/pankaj-saluja.jpg",
      contact: ["9773951255", "9560553075"],
      email: "md@finnfintech.com"
    },
    {
      name: "Kavita Verma",
      position: "Managing Director",
      image: "/directors/kavita-verma.jpg",
      contact: ["9999673440", "9599156255"],
      email: "md@finnfintech.com"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-finn-50/50 to-white pt-24">
      {/* Company Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="gradient-text">FinnFintech</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-finn-700/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're on a mission to revolutionize financial services through technology, making them more accessible, efficient, and user-friendly for everyone.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
              Meet Our <span className="gradient-text">Directors and Founders</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-finn-700/80 max-w-2xl mx-auto"
            >
              Our leadership team brings together decades of experience in finance, technology, and business management.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <AnimatedCard className="h-full p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-finn-100">
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            director.name
                          )}&background=60A5FA&color=ffffff&size=200`;
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-finn-800 mb-2">{director.name}</h3>
                    <p className="text-finn-600 font-medium mb-4">{director.position}</p>
                    <div className="space-y-2 mb-4">
                      {director.contact.map((phone, index) => (
                        <p key={index} className="text-finn-700/80">{phone}</p>
                      ))}
                    </div>
                    <p className="text-finn-700/80 mb-4">{director.email}</p>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Founder Section */}
      <section className="py-16 bg-gradient-to-b from-white to-finn-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            >
              Meet Our <span className="gradient-text">CEO</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-finn-700/80 max-w-2xl mx-auto"
            >
              Our visionary leader who laid the foundation of FinnFintech with a mission to transform financial services.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <AnimatedCard className="h-full p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-finn-100">
                    <img
                      src="/directors/deepak-verma.jpg"
                      alt="Deepak Verma"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          "Deepak Verma"
                        )}&background=60A5FA&color=ffffff&size=200`;
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-finn-800 mb-2">Deepak Verma</h3>
                  <p className="text-finn-600 font-medium mb-4">CEO</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-finn-700/80">9999673440</p>
                    <p className="text-finn-700/80">9599156255</p>
                  </div>
                  <p className="text-finn-700/80 mb-4">deepak.verma@finnfintech.com</p>
                </div>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-finn-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            >
              Our <span className="gradient-text">Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-finn-700/80 max-w-2xl mx-auto"
            >
              These core values guide everything we do, from product development to customer service.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={itemVariants}>
                <AnimatedCard className="h-full p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-xl bg-finn-100 flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-finn-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-finn-800 mb-3">{value.title}</h3>
                    <p className="text-finn-700/80">{value.description}</p>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-finn-500 to-finn-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Start Your Financial Journey?
            </motion.h2>
            <motion.p
              className="text-lg mb-8 text-white/90"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Join thousands of satisfied customers who trust us with their financial needs.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FinnButton 
                size="lg" 
                variant="secondary" 
                className="bg-white text-finn-600 hover:bg-white/90"
                asChild
              >
                <Link to="/loans">
                  Explore Our Loans <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </FinnButton>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
