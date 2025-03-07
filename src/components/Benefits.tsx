
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
                    <h3 className="font-display font-bold text-lg mb-1">Have your own agency's AI agent</h3>
                    <p className="text-gray-600">It will learn from your team's needs, answer question, provide data, search database and save insane amount of time. Ana will gradually become a superpowerful team member at a fraction of a cost. Ana works 24/7 and takes no days off</p>
                  </div>
                </div>

                <div className="mb-6 flex items-start gap-4 pb-6 border-b border-gray-100">
                  <div className="min-w-10 h-10 bg-ana-lavender rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-purple-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">Be first to know about the trends & news</h3>
                    <p className="text-gray-600">Your team will be briefed daily about anything that's important (yes, Ana personalizes the briefing to your agency's needs).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-10 h-10 bg-ana-lavender rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">Deep dive into case studies in no time</h3>
                    <p className="text-gray-600">Ana crunches thousands of case studies to assemble them according to category, market, or even more specific parameters).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-ana-yellow inline-block px-3 py-1 rounded-full mb-4">
              <span className="text-xs font-medium text-ana-dark">AGENCY GROWTH</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 editorial-font">
              Agencies are nightmare to run, let Ana help you with an important part — knowledge.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ana is built for advertising agencies by the people who worked there for ages & know the needs of agency inside-out. We've built it for us.
            </p>

            <ul className="space-y-3">
              {[
                "save hours & hours spent on searching & digesting information",
                "save money on paywalls for the things you use only once",
                "save team resources",
                "save from information overload, affecting 70% of agency workforce, by delegating tasks to Ana"
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
