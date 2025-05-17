import { motion } from "framer-motion";
import { User, CheckCircle2, ArrowRight } from "lucide-react";
import { FinnButton } from "@/components/ui/FinnButton";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const PersonalLoan = () => {
  const features = [
    "Interest rates starting from 10.99% p.a.",
    "Loan amount up to ₹20 Lakhs",
    "Flexible tenure up to 5 years",
    "Zero prepayment charges after 12 months",
    "No collateral required",
    "Instant approval for pre-approved customers",
    "Minimal documentation",
    "Quick disbursement within 24 hours"
  ];

  const requirements = [
    "Age: 21-58 years",
    "Minimum income: ₹15,000 per month",
    "Valid identity proof (Aadhar/PAN)",
    "Address proof",
    "Income proof (Salary slips/ITR)",
    "Bank statements (3 months)",
    "Employment proof",
    "Credit score: 750+ preferred"
  ];

  const handleWhatsAppRedirect = () => {
    const message = "Hi, I'm interested in applying for a Personal Loan. Please provide more information.";
    const whatsappUrl = `https://wa.me/910000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-finn-50/50 to-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <motion.div 
              className="w-20 h-20 bg-finn-700 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <User className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold text-finn-800 mb-4">
              Personal Loan
            </h1>
            <p className="text-finn-600 text-lg">
              Get instant personal loans for all your needs with minimal documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedCard className="p-8">
              <h2 className="text-2xl font-semibold text-finn-800 mb-6">Key Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-finn-500 mt-1 flex-shrink-0" />
                    <span className="text-finn-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedCard>

            <AnimatedCard className="p-8">
              <h2 className="text-2xl font-semibold text-finn-800 mb-6">Requirements</h2>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-finn-500 mt-1 flex-shrink-0" />
                    <span className="text-finn-700">{requirement}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedCard>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FinnButton
                size="lg"
                gradient
                onClick={handleWhatsAppRedirect}
                className="flex items-center gap-2 mx-auto"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </FinnButton>
            </motion.div>
            <p className="text-finn-600 mt-4">
              Click to connect with our loan expert on WhatsApp
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalLoan; 