import { Check, BellRing } from 'lucide-react';

export default function PriceTracking() {
  return (
    <section className="w-full bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-[45%] relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-6 lg:p-8 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
                <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
              </div>
              <div className="relative h-48 w-full mb-6">
                <div className="absolute inset-0 flex flex-col justify-between">
                  <div className="w-full h-px bg-slate-50"></div>
                  <div className="w-full h-px bg-slate-50"></div>
                  <div className="w-full h-px bg-slate-50"></div>
                  <div className="w-full h-px bg-slate-50"></div>
                </div>
                <svg className="absolute inset-0 w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 50">
                  <defs>
                    <linearGradient id="gradientGraph" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"></stop>
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,40 Q25,35 50,20 T100,10 L100,50 L0,50 Z" fill="url(#gradientGraph)"></path>
                  <path d="M0,40 Q25,35 50,20 T100,10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                </svg>
                <div className="absolute top-0 right-4 bg-navy-deep text-white p-3 rounded-lg shadow-lg flex items-center gap-3 animate-pulse border border-slate-700">
                  <BellRing className="w-5 h-5 text-gold" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Alert</div>
                    <div className="text-xs font-semibold">Price Drop: -12%</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="h-1.5 w-8 bg-slate-200 rounded mb-2"></div>
                  <div className="h-3 w-12 bg-slate-300 rounded"></div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="h-1.5 w-8 bg-slate-200 rounded mb-2"></div>
                  <div className="h-3 w-12 bg-slate-300 rounded"></div>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                  <div className="h-1.5 w-8 bg-primary/20 rounded mb-2"></div>
                  <div className="h-3 w-12 bg-primary/40 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[55%]">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Price Intelligence
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Real-Time Price Tracking
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
              Stay ahead of market shifts with precision data. Our intelligence engine monitors fluctuations instantly, ensuring you never overpay for premium trade goods.
            </p>
            <div className="flex flex-col gap-0">
              {[
                { title: "Instant Alerts", desc: "Receive immediate notifications via email or SMS when specific items drop below your target threshold." },
                { title: "Market Trends Visualization", desc: "Interactive charts visualize market shifts over time, helping you predict the best buying windows." },
                { title: "Historical Data Access", desc: "Access up to 5 years of pricing history to benchmark current offers against long-term averages." },
                { title: "Competitor Analysis", desc: "Automatically compare your negotiated rates against the top 5 national suppliers in real-time." }
              ].map((feature, idx) => (
                <div key={idx} className={`group flex items-start gap-4 py-5 ${idx !== 3 ? 'border-b border-slate-200' : ''}`}>
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
