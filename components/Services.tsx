"use client";

import { motion } from "framer-motion";

const whatsappNumber = "523333944105";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero conocer más sobre el servicio de Casa Blanca Distribuciones."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const services = [
  {
    number: "01",
    title: "Abastecimiento",
    description:
      "Una oferta pensada para ayudar a nuestros clientes a mantener cubiertas las necesidades de su negocio.",
  },
  {
    number: "02",
    title: "Distribución",
    description:
      "Un servicio enfocado en llevar los pedidos de nuestros clientes de manera práctica y confiable.",
  },
  {
    number: "03",
    title: "Atención",
    description:
      "Comunicación directa y cercana para entender cada necesidad y dar seguimiento a cada solicitud.",
  },
];

export default function Services() {
  return (
    <section
      id="servicio"
      className="relative overflow-hidden bg-[#F7F5F2] py-20 sm:py-24 lg:py-32"
    >
      {/* =========================================================
          DECORACIÓN DE FONDO
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[180px] -top-[180px] h-[500px] w-[500px] rounded-full border border-[#6C1F29]/[0.07] sm:h-[620px] sm:w-[620px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[220px] -left-[180px] h-[480px] w-[480px] rounded-full bg-white/60"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[15%] top-[26%] hidden h-2 w-2 rounded-full bg-[#6C1F29]/40 lg:block"
      />

      <div className="container-cb relative z-10">
        {/* =======================================================
            HEADER DE SECCIÓN
        ======================================================= */}

        <div className="grid items-end gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
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
              Nuestro servicio
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-[620px] text-[39px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#111111] sm:text-[50px] lg:text-[58px] xl:text-[64px]"
            >
              Distribución que{" "}
              <span className="text-[#6C1F29]">
                facilita tu operación.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-[560px] lg:ml-auto"
          >
            <p className="text-[15px] leading-7 text-[#666666] sm:text-[16px] sm:leading-8">
              Trabajamos para que nuestros clientes encuentren una solución
              confiable de abastecimiento, distribución y atención, con un
              servicio pensado para las necesidades de su negocio.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cb btn-primary mt-7 sm:w-auto"
            >
              <span>Habla con nosotros</span>

              <svg
                width="16"
                height="16"
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
            </a>
          </motion.div>
        </div>

        {/* =======================================================
            SERVICIOS
        ======================================================= */}

        <div className="mt-14 border-t border-black/[0.08] sm:mt-16 lg:mt-20">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.09,
              }}
              className="group relative grid gap-5 border-b border-black/[0.08] py-7 sm:grid-cols-[70px_0.7fr_1fr] sm:items-center sm:gap-8 sm:py-9 lg:grid-cols-[90px_0.75fr_1fr] lg:gap-12 lg:py-10"
            >
              {/* Número */}

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#6C1F29]/60">
                  {service.number}
                </span>

                <span className="h-px w-8 bg-[#6C1F29]/15 transition-all duration-300 group-hover:w-12 group-hover:bg-[#6C1F29]/40 sm:hidden" />
              </div>

              {/* Título */}

              <div>
                <h3 className="text-[26px] font-extrabold tracking-[-0.03em] text-[#111111] transition-colors duration-300 group-hover:text-[#6C1F29] sm:text-[31px] lg:text-[36px]">
                  {service.title}
                </h3>
              </div>

              {/* Descripción */}

              <div className="flex items-center justify-between gap-6">
                <p className="max-w-[480px] text-[13px] leading-6 text-[#737373] sm:text-[14px] sm:leading-7">
                  {service.description}
                </p>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 text-[#111111] transition-all duration-300 group-hover:border-[#6C1F29]/20 group-hover:bg-[#6C1F29] group-hover:text-white sm:flex">
                  <svg
                    width="16"
                    height="16"
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
                </div>
              </div>

              {/* Línea de interacción */}

              <span
                aria-hidden="true"
                className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#6C1F29] transition-all duration-500 group-hover:w-full"
              />
            </motion.article>
          ))}
        </div>

        {/* =======================================================
            MENSAJE FINAL
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-12 rounded-[24px] border border-black/[0.07] bg-white px-5 py-6 shadow-[0_15px_45px_rgba(0,0,0,0.04)] sm:px-7 sm:py-7"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#6C1F29]/70">
                Casa Blanca Distribuciones
              </p>

              <p className="mt-2 max-w-[620px] text-[13px] leading-6 text-[#737373]">
                Ofrecemos servicio para que nuestros clientes puedan
                enfocarse en hacer crecer su negocio.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden h-px w-10 bg-[#6C1F29]/20 sm:block" />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#111111]/35">
                Servicio · Confianza · Respaldo
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}