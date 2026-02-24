import { Verified, ArrowDown, Gavel, Calendar, Lock } from 'lucide-react';

export default function PricingModel() {
  return (
    <section className="w-full bg-navy-deep text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="relative mx-auto max-w-[960px] px-6 text-center z-10">
        <div className="inline-block text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Pricing Model
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          We Only Earn <span className="relative inline-block">
            When You Save
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7262 3.97541 127.177 -2.13317 197.828 4.49997" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path></svg>
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
          Our fee structure is completely transparent. No hidden costs, no monthly subscriptions. We align our success directly with your bottom line.
        </p>
        
        <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
          <div className="bg-navy-card border border-slate-700/50 rounded-xl p-6 w-full max-w-sm shadow-2xl relative z-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Outcome</span>
              <Verified className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="font-display text-2xl font-bold text-white">Verified Discount Achieved</div>
            <div className="text-sm text-slate-400 mt-1">Total savings negotiated on your behalf</div>
          </div>
          
          <div className="h-16 w-px bg-slate-700 relative my-1">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%+280px)] h-px bg-slate-700 md:block hidden"></div>
            <div className="absolute bottom-0 -left-[140px] w-px h-8 bg-slate-700 translate-y-full md:block hidden"></div>
            <div className="absolute bottom-0 -right-[140px] w-px h-8 bg-slate-700 translate-y-full md:block hidden"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy-deep border border-gold rounded-full p-1.5 z-20">
              <ArrowDown className="w-5 h-5 text-gold" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full mt-4 md:mt-8">
            <div className="flex-1 bg-navy-card/50 border border-blue-500/30 rounded-xl p-6 relative overflow-hidden group hover:border-blue-500/60 transition-colors text-left">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">Our Fee</div>
              <div className="font-display text-3xl font-bold text-white mb-1">1.1%</div>
              <div className="text-sm text-slate-400">Affiliate Warehouse commission on the total transaction value.</div>
            </div>
            
            <div className="h-8 w-px bg-slate-700 mx-auto md:hidden"></div>
            
            <div className="flex-1 bg-navy-card/50 border border-emerald-500/30 rounded-xl p-6 relative overflow-hidden group hover:border-emerald-500/60 transition-colors text-left">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="text-emerald-500 text-xs font-bold uppercase tracking-wider mb-2">Your Benefit</div>
              <div className="font-display text-3xl font-bold text-white mb-1">The Remainder</div>
              <div className="text-sm text-slate-400">You keep 100% of the remaining savings generated.</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-700 bg-navy-card/30 text-slate-300 text-sm font-medium">
            <Gavel className="w-4 h-4 text-gold" />
            <span>No Retainer Fees</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-700 bg-navy-card/30 text-slate-300 text-sm font-medium">
            <Calendar className="w-4 h-4 text-gold" />
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-700 bg-navy-card/30 text-slate-300 text-sm font-medium">
            <Lock className="w-4 h-4 text-gold" />
            <span>Risk-Free Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
