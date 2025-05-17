import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { PieChart } from "react-minimal-pie-chart";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [tenure, setTenure] = useState(1);
  const [interestRate, setInterestRate] = useState(10);
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  
  const formatIndianNumber = (number: number) => {
    const numStr = number.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + (otherNumbers ? "," : "") + lastThree;
    return formatted;
  };

  const parseCommaNumber = (value: string) => {
    return parseInt(value.replace(/,/g, ''), 10);
  };

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const numberOfMonths = tenure * 12;

    const emiValue =
      (principal *
        ratePerMonth *
        Math.pow(1 + ratePerMonth, numberOfMonths)) /
      (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);

    const totalAmountValue = emiValue * numberOfMonths;
    const totalInterestValue = totalAmountValue - principal;
      
    setEmi(Math.round(emiValue));
    setTotalAmount(Math.round(totalAmountValue));
    setTotalInterest(Math.round(totalInterestValue));
  };
  
  // Auto calculate on mount and when values change
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, tenure, interestRate]);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const chartColors = {
    principal: "#22c55e", // Green
    interest: "#f97316", // Orange
    background: "#f8fafc" // Light gray
  };
  
  return (
    <div className="max-w-5xl mx-auto p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid lg:grid-cols-2 gap-8"
      >
        {/* Left Column - Input Controls */}
        <div className="space-y-8">
          <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border-none shadow-lg">
          <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Loan Amount
                </label>
                <div className="flex items-center justify-between mb-2">
                  <input
                    type="text"
                    value={formatIndianNumber(loanAmount)}
                    onChange={(e) => {
                      const rawValue = e.target.value.replace(/,/g, '');
                      if (rawValue === '' || /^\d+$/.test(rawValue)) {
                        const value = Math.min(Math.max(Number(rawValue), 100000), 100000000);
                        setLoanAmount(value);
                      }
                    }}
                    className="text-2xl font-bold text-finn-800 bg-transparent border-b-2 border-finn-200 focus:border-finn-500 focus:outline-none w-48 appearance-none [appearance:textfield]"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    min={100000}
                    max={100000000}
                    step={10000}
                    style={{ MozAppearance: 'textfield' }}
                  />
                  <span className="text-sm text-gray-500">
                    Max: {formatCurrency(100000000)}
                  </span>
              </div>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={100000}
                  max={100000000}
                  step={10000}
                  className="w-full"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">₹1L</span>
                  <span className="text-xs text-gray-500">₹10Cr</span>
              </div>
            </div>
            
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Loan Tenure
                </label>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => {
                        const value = Math.min(Math.max(Number(e.target.value), 1), 30);
                        setTenure(value);
                      }}
                      className="text-2xl font-bold text-finn-800 bg-transparent border-b-2 border-finn-200 focus:border-finn-500 focus:outline-none w-20 appearance-none [appearance:textfield]"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      min={1}
                      max={30}
                      step={1}
                      style={{ MozAppearance: 'textfield' }}
                    />
                    <span className="text-2xl font-bold text-finn-800 -ml-2">{tenure === 1 ? 'Year' : 'Years'}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    Max: 30 years
                  </span>
              </div>
                <Slider
                  value={[tenure]}
                  onValueChange={(value) => setTenure(value[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">1 Year</span>
                  <span className="text-xs text-gray-500">30 Years</span>
              </div>
            </div>
            
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Interest Rate (% per annum)
                </label>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-finn-800">
                    {interestRate}%
                  </span>
                  <span className="text-sm text-gray-500">
                    Range: 0.5% - 20%
                  </span>
              </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  min={0.5}
                  max={20}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">0.5%</span>
                  <span className="text-xs text-gray-500">20%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Right Column - Results */}
        <div className="space-y-6">
          <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border-none shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Loan Summary
            </h3>
            <div className="grid gap-4">
              <motion.div 
                className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm text-green-700 font-medium">Monthly EMI</span>
                <motion.div 
                  key={emi}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-2xl font-bold text-green-800"
                >
                  {formatCurrency(emi)}
                </motion.div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <span className="text-sm text-orange-700 font-medium">Total Interest</span>
                  <motion.div 
                    key={totalInterest}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-xl font-bold text-orange-800"
                  >
                    {formatCurrency(totalInterest)}
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <span className="text-sm text-blue-700 font-medium">Total Payment</span>
                  <motion.div 
                    key={totalAmount}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-xl font-bold text-blue-800"
                  >
                    {formatCurrency(totalAmount)}
                  </motion.div>
                </motion.div>
              </div>
              </div>
              
            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Payment Breakdown</h4>
              <div className="relative">
                <div className="aspect-square max-w-[200px] mx-auto">
                  <PieChart
                    data={[
                      {
                        title: "Principal",
                        value: loanAmount,
                        color: chartColors.principal,
                      },
                      {
                        title: "Interest",
                        value: totalInterest,
                        color: chartColors.interest,
                      },
                    ]}
                    background={chartColors.background}
                    label={({ dataEntry }) =>
                      Math.round((dataEntry.value / totalAmount) * 100) + "%"
                    }
                    labelStyle={{
                      fontSize: "6px",
                      fill: "#fff",
                      fontWeight: "bold",
                    }}
                    animate
                    animationDuration={500}
                    radius={42}
                    labelPosition={75}
                  />
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartColors.principal }} />
                    <span className="text-sm text-gray-600">Principal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartColors.interest }} />
                    <span className="text-sm text-gray-600">Interest</span>
              </div>
            </div>
          </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default EMICalculator;