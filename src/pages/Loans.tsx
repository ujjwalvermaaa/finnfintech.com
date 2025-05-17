import { motion } from "framer-motion";
import LoanCard from "@/components/LoanCard";
import { Building2, Car, GraduationCap, Home, Briefcase, CreditCard, Plane, User, DollarSign, Factory } from "lucide-react";

const loans = [
    {
      title: "Home Loan",
    description: "Make your dream home a reality with our competitive mortgage rates and flexible repayment options.",
      icon: Home,
    link: "/apply/home-loan",
      features: [
      "Competitive interest rates",
      "Long-term financing up to 30 years",
      "Minimal documentation",
      "Quick approval process"
    ]
    },
    {
      title: "Business Loan",
    description: "Fuel your business growth with our quick and hassle-free business loans.",
    icon: Building2,
    link: "/apply/business-loan",
      features: [
      "Quick disbursement",
      "Flexible repayment terms",
      "No collateral required",
      "Special MSME schemes"
    ]
    },
    {
    title: "Personal Loan",
    description: "Get instant personal loans for all your needs with minimal documentation.",
    icon: User,
    link: "/apply/personal-loan",
      features: [
      "Instant approval",
      "No collateral needed",
      "Flexible tenure",
      "Quick disbursement"
    ]
    },
    {
    title: "Auto Loan",
    description: "Drive your dream car home with our affordable auto loans and quick approvals.",
    icon: Car,
    link: "/apply/car-loan",
      features: [
      "Low interest rates",
      "Quick processing",
      "Zero processing fee",
      "Special EV rates"
    ]
  },
  {
    title: "OD/CC Limits",
    description: "Get flexible overdraft and cash credit facilities for your business needs.",
    icon: CreditCard,
    link: "/apply/od-cc-limits",
      features: [
      "Flexible withdrawal",
      "Interest on utilized amount",
      "Quick approval",
      "Easy renewal"
    ]
    },
    {
    title: "Working Capital",
    description: "Ensure smooth business operations with our working capital financing solutions.",
    icon: DollarSign,
    link: "/apply/working-capital",
      features: [
      "Short-term financing",
      "Quick disbursement",
      "Flexible repayment",
      "Minimal documentation"
    ]
    },
    {
    title: "MSME Loan",
    description: "Special financing solutions designed for Micro, Small, and Medium Enterprises.",
    icon: Factory,
    link: "/apply/msme-loan",
      features: [
      "Government schemes",
      "Subsidized rates",
      "Quick processing",
      "Minimal collateral"
    ]
    },
    {
    title: "Loan Against Property",
    description: "Unlock the value of your property with our competitive LAP solutions.",
      icon: Home,
    link: "/apply/lap",
      features: [
      "High loan amount",
      "Low interest rates",
      "Long tenure",
      "Flexible usage"
    ]
  }
];

const Loans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-finn-50/50 to-white">
      <motion.div 
        className="container mx-auto px-4 py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-finn-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore Our Loan Products
          </motion.h1>
          <motion.p
            className="text-lg text-finn-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Find the perfect financing solution tailored to your needs with our comprehensive range of loan products.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loans.map((loan, index) => (
            <LoanCard key={loan.title} {...loan} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Loans;
