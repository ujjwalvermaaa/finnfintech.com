import { Shield, Users, Target, Award, Clock, Heart } from "lucide-react";
import type { CompanyValue, LoanType, TeamMember, BankingPartner } from "@/types";

// Application configuration
export const APP_CONFIG = {
  name: "FinnFintech",
  version: "1.0.0",
  description: "Revolutionizing financial services through technology",
  contact: {
    phone: "+919599156255",
    email: "info@finnfintech.com",
    whatsapp: "+919599156255",
  },
  social: {
    linkedin: "https://linkedin.com/company/finnfintech",
    twitter: "https://twitter.com/finnfintech",
    facebook: "https://facebook.com/finnfintech",
  },
} as const;

// Navigation configuration
export const NAVIGATION = {
  main: [
    { label: "Home", href: "/" },
    { label: "Loans", href: "/loans" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footer: [
    {
      title: "Products",
      links: [
        { label: "Home Loan", href: "/apply/home-loan" },
        { label: "Business Loan", href: "/apply/business-loan" },
        { label: "Personal Loan", href: "/apply/personal-loan" },
        { label: "Car Loan", href: "/apply/auto-loan" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "EMI Calculator", href: "/emi-calculator" },
        { label: "Track Application", href: "/track" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
  ],
} as const;

// Loan types configuration
export const LOAN_TYPES: LoanType[] = [
  {
    id: "home-loan",
    name: "Home Loan",
    description: "Realize your dream of owning a home with our competitive home loan options.",
    features: [
      "Competitive interest rates starting from 8.5%",
      "Loan amount up to ₹5 Crores",
      "Flexible tenure up to 30 years",
      "Minimal documentation",
      "Quick approval process",
      "No prepayment charges after 3 years",
    ],
    requirements: [
      "Age: 21-65 years",
      "Minimum income: ₹25,000/month",
      "Work experience: 2+ years",
      "Good credit score (750+)",
      "Valid identity and address proof",
    ],
    interestRate: { min: 8.5, max: 12.5 },
    amount: { min: 500000, max: 50000000 },
    tenure: { min: 5, max: 30 },
    processingFee: 0.5,
    image: "/loans/home-loan.jpg",
    route: "/apply/home-loan",
  },
  {
    id: "business-loan",
    name: "Business Loan",
    description: "Fuel your business growth with our flexible business loan solutions.",
    features: [
      "Interest rates from 12% onwards",
      "Loan amount up to ₹2 Crores",
      "Tenure up to 5 years",
      "No collateral required",
      "Quick disbursement",
      "Flexible repayment options",
    ],
    requirements: [
      "Business vintage: 2+ years",
      "Annual turnover: ₹10 Lakhs+",
      "Good business credit history",
      "Valid business documents",
      "Bank statements for last 12 months",
    ],
    interestRate: { min: 12, max: 18 },
    amount: { min: 100000, max: 20000000 },
    tenure: { min: 1, max: 5 },
    processingFee: 1.5,
    image: "/loans/business-loan.jpg",
    route: "/apply/business-loan",
  },
  {
    id: "personal-loan",
    name: "Personal Loan",
    description: "Meet your personal financial needs with our hassle-free personal loans.",
    features: [
      "Interest rates from 10.5%",
      "Loan amount up to ₹25 Lakhs",
      "Tenure up to 7 years",
      "No collateral required",
      "Quick approval within 24 hours",
      "Minimal documentation",
    ],
    requirements: [
      "Age: 21-58 years",
      "Minimum income: ₹20,000/month",
      "Work experience: 1+ years",
      "Good credit score (700+)",
      "Valid identity and address proof",
    ],
    interestRate: { min: 10.5, max: 16 },
    amount: { min: 50000, max: 2500000 },
    tenure: { min: 1, max: 7 },
    processingFee: 1,
    image: "/loans/personal-loan.jpg",
    route: "/apply/personal-loan",
  },
  {
    id: "car-loan",
    name: "Car Loan",
    description: "Drive your dream car with our attractive car loan offers.",
    features: [
      "Interest rates from 7.5%",
      "Loan amount up to ₹50 Lakhs",
      "Tenure up to 8 years",
      "100% on-road funding",
      "Quick approval process",
      "Competitive processing fees",
    ],
    requirements: [
      "Age: 21-65 years",
      "Minimum income: ₹25,000/month",
      "Work experience: 2+ years",
      "Good credit score (750+)",
      "Valid driving license",
    ],
    interestRate: { min: 7.5, max: 12 },
    amount: { min: 100000, max: 5000000 },
    tenure: { min: 1, max: 8 },
    processingFee: 0.5,
    image: "/loans/car-loan.jpg",
    route: "/apply/auto-loan",
  },
];

// Company values
export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: "trust-security",
    icon: Shield,
    title: "Trust & Security",
    description: "We prioritize the security of your financial information with bank-level encryption and protection.",
  },
  {
    id: "customer-first",
    icon: Users,
    title: "Customer First",
    description: "Our dedicated team is committed to providing exceptional service and support at every step.",
  },
  {
    id: "innovation",
    icon: Target,
    title: "Innovation",
    description: "We continuously evolve our services to meet the changing needs of our customers.",
  },
  {
    id: "excellence",
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from our products to our customer service.",
  },
  {
    id: "efficiency",
    icon: Clock,
    title: "Efficiency",
    description: "Quick processing and minimal documentation for faster loan approvals.",
  },
  {
    id: "social-impact",
    icon: Heart,
    title: "Social Impact",
    description: "We're committed to making a positive difference in the communities we serve.",
  },
];

// Team members
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "pankaj-saluja",
    name: "Pankaj Saluja",
    position: "Managing Director",
    image: "/directors/pankaj-saluja.jpg",
    contact: {
      phone: ["9773951255", "9560553075"],
      email: "md@finnfintech.com",
    },
    bio: "Experienced financial professional with over 15 years in the industry.",
  },
  {
    id: "kavita-verma",
    name: "Kavita Verma",
    position: "Managing Director",
    image: "/directors/kavita-verma.jpg",
    contact: {
      phone: ["9999673440", "9599156255"],
      email: "md@finnfintech.com",
    },
    bio: "Strategic leader with expertise in business development and operations.",
  },
  {
    id: "deepak-verma",
    name: "Deepak Verma",
    position: "CEO",
    image: "/directors/deepak-verma.jpg",
    contact: {
      phone: ["9999673440", "9599156255"],
      email: "deepak.verma@finnfintech.com",
    },
    bio: "Visionary leader who laid the foundation of FinnFintech with a mission to transform financial services.",
  },
];

// Banking partners
export const BANKING_PARTNERS: BankingPartner[] = [
  {
    id: "hdfc-bank",
    name: "HDFC Bank",
    logo: "/partners/hdfc-bank.png",
    description: "Leading private sector bank with extensive network",
    partnershipType: "premium",
  },
  {
    id: "icici-bank",
    name: "ICICI Bank",
    logo: "/partners/icici-bank.png",
    description: "Innovative banking solutions for modern customers",
    partnershipType: "premium",
  },
  {
    id: "sbi",
    name: "State Bank of India",
    logo: "/partners/sbi.png",
    description: "India's largest public sector bank",
    partnershipType: "standard",
  },
  {
    id: "axis-bank",
    name: "Axis Bank",
    logo: "/partners/axis-bank.png",
    description: "Customer-centric banking with digital innovation",
    partnershipType: "standard",
  },
];

// Animation configurations
export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
  },
  stagger: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    },
  },
} as const;

// Form validation rules
export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  phone: {
    pattern: /^[6-9]\d{9}$/,
    message: "Please enter a valid 10-digit phone number",
  },
  pan: {
    pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    message: "Please enter a valid PAN number",
  },
  aadhar: {
    pattern: /^[0-9]{12}$/,
    message: "Please enter a valid 12-digit Aadhar number",
  },
  pincode: {
    pattern: /^[1-9][0-9]{5}$/,
    message: "Please enter a valid 6-digit pincode",
  },
} as const;

// API endpoints
export const API_ENDPOINTS = {
  base: process.env.VITE_API_BASE_URL || "https://api.finnfintech.com",
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },
  loans: {
    types: "/loans/types",
    apply: "/loans/apply",
    status: "/loans/status",
    calculator: "/loans/calculator",
  },
  applications: {
    create: "/applications",
    list: "/applications",
    get: "/applications/:id",
    update: "/applications/:id",
    delete: "/applications/:id",
  },
  documents: {
    upload: "/documents/upload",
    list: "/documents",
    delete: "/documents/:id",
  },
} as const;

// Error messages
export const ERROR_MESSAGES = {
  network: "Network error. Please check your connection and try again.",
  unauthorized: "You are not authorized to perform this action.",
  forbidden: "Access denied. You don't have permission to access this resource.",
  notFound: "The requested resource was not found.",
  serverError: "Something went wrong on our end. Please try again later.",
  validation: "Please check your input and try again.",
  timeout: "Request timed out. Please try again.",
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  applicationSubmitted: "Your loan application has been submitted successfully!",
  profileUpdated: "Your profile has been updated successfully.",
  documentUploaded: "Document uploaded successfully.",
  passwordChanged: "Password changed successfully.",
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  auth: "finnfintech_auth",
  user: "finnfintech_user",
  theme: "finnfintech_theme",
  language: "finnfintech_language",
  preferences: "finnfintech_preferences",
} as const;

// Route paths
export const ROUTES = {
  home: "/",
  loans: "/loans",
  about: "/about",
  contact: "/contact",
  apply: {
    homeLoan: "/apply/home-loan",
    businessLoan: "/apply/business-loan",
    personalLoan: "/apply/personal-loan",
    carLoan: "/apply/auto-loan",
  },
  calculator: "/emi-calculator",
  notFound: "*",
} as const; 