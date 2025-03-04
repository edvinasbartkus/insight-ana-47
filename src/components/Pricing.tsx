
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-gray-600">No hidden fees. No complicated tiers. Just the knowledge your agency needs to succeed.</p>
        </div>
        
        <div className="max-w-lg mx-auto relative">
          <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-gradient-to-br from-ana-purple to-ana-yellow opacity-10 blur-xl rounded-xl"></div>
          
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-ana-lavender/40 p-6 text-center">
              <h3 className="text-2xl font-display font-bold mb-1">Ana Knowledge Agent</h3>
              <p className="text-gray-600 mb-4">Everything your agency needs to win more clients</p>
              
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-display font-bold">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <ul className="space-y-4">
                {[
                  "Daily insights from across the web, newsletters, and podcasts",
                  "Weekly analysis of industry trends",
                  "Interactive exploration with follow-up questions",
                  "Access to advertising campaign database",
                  "Unlimited searches and queries",
                  "Export and sharing capabilities",
                  "5 team member accounts included",
                  "Priority email support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full mt-8 bg-ana-yellow hover:bg-yellow-400 text-ana-dark font-medium rounded-full py-6 transition-all">
                Start your 14-day free trial
              </Button>
              
              <p className="text-xs text-center mt-4 text-gray-500">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
