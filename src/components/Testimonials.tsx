import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "The efficiency gains we've seen since integrating are measurable. It's rare to find a platform that understands the nuance of Australian trade logistics so perfectly.",
      name: "Sarah Jenkins",
      role: "Procurement Head, BuildCorp",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "We were skeptical about digital intermediaries, but the 'Wholesaler Safe' guarantee is real. They've protected our margins while bringing us volume we couldn't access alone.",
      name: "David Chen",
      role: "CEO, Metro Tiles",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "A masterclass in B2B alignment. The platform is intuitive, the support is local, and the results speak for themselves. Highly recommended for any wholesaler.",
      name: "Elena Rossi",
      role: "Ops Manager, SteelFlow",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-10 left-4 lg:left-20 font-serif text-[300px] leading-none text-sky-100 select-none pointer-events-none opacity-50">"</div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sky-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Trusted by Trade</span>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900">Industry Leaders Speak</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col h-full bg-ivory rounded-lg border-t-[3px] border-slate-900 shadow-lg p-8">
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="flex-grow">
                <p className="text-lg text-slate-700 leading-relaxed italic mb-6">
                  "{review.quote}"
                </p>
              </blockquote>
              <div className="border-t border-slate-200 pt-6 mt-2 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <cite className="not-italic font-bold text-slate-900 block">{review.name}</cite>
                  <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
