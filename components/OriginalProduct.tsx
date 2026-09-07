"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const whatsappNumber = "523333944105";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero conocer más sobre los productos y servicios de Casa Blanca Distribuciones."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const points = [
  "Procedencia confiable",
  "Productos originales",
  "Mayor confianza para tu negocio",
];

export default function OriginalProduct() {
  return (
    <section
      id="producto-original"
      className="relative overflow-hidden bg-[#F7F5F2] py-20 sm:py-24 lg:py-32"
    >
      {/* =========================================================
          DECORACIÓN DE FONDO
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[220px] top-[20%] h-[500px] w-[500px] rounded-full border border-[#6C1F29]/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-white/50"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] top-[12%] h-2 w-2 rounded-full bg-[#6C1F29]/30"
      />

      <div className="container-cb relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
          {/* =====================================================
              LEFT — COPY
          ===================================================== */}

          <div className="order-1">
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
              Nuestro compromiso
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-[680px] text-[40px] font-extrabold leading-[1.01] tracking-[-0.045em] text-[#111111] sm:text-[50px] lg:text-[56px] xl:text-[64px]"
            >
              La confianza comienza{" "}
              <span className="text-[#6C1F29]">
                desde el origen.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.16,
              }}
              className="mt-7 max-w-[580px] text-[15px] leading-7 text-[#666666] sm:text-[16px] sm:leading-8"
            >
              Para Casa Blanca Distribuciones, la confianza no solo está en
              cómo atendemos a nuestros clientes, sino también en la
              confiabilidad de lo que entregamos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.24,
              }}
              className="mt-4 max-w-[580px] text-[15px] leading-7 text-[#666666] sm:text-[16px] sm:leading-8"
            >
              Trabajamos para ofrecer productos de procedencia confiable y
              construir relaciones comerciales donde nuestros clientes
              puedan comprar con mayor tranquilidad.
            </motion.p>

            {/* Points */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.32,
              }}
              className="mt-8 space-y-3"
            >
              {points.map((point, index) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6C1F29] text-white">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.5 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="text-[13px] font-bold text-[#222222] sm:text-[14px]">
                    {point}
                  </span>

                  <span className="ml-1 text-[11px] text-black/25">
                    0{index + 1}
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
                delay: 0.4,
              }}
              className="mt-9"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cb btn-primary group sm:w-auto"
              >
                <span>Solicita información</span>

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
              RIGHT — SELLO
          ===================================================== */}

          <div className="order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto min-h-[440px] max-w-[560px] overflow-hidden rounded-[34px] border border-black/[0.05] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.06)] sm:min-h-[560px]"
            >
              {/* Background circles */}

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D6AD55]/25 sm:h-[420px] sm:w-[420px]"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7F5F2] sm:h-[300px] sm:w-[300px]"
              />

              {/* Top label */}

              <div className="absolute left-6 top-6 z-20 sm:left-8 sm:top-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#6C1F29]">
                  Producto original
                </p>

                <div className="mt-2 h-px w-10 bg-[#6C1F29]/30" />
              </div>

              {/* Seal */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              >
                <Image
                  src="/producto-original-recortado.png"
                  alt="Sello de Producto Original de Casa Blanca Distribuciones"
                  width={600}
                  height={600}
                  className="h-auto w-[220px] drop-shadow-[0_30px_35px_rgba(0,0,0,0.16)] sm:w-[310px] md:w-[340px]"
                />
              </motion.div>

              {/* Bottom information */}

              <div className="absolute inset-x-6 bottom-6 z-20 sm:inset-x-8 sm:bottom-8">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-black/30">
                      Nuestro estándar
                    </p>

                    <p className="mt-1 text-[14px] font-extrabold text-[#111111] sm:text-[16px]">
                      Calidad · Confianza · Respaldo
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6C1F29] text-white sm:flex">
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
              </div>

              {/* Decorative dots */}

              <span
                aria-hidden="true"
                className="absolute right-[18%] top-[22%] h-2 w-2 rounded-full bg-[#6C1F29]/30"
              />

              <span
                aria-hidden="true"
                className="absolute bottom-[28%] left-[17%] h-1.5 w-1.5 rounded-full bg-[#D6AD55]/60"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}