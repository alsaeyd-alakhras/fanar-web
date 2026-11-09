
import { ArrowUpLeft, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const CONTACT_DETAILS = [
  {
    id: 'email',
    label: 'البريد الإلكتروني',
    value: 'ThePrestigeKw@Gmail.com',
    href: 'mailto:ThePrestigeKw@Gmail.com',
    icon: Mail,
    external: false,
  },
  {
    id: 'phone',
    label: 'رقم الهاتف',
    value: '+965 96928555',
    href: 'tel:+96596928555',
    icon: Phone,
    external: false,
  },
  {
    id: 'telegram',
    label: 'تواصل عبر تليجرام',
    value: 'Telegram',
    href: 'https://t.me/KwuEthos',
    icon: Send,
    external: true,
  },
  {
    id: 'whatsapp',
    label: 'تواصل عبر واتساب',
    value: 'WhatsApp',
    href: 'https://wa.me/message/ITJ5L2OVN7J6M1',
    icon: MessageCircle,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F3F3F1] font-['IBM_Plex_Sans_Arabic',sans-serif] text-[#1D2C4F]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F1E36] px-6 pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full border border-[#84A4B1]/15" />
        <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full border border-[#84A4B1]/10" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-9 bg-[#84A4B1]" />
            <span className="text-xs font-semibold tracking-wider text-[#84A4B1]">
              تواصل معنا
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            نحن هنا
            <br />
            <span className="text-[#84A4B1]">للاستماع إليك.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-9 text-white/65 md:text-lg">
            لديك استفسار عن برامجنا التعليمية أو خدماتنا الاستشارية؟
            يسعدنا تواصلك معنا عبر القناة الأنسب لك.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-bold tracking-wider text-[#638B9B]">
              قنوات التواصل
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              معلومات التواصل
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-[#1D2C4F]/65">
              اختر وسيلة التواصل المناسبة لك، وسنكون سعداء باستقبال
              استفسارك.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {CONTACT_DETAILS.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group flex min-h-[190px] flex-col justify-between rounded-2xl border border-[#1D2C4F]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#84A4B1] hover:shadow-[0_20px_50px_rgba(15,30,54,0.08)] md:p-9"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#84A4B1]/15 text-[#1D2C4F] transition-colors group-hover:bg-[#1D2C4F] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <ArrowUpLeft
                      size={21}
                      className="text-[#1D2C4F]/35 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-[#1D2C4F]"
                    />
                  </div>

                  <div className="mt-8">
                    <p className="mb-2 text-sm text-[#1D2C4F]/55">
                      {item.label}
                    </p>
                    <p
                      dir={item.id === 'email' || item.id === 'phone' ? 'ltr' : 'auto'}
                      className={`text-lg font-semibold md:text-xl ${
                        item.id === 'email' || item.id === 'phone'
                          ? 'text-right'
                          : ''
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-[#E9ECEB] px-6 py-20 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1D2C4F] text-white">
              <MapPin size={23} strokeWidth={1.7} />
            </div>

            <p className="mb-3 text-sm font-semibold text-[#638B9B]">
              موقعنا
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              الكويت
            </h2>

            <p className="mt-5 max-w-md text-sm leading-8 text-[#1D2C4F]/65">
              نرحب باستفساراتكم ونتطلع إلى التواصل معكم.
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[#1D2C4F]/10 bg-white px-7 py-6 md:min-w-[300px]">
            <MapPin size={24} className="shrink-0 text-[#638B9B]" />
            <div>
              <p className="text-xs text-[#1D2C4F]/50">
                الدولة
              </p>
              <p className="mt-1 text-xl font-bold">
                دولة الكويت
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#1D2C4F] px-6 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-semibold tracking-wider text-[#84A4B1]">
            FNAR
          </p>

          <h2 className="text-3xl font-bold leading-relaxed md:text-5xl">
            لديك سؤال؟
            <br />
            نحن على بُعد رسالة.
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-white/65">
            تواصل معنا مباشرة عبر واتساب أو البريد الإلكتروني.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/message/ITJ5L2OVN7J6M1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#F3F3F1] px-8 text-sm font-bold text-[#1D2C4F] transition-colors hover:bg-[#84A4B1]"
            >
              <MessageCircle size={19} />
              تواصل عبر واتساب
              <ArrowUpLeft size={17} />
            </a>

            <a
              href="mailto:ThePrestigeKw@Gmail.com"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-white/30 px-8 text-sm font-semibold text-white transition-colors hover:border-[#84A4B1] hover:text-[#84A4B1]"
            >
              <Mail size={19} />
              راسلنا عبر البريد
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
