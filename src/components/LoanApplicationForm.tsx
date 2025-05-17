import { motion } from "framer-motion";
import { useState } from "react";
import { FinnButton } from "./ui/FinnButton";
import { AnimatedCard } from "./ui/AnimatedCard";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

interface LoanApplicationFormProps {
  loanType: string;
  minAmount: number;
  maxAmount: number;
  minTenure: number;
  maxTenure: number;
}

const LoanApplicationForm = ({ loanType, minAmount, maxAmount, minTenure, maxTenure }: LoanApplicationFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    panCard: "",
    address: "",
    
    // Loan Details
    loanAmount: minAmount,
    tenure: minTenure,
    purpose: "",
    
    // Employment Details
    employmentType: "",
    monthlyIncome: "",
    companyName: "",
    workExperience: "",
    
    // Documents
    identityProof: null as File | null,
    addressProof: null as File | null,
    incomeProof: null as File | null,
    bankStatements: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      setFormData(prev => ({ ...prev, [name]: e.target.files![0] }));
    }
  };

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-finn-100 -translate-y-1/2" />
        {[1, 2, 3, 4].map((stepNumber) => (
          <motion.div
            key={stepNumber}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: step >= stepNumber ? 1 : 0.8,
              opacity: 1 
            }}
            className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
              step >= stepNumber ? "bg-finn-500 text-white" : "bg-finn-100 text-finn-500"
            }`}
          >
            {step > stepNumber ? (
              <Check size={20} />
            ) : (
              stepNumber
            )}
          </motion.div>
          ))}
      </div>
      
      <AnimatedCard className="p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Details */}
        {step === 1 && (
          <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
          >
              <h3 className="text-2xl font-semibold text-finn-800 mb-6">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <label className="block text-finn-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                  required
                />
              </div>
              <div>
                  <label className="block text-finn-700 mb-2">Email</label>
                <input 
                  type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                  required
                />
              </div>
              <div>
                  <label className="block text-finn-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-finn-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                  required
                />
              </div>
              <div>
                  <label className="block text-finn-700 mb-2">PAN Card Number</label>
                <input 
                  type="text" 
                    name="panCard"
                    value={formData.panCard}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-finn-700 mb-2">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    rows={3}
                  required
                />
              </div>
            </div>
          </motion.div>
        )}
        
          {/* Step 2: Loan Details */}
        {step === 2 && (
          <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
          >
              <h3 className="text-2xl font-semibold text-finn-800 mb-6">Loan Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <label className="block text-finn-700 mb-2">Loan Amount (₹)</label>
                <input 
                  type="number" 
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    min={minAmount}
                    max={maxAmount}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                  required
                />
              </div>
              <div>
                  <label className="block text-finn-700 mb-2">Tenure (months)</label>
                  <input
                    type="number"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleInputChange}
                    min={minTenure}
                    max={maxTenure}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-finn-700 mb-2">Purpose of Loan</label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    rows={3}
                  required
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Employment Details */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className="text-2xl font-semibold text-finn-800 mb-6">Employment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <label className="block text-finn-700 mb-2">Employment Type</label>
                <select 
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                  required
                >
                    <option value="">Select Employment Type</option>
                  <option value="salaried">Salaried</option>
                    <option value="self-employed">Self Employed</option>
                  <option value="business">Business Owner</option>
                </select>
              </div>
              <div>
                  <label className="block text-finn-700 mb-2">Monthly Income (₹)</label>
                  <input
                    type="number"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-finn-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-finn-700 mb-2">Work Experience (years)</label>
                <input 
                  type="number" 
                    name="workExperience"
                    value={formData.workExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                  required
                />
              </div>
            </div>
          </motion.div>
        )}
        
          {/* Step 4: Document Upload */}
          {step === 4 && (
          <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
          >
              <h3 className="text-2xl font-semibold text-finn-800 mb-6">Document Upload</h3>
            <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-finn-700 mb-2">Identity Proof (Aadhar/PAN)</label>
                  <input
                    type="file"
                    name="identityProof"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                  />
                </div>
                <div>
                  <label className="block text-finn-700 mb-2">Address Proof</label>
                <input 
                  type="file" 
                    name="addressProof"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                  />
              </div>
                <div>
                  <label className="block text-finn-700 mb-2">Income Proof</label>
                  <input
                    type="file"
                    name="incomeProof"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                  />
                </div>
                <div>
                  <label className="block text-finn-700 mb-2">Bank Statements (Last 6 months)</label>
                <input 
                  type="file" 
                    name="bankStatements"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 rounded-lg border border-finn-200 focus:border-finn-500 focus:ring-1 focus:ring-finn-500 outline-none"
                    accept=".pdf"
                    required
                  />
              </div>
            </div>
          </motion.div>
        )}
        
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
          {step > 1 && (
            <FinnButton 
              type="button" 
              variant="outline" 
                onClick={handlePrevious}
                className="flex items-center gap-2"
            >
                <ArrowLeft size={20} />
                Previous
            </FinnButton>
          )}
            <div className="ml-auto">
              {step < 4 ? (
                <FinnButton
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2"
                >
                  Next
                  <ArrowRight size={20} />
                </FinnButton>
              ) : (
          <FinnButton 
            type="submit" 
                  gradient
                  className="flex items-center gap-2"
          >
                  Submit Application
                  <Check size={20} />
          </FinnButton>
              )}
            </div>
        </div>
        </form>
      </AnimatedCard>
    </div>
  );
};

export default LoanApplicationForm;
