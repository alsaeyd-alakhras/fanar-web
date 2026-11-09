// import { useEffect, useMemo, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import HeroSignalField from './HeroSignalField';
// import HeroCore from './HeroCore';
// import HeroDesign3Environment from './HeroDesign3Environment';
// import { HERO_INFO_FRAGMENTS } from '@/data/content';
// import { useReducedMotion } from '@/hooks/useReducedMotion';

// gsap.registerPlugin(ScrollTrigger);

// const FALLBACK = ['معلومات','تحليلات','توصيات','آراء','ضوضاء','أخبار','مؤشرات','تناقضات','مدارس مختلفة'];

// const LABELS = [
//   { left:'7%', top:'21%', depth:.9, size:'15px' },
//   { left:'18%', top:'34%', depth:.55, size:'12px' },
//   { left:'5%', top:'53%', depth:.7, size:'13px' },
//   { left:'27%', top:'68%', depth:.8, size:'14px' },
//   { left:'45%', top:'17%', depth:.45, size:'11px' },
//   { left:'57%', top:'72%', depth:.65, size:'12px' },
//   { left:'73%', top:'29%', depth:.75, size:'13px' },
//   { left:'80%', top:'58%', depth:.5, size:'11px' },
//   { left:'36%', top:'82%', depth:.4, size:'11px' },
// ];

// export default function HeroDesign3() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const reduced = useReducedMotion();

//   const words = useMemo(() => {
//     const source = HERO_INFO_FRAGMENTS?.length ? HERO_INFO_FRAGMENTS.map((x:any) => x.text) : FALLBACK;
//     return LABELS.map((_, i) => source[i % source.length] ?? FALLBACK[i % FALLBACK.length]);
//   }, []);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     if (reduced) {
//       gsap.set(section.querySelectorAll('[data-hero-enter]'), { autoAlpha: 1, x: 0, y: 0, scale: 1 });
//       return;
//     }

//     let pointerCleanup: (() => void) | undefined;

//     const ctx = gsap.context(() => {
//       gsap.set('[data-hero-copy]', { autoAlpha: 0, y: 26 });
//       gsap.set('[data-hero-label]', { autoAlpha: 0, filter: 'blur(5px)' });
//       gsap.set('[data-signal-link]', { strokeDasharray: 160, strokeDashoffset: 160 });
//       gsap.set('[data-signal-node]', { autoAlpha: 0, scale: .45, transformOrigin: 'center' });
//       gsap.set('[data-core]', { autoAlpha: 0, scale: .72, rotate: -7 });
//       gsap.set('[data-core-mark]', { scale: .6, transformOrigin: 'center' });
//       gsap.set('[data-hero-transition]', { autoAlpha: 0, clipPath: 'circle(0% at 42% 58%)' });

//       const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
//       intro
//         .to('[data-hero-label]', { autoAlpha: .48, filter:'blur(0px)', duration: 1.1, stagger: .06 }, 0)
//         .to('[data-signal-node]', { autoAlpha: 1, scale: 1, duration: .8, stagger: { each:.025, from:'random' } }, .15)
//         .to('[data-signal-link]', { strokeDashoffset: 0, duration: 1.3, stagger: .025, ease:'power2.inOut' }, .3)
//         .to('[data-core]', { autoAlpha: 1, scale: 1, rotate: 0, duration: 1.4 }, .45)

//       gsap.to('[data-core-rings]', { rotate: 360, transformOrigin:'center', duration: 70, repeat:-1, ease:'none' });
//       gsap.to('[data-core-glow]', { scale:1.12, opacity:.72, transformOrigin:'center', duration:4.5, repeat:-1, yoyo:true, ease:'sine.inOut' });
//       gsap.to('[data-signal-orbits]', { rotate:-360, transformOrigin:'center', duration:95, repeat:-1, ease:'none' });

//       section.querySelectorAll<HTMLElement>('[data-hero-label]').forEach((el, i) => {
//         gsap.to(el, {
//           x: (i % 2 ? -1 : 1) * (6 + i % 4),
//           y: i % 3 === 0 ? -7 : 6,
//           duration: 5 + (i % 5),
//           repeat:-1, yoyo:true, ease:'sine.inOut'
//         });
//       });

//       if (window.matchMedia('(pointer: fine)').matches) {
//         const field = section.querySelector<HTMLElement>('[data-signal-field]');
//         const core = section.querySelector<HTMLElement>('[data-core]');
//         const copy = section.querySelector<HTMLElement>('[data-copy-wrap]');
//         const qFieldX = field ? gsap.quickTo(field,'x',{duration:1.2,ease:'power2.out'}) : null;
//         const qFieldY = field ? gsap.quickTo(field,'y',{duration:1.2,ease:'power2.out'}) : null;
//         const qCoreX = core ? gsap.quickTo(core,'x',{duration:1.4,ease:'power2.out'}) : null;
//         const qCoreY = core ? gsap.quickTo(core,'y',{duration:1.4,ease:'power2.out'}) : null;
//         const qCopyX = copy ? gsap.quickTo(copy,'x',{duration:1.6,ease:'power2.out'}) : null;

//         const move = (e: PointerEvent) => {
//           if (window.scrollY > section.offsetTop + 120) return;
//           const r = section.getBoundingClientRect();
//           const nx = ((e.clientX-r.left)/r.width-.5)*2;
//           const ny = ((e.clientY-r.top)/r.height-.5)*2;
//           qFieldX?.(nx*-14); qFieldY?.(ny*-9);
//           qCoreX?.(nx*7); qCoreY?.(ny*5);
//           qCopyX?.(nx*3);
//         };
//         const leave = () => { qFieldX?.(0); qFieldY?.(0); qCoreX?.(0); qCoreY?.(0); qCopyX?.(0); };
//         section.addEventListener('pointermove', move);
//         section.addEventListener('pointerleave', leave);
//         pointerCleanup = () => {
//           section.removeEventListener('pointermove', move);
//           section.removeEventListener('pointerleave', leave);
//         };
//       }

//       const desktop = window.matchMedia('(min-width: 768px)').matches;

//       if (desktop) {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: section,
//             start: 'top top',
//             end: '+=350%',
//             pin: true,
//             scrub: 1.35,
//             anticipatePin: 1,
//             invalidateOnRefresh: true,
//           },
//         });

//         /*
//           DESIGN 3 SCROLL STORY
//           0.00–0.18  Hold the opening composition.
//           0.18–0.43  Noise expands while the copy gently recedes.
//           0.43–0.68  Network organizes toward the core.
//           0.68–0.86  Core becomes dominant / understanding resolves.
//           0.86–1.00  Resolution copy + cream handoff.
//         */

//         // Opening hold: intentionally no visual change here.
//         tl.to({}, { duration: 0.23 });

//         // 1 — leave the readable hero state slowly, not immediately.
//         tl.to(
//           '[data-hero-copy]',
//           {
//             autoAlpha: 0,
//             y: -22,
//             filter: 'blur(5px)',
//             duration: 0.18,
//             ease: 'none',
//           },
//           0.23
//         )
//           .to('[data-scroll-cue]', { autoAlpha: 0, duration: 0.08, ease: 'none' }, 0.23)

//           // 2 — let the information field breathe outward.
//           .to(
//             '[data-signal-field]',
//             {
//               scale: 1.08,
//               xPercent: -2,
//               autoAlpha: 0.88,
//               duration: 0.22,
//               ease: 'none',
//             },
//             0.25
//           )
//           .to(
//             '[data-information-layer]',
//             {
//               autoAlpha: 0.72,
//               duration: 0.18,
//               ease: 'none',
//             },
//             0.25
//           )

//           // 3 — organization: field tightens and core becomes the focus.
//           .to(
//             '[data-signal-field]',
//             {
//               scale: 0.90,
//               xPercent: 7,
//               yPercent: 1,
//               autoAlpha: 0.68,
//               duration: 0.25,
//               ease: 'none',
//             },
//             0.43
//           )
//           .to(
//             '[data-core]',
//             {
//               scale: 1.28,
//               xPercent: 10,
//               duration: 0.25,
//               ease: 'none',
//             },
//             0.43
//           )
//           .to(
//             '[data-hero-label]',
//             {
//               autoAlpha: 0.20,
//               filter: 'blur(2px)',
//               duration: 0.22,
//               stagger: { each: 0.018, from: 'random' },
//               ease: 'none',
//             },
//             0.46
//           )

//           // 4 — understanding: the network falls away and the core resolves.
//           .to(
//             '[data-signal-field]',
//             {
//               autoAlpha: 0.12,
//               scale: 0.76,
//               xPercent: 14,
//               duration: 0.20,
//               ease: 'none',
//             },
//             0.68
//           )
//           .to(
//             '[data-information-layer]',
//             {
//               autoAlpha: 0,
//               duration: 0.16,
//               ease: 'none',
//             },
//             0.68
//           )
//           .to(
//             '[data-core]',
//             {
//               scale: 1.56,
//               xPercent: 19,
//               duration: 0.20,
//               ease: 'none',
//             },
//             0.68
//           )
//           .to(
//             '[data-resolution-copy]',
//             {
//               autoAlpha: 1,
//               y: 0,
//               duration: 0.14,
//               ease: 'none',
//             },
//             0.75
//           )

//           // Hold the resolved state long enough to register.
//           .to({}, { duration: 0.11 })

//           // 5 — clean handoff to the cream Methodology section.
//           .to(
//             '[data-resolution-copy]',
//             {
//               autoAlpha: 0,
//               y: -18,
//               duration: 0.08,
//               ease: 'none',
//             },
//             0.89
//           )
//           .to(
//             '[data-core]',
//             {
//               autoAlpha: 0,
//               scale: 1.72,
//               duration: 0.09,
//               ease: 'none',
//             },
//             0.89
//           )
//           .to(
//             '[data-signal-field]',
//             {
//               autoAlpha: 0,
//               duration: 0.08,
//               ease: 'none',
//             },
//             0.89
//           )
//           .to(
//             '[data-hero-transition]',
//             {
//               autoAlpha: 1,
//               clipPath: 'circle(150% at 42% 58%)',
//               duration: 0.14,
//               ease: 'none',
//             },
//             0.86
//           );
//       } else {
//         gsap.timeline({
//           scrollTrigger: {
//             trigger: section,
//             start: 'top top',
//             end: 'bottom top',
//             scrub: 0.8,
//           },
//         })
//           .to('[data-hero-copy]', { autoAlpha: 0, y: -30 }, 0)
//           .to('[data-core]', { scale: 1.18 }, 0)
//           .to('[data-signal-field]', { autoAlpha: 0.35, scale: 1.06 }, 0)
//           .to('[data-hero-transition]', { autoAlpha: 1 }, 0.72);
//       }

//       requestAnimationFrame(() => ScrollTrigger.refresh());
//     }, section);

//     return () => {
//       pointerCleanup?.();
//       ctx.revert();
//     };
//   }, [reduced]);

//   const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     document.querySelector(id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="hero"
//       lang="ar"
//       dir="rtl"
//       className="relative isolate h-[100svh] min-h-[720px] w-full overflow-hidden bg-[#1D2C4F]"
//     >
//       <HeroDesign3Environment />

//       {/* Information vocabulary */}
//       <div className="absolute inset-0 z-[4] hidden md:block pointer-events-none" data-information-layer>
//         {LABELS.map((p,i) => (
//           <span
//             key={i}
//             data-hero-label
//             data-hero-enter
//             className="absolute font-arabic text-[#F3F3F1]"
//             style={{left:p.left, top:p.top, fontSize:p.size, opacity:.35 + p.depth*.15}}
//           >
//             {words[i]}
//           </span>
//         ))}
//       </div>

//       {/* Network field */}
//       <div
//         data-signal-field
//         className="absolute z-[6] left-[-7%] top-[12%] hidden h-[74%] w-[64%] md:block"
//         style={{willChange:'transform,opacity'}}
//       >
//         <HeroSignalField />
//       </div>

//       {/* Organizing core */}
//       <div
//         data-core
//         data-hero-enter
//         className="absolute z-[8] left-[31%] top-1/2 h-[min(52vw,590px)] w-[min(52vw,590px)] -translate-x-1/2 -translate-y-1/2 md:left-[36%]"
//         style={{willChange:'transform,opacity'}}
//       >
//         <HeroCore />
//       </div>

//       {/* Main copy */}
//       <div className="absolute inset-0 z-[24] flex items-center pointer-events-none">
//         <div className="mx-auto w-full max-w-[1500px] px-6 md:px-8 lg:px-12 xl:px-16">
//           <div
//             data-copy-wrap
//             className="pointer-events-auto mx-auto mt-[35vh] max-w-[590px] text-center md:mx-0 md:mr-0 md:ml-auto md:mt-0 md:w-[42%] md:text-right"
//           >
//             <div data-hero-copy data-hero-enter className="mb-4 flex items-center justify-center gap-3 md:justify-start">
//               <span className="h-px w-8 bg-[#84A4B1]/70" />
//               <span className="text-[11px] font-medium tracking-[.18em] text-[#A8C0C8]">من التشتيت إلى القرار</span>
//             </div>

//             <h1 className="font-arabic font-bold leading-[.98] tracking-[-.035em] text-[#F3F3F1] text-[clamp(3rem,10vw,4.7rem)] md:text-[clamp(4rem,6.2vw,6.6rem)]">
//               <span data-hero-copy data-hero-enter className="block pb-[.08em]">من الغموض</span>
//               <span data-hero-copy data-hero-enter className="block pb-[.12em] text-[#84A4B1]">إلى الفهم</span>
//             </h1>

//             <p data-hero-copy data-hero-enter className="mx-auto mt-5 max-w-[510px] text-[14px] leading-[1.9] text-[#F3F3F1]/70 md:mx-0 md:mr-0 md:ml-auto md:mt-6 md:text-[16px] lg:text-[17px]">
//               منهج متكامل لبناء الفهم، إدارة المخاطر، وصناعة القرار المستقل في الأسواق المالية.
//             </p>

//             <div data-hero-copy data-hero-enter className="mt-7 flex flex-wrap items-center justify-center gap-5 md:mt-9 md:justify-start">
//               <a
//                 href="#paths"
//                 onClick={scrollTo('#paths')}
//                 className="group inline-flex min-w-[150px] items-center justify-center gap-3 rounded-full bg-[#F3F3F1] px-7 py-3.5 text-[14px] font-semibold text-[#1D2C4F] transition duration-300 hover:bg-[#84A4B1]"
//                 data-cursor="hover"
//               >
//                 <span>ابدأ مع فنر</span><span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
//               </a>
//               <a
//                 href="#methodology"
//                 onClick={scrollTo('#methodology')}
//                 className="group inline-flex items-center gap-3 border-b border-[#F3F3F1]/25 pb-1.5 text-[14px] font-medium text-[#F3F3F1]/75 transition-colors duration-300 hover:border-[#84A4B1] hover:text-[#84A4B1]"
//                 data-cursor="hover"
//               >
//                 <span>استكشف المنهج</span><span className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-[10px]">←</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll-only resolution statement */}
//       <div
//         data-resolution-copy
//         className="absolute inset-0 z-[18] flex translate-y-8 items-center justify-center px-6 text-center opacity-0 pointer-events-none"
//       >
//         <div>
//           <span className="text-[10px] tracking-[.28em] text-[#84A4B1]">وضوح</span>
//           <p className="mt-3 font-arabic text-[clamp(2.5rem,6vw,6rem)] font-bold leading-none text-[#F3F3F1]">حين تتضح الصورة.</p>
//         </div>
//       </div>

//       {/* Vignette */}
//       <div
//         className="absolute inset-0 z-[12] pointer-events-none"
//         style={{background:'linear-gradient(180deg,rgba(7,15,29,.28),transparent 25%,transparent 68%,rgba(7,15,29,.52)),linear-gradient(90deg,rgba(7,15,29,.2),transparent 28%,transparent 78%,rgba(7,15,29,.18))'}}
//       />

//       {/* Cream handoff to Methodology */}
//       <div
//         data-hero-transition
//         className="absolute inset-0 z-[35] bg-[#F3F3F1] pointer-events-none opacity-0"
//       />

//       <div data-scroll-cue className="absolute bottom-5 left-1/2 z-[40] hidden -translate-x-1/2 flex-col items-center gap-2 pointer-events-none md:flex">
//         <span className="text-[9px] font-medium tracking-[.28em] text-[#F3F3F1]/35">مرر</span>
//         <div className="h-10 w-px bg-gradient-to-b from-[#84A4B1]/60 to-transparent" />
//       </div>
//     </section>
//   );
// }
