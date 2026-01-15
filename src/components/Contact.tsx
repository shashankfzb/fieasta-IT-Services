import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Get In <span className="text-slate-500">Touch</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="mb-8 border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-slate-800">Contact Information</CardTitle>
                <CardDescription className="text-slate-500">Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-slate-800">Email</div>
                    <a href="mailto:info@fiestait.com" className="text-slate-500 hover:text-slate-800 transition-colors">
                      info@fiestait.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-slate-800">Phone</div>
                    <a href="tel:+919799722138" className="text-slate-500 hover:text-slate-800 transition-colors">
                      +91 9799722138
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-slate-800">Location</div>
                    <p className="text-slate-500">
                      Delhi, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 text-white border-none shadow-xl shadow-slate-300/30">
              <CardHeader>
                <CardTitle className="text-white">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-200">Expert team with years of industry experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-200">Tailored solutions for your unique needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-200">Proven track record of successful projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-200">Ongoing support and maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-slate-200 bg-white shadow-lg shadow-slate-200/50">
            <CardHeader>
              <CardTitle className="text-slate-800">Send Us a Message</CardTitle>
              <CardDescription className="text-slate-500">Fill out the form below and we'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="border-slate-200 focus:border-slate-400 focus:ring-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                    className="border-slate-200 focus:border-slate-400 focus:ring-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-slate-700">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="border-slate-200 focus:border-slate-400 focus:ring-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="border-slate-200 focus:border-slate-400 focus:ring-slate-400"
                  />
                </div>

                <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
