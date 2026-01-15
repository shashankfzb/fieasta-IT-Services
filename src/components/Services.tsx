import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, HeadphonesIcon, Database } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web & Mobile App Development",
    description: "Custom web and mobile applications built with modern technologies to meet your unique business needs.",
    features: ["React & React Native", "Progressive Web Apps", "E-commerce Solutions", "API Integration"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Scalable cloud infrastructure and automated deployment pipelines for seamless operations.",
    features: ["AWS, Azure, GCP", "CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code"]
  },
  {
    icon: HeadphonesIcon,
    title: "IT Support & Maintenance",
    description: "Reliable technical support and maintenance services to keep your systems running smoothly.",
    features: ["24/7 Support", "System Monitoring", "Security Updates", "Performance Optimization"]
  },
  {
    icon: Database,
    title: "Data & Automation Services",
    description: "Transform your data into insights and automate repetitive tasks to boost productivity.",
    features: ["Data Analytics", "Process Automation", "Database Management", "Business Intelligence"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Our Services
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200 bg-white"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-slate-300/50">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-800">{service.title}</CardTitle>
                <CardDescription className="text-base text-slate-500">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-slate-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
