
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Hello! I'm interested in learning more about your loan services." }: WhatsAppButtonProps) => {
  // Format the phone number to remove any non-digit characters
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <motion.span
        className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-[#25D366] shadow-lg mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Chat with us
      </motion.span>
      
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute animate-ping w-16 h-16 rounded-full bg-[#25D366]/60" />
        <div className="w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center relative">
          <MessageCircle className="w-8 h-8 text-white" />
          
          {/* Small pulse circles */}
          <motion.div 
            className="absolute w-full h-full rounded-full border-4 border-[#25D366]/30"
            animate={{ scale: [1, 1.5], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
      <span className="sr-only">Contact us on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
