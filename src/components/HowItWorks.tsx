import { Handshake, Building2, ShoppingCart, Bell, Scale } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { num: 1, icon: Handshake, title: "Contractors Participate", desc: "Join a network of vetted professionals ready to scale." },
    { num: 2, icon: Building2, title: "Corporate Accounts", desc: "Access national pricing tiers usually reserved for giants." },
    { num: 3, icon: ShoppingCart, title: "Normal Ordering", desc: "Order through your standard wholesaler channels effortlessly." },
    { num: 4, icon: Bell, title: "Price Alerts", desc: "Optional notifications for price drops and bulk deals." },
    { num: 5, icon: Scale, title: "Zero Obligation", desc: "Compare freely with absolutely no commitment to buy." }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 lg:px-12 border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-primary/50"></div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase">The Process</span>
          <div className="h-[1px] w-8 bg-primary/50"></div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-20 text-center tracking-tight">How Affiliate Warehouse Works</h2>
        
        <div className="relative w-full">
          <div className="hidden lg:block absolute top-[22px] left-0 w-full h-[2px] border-t-2 border-dashed border-slate-200 -z-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-11 h-11 rounded-lg bg-navy-deep text-white flex items-center justify-center font-bold text-lg shadow-lg z-10 relative group-hover:scale-110 transition-transform duration-300">
                    {step.num}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <step.icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
