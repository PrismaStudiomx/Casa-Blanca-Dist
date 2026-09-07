"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    label: "Nuestra oferta",
    href: "#oferta",
  },
  {
    label: "Producto Original",
    href: "#producto-original",
  },
  {
    label: "Confianza",
    href: "#confianza",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      {/* =========================================================
          DECORACIÓN
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[180px] -top-[180px] h-[430px] w-[430px] rounded-full border border-white/[0.05] sm:h-[560px] sm:w-[560px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[180px] -left-[180px] h-[400px] w-[400px] rounded-full border border-[#6C1F29]/25 sm:h-[520px] sm:w-[520px]"
      />

      <div className="container-cb relative z-10">
        {/* =======================================================
            MAIN FOOTER
        ======================================================= */}

        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.15fr_0.7fr_0.7fr] lg:gap-16 lg:py-20">
          {/* =====================================================
              BRAND
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <Link
              href="#inicio"
              aria-label="Casa Blanca Distribuciones - Inicio"
              className="inline-flex"
            >
              <Image
                src="/logo-casa-blanca-recortado.png"
                alt="Casa Blanca Distribuciones"
                width={220}
                height={70}
                className="h-auto max-h-[52px] w-auto max-w-[180px] brightness-0 invert"
              />
            </Link>

            <p className="mt-6 max-w-[390px] text-[14px] leading-7 text-white/45 sm:text-[15px]">
              Distribución y abastecimiento para negocios que buscan productos
              de calidad, atención cercana y un servicio confiable.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#D6AD55]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-white/50">
                Ofrecemos servicio, entregamos confianza.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
            }}
          >
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35">
              Navegación
            </p>

            <nav className="mt-5 grid grid-cols-1 gap-1.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex min-h-[34px] items-center text-[13px] font-semibold text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <span className="mr-2 h-px w-0 bg-[#D6AD55] transition-all duration-300 group-hover:w-4" />

                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              delay: 0.16,
            }}
          >
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35">
              Contacto
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">
                  Teléfono
                </p>

                <a
                  href="tel:+523333944105"
                  className="mt-1.5 inline-block text-[18px] font-extrabold text-white transition-colors duration-300 hover:text-[#D6AD55]"
                >
                  33 3394 4105
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">
                  Ubicación
                </p>

                <p className="mt-1.5 text-[14px] font-semibold text-white/65">
                  Guadalajara, Jalisco
                </p>
              </div>

              <a
                href="https://wa.me/523333944105"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/10 px-5 text-[12px] font-extrabold text-white transition-all duration-300 hover:border-[#D6AD55]/40 hover:bg-white/[0.04]"
              >
                Escríbenos por WhatsApp

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
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <div className="border-t border-white/[0.08]">
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-semibold text-white/25 sm:text-[11px]">
              © {new Date().getFullYear()} Casa Blanca Distribuciones. Todos
              los derechos reservados.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/20">
                Guadalajara, Jalisco
              </span>

              <span className="h-1 w-1 rounded-full bg-[#D6AD55]/50" />

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/20">
                Servicio · Confianza
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}