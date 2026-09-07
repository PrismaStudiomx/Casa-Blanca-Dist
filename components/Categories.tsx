"use client";

import { motion } from "framer-motion";

const whatsappNumber = "523333944105";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero conocer la oferta disponible de Casa Blanca Distribuciones."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const highlights = [
  "Variedad",
  "Disponibilidad",
  "Abastecimiento",
  "Distribución",
];

export default function Categories() {
  return (
    <section
      id="oferta"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Fondo decorativo */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[8%] h-[420px] w-[420px] rounded-full bg-[#F7F5F2] sm:h-[520px] sm:w-[520px] lg:h-[620px] lg:w-[620px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full border border-[#6C1F29]/[0.07] sm:h-[380px] sm:w-[380px]"
      />

      <div className="container-cb relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 xl:gap-28">
          {/* Copy */}

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
              Nuestra oferta
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
              className="mt-5 max-w-[720px] text-[40px] font-extrabold leading-[1.01] tracking-[-0.045em] text-[#111111] sm:text-[52px] lg:text-[60px] xl:text-[68px]"
            >
              Una propuesta pensada para las{" "}
              <span className="text-[#6C1F29]">
                necesidades reales
              </span>{" "}
              de tu negocio.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.16,
              }}
              className="mt-7 max-w-[590px] text-[15px] leading-7 text-[#666666] sm:text-[16px] sm:leading-8"
            >
              Trabajamos con una oferta pensada para acompañar las
              necesidades de abastecimiento de nuestros clientes, procurando
              combinar disponibilidad, confianza y atención cercana.
            </motion.p>

            {/* Highlights */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
            >
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6C1F29]" />

                  <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#333333]">
                    {highlight}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.34,
              }}
              className="mt-9"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cb btn-primary group sm:w-auto"
              >
                <span>Conoce nuestra oferta</span>

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

          {/* Visual */}

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative aspect-[0.9] overflow-hidden rounded-[34px] bg-[#6C1F29] shadow-[0_30px_90px_rgba(108,31,41,0.16)]">
              {/* Círculos */}

              <div
                aria-hidden="true"
                className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-[-120px] left-[-90px] h-[330px] w-[330px] rounded-full border border-white/10"
              />

              {/* Contenido */}

              <div className="relative flex h-full flex-col justify-between p-7 sm:p-9 lg:p-10">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/55">
                    Casa Blanca
                  </span>

                  <div className="mt-3 h-px w-12 bg-white/25" />
                </div>

                <div className="relative z-10">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/50">
                    Distribución
                  </p>

                  <h3 className="mt-4 max-w-[390px] text-[40px] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-[50px]">
                    Tu negocio.
                    <br />
                    Nuestra{" "}
                    <span className="text-[#D6AD55]">
                      prioridad.
                    </span>
                  </h3>

                  <p className="mt-6 max-w-[360px] text-[13px] leading-6 text-white/60">
                    Una propuesta construida alrededor del servicio, la
                    confianza y las necesidades de cada cliente.
                  </p>
                </div>

                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                      Guadalajara, Jalisco
                    </p>

                    <p className="mt-1 text-[13px] font-extrabold text-white">
                      Casa Blanca Distribuciones
                    </p>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Solicitar información sobre la oferta de Casa Blanca Distribuciones"
                    className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#6C1F29] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]"
                  >
                    <svg
                      width="17"
                      height="17"
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
              </div>
            </div>
          </motion.div>
        </div>

        {/* Frase inferior */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-14 border-t border-black/[0.07] pt-6 sm:mt-16 sm:pt-7"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-black/30">
              Variedad · Disponibilidad · Abastecimiento · Distribución
            </p>

            <p className="text-[11px] font-semibold text-[#6C1F29]">
              Soluciones para negocios
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}