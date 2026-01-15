import { Award, Users, Target, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "100+", label: "Projects Completed" },
  { icon: Target, value: "99%", label: "Success Rate" },
  { icon: Zap, value: "24/7", label: "Support Available" }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              About <span className="text-slate-500">Fiesta IT Services</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Fiesta IT Services by Shivam is a leading provider of innovative IT solutions, dedicated to helping businesses thrive in the digital age. With years of expertise and a passion for technology, we deliver tailored solutions that drive real results.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team of experienced professionals combines technical excellence with business acumen to understand your unique challenges and deliver solutions that exceed expectations. We pride ourselves on building long-term partnerships with our clients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                  <div className="text-3xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50">
              <div className="aspect-square bg-gradient-to-br from-slate-800 via-slate-600 to-slate-700 p-1">
                <div className="w-full h-full bg-white rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-slate-700 mb-4">
                      Your Success,
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-slate-400">
                      Our Mission
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-400 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-600 rounded-full blur-3xl opacity-30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
