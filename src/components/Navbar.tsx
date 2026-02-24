import { Warehouse, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-navy-deep/95 backdrop-blur-sm text-white h-[72px] flex items-center">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-white/10 p-1.5 rounded-lg transition-colors group-hover:bg-white/20">
            <Warehouse className="w-5 h-5 text-gold" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Affiliate Warehouse</span>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">How It Works</a>
          <a href="#" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">Contractors</a>
          <a href="#" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">Suppliers</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold px-6 py-2.5 rounded-lg items-center justify-center">
            Apply Now
          </button>
          <button className="lg:hidden text-white p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
