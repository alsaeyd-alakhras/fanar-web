
import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: '01',
    label: 'المبدأ الأول',
    title: 'الفهم قبل القرار.',
    text: 'القرار المالي الواعي يبدأ بفهم طبيعة السوق والمخاطر والخيارات المتاحة. المعرفة ليست مجرد معلومات، بل أساس نفكر من خلاله.',
  },
  {
    number: '02',
    label: 'المبدأ الثاني',
    title: 'المنهجية قبل النتائج.',
    text: 'لا نبحث عن الاختصارات أو الوعود السريعة. نركز على بناء طريقة تفكير منضبطة تساعد على التحليل والتقييم والتعلم المستمر.',
  },
  {
    number: '03',
    label: 'المبدأ الثالث',
    title: 'الاستقلالية قبل التبعية.',
    text: 'هدفنا أن يمتلك المتعلم الأدوات التي تساعده على تقييم المعلومات وصناعة قراراته بنفسه، لا أن يعتمد على رأي جاهز.',
  },
];

const methodology = [
  {
    number: '01',
    label: 'المعرفة',
    title: 'نبدأ من الأساس.',
    text: 'نفهم المفاهيم الأساسية وطبيعة الأسواق المالية قبل الانتقال إلى الأدوات الأكثر تعقيداً.',
  },
  {
    number: '02',
    label: 'التحليل',
    title: 'نربط المعلومات.',
    text: 'نحوّل المعرفة إلى منهجية تساعد على قراءة المعطيات وتقييم الخيارات والمخاطر.',
  },
  {
    number: '03',
    label: 'القرار',
    title: 'نبني الاستقلالية.',
    text: 'نهدف إلى تطوير القدرة على التفكير المستقل واتخاذ قرارات مدروسة دون وعود بنتائج محددة.',
  },
];

function Kicker({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-[#84A4B1]" />
      <span
        className={`text-[11px] font-medium ${
          light ? 'text-[#84A4B1]' : 'text-[#54707D]'
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export default function AboutPage() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let disposed = false;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: '(min-width: 1024px)',
          reduce: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const desktop = Boolean(context.conditions?.desktop);
          const reduce = Boolean(context.conditions?.reduce);

          if (reduce) return;

          // GENERAL REVEALS
          gsap.utils
            .toArray<HTMLElement>('[data-reveal]')
            .forEach((element) => {
              gsap.fromTo(
                element,
                {
                  autoAlpha: 0,
                  y: 22,
                },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.75,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    once: true,
                  },
                }
              );
            });

          // Pinned cinematic scenes are desktop-only.
          if (!desktop) return;

          // 01 — HERO
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '[data-about-hero]',
                start: 'top top',
                end: '+=65%',
                pin: true,
                scrub: 0.7,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            })
            .to(
              '[data-hero-content]',
              {
                y: -36,
                scale: 0.96,
                opacity: 0.48,
                duration: 1,
                ease: 'none',
              },
              0
            )
            .to(
              '[data-hero-accent]',
              {
                scaleX: 1.7,
                duration: 1,
                ease: 'none',
              },
              0
            );

          // 02 — PHILOSOPHY
          const panels =
            gsap.utils.toArray<HTMLElement>(
              '[data-principle-panel]'
            );

          const indicators =
            gsap.utils.toArray<HTMLElement>(
              '[data-principle-indicator]'
            );

          gsap.set(panels.slice(1), {
            autoAlpha: 0,
            y: 30,
          });

          const philosophy = gsap.timeline({
            scrollTrigger: {
              trigger: '[data-philosophy]',
              start: 'top top',
              end: '+=175%',
              pin: true,
              scrub: 0.65,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const active =
                  self.progress < 0.34
                    ? 0
                    : self.progress < 0.67
                      ? 1
                      : 2;

                indicators.forEach((indicator, index) => {
                  indicator.style.opacity =
                    index === active ? '1' : '0.25';
                });
              },
            },
          });

          philosophy
            .to({}, { duration: 0.65 })
            .to(panels[0], {
              autoAlpha: 0,
              y: -30,
              duration: 0.3,
              ease: 'power2.inOut',
            })
            .fromTo(
              panels[1],
              {
                autoAlpha: 0,
                y: 30,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.35,
                ease: 'power2.inOut',
              },
              '<0.1'
            )
            .to({}, { duration: 0.65 })
            .to(panels[1], {
              autoAlpha: 0,
              y: -30,
              duration: 0.3,
              ease: 'power2.inOut',
            })
            .fromTo(
              panels[2],
              {
                autoAlpha: 0,
                y: 30,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.35,
                ease: 'power2.inOut',
              },
              '<0.1'
            )
            .to({}, { duration: 0.75 });

          // 03 — FOUNDER
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '[data-founder-scene]',
                start: 'top top',
                end: '+=125%',
                pin: true,
                scrub: 0.75,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            })
            .fromTo(
              '[data-founder-frame]',
              {
                width: '44%',
                height: '72%',
                borderRadius: '16px',
              },
              {
                width: '100%',
                height: '100%',
                borderRadius: '0px',
                duration: 1,
                ease: 'none',
              },
              0
            )
            .fromTo(
              '[data-founder-image]',
              {
                scale: 1.12,
              },
              {
                scale: 1,
                duration: 1,
                ease: 'none',
              },
              0
            )
            .fromTo(
              '[data-founder-overlay]',
              {
                opacity: 0.15,
              },
              {
                opacity: 0.9,
                duration: 0.45,
                ease: 'none',
              },
              0.48
            )
            .fromTo(
              '[data-founder-message]',
              {
                autoAlpha: 0,
                y: 32,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                ease: 'power2.out',
              },
              0.65
            )
            .to({}, { duration: 0.2 });

          // 04 — METHODOLOGY
          // No pinning and no movement of the cards.
          // CSS sticky handles the stack.
          // GSAP only adds a subtle scale to cards underneath.
          const methodCards =
            gsap.utils.toArray<HTMLElement>(
              '[data-method-card]'
            );

          methodCards.slice(0, -1).forEach((card, index) => {
            const nextCard = methodCards[index + 1];

            gsap.to(card, {
              scale: 0.965,
              transformOrigin: 'center top',
              ease: 'none',
              scrollTrigger: {
                trigger: nextCard,
                start: 'top 85%',
                end: 'top 20%',
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
          });
        }
      );
    }, root);

    const refresh = () => {
      if (!disposed) {
        ScrollTrigger.refresh();
      }
    };

    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);

    return () => {
      disposed = true;
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, []);

  return (
    <main
      ref={rootRef}
      dir="rtl"
      className="bg-[#F3F3F1]"
    >
      {/* 01 — HERO */}
      <section
        data-about-hero
        className="relative flex min-h-[90svh] items-center overflow-hidden bg-[#0F1E36] px-5 pb-12 pt-28 text-[#F3F3F1] sm:px-8 lg:h-[100svh] lg:py-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(132,164,177,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(132,164,177,.09) 1px,transparent 1px)',
            backgroundSize: '76px 76px',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1120px]">
          <div className="flex items-center justify-between border-b border-white/15 pb-5">
            <span className="text-[11px] text-[#84A4B1]">
              عن فنر
            </span>

            <span className="font-sans text-[10px] tracking-[0.15em] text-white/40">
              FNAR / 001
            </span>
          </div>

          <div className="flex min-h-[390px] items-center justify-center py-16 lg:min-h-[460px]">
            <div
              data-hero-content
              className="max-w-[780px] text-center"
            >
              <p className="mb-6 text-[12px] text-[#84A4B1]">
                الفهم يصنع الفرق
              </p>

              <h1 className="text-[clamp(3.2rem,4.5vw,5.2rem)] font-bold leading-[1.6] tracking-[-0.025em]">
                نبني الفهم.
                <br />
                ليصبح القرار قرارك.
              </h1>

              <div
                data-hero-accent
                className="mx-auto mt-8 h-[2px] w-12 bg-[#84A4B1]"
              />

              <p className="mt-7 text-[12px] text-white/55">
                المعرفة · المنهجية · الاستقلالية
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-6">
            <p className="max-w-[440px] text-[12px] leading-7 text-white/55">
              فنر منصة للتعليم المالي تقوم على المعرفة
              والمنهجية والاستقلالية.
            </p>

            <span className="hidden text-[11px] text-[#84A4B1] sm:block">
              اكتشف القصة ↓
            </span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#F3F3F1] px-5 py-24 sm:px-8 lg:py-32">
        <div
          data-reveal
          className="mx-auto max-w-[1000px]"
        >
          <Kicker>لماذا فنر؟</Kicker>

          <h2 className="text-[clamp(2.7rem,4vw,4.6rem)] font-bold leading-[1.6] text-[#1D2C4F]">
            الوصول إلى المعلومات
            <br />
            <span className="text-[#84A4B1]">
              لا يعني امتلاك الفهم.
            </span>
          </h2>

          <p className="mt-8 max-w-[660px] text-[14px] leading-[2.2] text-[#1D2C4F]/65">
            نؤمن أن التعليم المالي الحقيقي لا يقتصر
            على شرح الأدوات أو متابعة الأسواق،
            بل يبدأ ببناء طريقة تفكير تساعد على
            التحليل والتقييم واتخاذ القرار بمسؤولية.
          </p>
        </div>
      </section>

      {/* 02 — PHILOSOPHY */}
      <section
        data-philosophy
        className="relative min-h-[90svh] overflow-hidden bg-[#0F1E36] px-5 py-20 text-[#F3F3F1] sm:px-8 lg:flex lg:h-[100svh] lg:items-center lg:py-0"
      >
        <div className="mx-auto w-full max-w-[1120px]">
          <div className="flex items-center justify-between border-b border-white/15 pb-5">
            <span className="text-[11px] text-[#84A4B1]">
              فلسفتنا
            </span>

            <span className="font-sans text-[10px] text-white/40">
              FNAR / 002
            </span>
          </div>

          {/* Desktop */}
          <div className="relative mt-12 hidden h-[370px] lg:block">
            {principles.map((item) => (
              <article
                data-principle-panel
                key={item.number}
                className="absolute inset-0 flex items-center gap-12"
              >
                <div className="flex w-[35%] items-center justify-center">
                  <span className="font-sans text-[clamp(11rem,15vw,16rem)] font-bold leading-none text-[#84A4B1]/25">
                    {item.number}
                  </span>
                </div>

                <div className="w-[65%]">
                  <span className="text-[11px] text-[#84A4B1]">
                    {item.label}
                  </span>

                  <h2 className="mt-5 text-[clamp(3.4rem,4.1vw,4.8rem)] font-bold leading-[1.5]">
                    {item.title}
                  </h2>

                  <p className="mt-6 max-w-[540px] text-[14px] leading-[2.15] text-white/65">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile */}
          <div className="mt-10 space-y-12 lg:hidden">
            {principles.map((item) => (
              <article
                data-reveal
                key={item.number}
                className="border-b border-white/10 pb-10"
              >
                <span className="font-sans text-[7rem] font-bold leading-none text-[#84A4B1]/25">
                  {item.number}
                </span>

                <h2 className="mt-4 text-[clamp(2.7rem,7vw,4rem)] font-bold leading-[1.5]">
                  {item.title}
                </h2>

                <p className="mt-5 text-[13px] leading-8 text-white/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 hidden gap-3 lg:flex">
            {principles.map((item, index) => (
              <span
                data-principle-indicator
                key={item.number}
                style={{
                  opacity: index === 0 ? 1 : 0.25,
                }}
                className="h-[3px] w-12 bg-[#84A4B1]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 03 — FOUNDER */}
      <section
        data-founder-scene
        className="relative flex min-h-[90svh] items-center justify-center overflow-hidden bg-[#E9ECEB] lg:h-[100svh]"
      >
        <div
          data-founder-frame
          className="relative h-[76svh] w-full overflow-hidden bg-[#1D2C4F] lg:h-[72%] lg:w-[44%] lg:rounded-[16px]"
        >
          <img
            data-founder-image
            src="/images/fnar-founder.svg"
            alt="مؤسس فنر"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div
            data-founder-overlay
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-[#0F1E36]/65 to-transparent opacity-90 lg:opacity-15"
          />

          <div
            data-founder-message
            className="absolute inset-x-0 bottom-0 z-10 px-7 pb-10 text-[#F3F3F1] sm:px-10 lg:px-[max(60px,calc((100vw-1120px)/2))] lg:pb-16 lg:opacity-0"
          >
            <Kicker light>وراء فنر</Kicker>

            <h2 className="text-[clamp(3rem,4.5vw,5.2rem)] font-bold leading-[1.45]">
              وراء فنر،
              <br />
              رؤية تعليمية.
            </h2>

            <p className="mt-5 max-w-[600px] text-[13px] leading-[2.1] text-white/80">
              الهدف ليس أن يعتمد المتعلم على شخص يخبره
              ماذا يفعل، بل أن يفهم ما يفعله ولماذا.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="bg-[#F3F3F1] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <Kicker>الرؤية</Kicker>

            <h2 className="text-[clamp(2.8rem,3.8vw,4.4rem)] font-bold leading-[1.45] text-[#1D2C4F]">
              البداية
              <br />
              كانت فكرة.
            </h2>
          </div>

          <div
            data-reveal
            className="space-y-6 border-r-2 border-[#84A4B1]/45 pr-7"
          >
            <p className="text-[16px] leading-[2.15] text-[#1D2C4F]/85">
              انطلقت فكرة فنر من قناعة بأن فهم الأسواق
              المالية يحتاج إلى منهج واضح يربط المعرفة
              بالتحليل وإدارة المخاطر.
            </p>

            <p className="text-[13px] leading-[2.2] text-[#1D2C4F]/65">
              تقوم الرؤية على تقديم تجربة تعليمية تساعد
              المتعلم على تطوير أدواته، وطرح الأسئلة
              الصحيحة، وبناء طريقة تفكير أكثر استقلالية
              وانضباطاً.
            </p>

            <p className="text-[13px] leading-[2.2] text-[#1D2C4F]/65">
              لا نؤمن بالاختصارات أو الوعود السريعة،
              بل بالتعلم المتدرج والتطبيق الواعي
              والمسؤولية الفردية.
            </p>
          </div>
        </div>
      </section>


      {/* 03A — OFFICIAL VISION & MISSION */}
      <section className="bg-[#1D2C4F] px-5 py-24 text-[#F3F3F1] sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1120px]">
          <div data-reveal className="mb-14">
            <Kicker light>رؤيتنا ورسالتنا</Kicker>
            <h2 className="text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.5]">من الكويت،<br /><span className="text-[#84A4B1]">إلى آفاق أوسع للمعرفة.</span></h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <article data-reveal className="rounded-[18px] border border-white/15 bg-white/[0.04] p-8 sm:p-10">
              <span className="font-sans text-xs tracking-widest text-[#84A4B1]">01 / VISION</span>
              <h3 className="mt-7 text-3xl font-bold">رؤيتنا</h3>
              <p className="mt-5 text-[15px] leading-[2.2] text-white/80">نطمح إلى بناء أكاديمية عربية يثق الناس بتعليمها، وتبقى قيمة ما يتعلمونه فيها حاضرة في حياتهم وأعمالهم.</p>
              <p className="mt-4 text-[13px] leading-[2.2] text-white/60">تبدأ فنر من الأسواق المالية، وتتطلع إلى الاقتصاد والأعمال والتقنية والمهارات الحياتية. نريد أن نصبح مرجعاً في الخليج والعالم، وأن نُعرف بمناهجنا وبقدرة المتعلمين على تطبيق ما تعلموه.</p>
            </article>
            <article data-reveal className="rounded-[18px] border border-white/15 bg-white/[0.04] p-8 sm:p-10">
              <span className="font-sans text-xs tracking-widest text-[#84A4B1]">02 / MISSION</span>
              <h3 className="mt-7 text-3xl font-bold">رسالتنا</h3>
              <p className="mt-5 text-[15px] leading-[2.2] text-white/80">نبني تعليمنا على غاية واضحة: أن يفهم الإنسان ما يتعلمه، ويعرف كيف يستفيد منه.</p>
              <p className="mt-4 text-[13px] leading-[2.2] text-white/60">نشرح الأفكار من أصولها، ونربطها بالتطبيق، ونعطي السؤال والنقاش مكانهما. وفي الأسواق المالية نهتم بقراءة السوق وإدارة المال والمخاطر، وبالأثر النفسي للربح والخسارة وتغير الظروف.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 03B — FOUNDER BIOGRAPHY */}
      <section className="bg-[#F3F3F1] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div data-reveal>
            <Kicker>المؤسس</Kicker>
            <h2 className="text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.45] text-[#1D2C4F]">عبدالعزيز<br />الشريف.</h2>
            <div className="mt-8 h-[2px] w-16 bg-[#84A4B1]" />
            <p className="mt-6 text-[12px] leading-8 text-[#1D2C4F]/55">رحلة في دراسة الأسواق المالية والبحث والتطبيق والتعليم.</p>
          </div>
          <div data-reveal className="space-y-6 border-r-2 border-[#84A4B1]/45 pr-7">
            <p className="text-[16px] leading-[2.2] text-[#1D2C4F]/90">بدأ عبدالعزيز الشريف دراسة الأسواق المالية عام 2018، وانتقل إلى التطبيق العملي عام 2019، كما يروي في موقعه الشخصي.</p>
            <p className="text-[14px] leading-[2.2] text-[#1D2C4F]/70">توسع اهتمامه من أدوات التحليل وقراءة حركة الأسعار إلى سيكولوجية التداول، والانضباط، وإدارة المخاطر، وكيفية اختبار الأفكار وتطبيقها بدلاً من الاعتماد على التوقعات الجاهزة.</p>
            <p className="text-[14px] leading-[2.2] text-[#1D2C4F]/70">وفي عام 2026 وصف مرحلة جديدة من مشروعه التعليمي بالتأصيل المنهجي؛ وهي رؤية تتقاطع مع فلسفة فنر في بناء فهم مترابط، وتعزيز قدرة المتعلم على اتخاذ قراره باستقلالية.</p>
            <a href="https://www.kwkwu.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border-b border-[#1D2C4F]/25 pb-2 text-[13px] font-semibold text-[#1D2C4F] hover:text-[#54707D]">الموقع الشخصي للمؤسس <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      {/* 03C — FOUNDER MILESTONES */}
      <section className="bg-[#E9ECEB] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1120px]">
          <div data-reveal className="mb-14">
            <Kicker>محطات المسيرة</Kicker>
            <h2 className="text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.5] text-[#1D2C4F]">من التعلم<br /><span className="text-[#84A4B1]">إلى بناء المنهج.</span></h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { year: '2018', title: 'بداية الدراسة', text: 'بداية رحلة المؤسس في دراسة الأسواق المالية وفهم حركة الأسعار.' },
              { year: '2019', title: 'التطبيق العملي', text: 'الانتقال من المعرفة النظرية إلى التعامل مع تحديات السوق والقرار.' },
              { year: '2026', title: 'التأصيل المنهجي', text: 'مرحلة تعليمية معلنة تركز على ترابط المعرفة والتطبيق والانضباط.' },
            ].map((item) => (
              <article key={item.year} data-reveal className="rounded-[16px] border border-[#1D2C4F]/10 bg-[#F3F3F1] p-8 sm:p-10">
                <span className="font-sans text-[clamp(3.5rem,5vw,5rem)] font-bold leading-none text-[#84A4B1]">{item.year}</span>
                <div className="my-8 h-px bg-[#1D2C4F]/15" />
                <h3 className="text-[21px] font-bold text-[#1D2C4F]">{item.title}</h3>
                <p className="mt-4 text-[13px] leading-8 text-[#1D2C4F]/65">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03D — PUBLISHED RESEARCH PATH */}
      <section className="bg-[#0F1E36] px-5 py-24 text-[#F3F3F1] sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <Kicker light>المسار البحثي المنشور</Kicker>
            <h2 className="text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.5]">المعرفة<br /><span className="text-[#84A4B1]">رحلة مستمرة.</span></h2>
            <p className="mt-7 text-[14px] leading-[2.2] text-white/65">يعرض المؤسس على موقعه الشخصي قائمة قراءة وبحث تشمل أساسيات التحليل الفني، وهيكل السوق، وسيكولوجية التداول، والمؤشرات، والتحليل الكمي، وإدارة المخاطر.</p>
            <a href="/research-path" className="mt-9 inline-flex min-h-[52px] items-center gap-5 rounded-full border border-[#84A4B1]/50 px-7 text-[13px] font-semibold hover:bg-[#84A4B1] hover:text-[#0F1E36]">اطلع على المسار البحثي <span aria-hidden="true">↗</span></a>
          </div>
          <div data-reveal className="grid grid-cols-2 gap-4">
            <div className="rounded-[16px] border border-white/15 bg-white/[0.04] p-6 sm:p-9">
              <span className="font-sans text-[clamp(4rem,7vw,7rem)] font-bold leading-none text-[#84A4B1]">59</span>
              <h3 className="mt-6 text-[17px] font-bold">كتاباً</h3>
              <p className="mt-3 text-[12px] leading-7 text-white/55">ضمن قائمة القراءة المنشورة على موقع المؤسس.</p>
            </div>
            <div className="rounded-[16px] border border-white/15 bg-white/[0.04] p-6 sm:p-9">
              <span className="font-sans text-[clamp(4rem,7vw,7rem)] font-bold leading-none text-[#84A4B1]">08</span>
              <h3 className="mt-6 text-[17px] font-bold">مراحل</h3>
              <p className="mt-3 text-[12px] leading-7 text-white/55">تغطي موضوعات متنوعة في دراسة الأسواق المالية.</p>
            </div>
            <p className="col-span-2 mt-3 text-[11px] leading-7 text-white/40">الأرقام تصف المسار المنشور ذاتياً، ولا تمثل شهادات أكاديمية أو نتائج تداول معتمدة.</p>
          </div>
        </div>
      </section>

      {/* 04 — METHODOLOGY */}
      <section className="bg-[#E9ECEB] px-5 pb-28 pt-24 sm:px-8 lg:pb-36 lg:pt-32">
        <div className="mx-auto max-w-[1120px]">
          <div data-reveal className="mb-14 lg:mb-20">
            <Kicker>منهجنا</Kicker>

            <h2 className="text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.45] text-[#1D2C4F]">
              من المعرفة
              <br />
              إلى القرار.
            </h2>

            <p className="mt-6 max-w-[560px] text-[13px] leading-8 text-[#1D2C4F]/60">
              رحلة مترابطة تبدأ بالفهم، وتتطور
              بالتحليل، وتصل إلى القدرة على
              اتخاذ القرار باستقلالية.
            </p>
          </div>

          {/* Sticky cards:
              - Normal document flow
              - No clipping container
              - No GSAP pinning
              - Later cards naturally stack above earlier cards
          */}
          <div className="relative">
            {methodology.map((item, index) => (
              <div
                key={item.number}
                className="sticky"
                style={{
                  top: `calc(92px + ${index * 18}px)`,
                  zIndex: index + 1,
                  marginBottom:
                    index === methodology.length - 1
                      ? '0px'
                      : 'clamp(110px, 15vh, 170px)',
                }}
              >
                <article
                  data-method-card
                  className="relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-[18px] border border-[#1D2C4F]/10 bg-[#F3F3F1] p-7 shadow-[0_18px_50px_rgba(15,30,54,0.10)] sm:min-h-[340px] sm:p-10 lg:min-h-[370px] lg:p-12"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#54707D]">
                      {item.label}
                    </span>

                    <span className="font-sans text-[10px] text-[#1D2C4F]/40">
                      FNAR / {item.number}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-10 left-5 font-sans text-[clamp(12rem,17vw,19rem)] font-bold leading-none text-[#84A4B1]/15"
                  >
                    {item.number}
                  </span>

                  <div className="relative z-10 max-w-[700px]">
                    <h3 className="text-[clamp(2.8rem,3.5vw,4rem)] font-bold leading-[1.45] text-[#1D2C4F]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[540px] text-[13px] leading-8 text-[#1D2C4F]/65">
                      {item.text}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — PROGRAM STATS */}
      <section className="bg-[#F3F3F1] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1120px]">
          <div data-reveal>
            <Kicker>التجربة التعليمية</Kicker>

            <h2 className="max-w-[850px] text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.5] text-[#1D2C4F]">
              رؤية تتحول إلى
              <span className="text-[#84A4B1]">
                {' '}منهج متكامل.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-10 border-t border-[#1D2C4F]/15 pt-10 md:grid-cols-2">
            <div data-reveal>
              <span className="font-sans text-[clamp(9rem,13vw,15rem)] font-bold leading-none tracking-[-0.07em] text-[#1D2C4F]">
                09
              </span>

              <h3 className="mt-4 text-[21px] font-bold text-[#1D2C4F]">
                دورات مترابطة.
              </h3>

              <p className="mt-3 max-w-[410px] text-[13px] leading-8 text-[#1D2C4F]/60">
                تسع دورات تشكل برنامجاً تعليمياً واحداً،
                وليست محتوى متفرقاً.
              </p>
            </div>

            <div data-reveal>
              <span className="font-sans text-[clamp(9rem,13vw,15rem)] font-bold leading-none tracking-[-0.07em] text-[#84A4B1]">
                03
              </span>

              <h3 className="mt-4 text-[21px] font-bold text-[#1D2C4F]">
                أشهر من التعلم.
              </h3>

              <p className="mt-3 max-w-[410px] text-[13px] leading-8 text-[#1D2C4F]/60">
                رحلة تعليمية متدرجة لبناء الفهم
                والتفكير التحليلي وإدارة المخاطر.
              </p>
            </div>
          </div>

          <p
            data-reveal
            className="mt-10 max-w-[720px] text-[12px] leading-8 text-[#1D2C4F]/55"
          >
            يمكن بعد المرحلة التعليمية بحث مرحلة تطبيقية
            اختيارية طويلة المدى بموجب اتفاق منفصل،
            وفق الشروط المناسبة لكل حالة.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#0F1E36] px-5 py-24 text-center sm:px-8 lg:py-32">
        <div data-reveal className="mx-auto max-w-[800px]">
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#84A4B1]" />
            <span className="text-[11px] text-[#84A4B1]">
              الخطوة التالية
            </span>
            <span className="h-px w-8 bg-[#84A4B1]" />
          </div>

          <h2 className="text-[clamp(3rem,4.5vw,5.2rem)] font-bold leading-[1.5] text-[#F3F3F1]">
            البداية ليست في السوق.
            <br />
            <span className="text-[#84A4B1]">
              البداية في الفهم.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[530px] text-[13px] leading-8 text-white/65">
            اكتشف البرنامج التعليمي المتكامل،
            وتعرف على المنهج الذي يقوم عليه فنر.
          </p>

          <Link
            to="/program"
            className="group mt-9 inline-flex min-h-[54px] items-center justify-center gap-8 rounded-full bg-[#F3F3F1] px-8 text-[13px] font-bold text-[#1D2C4F] transition-colors hover:bg-[#84A4B1]"
          >
            استكشف البرنامج

            <span
              aria-hidden="true"
              className="text-[18px] transition-transform group-hover:-translate-x-1"
            >
              ←
            </span>
          </Link>

          <p className="mx-auto mt-10 max-w-[580px] text-[11px] leading-7 text-white/40">
            محتوى فنر تعليمي وتثقيفي، ولا يشكل توصية
            استثمارية أو ضماناً لأي نتائج مالية.
          </p>
        </div>
      </section>
    </main>
  );
}
