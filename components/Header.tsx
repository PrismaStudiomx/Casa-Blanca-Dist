"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const whatsappNumber = "523333944105";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero conocer más sobre Casa Blanca Distribuciones."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const navigation = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Nosotros",
    href: "#nosotros",
  },
  {
    label: "Servicio",
    href: "#servicio",
  },
  {
    label: "Producto Original",
    href: "#producto-original",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* =========================================================
          HEADER
      ========================================================= */}

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.07)] backdrop-blur-xl"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="container-cb">
          <div className="flex h-[72px] items-center justify-between gap-5 sm:h-[76px]">
            {/* =====================================================
                LOGO
            ===================================================== */}

            <Link
              href="#inicio"
              aria-label="Casa Blanca Distribuciones - Inicio"
              onClick={closeMenu}
              className="relative z-[110] flex h-full shrink-0 items-center"
            >
              <Image
src="/logo-casa-blanca-final-recortado.png"
  alt="Casa Blanca Distribuciones"
  width={240}
  height={76}
  priority
  className="h-auto max-h-[52px] w-auto max-w-[185px] object-contain sm:max-h-[56px] sm:max-w-[200px] md:max-h-[58px] md:max-w-[215px]"
/>
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <nav
              aria-label="Navegación principal"
              className="hidden items-center gap-6 lg:flex xl:gap-8"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 text-[12px] font-bold text-black/65 transition-colors duration-300 hover:text-[#6C1F29] xl:text-[13px]"
                >
                  {item.label}

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#6C1F29] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* =====================================================
                DESKTOP CTA
            ===================================================== */}

            <div className="hidden lg:block">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a Casa Blanca Distribuciones por WhatsApp"
                className="group inline-flex min-h-[43px] items-center justify-center gap-2 rounded-full bg-[#6C1F29] px-5 text-[12px] font-extrabold text-white shadow-[0_8px_22px_rgba(108,31,41,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#48141B] hover:shadow-[0_12px_28px_rgba(108,31,41,0.24)] xl:px-6 xl:text-[13px]"
              >
                <span>Habla con nosotros</span>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M5 12h13M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* =====================================================
                MOBILE MENU BUTTON
            ===================================================== */}

            <button
              type="button"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="relative z-[110] flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[#111111] transition-all duration-300 hover:border-[#6C1F29] hover:text-[#6C1F29] lg:hidden"
            >
              <span className="relative flex h-[15px] w-[20px] flex-col justify-between">
                <span
                  className={`block h-[1.5px] w-full origin-center rounded-full bg-current transition-all duration-300 ${
                    isMenuOpen
                      ? "translate-y-[6.75px] rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />

                <span
                  className={`block h-[1.5px] w-full rounded-full bg-current transition-opacity duration-200 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                <span
                  className={`block h-[1.5px] w-full origin-center rounded-full bg-current transition-all duration-300 ${
                    isMenuOpen
                      ? "-translate-y-[6.75px] -rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Menu */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed inset-x-3 top-[67px] z-[90] overflow-hidden rounded-[24px] border border-black/[0.06] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.15)] lg:hidden sm:top-[71px]"
            >
              <div className="p-3 sm:p-4">
                <nav
                  aria-label="Navegación móvil"
                  className="flex flex-col"
                >
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.04 * index,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex min-h-[52px] items-center justify-between rounded-[16px] px-4 text-[14px] font-bold text-[#111111] transition-colors duration-200 hover:bg-[#F7F5F2] hover:text-[#6C1F29] sm:min-h-[56px] sm:text-[15px]"
                      >
                        <span>{item.label}</span>

                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M9 18l6-6-6-6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.22,
                    duration: 0.3,
                  }}
                  className="mt-3 border-t border-black/[0.06] pt-3"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="group flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#6C1F29] px-5 text-[14px] font-extrabold text-white transition-all duration-300 hover:bg-[#48141B]"
                  >
                    <span>Habla con nosotros</span>

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M5 12h13M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </motion.div>

                <div className="px-3 pb-2 pt-5 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/30">
                    Ofrecemos servicio, entregamos confianza.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}