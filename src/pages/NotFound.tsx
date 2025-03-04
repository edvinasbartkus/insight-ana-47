
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4 max-w-md">
        <img 
          src="/lovable-uploads/aa5e162d-7ae9-4ad7-8017-c2a9d350fcea.png" 
          alt="Ana Logo" 
          className="h-20 w-20 mx-auto mb-6"
        />
        <h1 className="text-4xl font-display font-bold mb-4">Page not found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="bg-ana-yellow hover:bg-yellow-400 text-ana-dark rounded-full inline-flex items-center gap-2">
          <ArrowLeft size={16} />
          <a href="/">Return to home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
