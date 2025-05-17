import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import EMICalculator from "@/components/EMICalculator";

const CalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-finn-50/50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-finn-100 mb-6">
              <Calculator className="w-8 h-8 text-finn-600" />
            </div>
            <h1 className="text-4xl font-bold text-finn-800 mb-4">
              EMI Calculator
            </h1>
            <p className="text-lg text-finn-600 max-w-2xl mx-auto">
              Plan your loan better by calculating your EMI (Equated Monthly Installment) 
              and understanding the total cost of your loan.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <EMICalculator />
          </motion.div>

          {/* Additional Information */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-finn-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-finn-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-finn-800 mb-2">
                Easy Process
              </h3>
              <p className="text-finn-600">
                Simple and straightforward loan calculation process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-finn-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-finn-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-finn-800 mb-2">
                Instant Results
              </h3>
              <p className="text-finn-600">
                Get real-time EMI calculations as you adjust the values.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-finn-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-finn-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-finn-800 mb-2">
                Visual Breakdown
              </h3>
              <p className="text-finn-600">
                See clear visual representation of your loan components.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage; 