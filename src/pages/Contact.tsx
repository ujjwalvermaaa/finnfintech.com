import { motion } from "framer-motion";
import { useState } from "react";
import { FinnButton } from "@/components/ui/FinnButton";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formState.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{8,20}$/.test(formState.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formState.subject.trim()) newErrors.subject = "Subject is required";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
          variant: "default",
        });
        
        // Reset form
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 text-sm text-finn-700 bg-finn-100 rounded-full">
              Get In Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-finn-700/80 text-lg"
          >
            Have questions or need assistance? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-finn-100">
              <h2 className="text-2xl font-display font-bold mb-6 text-finn-800">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-finn-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-lg border ${
                        errors.firstName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-finn-200 focus:border-finn-500 focus:ring-finn-500"
                      } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-finn-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-lg border ${
                        errors.lastName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-finn-200 focus:border-finn-500 focus:ring-finn-500"
                      } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-finn-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-finn-200 focus:border-finn-500 focus:ring-finn-500"
                      } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                      placeholder="john.doe@gmail.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-finn-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-lg border ${
                        errors.phone ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-finn-200 focus:border-finn-500 focus:ring-finn-500"
                      } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-finn-700 mb-1">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 rounded-lg border ${
                      errors.subject ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-finn-200 focus:border-finn-500 focus:ring-finn-500"
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-finn-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className={`block w-full px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-finn-200 focus:border-finn-500 focus:ring-finn-500"
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                
                <div>
                  <FinnButton
                    type="submit"
                    className="w-full"
                    size="lg"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Submit Message
                  </FinnButton>
                </div>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-finn-100">
              <h2 className="text-2xl font-display font-bold mb-6 text-finn-800">Contact Information</h2>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-finn-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-finn-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-finn-800 mb-1">Office Location</h3>
                    <p className="text-finn-700/80">
                      Unit No. 105, First Floor<br />
                      38, Surya deep Building, Wazirpur 3<br />
                      Delhi, North West Delhi- 110052
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-finn-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-finn-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-finn-800 mb-1">Phone</h3>
                    <p className="text-finn-700/80">
                      Main: 9999673440<br />
                      Support: 9773951255
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-finn-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-finn-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-finn-800 mb-1">Email</h3>
                    <p className="text-finn-700/80">
                      General Inquiries: info@finnfintech.com<br />
                      Customer Support: support@finnfintech.com
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="font-semibold text-finn-800 mb-3">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span className="text-finn-700/80">Monday - Saturday</span>
                    <span className="font-medium">10:00 AM - 6:30 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-finn-700/80">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 pt-8 border-t border-finn-100">
                <h3 className="font-semibold text-finn-800 mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, link: "https://facebook.com" },
                    { icon: Instagram, link: "https://instagram.com" },
                    { icon: Linkedin, link: "https://linkedin.com" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-finn-100 rounded-full flex items-center justify-center hover:bg-finn-600 hover:text-white transition-colors"
                      aria-label={`Follow us on social media ${index + 1}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
