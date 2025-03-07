
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  // Pricing plans data
  const plans = [
    {
      name: "Essential",
      price: "$39",
      description: "For small teams and professionals who need daily insights and AI-powered exploration.",
      features: [
        "Daily insights from across the web, newsletters, and podcasts",
        "Weekly deep dives for must-know case studies",
        "Interactive exploration with follow-up questions",
        "Export & sharing capabilities",
        "Custom topics, sources, and podcasts",
        "Limited AI research assistant capabilities (restricted to 30 queries per month)",
        "10 team members included"
      ],
      buttonText: "Start free trial",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$99",
      description: "For strategic teams that need AI-powered research and deeper access to insights.",
      features: [
        "Everything in Essential, plus:",
        "AI research assistant for tender preparations and deep research",
        "Access to Ana's proprietary knowledge base",
        "Higher query limits for deeper exploration",
        "Priority email support",
        "Scalable team access (up to 50 seats)"
      ],
      buttonText: "Start free trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations that need private knowledge spaces and full-scale AI capabilities.",
      features: [
        "Everything in Pro, plus:",
        "Unlimited team members",
        "Private content spaces to feed Ana proprietary company data",
        "Multiple custom versions of Ana for different teams or projects",
        "Enterprise security & compliance (SSO, GDPR, SOC2-ready)",
        "Dedicated account manager & onboarding",
        "Custom integrations (Slack, Notion, internal systems)"
      ],
      buttonText: "Contact sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 editorial-font">Simple, transparent pricing</h2>
          <p className="text-lg text-gray-600">No hidden fees. No complicated tiers. Just the knowledge your agency needs to succeed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative flex flex-col h-full">
              {plan.highlighted && (
                <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-gradient-to-br from-ana-purple to-ana-yellow opacity-10 blur-xl rounded-xl"></div>
              )}

              <Card className={`relative h-full flex flex-col ${plan.highlighted ? 'border-ana-lavender shadow-lg' : 'border-gray-200'}`}>
                <CardHeader className={`${plan.highlighted ? 'bg-ana-lavender/40' : 'bg-gray-50'} p-6 text-center`}>
                  <CardTitle className="text-2xl font-display font-bold mb-1">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>

                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-ana-yellow hover:bg-yellow-400 text-ana-dark'
                        : plan.name === "Enterprise"
                          ? 'bg-white border-2 border-ana-purple text-ana-purple hover:bg-ana-purple/10'
                          : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                    } font-medium rounded-full py-6 transition-all`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <p className="text-xs text-center mt-8 text-gray-500">No credit card required for trial. Cancel anytime.</p>
      </div>
    </section>
  );
};

export default Pricing;
