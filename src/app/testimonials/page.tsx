"use client";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../store/stores";

const TestimonialsPage = observer(function TestimonialsPage() {
  const { testimonialStore } = stores;

  useEffect(() => {
    testimonialStore.getTestimonials().catch(() => {});
  }, [testimonialStore]);

  return (
    <main className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700">Testimonials</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">What our clients say after working with us.</h1>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonialStore.testimonials.data.map((item) => (
            <article key={item._id} className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.name} className="h-14 w-14 rounded-full object-cover" />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-lg font-semibold text-slate-700">
                    {item.name.slice(0, 1)}
                  </div>
                )}
                <div>
                  <h2 className="text-lg font-semibold text-slate-950">{item.name}</h2>
                  <p className="text-sm text-slate-500">{[item.profession, item.company].filter(Boolean).join(" at ")}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-700">&quot;{item.quote}&quot;</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
});

export default TestimonialsPage;
