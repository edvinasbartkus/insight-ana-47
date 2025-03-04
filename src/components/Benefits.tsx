
import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-ana-purple/10 absolute -top-6 -left-6 w-full h-full rounded-xl"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="mb-6 flex items-start gap-4 pb-6 border-b border-gray-100">
                  <div className="min-w-10 h-10 bg-ana-lavender rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-purple-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">Identify market trends before competitors</h3>
                    <p className="text-gray-600">Ana's daily insights give you a competitive edge by surfacing emerging trends first.</p>
                  </div>
                </div>
                
                <div className="mb-6 flex items-start gap-4 pb-6 border-b border-gray-100">
                  <div className="min-w-10 h-10 bg-ana-lavender rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-purple-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">Craft more compelling pitches</h3>
                    <p className="text-gray-600">Access Ana's database of successful campaigns to inspire and inform your client pitches.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="min-w-10 h-10 bg-ana-lavender rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">Save hours of research time</h3>
                    <p className="text-gray-600">Stop manually searching for information across multiple sources - Ana does the work for you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-ana-yellow inline-block px-3 py-1 rounded-full mb-4">
              <span className="text-xs font-medium text-ana-dark">AGENCY GROWTH</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Transform your agency's competitive advantage
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ana helps advertising agencies of all sizes win more business through better knowledge and deeper insights.
            </p>
            
            <ul className="space-y-3">
              {[
                "Save 15+ hours per week on research and information gathering",
                "Increase pitch win rates by up to 30% with data-backed proposals",
                "Stay ahead of industry trends with daily personalized updates",
                "Build deeper client relationships with valuable industry insights"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
