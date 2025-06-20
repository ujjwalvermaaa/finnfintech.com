// Core application types
export interface AppConfig {
  name: string;
  version: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

// Loan types
export interface LoanType {
  id: string;
  name: string;
  description: string;
  features: string[];
  requirements: string[];
  interestRate: {
    min: number;
    max: number;
  };
  amount: {
    min: number;
    max: number;
  };
  tenure: {
    min: number;
    max: number;
  };
  processingFee: number;
  image: string;
  route: string;
}

export interface LoanApplication {
  id: string;
  type: string;
  amount: number;
  tenure: number;
  purpose: string;
  personalInfo: PersonalInfo;
  employmentInfo: EmploymentInfo;
  documents: Document[];
  status: 'pending' | 'approved' | 'rejected' | 'processing';
  createdAt: Date;
  updatedAt: Date;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  panNumber: string;
  aadharNumber: string;
  address: Address;
}

export interface EmploymentInfo {
  employmentType: 'salaried' | 'self-employed' | 'business-owner';
  companyName?: string;
  designation?: string;
  monthlyIncome: number;
  workExperience: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
  type: 'current' | 'permanent';
}

export interface Document {
  id: string;
  name: string;
  type: 'identity' | 'address' | 'income' | 'bank';
  url: string;
  uploadedAt: Date;
}

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  contact: {
    phone: string[];
    email: string;
  };
  bio?: string;
  linkedin?: string;
}

export interface Director extends TeamMember {
  role: 'director' | 'founder';
}

export interface CEO extends TeamMember {
  role: 'ceo';
}

// Company values
export interface CompanyValue {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Customer review types
export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  loanType: string;
  date: Date;
  verified: boolean;
}

// Banking partner types
export interface BankingPartner {
  id: string;
  name: string;
  logo: string;
  description: string;
  partnershipType: 'premium' | 'standard';
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea' | 'file';
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: RegExp;
    message?: string;
  };
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Theme types
export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// Animation types
export interface AnimationConfig {
  duration: number;
  delay: number;
  easing: string;
}

// SEO types
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Utility types
export type Status = 'idle' | 'loading' | 'success' | 'error';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export type Variant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps extends BaseComponentProps {
  padding?: Size;
  shadow?: boolean;
  border?: boolean;
}

// Hook types
export interface UseLocalStorageOptions<T> {
  defaultValue: T;
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
}

export interface UseDebounceOptions {
  delay: number;
  leading?: boolean;
  trailing?: boolean;
} 