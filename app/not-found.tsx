import Button from '@/components/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full max-w-content mx-auto px-6 py-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="primary" className="inline-flex items-center gap-2">
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}
