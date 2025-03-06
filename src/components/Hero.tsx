import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
const Hero = () => {
  return <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-ana-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-ana-yellow/10 rounded-full blur-3xl animate-pulse-slow" style={{
        animationDelay: "1s"
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-ana-lavender mb-6 animate-fade-in">
            <Zap size={14} className="text-purple-600 mr-2" />
            <span className="text-xs font-medium text-purple-800">Your advantage in ad agency competition</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 animate-slide-up" style={{
          animationDelay: "0.1s"
        }}>
            Win more clients by <span className="text-gradient">knowing more</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            Ana delivers aggregated insights, analysis, and a rich database of ad campaigns to help your agency stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button className="bg-ana-yellow hover:bg-yellow-400 text-ana-dark font-medium rounded-full px-8 py-6 transition-all">
              Start your free trial
            </Button>
            <Button variant="outline" className="rounded-full px-6 py-6 group">
              See how it works
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-12 relative w-full max-w-4xl animate-fade-in" style={{
          animationDelay: "0.5s"
        }}>
            <div className="aspect-video relative bg-gray-100 rounded-xl overflow-hidden shadow-xl border border-gray-200 glass-card">
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;