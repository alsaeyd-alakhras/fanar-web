import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PARTNERSHIP_CATEGORIES } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function PartnershipsEntry() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('[data-part-heading]',
        { y: 40, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        {
          y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)',
          duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: section, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo('[data-part-card]',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '[data-part-grid]', start: 'top 72%', once: true },
        }
      );

      gsap.fromTo('[data-part-cta]',
        { y: 25, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-part-cta]', start: 'top 85%', once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="partnerships-entry"
      dir="rtl"
      className="relative bg-[#F3F3F1] py-24 lg:py-32 overflow-hidden"
    >
      {/* subtle atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full blur-[120px]"
        style={{ background: 'rgba(132,164,177,.06)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
        {/* HEADING */}
        <div data-part-heading className="mb-16 lg:mb-20 flex flex-col items-start">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#84A4B1]/60" />
            <span className="font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]">
              الشراكات
            </span>
          </div>
          <h2 className="font-arabic text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#1D2C4F] max-w-[700px]">
            فرص التعاون
            <br />
            والشراكة الاستراتيجية.
          </h2>
          <p className="mt-5 max-w-[520px] font-arabic text-[15px] leading-8 text-[#1D2C4F]/55">
            مساران: شراكات استراتيجية للشركات وأصحاب رؤوس الأموال، وشراكات تعاون مهني وتجاري.
          </p>
        </div>

        {/* TWO PATHWAYS */}
        <div data-part-grid className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PARTNERSHIP_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              data-part-card
              className="group relative overflow-hidden border border-[#1D2C4F]/10 bg-[#F3F3F1] p-8 lg:p-10 transition-all duration-500 hover:border-[#84A4B1]/30 hover:shadow-[0_20px_60px_rgba(29,44,79,0.06)]"
              data-cursor="hover"
            >
              {/* corner detail */}
              {/* <div className="absolute top-0 right-0 h-20 w-20 opacity-5 ">
                
                  <img
                      src="/brand/fnar-wordmark-logo-dark.svg"
                      alt=""
                      className="h-16 w-16 object-contain"
                    />
               
              </div> */}

              <div className="mb-4 flex items-center gap-4">
                <span className="font-sans text-[2.5rem] font-bold leading-none text-[#1D2C4F]/15">
                  {cat.number}
                </span>
                <span className="font-arabic text-[10px] font-medium tracking-[0.15em] text-[#84A4B1]">
                  {cat.subtitle}
                </span>
              </div>

              <h3 className="mb-4 font-arabic text-[1.5rem] font-bold leading-snug text-[#1D2C4F]">
                {cat.title}
              </h3>

              <p className="mb-6 font-arabic text-[13px] leading-7 text-[#1D2C4F]/55">
                {cat.description}
              </p>

              {cat.requiresCapital && cat.minimumCapitalKWD && (
                <div className="mb-6 border-r-2 border-[#84A4B1]/30 pr-4 py-2">
                  <p className="font-arabic text-[11px] text-[#1D2C4F]/45">
                    الحد الأدنى لرأس المال المخصص للعمل
                  </p>
                  <p className="font-arabic text-[16px] font-bold text-[#1D2C4F]">
                    {cat.minimumCapitalKWD.toLocaleString()} د.ك
                  </p>
                  <p className="mt-1 font-arabic text-[10px] text-[#1D2C4F]/40">
                    رأس المال يبقى في محفظة العميل. استيفاء الحد الأدنى لا يضمن القبول.
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {cat.audiences.slice(0, 4).map((aud) => (
                  <span
                    key={aud}
                    className="rounded-full border border-[#1D2C4F]/10 px-3 py-1 font-arabic text-[10px] text-[#1D2C4F]/50"
                  >
                    {aud}
                  </span>
                ))}
                {cat.audiences.length > 4 && (
                  <span className="font-arabic text-[10px] text-[#1D2C4F]/35 py-1">
                    +{cat.audiences.length - 4}
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#84A4B1] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-part-cta className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/partnerships"
            onClick={(e) => { e.preventDefault(); navigate('/partnerships'); window.scrollTo({ top: 0 }); }}
            data-cursor="hover"
            className="group relative flex min-h-[56px] min-w-[200px] items-center justify-between overflow-hidden rounded-full bg-[#1D2C4F] px-5 pr-7 font-arabic text-[13px] font-bold text-[#F3F3F1] transition-all duration-500 hover:-translate-y-[2px]"
          >
            <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]">
              فرص الشراكة
            </span>
            <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F3F1]/10 text-[10px] transition-all duration-500 group-hover:-translate-x-1 group-hover:bg-[#1D2C4F]/15 group-hover:text-[#1D2C4F]">
              ←
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
