import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FinnButton } from '@/components/ui/FinnButton';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
    
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: logErrorToService(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-b from-finn-50/50 to-white flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-finn-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              
              <h1 className="text-2xl font-bold text-finn-800 mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-finn-600 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mb-6 text-left">
                  <summary className="cursor-pointer text-sm text-finn-600 hover:text-finn-800 mb-2">
                    Error Details (Development)
                  </summary>
                  <div className="bg-gray-100 p-4 rounded-lg text-xs font-mono text-gray-700 overflow-auto max-h-32">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.errorInfo && (
                      <div>
                        <strong>Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-1">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}

              <div className="space-y-3">
                <FinnButton
                  onClick={this.handleRetry}
                  className="w-full"
                  variant="default"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </FinnButton>
                
                <FinnButton
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Link>
                </FinnButton>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 