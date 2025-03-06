import { LightbulbIcon, BarChart4Icon, Search, Database, Globe, FileText } from "lucide-react";

const features = [
  {
    icon: <BarChart4Icon className="h-6 w-6 text-purple-600" />,
    title: "Weekly Analysis",
    description: "In-depth analysis of industry trends and competitive landscapes delivered every week."
  },
  {
    icon: <LightbulbIcon className="h-6 w-6 text-purple-600" />,
    title: "Interactive Exploration",
    description: "Ask follow-up questions and explore topics deeper through natural conversation."
  },
  {
    icon: <Database className="h-6 w-6 text-purple-600" />,
    title: "Campaign Database",
    description: "Unique database of advertising campaigns to search through for inspiration and competitive analysis."
  },
  {
    icon: <Search className="h-6 w-6 text-purple-600" />,
    title: "Smart Search",
    description: "Find exactly what you need with powerful semantic search across all insights and campaigns."
  },
  {
    icon: <FileText className="h-6 w-6 text-purple-600" />,
    title: "Tender Preparation",
    description: "Prepare winning proposals with contextual information about industry benchmarks and case studies."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Everything your agency needs to stay ahead</h2>
          <p className="text-lg text-gray-600">Ana combines powerful insights, analysis, and a rich knowledge base to help your agency win more clients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-4px] duration-300"
            >
              <div className="bg-ana-lavender p-3 inline-block rounded-lg mb-4">
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
