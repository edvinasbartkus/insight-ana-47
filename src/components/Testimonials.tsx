
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Neat! We’ve been talking about the need for this for ages — works smoothly. Super stoked to finally getting my team informed with zero effort. Saves a loooot of time. Plus, Ana is good at overviewing best cases and work. More capabilities still need be explored! I’ll get back with comments.",
    author: "Jessica Johnson",
    role: "Head of Account Management, Spark Social Agency"
  },
  {
    quote: "We’ve been testing Ana and have to say, it clicked with the team and the more we use it, the more rewarding Ana gets. Keep up the good work!",
    author: "Aurimas Lileikas",
    role: "Managing Director, New! Creative Agency"
  },
  {
    quote: "It becomes a habit quite quickly: not to go search for things, or get generic ChatGPT answers, but to ask this focused agent to provide answers, overviews, summaries, insights. Nice one.",
    author: "Carmen Rodriguez",
    role: "Creative Director, Anti/Anti Agency"
  },
  {
    quote: "Ana makes it easier to keep us all in the loop. We all get the news, insights, trend reports daily and it becomes harder to find excuses to not know about things, or not seeing the work, or case studies.",
    author: "Mindaugas Lataitis",
    role: "Managing Director, SuperYou"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 editorial-font">We expected success, but not this much</h2>
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
