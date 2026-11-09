
import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Logo from '@/components/brand/Logo';
import { NAV_ITEMS } from '@/data/content';
import { useAuth } from '@/context/AuthContext';

gsap.registerPlugin(ScrollTrigger);

type NavItem = {
  label: string;
  href: string;
  type: 'route' | 'anchor';
};

/**
 * ============================================================
 * FNAR NAVIGATION
 * ============================================================
 *
 * Adds "الفواتير" to the existing navigation.
 *
 * The same list is used for:
 * - Desktop navigation
 * - Mobile navigation
 *
 * Existing items retain their original order.
 */
const NAV_ITEMS_WITH_INVOICES: NavItem[] = [
  ...NAV_ITEMS.filter((item) => item.href !== '/invoices'),
  {
    label: 'الفواتير',
    href: '/invoices',
    type: 'route',
  },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const isHomepage = location.pathname === '/';

  const [scrolled, setScrolled] = useState(
    () => window.location.pathname !== '/'
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const { isAuthenticated, user, logout } = useAuth();

  /**
   * NAVBAR APPEARANCE
   *
   * Homepage:
   * Transparent over hero, light after methodology.
   *
   * Inner pages:
   * Always light for contrast.
   */
  useEffect(() => {
    if (!isHomepage) {
      setScrolled(true);
      return;
    }

    const methodology = document.querySelector('#methodology');

    if (!methodology) {
      const updateOnScroll = () => {
        setScrolled(window.scrollY > 80);
      };

      updateOnScroll();

      window.addEventListener('scroll', updateOnScroll, {
        passive: true,
      });

      return () => {
        window.removeEventListener('scroll', updateOnScroll);
      };
    }

    const updateAppearance = () => {
      const threshold =
        methodology.getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight * 0.12;

      setScrolled(window.scrollY >= threshold);
    };

    updateAppearance();

    const trigger = ScrollTrigger.create({
      trigger: methodology,
      start: 'top 12%',
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    });

    return () => {
      trigger.kill();
    };
  }, [isHomepage, location.pathname]);

  /**
   * NAVBAR ENTRANCE ANIMATION
   */
  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        {
          y: -24,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          delay: 0.15,
          ease: 'power4.out',
          clearProps: 'transform',
        }
      );
    });

    return () => ctx.revert();
  }, []);

  /**
   * CLOSE MENUS ON ROUTE CHANGE
   */
  useEffect(() => {
    setMenuOpen(false);
    setAccountOpen(false);
  }, [location.pathname, location.hash]);

  /**
   * LOCK BODY SCROLL WHILE MOBILE MENU IS OPEN
   */
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  /**
   * ESCAPE KEY SUPPORT
   */
  useEffect(() => {
    if (!menuOpen && !accountOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setAccountOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen, accountOpen]);

  /**
   * AUTHENTICATION NAVIGATION
   */
  const handleLogout = () => {
    logout();
    setAccountOpen(false);
    setMenuOpen(false);
    navigate('/', { replace: true });
  };

  const handleAuthNav = (path: string) => {
    setAccountOpen(false);
    setMenuOpen(false);

    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  };

  /**
   * GENERAL NAVIGATION HANDLER
   *
   * Supports:
   * - Regular routes
   * - Homepage anchors
   * - Smooth scrolling
   * - Modifier keys and new tabs
   */
  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: Pick<NavItem, 'href' | 'type'>
  ) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();

    setMenuOpen(false);
    setAccountOpen(false);

    if (item.type === 'route') {
      if (location.pathname !== item.href) {
        navigate(item.href);
      }

      window.scrollTo({
        top: 0,
        behavior: 'instant' as ScrollBehavior,
      });

      return;
    }

    const [rawPath, rawHash] = item.href.split('#');

    const targetPath = rawPath || location.pathname;
    const targetHash = rawHash || '';

    if (!targetHash) {
      navigate(targetPath);
      return;
    }

    const scrollToTarget = () => {
      const element = document.getElementById(targetHash);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    if (targetPath !== location.pathname) {
      navigate(`${targetPath}#${targetHash}`);

      window.setTimeout(scrollToTarget, 350);
    } else {
      scrollToTarget();
    }
  };

  const isLight = !isHomepage || scrolled;

  return (
    <>
      {/* =========================================
          MAIN NAVBAR
      ========================================== */}

      <nav
        ref={navRef}
        dir="rtl"
        aria-label="القائمة الرئيسية"
        className="fixed inset-x-0 top-0 z-[100] px-4 pt-4 md:px-6 md:pt-5 lg:px-8"
      >
        <div
          className={`
            mx-auto flex h-[72px] w-full max-w-[1380px]
            items-center justify-between rounded-[22px]
            border px-4
            transition-[background-color,border-color,box-shadow]
            duration-500 md:px-5 lg:px-6
            ${
              isLight
                ? 'border-[#1D2C4F]/[0.08] bg-[#F3F3F1]/[0.94] shadow-[0_18px_60px_rgba(29,44,79,0.08)] backdrop-blur-2xl'
                : 'border-[#F3F3F1]/[0.10] bg-[#0B1729]/[0.22] shadow-[0_18px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl'
            }
          `}
        >
          {/* BRAND LOGO */}

          <div className="flex h-full w-[175px] shrink-0 items-center justify-start">
            <a
              href="/"
              onClick={(event) =>
                handleNavClick(event, {
                  href: '/',
                  type: 'route',
                })
              }
              className="group flex h-full min-w-[145px] items-center justify-start transition-opacity duration-300 hover:opacity-85"
              data-cursor="hover"
              aria-label="فنر — الصفحة الرئيسية"
            >
              <Logo variant={isLight ? 'dark' : 'light'} />
            </a>
          </div>

          {/* =========================================
              DESKTOP NAVIGATION LINKS
          ========================================== */}

          <div className="hidden h-full items-center lg:flex">
            <span
              className={`ml-5 h-[22px] w-px transition-colors duration-500 xl:ml-7 ${
                isLight
                  ? 'bg-[#1D2C4F]/10'
                  : 'bg-[#F3F3F1]/10'
              }`}
            />

            <ul className="flex h-full items-center gap-1">
              {NAV_ITEMS_WITH_INVOICES.map((item, index) => {
                const isActive =
                  item.type === 'route' &&
                  location.pathname === item.href;

                return (
                  <li
                    key={item.href}
                    className="flex h-full items-center"
                  >
                    <a
                      href={item.href}
                      onClick={(event) =>
                        handleNavClick(event, item)
                      }
                      aria-current={
                        isActive ? 'page' : undefined
                      }
                      data-cursor="hover"
                      className={`
                        group relative flex h-[44px] items-center
                        rounded-full px-4 font-arabic text-[13px]
                        font-medium transition-all duration-300
                        ${
                          isLight
                            ? `text-[#1D2C4F]/70 hover:bg-[#1D2C4F]/[0.045] hover:text-[#1D2C4F] ${
                                isActive
                                  ? 'text-[#1D2C4F]'
                                  : ''
                              }`
                            : `text-[#F3F3F1]/75 hover:bg-[#F3F3F1]/[0.055] hover:text-[#F3F3F1] ${
                                isActive
                                  ? 'text-[#F3F3F1]'
                                  : ''
                              }`
                        }
                      `}
                    >
                      <span
                        className={`ml-2 text-[8px] font-medium tracking-[0.12em] ${
                          isLight
                            ? 'text-[#54707D]'
                            : 'text-[#84A4B1]'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {item.label}

                      <span
                        className={`
                          absolute bottom-[6px] right-1/2 h-px
                          translate-x-1/2 bg-[#84A4B1]
                          transition-all duration-300
                          ${
                            isActive
                              ? 'w-[14px]'
                              : 'w-0 group-hover:w-[14px]'
                          }
                        `}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* =========================================
              DESKTOP CTA AND AUTH
          ========================================== */}

          <div className="hidden items-center gap-3 lg:flex">
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setAccountOpen(!accountOpen)
                  }
                  aria-expanded={accountOpen}
                  aria-label="حسابي"
                  className={`flex h-[40px] items-center gap-2.5 rounded-full border px-2.5 transition-all duration-300 ${
                    isLight
                      ? 'border-[#1D2C4F]/10 hover:border-[#84A4B1]/30'
                      : 'border-[#F3F3F1]/12 hover:border-[#84A4B1]/40'
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full font-sans text-[11px] font-bold ${
                      isLight
                        ? 'bg-[#1D2C4F]/8 text-[#1D2C4F]'
                        : 'bg-[#84A4B1]/15 text-[#84A4B1]'
                    }`}
                  >
                    {user.displayName
                      .trim()
                      .split(/\s+/)
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2) || '؟'}
                  </span>

                  <span
                    className={`max-w-[80px] truncate font-arabic text-[11px] font-medium ${
                      isLight
                        ? 'text-[#1D2C4F]/70'
                        : 'text-[#F3F3F1]/70'
                    }`}
                  >
                    {user.displayName}
                  </span>

                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      accountOpen ? 'rotate-180' : ''
                    } ${
                      isLight
                        ? 'text-[#1D2C4F]/40'
                        : 'text-[#F3F3F1]/40'
                    }`}
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* ACCOUNT DROPDOWN */}

                {accountOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-[95]"
                      onClick={() =>
                        setAccountOpen(false)
                      }
                    />

                    <div
                      className="absolute left-0 top-[48px] z-[96] w-[200px] overflow-hidden rounded-[14px] border border-[#1D2C4F]/10 bg-[#F3F3F1] shadow-[0_18px_60px_rgba(29,44,79,0.12)]"
                      role="menu"
                    >
                      <div className="border-b border-[#1D2C4F]/8 px-4 py-3">
                        <p className="truncate font-arabic text-[12px] font-semibold text-[#1D2C4F]">
                          {user.displayName}
                        </p>

                        <p className="mt-0.5 truncate font-arabic text-[10px] text-[#1D2C4F]/35">
                          {user.email}
                        </p>
                      </div>

                      <div className="py-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            handleAuthNav('/academy')
                          }
                          className="flex w-full items-center gap-3 px-4 py-2.5 text-right font-arabic text-[12px] text-[#1D2C4F]/70 transition-colors hover:bg-[#1D2C4F]/[0.03] hover:text-[#1D2C4F]"
                          role="menuitem"
                        >
                          <span className="text-[9px] text-[#84A4B1]">
                            01
                          </span>
                          الأكاديمية
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleAuthNav('/academy/progress')
                          }
                          className="flex w-full items-center gap-3 px-4 py-2.5 text-right font-arabic text-[12px] text-[#1D2C4F]/70 transition-colors hover:bg-[#1D2C4F]/[0.03] hover:text-[#1D2C4F]"
                          role="menuitem"
                        >
                          <span className="text-[9px] text-[#84A4B1]">
                            02
                          </span>
                          تقدّمي التعليمي
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleAuthNav('/academy/profile')
                          }
                          className="flex w-full items-center gap-3 px-4 py-2.5 text-right font-arabic text-[12px] text-[#1D2C4F]/70 transition-colors hover:bg-[#1D2C4F]/[0.03] hover:text-[#1D2C4F]"
                          role="menuitem"
                        >
                          <span className="text-[9px] text-[#84A4B1]">
                            03
                          </span>
                          الملف الشخصي
                        </button>

                        <div className="my-1.5 border-t border-[#1D2C4F]/8" />

                        <button
                          type="button"
                          onClick={handleLogout}
                          className="flex w-full items-center gap-3 px-4 py-2.5 text-right font-arabic text-[12px] text-[#1D2C4F]/60 transition-colors hover:bg-red-50/60 hover:text-red-600"
                          role="menuitem"
                        >
                          <span className="text-[9px] text-[#1D2C4F]/25">
                            04
                          </span>
                          تسجيل الخروج
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={() =>
                  handleAuthNav('/login')
                }
                className={`flex h-[40px] items-center gap-2 rounded-full border px-4 font-arabic text-[12px] font-medium transition-all duration-300 ${
                  isLight
                    ? 'border-[#1D2C4F]/12 text-[#1D2C4F]/70 hover:border-[#84A4B1]/30 hover:text-[#1D2C4F]'
                    : 'border-[#F3F3F1]/15 text-[#F3F3F1]/70 hover:border-[#84A4B1]/40 hover:text-[#F3F3F1]'
                }`}
              >
                دخول
              </button>
            )}

            <span
              className={`h-[22px] w-px ${
                isLight
                  ? 'bg-[#1D2C4F]/10'
                  : 'bg-[#F3F3F1]/10'
              }`}
            />

            {/* PROGRAM CTA */}

            <a
              href="/program"
              onClick={(event) =>
                handleNavClick(event, {
                  href: '/program',
                  type: 'route',
                })
              }
              data-cursor="hover"
              className={`
                group relative flex h-[44px] items-center gap-4
                overflow-hidden rounded-full border px-5
                font-arabic text-[13px] font-semibold
                transition-all duration-500
                ${
                  isLight
                    ? 'border-[#1D2C4F]/10 bg-[#1D2C4F] text-[#F3F3F1] hover:border-[#84A4B1]'
                    : 'border-[#F3F3F1]/16 bg-[#F3F3F1]/[0.07] text-[#F3F3F1] hover:border-[#84A4B1]/55 hover:bg-[#F3F3F1]/[0.11]'
                }
              `}
            >
              <span className="absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]">
                اكتشف البرنامج
              </span>

              <span
                className={`
                  relative z-10 flex h-6 w-6 items-center
                  justify-center rounded-full border text-[9px]
                  transition-all duration-500
                  group-hover:-translate-x-1
                  group-hover:border-[#1D2C4F]/20
                  group-hover:text-[#1D2C4F]
                  ${
                    isLight
                      ? 'border-[#F3F3F1]/20'
                      : 'border-[#F3F3F1]/18'
                  }
                `}
              >
                ←
              </span>
            </a>
          </div>

          {/* =========================================
              MOBILE MENU BUTTON
          ========================================== */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen((open) => !open)
            }
            aria-expanded={menuOpen}
            aria-controls="fnar-mobile-menu"
            aria-label={
              menuOpen
                ? 'إغلاق القائمة'
                : 'فتح القائمة'
            }
            className={`
              relative z-[120] flex h-10 w-10
              items-center justify-center
              rounded-full transition-colors duration-300
              lg:hidden
              ${
                menuOpen
                  ? 'bg-[#F3F3F1]/10 text-[#F3F3F1]'
                  : isLight
                    ? 'text-[#1D2C4F]'
                    : 'text-[#F3F3F1]'
              }
            `}
          >
            <span className="relative block h-[14px] w-[18px]">
              <span
                className={`absolute right-0 top-0 h-px bg-current transition-all duration-300 ${
                  menuOpen
                    ? 'top-[6px] w-[18px] rotate-45'
                    : 'w-[18px]'
                }`}
              />

              <span
                className={`absolute right-0 top-[6px] h-px bg-current transition-all duration-300 ${
                  menuOpen
                    ? 'w-0 opacity-0'
                    : 'w-[12px] opacity-100'
                }`}
              />

              <span
                className={`absolute bottom-0 right-0 h-px bg-current transition-all duration-300 ${
                  menuOpen
                    ? 'bottom-[7px] w-[18px] -rotate-45'
                    : 'w-[18px]'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* =========================================
          MOBILE MENU OVERLAY
      ========================================== */}

      <div
        id="fnar-mobile-menu"
        dir="rtl"
        aria-hidden={!menuOpen}
        className={`
          fixed inset-0 z-[90] overflow-y-auto
          bg-[#0B1729] transition-[opacity,visibility]
          duration-500 lg:hidden
          ${
            menuOpen
              ? 'visible opacity-100'
              : 'invisible pointer-events-none opacity-0'
          }
        `}
      >
        {/* BACKGROUND GRID */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(132,164,177,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.07) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* ATMOSPHERE */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[30%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#84A4B1]/10 blur-[120px]"
        />

        <div className="relative flex min-h-full flex-col px-7 pb-8 pt-[110px]">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-7 bg-[#84A4B1]/60" />

            <span className="font-sans text-[9px] font-medium tracking-[0.28em] text-[#84A4B1]">
              FNAR / NAVIGATION
            </span>
          </div>

          {/* MOBILE NAVIGATION LINKS */}

          <div className="flex flex-1 flex-col">
            {NAV_ITEMS_WITH_INVOICES.map((item, index) => {
              const isActive =
                item.type === 'route' &&
                location.pathname === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-current={
                    isActive ? 'page' : undefined
                  }
                  onClick={(event) =>
                    handleNavClick(event, item)
                  }
                  className={`
                    group flex items-center justify-between
                    border-b border-[#F3F3F1]/[0.08]
                    py-[18px] font-arabic
                    text-[clamp(1.65rem,7vw,2.5rem)]
                    font-medium transition-colors duration-300
                    hover:text-[#84A4B1]
                    ${
                      isActive
                        ? 'text-[#84A4B1]'
                        : 'text-[#F3F3F1]'
                    }
                  `}
                >
                  <span>{item.label}</span>

                  <span className="font-sans text-[9px] font-normal tracking-[0.18em] text-[#84A4B1]/55">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              );
            })}
          </div>

          {/* =========================================
              MOBILE AUTH
          ========================================== */}

          <div className="mt-6">
            {isAuthenticated && user ? (
              <div className="rounded-[16px] border border-[#F3F3F1]/[0.08] bg-[#F3F3F1]/[0.02] p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#84A4B1]/15 font-sans text-[13px] font-bold text-[#84A4B1]">
                    {user.displayName
                      .trim()
                      .split(/\s+/)
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2) || '؟'}
                  </span>

                  <div className="min-w-0">
                    <p className="truncate font-arabic text-[14px] font-semibold text-[#F3F3F1]">
                      {user.displayName}
                    </p>

                    <p className="truncate font-arabic text-[10px] text-[#F3F3F1]/35">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <button
                    type="button"
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() =>
                      handleAuthNav('/academy')
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-arabic text-[13px] text-[#F3F3F1]/70 transition-colors hover:bg-[#F3F3F1]/[0.04] hover:text-[#F3F3F1]"
                  >
                    الأكاديمية

                    <span className="text-[10px] text-[#84A4B1]/50">
                      ←
                    </span>
                  </button>

                  <button
                    type="button"
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() =>
                      handleAuthNav('/academy/progress')
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-arabic text-[13px] text-[#F3F3F1]/70 transition-colors hover:bg-[#F3F3F1]/[0.04] hover:text-[#F3F3F1]"
                  >
                    تقدّمي

                    <span className="text-[10px] text-[#84A4B1]/50">
                      ←
                    </span>
                  </button>

                  <button
                    type="button"
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() =>
                      handleAuthNav('/academy/profile')
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-arabic text-[13px] text-[#F3F3F1]/70 transition-colors hover:bg-[#F3F3F1]/[0.04] hover:text-[#F3F3F1]"
                  >
                    ملفي الشخصي

                    <span className="text-[10px] text-[#84A4B1]/50">
                      ←
                    </span>
                  </button>

                  <div className="my-1 border-t border-[#F3F3F1]/[0.08]" />

                  <button
                    type="button"
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={handleLogout}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-arabic text-[13px] text-[#F3F3F1]/50 transition-colors hover:bg-red-500/10 hover:text-red-400"
                  >
                    تسجيل الخروج

                    <span className="text-[10px] text-[#F3F3F1]/30">
                      ←
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  type="button"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() =>
                    handleAuthNav('/login')
                  }
                  className="flex-1 rounded-full border border-[#F3F3F1]/15 py-3 font-arabic text-[13px] font-medium text-[#F3F3F1]/80 transition-colors hover:border-[#84A4B1]/40 hover:text-[#F3F3F1]"
                >
                  دخول
                </button>

                <button
                  type="button"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() =>
                    handleAuthNav('/signup')
                  }
                  className="flex-1 rounded-full bg-[#F3F3F1] py-3 font-arabic text-[13px] font-semibold text-[#1D2C4F]"
                >
                  إنشاء حساب
                </button>
              </div>
            )}
          </div>

          {/* =========================================
              MOBILE PROGRAM CTA
          ========================================== */}

          <div className="mt-6">
            <a
              href="/program"
              tabIndex={menuOpen ? 0 : -1}
              onClick={(event) =>
                handleNavClick(event, {
                  href: '/program',
                  type: 'route',
                })
              }
              className="group flex w-full items-center justify-between rounded-full bg-[#F3F3F1] px-6 py-[15px] font-arabic text-[14px] font-semibold text-[#1D2C4F]"
            >
              <span>اكتشف البرنامج</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#1D2C4F]/15 text-[10px] transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </a>

            <div className="mt-5 flex items-center justify-between text-[9px] text-[#F3F3F1]/35">
              <span>FNAR</span>

              <span className="font-sans tracking-[0.16em]">
                KNOWLEDGE BEFORE DECISION
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
