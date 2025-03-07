
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FreeTrial = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real app, you would send the form data to a server here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 md:pt-40">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-2xl mx-auto">
            {!formSubmitted ? (
              <>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center editorial-font">
                  Yes. Let's do this. Start your free 14-day trial now.
                </h1>
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="companyUrl">Company URL</Label>
                      <Input
                        id="companyUrl"
                        name="companyUrl"
                        placeholder="https://yourcompany.com"
                        required
                        value={formData.companyUrl}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-ana-yellow hover:bg-yellow-400 text-ana-dark font-medium rounded-full text-sm transition-all py-6"
                    >
                      Start Free Trial
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl border p-8 shadow-sm text-center">
                <h2 className="text-2xl font-display font-bold mb-4">Thanks!</h2>
                <p className="mb-2">Due to the overwhelming demand we've put you on the waitlist.</p>
                <p className="text-xl font-bold mb-2">You are 924th in the line.</p>
                <p>No worries, we'll get back to you as soon as we can.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FreeTrial;
