import { Warehouse, Briefcase, Globe, Camera, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-navy-deep border-t border-white/10 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Warehouse className="w-6 h-6 text-white" />
              <h4 className="font-display text-white text-lg font-bold">Affiliate Warehouse</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium trade procurement solutions connecting Australian suppliers with global distribution networks.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors">
                <Briefcase className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors">
                <Camera className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1 md:pl-8">
            <h5 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Explore</h5>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Our Story</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Trade Portal</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Supplier Network</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Resources</h5>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Accessibility</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="text-gold text-sm font-bold uppercase tracking-wider mb-6">Contact Us</h5>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 mt-0.5" />
                <span className="text-slate-400 text-sm leading-snug">Level 14, 333 Collins St<br/>Melbourne VIC 3000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500" />
                <a href="tel:+61300000000" className="text-slate-400 hover:text-white text-sm transition-colors">+61 (03) 9000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500" />
                <a href="mailto:hello@affiliatewarehouse.com.au" className="text-slate-400 hover:text-white text-sm transition-colors">hello@affiliatewarehouse.com.au</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2024 Affiliate Warehouse Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-slate-500 text-xs">ABN 12 345 678 901</p>
            <div className="flex gap-4">
              <span className="w-8 h-5 rounded bg-slate-700/50 block"></span>
              <span className="w-8 h-5 rounded bg-slate-700/50 block"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
