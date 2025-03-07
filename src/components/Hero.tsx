
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
const Hero = () => {
  return <section className="relative pt-32 md:pt-40 overflow-hidden">
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
            <span className="text-xs font-medium text-purple-800">Meet Ana - Your Agency's AI Agent</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 animate-slide-up editorial-font" style={{
          animationDelay: "0.1s"
        }}>
            Let's <em>supercharge</em> your agency to win & retain clients
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            Ana is your agency's AI agent on Slack (or anywhere you like), who will share all the latest advertising news, best work, insights, trend reports, or get you prepared in no time—anything to help your team succeed.
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

          <div className="mt-6 relative w-full max-w-2xl" style={{
          animationDelay: "0.5s"
        }}>
            <img
              src="/images/anatar.png"
              alt="Ana AI Agent"
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>;
};
export default Hero;
