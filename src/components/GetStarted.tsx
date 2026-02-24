import { Package, Handshake, HeadphonesIcon, ArrowRight } from 'lucide-react';

export default function GetStarted() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 md:px-10 w-full relative overflow-hidden bg-navy-deep">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/40 via-navy-deep to-navy-deep"></div>
      <div className="z-10 w-full max-w-[1280px] flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl">
          <p className="text-gold text-sm font-bold tracking-widest uppercase mb-4">Take Action</p>
          <h2 className="font-display text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Get Started — <span className="text-slate-300">Choose Your Path</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Select the appropriate gateway below to begin your trade application or partnership inquiry. All submissions are reviewed by our procurement team within 24 hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start">
          {/* Trade Supplier */}
          <div className="group bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1">
            <div className="h-2 w-full bg-blue-600"></div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Package className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-slate-900 text-xl font-bold">Trade Supplier</h3>
                  <p className="text-slate-500 text-sm">For product distribution</p>
                </div>
              </div>
              <form className="flex flex-col gap-5 flex-grow">
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 block ml-1">Company Name</span>
                  <input type="text" placeholder="Enter company name" className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 block ml-1">Email Address</span>
                  <input type="email" placeholder="name@company.com" className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none" />
                </label>
                <div className="mt-auto pt-6">
                  <button type="button" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all group-hover:shadow-lg">
                    Start Application
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="mt-4 text-center">
                    <a href="#" className="text-xs text-slate-500 hover:text-blue-600 border-b border-dashed border-slate-300 hover:border-blue-600 pb-0.5 transition-colors">
                      Or schedule a call via Calendly
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Strategic Partner */}
          <div className="group bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 relative z-10 lg:-mt-6">
            <div className="h-2 w-full bg-emerald-600"></div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                  <Handshake className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-slate-900 text-xl font-bold">Strategic Partner</h3>
                  <p className="text-slate-500 text-sm">Joint ventures & logistics</p>
                </div>
              </div>
              <form className="flex flex-col gap-5 flex-grow">
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 block ml-1">Entity Name</span>
                  <input type="text" placeholder="Enter entity name" className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all outline-none" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 block ml-1">Proposal Type</span>
                  <select className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all outline-none">
                    <option>Select a proposal type</option>
                    <option>Logistics Integration</option>
                    <option>Cross-Promotion</option>
                    <option>Capital Investment</option>
                  </select>
                </label>
                <div className="mt-auto pt-6">
                  <button type="button" className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all group-hover:shadow-lg">
                    Submit Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="mt-4 text-center">
                    <a href="#" className="text-xs text-slate-500 hover:text-emerald-600 border-b border-dashed border-slate-300 hover:border-emerald-600 pb-0.5 transition-colors">
                      Book a discovery session
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* General Support */}
          <div className="group bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1">
            <div className="h-2 w-full bg-primary"></div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-50 rounded-lg text-primary">
                  <HeadphonesIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-slate-900 text-xl font-bold">General Support</h3>
                  <p className="text-slate-500 text-sm">Existing accounts & help</p>
                </div>
              </div>
              <form className="flex flex-col gap-5 flex-grow">
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 block ml-1">Full Name</span>
                  <input type="text" placeholder="Your full name" className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 block ml-1">Message Subject</span>
                  <input type="text" placeholder="Brief subject" className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" />
                </label>
                <div className="mt-auto pt-6">
                  <button type="button" className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all group-hover:shadow-lg">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="mt-4 text-center">
                    <a href="#" className="text-xs text-slate-500 hover:text-primary border-b border-dashed border-slate-300 hover:border-primary pb-0.5 transition-colors">
                      View our help documentation
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
