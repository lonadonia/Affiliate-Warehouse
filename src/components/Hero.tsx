import { ArrowRight, CheckCircle2, Zap, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-navy-deep text-white py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-gold/50"></span>
              <span className="text-gold font-bold text-xs uppercase tracking-[0.15em]">Trade Procurement & Price Monitoring</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] mb-6 tracking-tight">
              We Help Trade Businesses Access Better Pricing — <span className="relative inline-block">Transparently
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gold opacity-80 rounded-full"></span>
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl font-light">
              Collective buying power, price tracking, and corporate-level trade accounts — without lock-ins or obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-primary hover:bg-primary-dark text-white font-bold h-14 px-8 rounded-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20">
                <span>Apply to Become a Preferred Contractor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-transparent border border-white/30 hover:border-white text-white font-semibold h-14 px-8 rounded-lg flex items-center justify-center transition-all hover:bg-white/5">
                Request a Call Back
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400 font-medium border-t border-white/10 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>No lock-ins</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>No discount = no charge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>Optional price-change alerts</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform translate-y-10"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1E33] h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/80 to-transparent z-10"></div>
                <img src="https://www.on-magazine.co.uk/wp-content/uploads/Setting-Up-A-Warehouse-Business-What-You-Need-To-Know-1.jpg" alt="Warehouse" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
                
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-3">
                  <div className="bg-navy-deep/90 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Price Alert</div>
                        <div className="text-white font-bold text-sm">Copper Cabling (100m Roll)</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold text-sm">-12%</div>
                      <div className="text-xs text-slate-400">vs. Market Avg</div>
                    </div>
                  </div>
                  
                  <div className="bg-navy-deep/90 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-lg flex items-center justify-between opacity-90 scale-[0.98] origin-bottom">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-gold/20 flex items-center justify-center text-gold">
                        <Settings className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Bulk Buy Opportunity</div>
                        <div className="text-white font-bold text-sm">HVAC Units (Model X-500)</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold text-sm">Active</div>
                      <div className="text-xs text-slate-400">Ends in 24h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
