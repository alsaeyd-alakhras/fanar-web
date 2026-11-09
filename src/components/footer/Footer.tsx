import { useNavigate, useLocation } from 'react-router-dom';
import ContactPage from './pages/ContactPage';

type FooterLink = {
  label: string;
  href: string;
  type: 'route' | 'anchor';
};

const FOOTER_LINKS: FooterLink[] = [
  { label: 'البرنامج التعليمي', href: '/program', type: 'route' },
  { label: 'الاستشارات', href: '/consultations', type: 'route' },
  { label: 'الشراكات', href: '/partnerships', type: 'route' },
  { label: 'الفواتير والمستندات', href: '/invoices', type: 'route' },
  { label: 'عن فنر', href: '/about', type: 'route' },
  { label: 'تواصل معنا', href: '/contact', type: 'route' },
];

const LEGAL_LINKS = [
  { label: 'الشروط والأحكام', href: '/documents/fnar-terms-original.pdf' },
  // { label: 'سياسة الخصوصية', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: FooterLink,
  ) => {
    e.preventDefault();

    if (link.href === '#') return;

    if (link.type === 'route') {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }

    // anchor type — may include a path prefix like /#founder
    if (link.href.includes('#') && !link.href.startsWith('#')) {
      const [path, hash] = link.href.split('#');
      if (path && path !== location.pathname) {
        navigate(path);
        setTimeout(() => {
          document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      } else {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (link.href.startsWith('#')) {
      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleBackToTop = () => {
    if (location.pathname === '/') {
      document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  return (
    <footer
      dir="rtl"
      className="
        relative
        overflow-hidden

        border-t
        border-white/[0.06]

        bg-[#091426]

        text-[#F3F3F1]
      "
    >
      {/* =========================================
          SUBTLE BACKGROUND
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            radial-gradient(
              circle at 78% 0%,
              rgba(132,164,177,.07),
              transparent 34%
            )
          `,
        }}
      />

      {/* subtle vertical guides */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-y-0
          left-[25%]

          hidden
          w-px

          bg-white/[0.025]

          lg:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-y-0
          right-[38%]

          hidden
          w-px

          bg-white/[0.025]

          lg:block
        "
      />

      {/* =========================================
          MAIN FOOTER
      ========================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1320px]

          px-5
          sm:px-6
          lg:px-10
        "
      >
        {/* =====================================
            TOP
        ====================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-14

            py-16

            sm:py-20

            lg:grid-cols-[1.4fr_0.7fr_0.7fr]
            lg:gap-16
            lg:py-24
          "
        >
          {/* =================================
              BRAND
          ================================== */}

          <div
            className="
              max-w-[470px]
          
              text-center
              mx-auto
          
              lg:text-right
              lg:mx-0
            "
          >
            <a
              href="/"
              onClick={handleBrandClick}
              data-cursor="hover"
              aria-label="العودة إلى بداية فنر"
              className="
                group
                flex
                w-fit
                items-center

                mx-auto

                lg:mx-0
              "
            >
              <img
                src="/brand/fnar-icon.svg"
                alt="فنر"
                className="
                  h-[74px]
                  w-auto
                  object-contain

                  opacity-90

                  transition-opacity
                  duration-300

                  group-hover:opacity-100

                  sm:h-[82px]
                "
              />
            </a>
            <h2
              className="
                mt-8
                max-w-[440px]

                pb-[0.1em]

                font-arabic

                text-[clamp(1.8rem,3vw,2.8rem)]
                font-bold

                leading-[1.35]
                tracking-[-0.035em]

                text-[#F3F3F1]
              "
            >
              المعرفة قبل القرار.
            </h2>

            <p
              className="
                mt-4
                max-w-[390px]
                mx-auto
                lg:mx-0

                font-arabic

                text-[12px]
                leading-7

                text-[#F3F3F1]/40

                sm:text-[13px]
              "
            >
              منصة تعليمية لبناء فهم أعمق للأسواق المالية،
              وتطوير القدرة على اتخاذ قرارات مستقلة ومدروسة.
            </p>

            {/* brand philosophy */}

            <div
              className="
                mt-8

                flex
                justify-center
                items-center
                gap-3
                lg:justify-start
              "
            >
              <span
                className="
                  h-[5px]
                  w-[5px]

                  rounded-full

                  bg-[#84A4B1]
                "
              />

              <span
                className="
                  text-[8px]
                  tracking-[0.18em]

                  text-[#84A4B1]/60
                "
              >
                KNOWLEDGE BEFORE DECISION
              </span>

              <span
                className="
                  h-px
                  w-10

                  bg-[#84A4B1]/20
                "
              />
            </div>
          </div>

          {/* =================================
              NAVIGATION
          ================================== */}

          <div>
            <div
              className="
                mb-7

                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium

                  tracking-[0.15em]

                  text-[#84A4B1]/65
                "
              >
                التنقل
              </span>

              <span
                className="
                  h-px
                  w-7

                  bg-[#84A4B1]/20
                "
              />
            </div>

            <nav aria-label="روابط الموقع">
              <ul className="space-y-1">
                {FOOTER_LINKS.map((link, index) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavigation(e, link)}
                      data-cursor="hover"
                      className="
                        group

                        flex
                        items-center
                        justify-between

                        border-b
                        border-white/[0.045]

                        py-3

                        font-arabic
                        text-[12px]
                        font-medium

                        text-[#F3F3F1]/50

                        transition-colors
                        duration-300

                        hover:text-[#F3F3F1]
                      "
                    >
                      <span>{link.label}</span>

                      <span
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            text-[7px]

                            text-white/15
                          "
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="
                            text-[#84A4B1]/35

                            transition-all
                            duration-300

                            group-hover:-translate-x-1
                            group-hover:text-[#84A4B1]
                          "
                        >
                          <path
                            d="M10 6H2M2 6L5 3M2 6L5 9"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* =================================
              LEGAL / CONTACT
          ================================== */}

          <div>
            <div
              className="
                mb-7

                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium

                  tracking-[0.15em]

                  text-[#84A4B1]/65
                "
              >
                فنر
              </span>

              <span
                className="
                  h-px
                  w-7

                  bg-[#84A4B1]/20
                "
              />
            </div>

            <ul className="space-y-1">
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  data-cursor="hover"
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    border-b
                    border-white/[0.045]

                    py-3

                    font-arabic
                    text-[12px]
                    font-medium

                    text-[#F3F3F1]/50

                    transition-colors
                    duration-300

                    hover:text-[#F3F3F1]
                  "
                >
                  <span>تواصل معنا</span>

                  <span
                    className="
                      flex
                      h-6
                      w-6

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-white/[0.08]

                      text-[#84A4B1]/50

                      transition-all
                      duration-300

                      group-hover:border-[#84A4B1]/30
                      group-hover:bg-[#84A4B1]/10
                      group-hover:text-[#84A4B1]
                    "
                  >
                    ←
                  </span>
                </a>
              </li>

              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href !== '#' ? '_blank' : undefined}
                    rel={link.href !== '#' ? 'noopener noreferrer' : undefined}
                    onClick={
                      link.href === '#'
                        ? (e) => e.preventDefault()
                        : undefined
                    }
                    data-cursor="hover"
                    className="
                      block

                      border-b
                      border-white/[0.045]

                      py-3

                      font-arabic
                      text-[11px]

                      text-[#F3F3F1]/35

                      transition-colors
                      duration-300

                      hover:text-[#84A4B1]
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* back to top */}

            <button
              type="button"
              onClick={handleBackToTop}
              data-cursor="hover"
              className="
                group

                mt-8

                inline-flex
                items-center
                gap-3

                font-arabic
                text-[10px]

                text-white/30

                transition-colors
                duration-300

                hover:text-[#F3F3F1]
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/[0.08]

                  text-[#84A4B1]

                  transition-all
                  duration-300

                  group-hover:-translate-y-1
                  group-hover:border-[#84A4B1]/35
                  group-hover:bg-[#84A4B1]/[0.07]
                "
              >
                ↑
              </span>

              العودة إلى الأعلى
            </button>
          </div>
        </div>

        {/* =====================================
            LARGE BRAND SIGNATURE
        ====================================== */}

        <div
          aria-hidden="true"
          className="
            relative

            overflow-hidden

            border-t
            border-white/[0.055]

            pt-8

            sm:pt-10
          "
        >
          <div
            className="
              flex
              items-end
              justify-between
            "
          >
            <span
              className="
                select-none

                font-sans

                text-[clamp(4.5rem,15vw,12rem)]
                font-bold

                leading-[0.72]
                tracking-[-0.075em]

                text-white/[0.025]
              "
            >
              FNAR
            </span>

            <div
              className="
                mb-2

                hidden
                items-center
                gap-4

                lg:flex
              "
            >
              <span
                className="
                  text-[7px]
                  tracking-[0.22em]

                  text-white/15
                "
              >
                UNDERSTAND · THINK · DECIDE
              </span>

              <span
                className="
                  h-[4px]
                  w-[4px]

                  rounded-full

                  bg-[#84A4B1]/50
                "
              />
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM BAR
        ====================================== */}

        <div
          className="
            relative

            flex
            flex-col

            gap-4

            border-t
            border-white/[0.055]

            py-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              font-arabic
              text-[9px]

              text-white/25
            "
          >
            © {currentYear} فنر — جميع الحقوق محفوظة
          </p>

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[5px]
                w-[5px]

                rounded-full

                bg-[#84A4B1]/60
              "
            />

            <span
              className="
                text-[7px]
                tracking-[0.2em]

                text-white/15
              "
            >
              FNAR
            </span>

            <span
              className="
                h-px
                w-8

                bg-white/[0.07]
              "
            />

            <span
              className="
                text-[7px]
                tracking-[0.16em]

                text-white/10
              "
            >
              FINANCIAL EDUCATION
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
