import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONSULTATIONS } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function ConsultationsPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('[data-con-heading]',
        { y: 40, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        {
          y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)',
          duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: section, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo('[data-con-card]',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '[data-con-grid]', start: 'top 72%', once: true },
        }
      );

      gsap.fromTo('[data-con-cta]',
        { y: 25, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-con-cta]', start: 'top 85%', once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  const featuredConsultations = CONSULTATIONS.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      id="consultations-preview"
      dir="rtl"
      className="relative bg-[#0F1E36] py-24 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(132,164,177,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
        {/* HEADING */}
        <div data-con-heading className="mb-16 lg:mb-20 flex flex-col items-start">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#84A4B1]/60" />
            <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
              الاستشارات
            </span>
          </div>
          <h2 className="font-arabic text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#F3F3F1] max-w-[700px]">
            استشارات احترافية
            <br />
            لكل مستوى من الحاجة.
          </h2>
          <p className="mt-5 max-w-[520px] font-arabic text-[15px] leading-8 text-[#F3F3F1]/50">
            خمس استشارات متدرجة من إعادة التنظيم بعد الخسائر إلى استشارة الشركات وأصحاب رؤوس الأموال.
          </p>
        </div>

        {/* CARDS */}
        <div data-con-grid className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F3F3F1]/8">
          {featuredConsultations.map((con) => (
            <div
              key={con.id}
              data-con-card
              className="group relative bg-[#0F1E36] p-7 transition-colors duration-500 hover:bg-[#152742]"
              data-cursor="hover"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-sans text-[1.5rem] font-bold leading-none text-[#84A4B1]/40">
                  {con.number}
                </span>
                <span className="font-arabic text-[10px] font-medium tracking-[0.12em] text-[#F3F3F1]/30">
                  {con.durationMinutes} دقيقة
                </span>
              </div>

              <h3 className="mb-3 font-arabic text-[16px] font-bold leading-snug text-[#F3F3F1]">
                {con.title}
              </h3>

              <p className="mb-6 font-arabic text-[12px] leading-6 text-[#F3F3F1]/45">
                {con.targetAudience}
              </p>

              <div className="flex items-end justify-between border-t border-[#F3F3F1]/8 pt-4">
                <span className="font-arabic text-[10px] text-[#F3F3F1]/35">السعر</span>
                <span className="font-arabic text-[18px] font-bold text-[#F3F3F1]">
                  {con.priceKWD} <span className="text-[12px] font-normal text-[#F3F3F1]/50">د.ك</span>
                </span>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#84A4B1] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-con-cta className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/consultations"
            onClick={(e) => { e.preventDefault(); navigate('/consultations'); window.scrollTo({ top: 0 }); }}
            data-cursor="hover"
            className="group relative flex min-h-[56px] min-w-[200px] items-center justify-between overflow-hidden rounded-full border border-[#F3F3F1]/20 bg-[#F3F3F1]/[0.05] px-5 pr-7 font-arabic text-[13px] font-semibold text-[#F3F3F1] transition-all duration-500 hover:-translate-y-[2px] hover:border-[#84A4B1]/50"
          >
            <span>جميع الاستشارات</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F3F3F1]/15 text-[10px] transition-all duration-500 group-hover:-translate-x-1 group-hover:border-[#84A4B1]/40 group-hover:text-[#84A4B1]">
              ←
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
