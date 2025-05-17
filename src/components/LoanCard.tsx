import { motion } from "framer-motion";
import { AnimatedCard } from "./ui/AnimatedCard";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

export interface LoanCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  features: string[];
  index: number;
}

const LoanCard = ({ title, description, icon: Icon, link, features, index }: LoanCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={link}>
        <AnimatedCard className="h-full p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-finn-100 flex items-center justify-center mr-4">
                <Icon className="w-6 h-6 text-finn-600" />
          </div>
              <h3 className="text-xl font-semibold text-finn-800">{title}</h3>
          </div>
            <p className="text-finn-600 mb-4 flex-grow">{description}</p>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-finn-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-finn-400 mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedCard>
            </Link>
    </motion.div>
  );
};

export default LoanCard;
