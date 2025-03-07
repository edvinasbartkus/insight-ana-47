
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Ana has completely changed how we stay informed and prepare for new business pitches. We're winning more clients with less effort.",
    author: "Sarah Johnson",
    role: "Creative Director, Spark Agency"
  },
  {
    quote: "The campaign database alone is worth the subscription. I found inspiration for a difficult pitch and ended up winning a $500K account.",
    author: "Michael Chen",
    role: "New Business Director, Pulse Media"
  },
  {
    quote: "Our team saves hours every week that used to be spent gathering insights. Ana delivers exactly what we need, when we need it.",
    author: "Emma Rodriguez",
    role: "Strategy Lead, Forward Partners"
  },
  {
    quote: "The weekly analysis helped us identify an emerging trend that we turned into a successful campaign for our biggest client.",
    author: "David Wilson",
    role: "CEO, Bright Ideas Agency"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">We expected success, but not this much</h2>
          <p className="text-lg text-gray-600">Agencies rave about Ana</p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/2 p-2">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-ana-yellow fill-ana-yellow" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-6 flex-grow">"{testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-display font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:flex justify-center pt-8 gap-2">
            <CarouselPrevious className="static translate-y-0 bg-white" />
            <CarouselNext className="static translate-y-0 bg-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
