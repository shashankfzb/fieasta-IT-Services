import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4 text-white">
              <span className="font-extrabold">Fiesta</span>
              <span className="font-light ml-1 text-slate-300">IT Services</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Expert IT consultancy services to transform your business in the digital age.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-slate-300" />
              </a>
              <a href="mailto:info@fiestait.com" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">IT Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; {currentYear} Fiesta IT Services by Shivam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
