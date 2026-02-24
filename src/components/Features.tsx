import { LockOpen, ShieldCheck, BellRing, ArrowRight } from 'lucide-react';

export default function Features() {
  return (
    <section className="relative z-10 py-16 bg-navy-deep border-t border-white/5 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display font-bold text-3xl mb-2">Why Top Contractors Choose Us</h2>
            <p className="text-slate-400">Streamlining procurement for the modern trade business.</p>
          </div>
          <a href="#" className="text-primary hover:text-white font-semibold text-sm flex items-center gap-1 transition-colors group">
            View all benefits 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <LockOpen className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">Complete Freedom</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Zero lock-in contracts. We believe in earning your business with every transaction, giving you total flexibility to procure how you want.
            </p>
          </div>
          <div className="group p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gold/20 text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-navy-deep transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">Risk-Free Model</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our "No discount = no charge" guarantee ensures you only pay when you save. We are transparent about our margins and your savings.
            </p>
          </div>
          <div className="group p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <BellRing className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">Market Intelligence</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Stay ahead of material cost fluctuations with optional price-change alerts. We monitor the market so you don't have to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
