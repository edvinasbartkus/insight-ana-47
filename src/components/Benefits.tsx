
import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-ana-purple/10 absolute -top-6 -left-6 w-full h-full rounded-xl"></div>
              <img 
                src="/images/flowers.jpg" 
                alt="Beautiful flowers" 
                className="relative rounded-xl w-full h-auto shadow-lg"
                style={{ maxHeight: '600px', objectFit: 'cover' }}
              />
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
