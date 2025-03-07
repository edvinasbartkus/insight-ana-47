
import { LightbulbIcon, BarChart4Icon, Search, Database, Globe, FileText } from "lucide-react";

const features = [
  {
    icon: <img src="/images/faces/1.png" alt="Ana Face" className="h-12 w-12 text-purple-600" />,
    title: "Save shitloads of your team’s time",
    description: "Ana scans the entire industry—blogs, media sites, niche sources, case study archives, hundreds of newsletters, and hours of podcasts daily—to keep your team ahead. No need to spend hours browsing, or moan about having to read that long article on AdAge."
  },
  {
    icon: <img src="/images/faces/2.png" alt="Ana Face" className="h-12 w-12 text-purple-600" />,
    title: "Listen—Ana creates personal agency’s podcast",
    description: "Prefer audio? Ana turns insights into a daily podcast so you can stay informed while you commute, or run, or work, or cook. Or do do all of those at once."
  },
  {
    icon: <img src="/images/faces/3.png" alt="Ana Face" className="h-12 w-12 text-purple-600" />,
    title: "LLM agency’s content",
    description: "Private spaces let you feed Ana your own content, helping you refine ideas and craft better client campaigns."
  },
  {
    icon: <img src="/images/faces/4.png" alt="Ana Face" className="h-12 w-12 text-purple-600" />,
    title: "Get briefed daily on Slack (or where you prefer to)",
    description: "Every morning, you get the 10 most relevant insights, delivered via Slack, Teams, email, or our mobile app. Supercompact and up-to-date."
  },
  {
    icon: <img src="/images/faces/5.png" alt="Ana Face" className="h-12 w-12 text-purple-600" />,
    title: "Deep dive into case studies",
    description: "Weekly deep dives provide a strategic edge, highlighting major trends and must-know case studies. Once again, on a platform your team prefers the most."
  },
  {
    icon: <img src="/images/faces/6.png" alt="Ana Face" className="h-12 w-12 text-purple-600" />,
    title: "Ask anything—Ana knows a lot ",
    description: "Stay up to date in a blink or dive deeper—ask follow-up questions or explore trends through an intuitive chat interface."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 editorial-font">Agencies are a nightmare to run, let Ana help you with some of it</h2>
          <p className="text-lg text-gray-600">Ana combines current knowledge, insights, award-winning case-studies, timeless know-how, up-to-date data with loads of interactivity & personalization to help you be a better agency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-4px] duration-300"
            >
              <div className="bg-ana-lavender inline-block rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
