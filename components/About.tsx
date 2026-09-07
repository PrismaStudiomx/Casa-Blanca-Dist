"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const whatsappNumber = "523333944105";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero conocer más sobre Casa Blanca Distribuciones."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const values = [
  {
    number: "01",
    title: "Confianza",
    text: "Construimos relaciones comerciales basadas en atención, claridad y cumplimiento.",
  },
  {
    number: "02",
    title: "Servicio",
    text: "Buscamos entender las necesidades de cada cliente para ofrecer una atención cercana.",
  },
  {
    number: "03",
    title: "Calidad",
    text: "Ponemos especial atención en la procedencia y confiabilidad de los productos.",
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* =========================================================
          DECORACIÓN
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6C1F29]/[0.07] lg:h-[560px] lg:w-[560px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[260px] w-[260px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#F7F5F2]"
      />

      <div className="container-cb relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20 xl:gap-28">
          {/* =====================================================
              LEFT / COPY
          ===================================================== */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="eyebrow"
            >
              Nosotros
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
              className="mt-5 max-w-[700px] text-[38px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#111111] sm:text-[48px] lg:text-[54px] xl:text-[60px]"
            >
              Una forma confiable de{" "}
              <span className="text-[#6C1F29]">hacer las cosas.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.16,
              }}
              className="mt-7 max-w-[620px] space-y-4 text-[15px] leading-7 text-[#666666] sm:text-[16px] sm:leading-8"
            >
              <p>
                En <strong className="font-bold text-[#111111]">Casa Blanca Distribuciones</strong>{" "}
                trabajamos para brindar a nuestros clientes una solución
                confiable de distribución y abastecimiento.
              </p>

              <p>
                Entendemos que detrás de cada pedido existe un negocio que
                necesita atención, disponibilidad y confianza. Por eso
                buscamos construir relaciones comerciales claras y duraderas.
              </p>
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-8"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cb btn-primary group inline-flex sm:w-auto"
              >
                <span>Habla con nosotros</span>

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
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT / VISUAL
          ===================================================== */}

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-h-[440px] overflow-hidden rounded-[32px] bg-[#F7F5F2] p-6 sm:min-h-[500px] sm:p-8"
            >
              {/* Decorative lines */}

              <div
                aria-hidden="true"
                className="absolute right-[-100px] top-[-100px] h-[340px] w-[340px] rounded-full border border-[#6C1F29]/10"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-[-120px] left-[-100px] h-[300px] w-[300px] rounded-full border border-[#D6AD55]/20"
              />

              {/* Main visual card */}

              <div className="relative flex min-h-[390px] items-center justify-center sm:min-h-[440px]">
                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-full max-w-[370px]"
                >
                  <div className="overflow-hidden rounded-[28px] border border-black/[0.06] bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#6C1F29]">
                        Casa Blanca
                      </span>

                      <span className="h-2 w-2 rounded-full bg-[#6C1F29]" />
                    </div>

                    <div className="mt-10">
                      <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-black/35">
                        Distribución
                      </p>

                      <h3 className="mt-3 text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-[#111111] sm:text-[40px]">
                        Servicio
                        <br />
                        <span className="text-[#6C1F29]">
                          que genera confianza.
                        </span>
                      </h3>
                    </div>

                    <div className="mt-10 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-[#F7F5F2] p-3">
                        <div className="h-2 w-2 rounded-full bg-[#6C1F29]" />

                        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-black/45">
                          Atención
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#F7F5F2] p-3">
                        <div className="h-2 w-2 rounded-full bg-[#6C1F29]" />

                        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-black/45">
                          Calidad
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#F7F5F2] p-3">
                        <div className="h-2 w-2 rounded-full bg-[#6C1F29]" />

                        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-black/45">
                          Confianza
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating number */}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.35,
                    duration: 0.6,
                  }}
                  className="absolute right-0 top-[16%] hidden rounded-2xl bg-[#6C1F29] px-5 py-4 text-white shadow-[0_18px_40px_rgba(108,31,41,0.22)] sm:block"
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">
                    Nuestro enfoque
                  </p>

                  <p className="mt-1 text-[14px] font-extrabold">
                    Servicio + Confianza
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =======================================================
            VALUES
        ======================================================= */}

        <div className="mt-16 grid border-t border-black/[0.07] sm:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`py-7 sm:py-8 sm:pr-8 ${
                index > 0
                  ? "border-t border-black/[0.07] sm:border-l sm:border-t-0 sm:pl-8"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#6C1F29]/50">
                  {value.number}
                </span>

                <span className="h-px w-8 bg-[#6C1F29]/20" />
              </div>

              <h3 className="mt-4 text-[18px] font-extrabold tracking-[-0.02em] text-[#111111]">
                {value.title}
              </h3>

              <p className="mt-2 max-w-[320px] text-[13px] leading-6 text-[#737373]">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}