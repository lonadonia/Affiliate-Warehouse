import { Check, X, User } from 'lucide-react';

export default function WholesalerSafe() {
  return (
    <section className="relative bg-ivory py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="border-l-[6px] border-emerald-500 pl-6 py-1 mb-8">
              <span className="block text-emerald-700 text-sm font-bold tracking-widest uppercase mb-3">Wholesaler Safe</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Built to Work With Wholesalers — Not Around Them
              </h2>
            </div>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We operate with a strict non-interference policy. Our platform acts as a digital conduit, respecting established supply chains while modernizing the procurement process for Australian trade.
            </p>
            
            <div className="mt-auto relative rounded-xl border-2 border-slate-800 bg-white p-8 shadow-xl">
              <span className="absolute -top-6 -right-4 font-serif text-8xl text-amber-400 opacity-80 leading-none">"</span>
              <div className="relative z-10">
                <p className="text-slate-800 font-medium italic mb-6 text-lg">
                  "Finally, a digital solution that doesn't try to eat our lunch. They enhance our relationships instead of replacing them."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                    <User className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">James T.</p>
                    <p className="text-xs text-slate-500">Director, National Timber Supply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 h-full">
              <div className="flex flex-col gap-6">
                <div className="border-b-4 border-emerald-500 pb-2 mb-2">
                  <h3 className="font-display text-xl font-bold text-slate-900">What We Do</h3>
                </div>
                {[
                  { title: "Direct Referrals", desc: "We funnel qualified leads directly to your partner network without interception." },
                  { title: "Respect Margins", desc: "Your pricing structures remain confidential and fully under your control." },
                  { title: "Enhance Relationships", desc: "Tools designed to make communication between you and your clients seamless." }
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="border-b-4 border-rose-500 pb-2 mb-2">
                  <h3 className="font-display text-xl font-bold text-slate-900">What We Never Do</h3>
                </div>
                {[
                  { title: "Undercut Pricing", desc: "We never offer competitive pricing models that damage your market position." },
                  { title: "Bypass Channels", desc: "Existing distribution agreements are sacred. We do not circumvent them." },
                  { title: "Hide Sources", desc: "Transparency is key. We never obscure the origin of goods or services." }
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-4 p-4 rounded-lg hover:bg-rose-50 transition-colors">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700">
                      <X className="w-4 h-4" strokeWidth={3} />
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
