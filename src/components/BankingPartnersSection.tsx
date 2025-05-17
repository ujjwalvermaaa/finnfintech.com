import { motion } from "framer-motion";
import { AnimatedCard } from "./ui/AnimatedCard";

const BankingPartnersSection = () => {
  const nationalizedBanks = [
    {
      name: "State Bank of India",
      description: "India's largest public sector bank",
      logo: "/bank_logo/govt_banks/sbi.jpg"
    },
    {
      name: "Bank of Maratha",
      description: "Leading public sector bank",
      logo: "/bank_logo/govt_banks/maharastra.png"
    },
    {
      name: "Punjab National Bank",
      description: "Major public sector bank",
      logo: "/bank_logo/govt_banks/pnb.png"
    },
    {
      name: "Central Bank of India",
      description: "Established public sector bank",
      logo: "/bank_logo/govt_banks/central.png"
    },
    {
      name: "UCO Bank",
      description: "Trusted public sector bank",
      logo: "/bank_logo/govt_banks/uco.avif"
    }
  ];

  const privateBanks = [
    {
      name: "Kotak Mahindra Bank",
      description: "Leading private sector bank",
      logo: "/bank_logo/pvt_banks/kotak.avif"
    },
    {
      name: "Yes Bank",
      description: "Modern private sector bank",
      logo: "/bank_logo/pvt_banks/yes.jpeg"
    },
    {
      name: "ICICI Bank",
      description: "Leading private sector bank",
      logo: "/bank_logo/pvt_banks/icici.png"
    },
    {
      name: "Axis Bank",
      description: "Third largest private sector bank",
      logo: "/bank_logo/pvt_banks/axis.png"
    },
    {
      name: "HDFC Bank",
      description: "India's leading private sector bank",
      logo: "/bank_logo/pvt_banks/hdfc.jpg"
    },
    {
      name: "Deutsche Bank",
      description: "Global banking leader",
      logo: "/bank_logo/pvt_banks/deutsche.png"
    },
    {
      name: "IndusInd Bank",
      description: "New generation private bank",
      logo: "/bank_logo/pvt_banks/indusin.avif"
    },
    {
      name: "IDFC FIRST Bank",
      description: "Modern banking solutions",
      logo: "/bank_logo/pvt_banks/idfc.jpg"
    },
    {
      name: "Edelweiss Bank",
      description: "Financial services provider",
      logo: "/bank_logo/pvt_banks/edelweiss.jpg"
    },
    {
      name: "AU Small Finance Bank",
      description: "Leading small finance bank",
      logo: "/bank_logo/pvt_banks/au.png"
    }
  ];

  const nbfcs = [
    {
      name: "Tata Capital",
      description: "Financial services arm of Tata Group",
      logo: "/bank_logo/nbfc/tata capital.png"
    },
    {
      name: "Bajaj Finserv",
      description: "Leading financial services company",
      logo: "/bank_logo/nbfc/bajaj finserv.webp"
    },
    {
      name: "Poonawalla Fincorp",
      description: "Leading NBFC focused on consumer finance",
      logo: "/bank_logo/nbfc/poonawala.jpeg"
    },
    {
      name: "L&T Finance",
      description: "Diversified financial services",
      logo: "/bank_logo/nbfc/l&t.jpg"
    },
    {
      name: "Clix Capital",
      description: "Digital lending platform",
      logo: "/bank_logo/nbfc/clix.png"
    },
    {
      name: "Unity Small Finance",
      description: "Financial inclusion focused",
      logo: "/bank_logo/nbfc/unity.png"
    },
    {
      name: "UGRO Capital",
      description: "MSME focused NBFC",
      logo: "/bank_logo/nbfc/ugro.jpeg"
    },
    {
      name: "Aditya Birla Capital",
      description: "Financial services conglomerate",
      logo: "/bank_logo/nbfc/aditya birla.jpeg"
    },
    {
      name: "Neo Growth",
      description: "Digital lending platform for MSMEs",
      logo: "/bank_logo/nbfc/neogrowth.png"
    },
    {
      name: "SMC Finance",
      description: "Financial services provider",
      logo: "/bank_logo/nbfc/smc finance.jpeg"
    }
  ];

  const renderBankSection = (title: string, banks: any[], category: string) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-finn-800 mb-4"
        >
          {title}
        </motion.h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {banks.map((bank, index) => (
          <motion.div
            key={bank.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <AnimatedCard className="h-full p-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-3 bg-white rounded-lg p-2 flex items-center justify-center">
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        bank.name
                      )}&background=60A5FA&color=ffffff&size=200`;
                    }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-finn-800 mb-1">{bank.name}</h3>
                <p className="text-xs text-finn-600">{bank.description}</p>
              </div>
            </AnimatedCard>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-4">
        <p className="text-finn-600 text-sm">And many more {category}...</p>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-finn-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-finn-100 text-finn-600 rounded-full text-sm font-medium mb-4">
              Trusted Partners
            </span>
            <h2 className="text-4xl font-bold text-finn-800 mb-4">
              Our Banking Partners
            </h2>
            <p className="text-finn-600 text-lg max-w-2xl mx-auto">
              We partner with India's leading banks and financial institutions to provide you with the best financial solutions.
            </p>
          </motion.div>
        </div>
        
        {renderBankSection("Nationalized Banks", nationalizedBanks, "nationalized banks")}
        {renderBankSection("Private Banks", privateBanks, "private banks")}
        {renderBankSection("NBFCs", nbfcs, "NBFCs")}
      </div>
    </section>
  );
};

export default BankingPartnersSection;
