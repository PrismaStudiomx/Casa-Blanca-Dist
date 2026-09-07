"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const whatsappNumber = "523333944105";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero conocer más sobre Casa Blanca Distribuciones."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function Hero() {
  return (
    <section
      id="inicio"
className="relative isolate min-h-[680px] overflow-hidden bg-[#F7F5F2] pt-[72px] sm:min-h-[700px] sm:pt-[76px] lg:min-h-[720px]"    >
      {/* =========================================================
          DECORACIÓN DE FONDO
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Círculo vino */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute -right-[180px] top-[80px] h-[500px] w-[500px] rounded-full bg-[#6C1F29]/[0.055] sm:-right-[130px] sm:h-[580px] sm:w-[580px] lg:-right-[170px] lg:top-[50px] lg:h-[680px] lg:w-[680px]"
        />

        {/* Círculo secundario */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.35,
            duration: 1,
          }}
          className="absolute -bottom-[140px] -left-[140px] h-[340px] w-[340px] rounded-full border border-[#6C1F29]/10 sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]"
        />

        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.7,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-[42%] hidden h-px w-[22%] origin-left bg-[#6C1F29]/10 lg:block"
        />

        {/* Mancha */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[24%] top-[16%] hidden h-2 w-2 rounded-full bg-[#6C1F29]/30 lg:block"
        />
      </div>

      {/* =========================================================
          CONTENIDO
      ========================================================= */}

      <div className="container-cb relative z-10 flex min-h-[648px] items-center">
<div className="grid w-full items-center gap-6 py-10 sm:gap-10 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:py-20 xl:gap-16">          {/* =====================================================
              COPY
          ===================================================== */}

          <div className="max-w-[720px]">
            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="eyebrow"
            >
              Casa Blanca Distribuciones
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-[760px] text-[46px] font-extrabold leading-[0.96] tracking-[-0.045em] text-[#111111] sm:text-[58px] md:text-[68px] lg:text-[68px] xl:text-[76px]"
            >
              Ofrecemos servicio.
              <br />
              <span className="text-[#6C1F29]">
                Entregamos confianza.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-[610px] text-[16px] leading-7 text-[#5F5F5F] sm:text-[17px] sm:leading-8"
            >
              Soluciones de distribución y abastecimiento para negocios que
              buscan productos de calidad, atención cercana y un servicio
              confiable.
            </motion.p>

            {/* CTAs */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.52,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="#servicio"
                className="btn-cb btn-primary group"
              >
                <span>Conoce nuestro servicio</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h13M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cb btn-secondary group"
              >
                <span>Habla con nosotros</span>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
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

            {/* Trust statement */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.75,
                duration: 0.7,
              }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-bold uppercase tracking-[0.12em] text-black/35"
            >
              <span>Producto original</span>

              <span className="h-1 w-1 rounded-full bg-[#6C1F29]/40" />

              <span>Servicio confiable</span>

              <span className="h-1 w-1 rounded-full bg-[#6C1F29]/40" />

              <span>Atención cercana</span>
            </motion.div>
          </div>

          {/* =====================================================
              PRODUCTO ORIGINAL
          ===================================================== */}

<div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[340px] lg:min-h-[540px]">            {/* Halo */}

            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute h-[280px] w-[280px] rounded-full border border-[#D6AD55]/25 sm:h-[340px] sm:w-[340px] lg:h-[430px] lg:w-[430px]"
            />

            {/* Sello */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.72,
                rotate: -5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1.05,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/producto-original-recortado.png"
                  alt="Producto Original"
                  width={560}
                  height={560}
                  priority
className="h-auto w-[225px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.14)] sm:w-[290px] lg:w-[400px] xl:w-[440px]"                />
              </motion.div>
            </motion.div>

            {/* Badge inferior */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 0.65,
              }}
              className="absolute bottom-[18px] right-[5%] hidden rounded-2xl border border-black/[0.06] bg-white/85 px-5 py-4 shadow-[0_15px_45px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:block lg:right-0"
            >
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#6C1F29]">
                Nuestro compromiso
              </p>

              <p className="mt-1 text-[13px] font-semibold text-[#111111]">
                Calidad y confianza
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM INDICATOR
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-black/25 lg:flex"
      >
        <span>Descubre Casa Blanca</span>

        <span className="h-8 w-px bg-black/15" />
      </motion.div>
    </section>
  );
}