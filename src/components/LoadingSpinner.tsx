import { Loader2 } from 'lucide-react';
import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

interface LoadingSpinnerProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  text?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

const variantClasses = {
  default: 'text-finn-600',
  primary: 'text-finn-500',
  secondary: 'text-finn-400',
};

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  text,
  className,
}: LoadingSpinnerProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <Loader2
        className={cn(
          'animate-spin',
          sizeClasses[size],
          variantClasses[variant]
        )}
      />
      {text && (
        <p className="mt-2 text-sm text-finn-600 animate-pulse">{text}</p>
      )}
    </div>
  );
}

interface LoadingPageProps extends BaseComponentProps {
  text?: string;
}

export function LoadingPage({ text = 'Loading...', className }: LoadingPageProps) {
  return (
    <div className={cn('min-h-screen flex items-center justify-center', className)}>
      <div className="text-center">
        <LoadingSpinner size="xl" text={text} />
      </div>
    </div>
  );
}

interface LoadingOverlayProps extends BaseComponentProps {
  text?: string;
  show?: boolean;
}

export function LoadingOverlay({
  text = 'Loading...',
  show = true,
  className,
}: LoadingOverlayProps) {
  if (!show) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 bg-black/50 flex items-center justify-center z-50',
        className
      )}
    >
      <div className="bg-white rounded-lg p-6 shadow-xl">
        <LoadingSpinner size="lg" text={text} />
      </div>
    </div>
  );
} 