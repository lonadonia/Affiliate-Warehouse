import { Users, Store, Package } from 'lucide-react';

export default function Audience() {
  return (
    <section className="w-full bg-ivory py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-primary/50"></div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase">Get Started</span>
          <div className="h-[1px] w-8 bg-primary/50"></div>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 text-center tracking-tight">Who Is This For?</h2>
        <p className="text-slate-600 text-lg text-center max-w-2xl mb-16">
          Designed specifically for Australian trade professionals who demand reliability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Contractors */}
          <div className="group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="p-8 flex flex-col flex-1">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Contractors</h3>
              <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                Streamline your ordering process, manage projects efficiently, and access exclusive trade pricing without the hassle.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                  For: Trade Pros
                </span>
              </div>
            </div>
          </div>
          {/* Wholesalers */}
          <div className="group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
            <div className="p-8 flex flex-col flex-1">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                <Store className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Wholesalers</h3>
              <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                Expand your reach instantly. Connect with qualified trade professionals looking for reliable stock at scale.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                  For: Distributors
                </span>
              </div>
            </div>
          </div>
          {/* Suppliers */}
          <div className="group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <div className="p-8 flex flex-col flex-1">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 text-primary group-hover:scale-110 transition-transform duration-300">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Suppliers</h3>
              <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                Showcase your premium products directly to a dedicated audience of decision-makers and buyers.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                  For: Manufacturers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
