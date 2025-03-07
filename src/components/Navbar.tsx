
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" : "py-12"}`}>
      <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/lovable-uploads/aa5e162d-7ae9-4ad7-8017-c2a9d350fcea.png"
            alt="Ana Logo"
            className="h-10 w-10"
          />
          <span className="font-display font-bold text-xl text-ana-dark">Ana</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">How it Works</a>
          <a href="#benefits" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Benefits</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Pricing</a>
        </div>

        <div className="flex items-center space-x-3">
          <Button className="bg-ana-yellow hover:bg-yellow-400 text-ana-dark font-medium rounded-full text-sm transition-all">
            Start free trial
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
