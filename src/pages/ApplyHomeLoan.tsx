
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import LoanApplicationForm from "@/components/LoanApplicationForm";

const ApplyHomeLoan = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 text-sm text-finn-700 bg-finn-100 rounded-full">
              Home Loan Application
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            Apply for <span className="gradient-text">Home Loan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-finn-700/80 text-lg"
          >
            Make your dream home a reality with our competitive mortgage rates starting from 7.5% and flexible repayment options up to 30 years.
          </motion.p>
        </div>
        
        {/* Loan Application Form */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg mb-16">
          <LoanApplicationForm loanType="Home Loan" color="bg-finn-600" />
        </div>
        
        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold mb-6 text-center">Features & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Competitive Interest Rates",
                description: "Get home loans starting at 7.5% interest rate with transparent terms"
              },
              {
                title: "Quick Processing",
                description: "Fast approvals with minimal documentation for a hassle-free experience"
              },
              {
                title: "Flexible Repayment Options",
                description: "Choose from various repayment plans tailored to your financial situation"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-finn-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold mb-2 text-finn-800">{item.title}</h3>
                <p className="text-finn-700/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Back to Loans */}
        <div className="text-center">
          <Link 
            to="/loans" 
            className="inline-flex items-center text-finn-600 hover:text-finn-700"
          >
            <Home className="mr-2 w-4 h-4" /> View All Loan Types
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplyHomeLoan;
