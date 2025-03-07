
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-ana-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-ana-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto glass-card">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Finally, something really useful for the ad agencies.</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ana is created with you in mind. Supercharging your agency to win & retain clients. But also, hey, off-load the work off the team.
            </p>

            <div className="flex justify-center">
              <Button className="bg-ana-yellow hover:bg-yellow-400 text-ana-dark font-bold rounded-full px-8 py-6 transition-all">
                Start your free trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
