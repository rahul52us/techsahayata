"use client";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import stores from "../store/stores";
import { Star } from "lucide-react";

const TestimonialSection = observer(() => {
  const {
    testimonialStore: { testimonials, getTestimonials },
  } = stores;

  useEffect(() => {
    // Fetch top 10 latest testimonials for the homepage
    getTestimonials({ page: 1, limit: 10 });
  }, [getTestimonials]);

  const { data, loading } = testimonials;

  if (loading) {
    return (
      <section className="w-full py-24 bg-white flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-[#097899] border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  if (!data || data.length === 0) {
    return null; // Don't show the section if there are no testimonials
  }

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden font-sans">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#097899]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#40b1d1]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-12 z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-[#097899] uppercase bg-[#097899]/10 rounded-full">
            Real Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            What Our <span className="text-[#097899]">Clients</span> Say
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence and automate their processes.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Hide scrollbar styles for WebKit */}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {data.map((testimonial: any, idx: number) => (
            <div 
              key={idx} 
              className="min-w-[320px] md:min-w-[400px] w-[320px] md:w-[400px] snap-center shrink-0 bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_-15px_rgba(9,120,153,0.1)] border border-slate-100 hover:-translate-y-2 transition-transform duration-500 relative"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-[#097899]/10 text-8xl font-serif leading-none select-none">
                "
              </div>
              
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < (testimonial.rating || 5) ? 'fill-[#FFD700] text-[#FFD700]' : 'fill-slate-100 text-slate-200'}`} 
                  />
                ))}
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10 line-clamp-4">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                {testimonial.imageUrl ? (
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-50"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#097899] to-[#40b1d1] flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.profession} {testimonial.company ? `at ${testimonial.company}` : ''}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TestimonialSection;
