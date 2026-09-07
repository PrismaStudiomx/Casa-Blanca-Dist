"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const whatsappNumber = "523333944105";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero conocer más sobre Casa Blanca Distribuciones."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden bg-[#6C1F29] py-20 sm:py-24 lg:py-32"
    >
      {/* =========================================================
          DECORACIÓN
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[180px] -top-[180px] h-[500px] w-[500px] rounded-full border border-white/[0.10] sm:h-[650px] sm:w-[650px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[220px] -left-[180px] h-[520px] w-[520px] rounded-full border border-white/[0.07]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -10, 0],
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[18%] top-[24%] h-2 w-2 rounded-full bg-[#D6AD55]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[18%] h-px w-16 bg-white/15 sm:w-24"
      />

      <div className="container-cb relative z-10">
        <div className="mx-auto max-w-[1000px] text-center">
          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
            }}
            className="inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/55"
          >
            <span className="h-px w-7 bg-[#D6AD55]" />
            Hablemos de tu negocio
            <span className="h-px w-7 bg-[#D6AD55]" />
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-6 max-w-[920px] text-[40px] font-extrabold leading-[1.01] tracking-[-0.045em] text-white sm:text-[52px] md:text-[62px] lg:text-[72px] xl:text-[80px]"
          >
            Encuentra un distribuidor en quien puedas{" "}
            <span className="text-[#D6AD55]">confiar.</span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
            }}
            className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 text-white/60 sm:text-[16px] sm:leading-8"
          >
            Estamos listos para conocer las necesidades de tu negocio y
            brindarte información sobre nuestra oferta y servicio de
            distribución.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.28,
            }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-white px-7 text-[13px] font-extrabold text-[#6C1F29] shadow-[0_18px_45px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7F5F2] hover:shadow-[0_22px_55px_rgba(0,0,0,0.2)] sm:w-auto"
            >
              <span>Habla con nosotros por WhatsApp</span>

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
            </a>

            <a
  href="tel:+523333944105"
  className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white bg-white px-7 text-[13px] font-bold text-[#111111] shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7F5F2] sm:w-auto"
>
  33 3394 4105
</a>
          </motion.div>

          {/* Bottom signature */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-12 border-t border-white/10 pt-6 sm:mt-14 sm:pt-7"
          >
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/40">
                  Ofrecemos servicio, entregamos confianza.
                </p>
              </div>

              {/* Small seal */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                  <Image
                    src="/producto-original-recortado.png"
                    alt=""
                    aria-hidden="true"
                    width={70}
                    height={70}
                    className="h-auto w-[29px] opacity-80"
                  />
                </div>

                <span className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-white/35">
                  Producto original
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}