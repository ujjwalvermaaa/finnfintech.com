import Logo from "./Logo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "Loans", path: "/loans" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
    loanTypes: [
      { name: "Home Loan", path: "/loans#home" },
      { name: "Business Loan", path: "/loans#business" },
      { name: "Car Loan", path: "/loans#car" },
      { name: "Education Loan", path: "/loans#education" },
      { name: "Gold Loan", path: "/loans#gold" },
    ],
    connect: [
      { name: "Facebook", path: "https://facebook.com", icon: Facebook },
      { name: "Instagram", path: "https://instagram.com", icon: Instagram },
      { name: "LinkedIn", path: "https://linkedin.com", icon: Linkedin },
    ],
  };

  const currentYear = new Date().getFullYear();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  
  const staggeredAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-finn-950 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-finn-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-finn-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >
          <motion.div variants={item} className="space-y-6">
            <Logo className="text-white" />
            <p className="text-finn-100/80 text-sm">
              FinnFintech is a leading financial technology company providing innovative loan solutions tailored to your specific needs. We combine cutting-edge technology with exceptional customer service to deliver the best financial experience.
            </p>
          </motion.div>
          
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-xl font-display font-semibold">Quick Links</h3>
            <motion.ul variants={staggeredAnimation} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <motion.li key={link.name} variants={item}>
                  <Link to={link.path} className="text-finn-100/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-xl font-display font-semibold">Loan Types</h3>
            <motion.ul variants={staggeredAnimation} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
              {footerLinks.loanTypes.map((link) => (
                <motion.li key={link.name} variants={item}>
                  <Link to={link.path} className="text-finn-100/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-xl font-display font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-finn-500 mt-0.5" />
                <span className="text-finn-100/80 text-sm">
                  Unit No. 105, First Floor, 38, Surya deep Building, Wazirpur 3, Delhi, North West Delhi- 110052
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-finn-500" />
                <span className="text-finn-100/80 text-sm">9999673440</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-finn-500" />
                <span className="text-finn-100/80 text-sm">info@finnfintech.com</span>
              </li>
            </ul>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {footerLinks.connect.map((social) => (
                  <a
                    key={social.name}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-finn-800/50 flex items-center justify-center hover:bg-finn-600 transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="pt-8 border-t border-finn-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-finn-100/60 text-sm">
              &copy; {currentYear} FinnFintech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
