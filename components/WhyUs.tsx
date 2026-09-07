"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Atención cercana",
    description:
      "Mantenemos una comunicación directa para entender las necesidades de cada cliente y dar seguimiento a sus solicitudes.",
  },
  {
    title: "Calidad y respaldo",
    description:
      "Ponemos atención en la confiabilidad de los productos y en la calidad del servicio que ofrecemos.",
  },
  {
    title: "Distribución confiable",
    description:
      "Buscamos que cada pedido forme parte de una experiencia de servicio clara, práctica y confiable.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="confianza"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* =========================================================
          DECORACIÓN
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[-160px] h-[440px] w-[440px] rounded-full border border-[#6C1F29]/[0.06] sm:h-[560px] sm:w-[560px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-160px] left-[-160px] h-[360px] w-[360px] rounded-full bg-[#F7F5F2]"
      />

      <div className="container-cb relative z-10">
        {/* =======================================================
            INTRO
        ======================================================= */}

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
          {/* Heading */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="eyebrow"
            >
              ¿Por qué Casa Blanca?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-[760px] text-[40px] font-extrabold leading-[1.01] tracking-[-0.045em] text-[#111111] sm:text-[52px] lg:text-[62px] xl:text-[70px]"
            >
              Una relación comercial basada en{" "}
              <span className="text-[#6C1F29]">
                confianza.
              </span>
            </motion.h2>
          </div>

          {/* Small seal */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-5 lg:justify-end"
          >
            <div className="hidden h-px w-14 bg-[#6C1F29]/20 sm:block" />

            <div className="relative flex h-[112px] w-[112px] shrink-0 items-center justify-center rounded-full border border-[#D6AD55]/30 bg-[#F7F5F2] sm:h-[128px] sm:w-[128px]">
              <Image
                src="/producto-original-recortado.png"
                alt=""
                width={180}
                height={180}
                aria-hidden="true"
                className="h-auto w-[82px] sm:w-[94px]"
              />
            </div>

            <div className="max-w-[190px]">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-[#6C1F29]">
                Nuestro compromiso
              </p>

              <p className="mt-1.5 text-[12px] leading-5 text-[#737373]">
                Servicio confiable desde el origen hasta la atención de cada
                cliente.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            REASONS
        ======================================================= */}

        <div className="mt-14 border-t border-black/[0.07] sm:mt-16 lg:mt-20">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{
                opacity: 0,
                x: -18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative grid gap-4 border-b border-black/[0.07] py-7 sm:grid-cols-[0.7fr_1fr] sm:items-center sm:gap-12 sm:py-9 lg:grid-cols-[0.8fr_1fr] lg:gap-20 lg:py-10"
            >
              <h3 className="text-[25px] font-extrabold tracking-[-0.025em] text-[#111111] transition-colors duration-300 group-hover:text-[#6C1F29] sm:text-[29px] lg:text-[35px]">
                {reason.title}
              </h3>

              <div className="flex items-start justify-between gap-6">
                <p className="max-w-[560px] text-[13px] leading-6 text-[#737373] sm:text-[14px] sm:leading-7">
                  {reason.description}
                </p>

                <span className="mt-1 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-[#6C1F29] transition-all duration-300 group-hover:border-[#6C1F29]/30 group-hover:bg-[#6C1F29] group-hover:text-white sm:flex">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h13M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <span
                aria-hidden="true"
                className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#6C1F29] transition-all duration-500 group-hover:w-full"
              />
            </motion.article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-10 flex flex-col gap-5 rounded-[24px] bg-[#F7F5F2] p-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-7 lg:p-8"
        >
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#6C1F29]">
              Ofrecemos servicio
            </p>

            <p className="mt-2 max-w-[620px] text-[14px] leading-6 text-[#555555] sm:text-[15px]">
              Porque una buena distribución empieza con algo más que un
              pedido: empieza con la confianza.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden h-px w-8 bg-[#6C1F29]/20 sm:block" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#111111]/35">
              Servicio · Confianza
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}