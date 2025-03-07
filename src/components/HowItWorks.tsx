
import { 
  Search, 
  MessageSquare, 
  Headphones, 
  TrendingUp, 
  Settings, 
  FolderKanban, 
  Lightbulb,
  Mail
} from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    icon: <Search className="h-8 w-8 text-ana-yellow" />,
    content: "Ana scans the entire industry—blogs, media sites, niche sources, case study archives, hundreds of newsletters, and hours of podcasts daily—to keep your team ahead. No need to spend hours browsing, or moan about having to read that long article on AdAge."
  },
  {
    number: 2,
    icon: <Mail className="h-8 w-8 text-ana-yellow" />,
    content: "Every morning, you get the 10 most relevant insights, delivered via Slack, Teams, email, or our mobile app. Supercompact and up-to-date."
  },
  {
    number: 3,
    icon: <MessageSquare className="h-8 w-8 text-ana-yellow" />,
    content: "Stay up to date in a blink or dive deeper—ask follow-up questions or explore trends through an intuitive chat interface."
  },
  {
    number: 4,
    icon: <Headphones className="h-8 w-8 text-ana-yellow" />,
    content: "Prefer audio? Ana turns insights into a daily podcast so you can stay informed while you commute, or run, or work, or cook. Or do do all of those at once."
  },
  {
    number: 5,
    icon: <TrendingUp className="h-8 w-8 text-ana-yellow" />,
    content: "Weekly deep dives provide a strategic edge, highlighting major trends and must-know case studies. Once again, on a platform your team prefers the most."
  },
  {
    number: 6,
    icon: <Settings className="h-8 w-8 text-ana-yellow" />,
    content: "Custom-fit for your team: easily tailor topics, add sources, or integrate newsletters and podcasts via a simple chat UI."
  },
  {
    number: 7,
    icon: <FolderKanban className="h-8 w-8 text-ana-yellow" />,
    content: "Private spaces let you feed Ana your own content, helping you refine ideas and craft better client campaigns."
  },
  {
    number: 8,
    icon: <Lightbulb className="h-8 w-8 text-ana-yellow" />,
    content: "Your AI research assistant: tap into Ana's vast proprietary knowledge to uncover best practices and case studies for any industry."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 editorial-font">How Ana Supercharges Advertising Agencies</h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {steps.map((step, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                  <CardContent className="flex flex-col p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-ana-lavender rounded-full flex items-center justify-center mr-4">
                        {step.icon}
                      </div>
                      <span className="text-3xl font-display font-bold text-ana-dark">{step.number}—</span>
                    </div>
                    <p className="text-gray-600">{step.content}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
            <CarouselItem className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="border-none shadow-md bg-ana-yellow h-full">
                <CardContent className="flex flex-col p-6 h-full justify-center">
                  <p className="text-ana-dark font-medium">
                    Get briefed, inspired, muscled up to create, execute, or pitch ideas with Ana. Save shitloads of time, align team's knowledge, be sharper than your competitors. After all, AI agent gives you a legal, yet unfair advantage (to remix a quote by Bill Bernbach).
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="static translate-y-0 bg-white" />
            <CarouselNext className="static translate-y-0 bg-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HowItWorks;
