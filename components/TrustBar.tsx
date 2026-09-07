"use client";

import { motion } from "framer-motion";

const trustItems = [
  {
    number: "01",
    title: "Producto original",
    description: "Procedencia confiable.",
  },
  {
    number: "02",
    title: "Servicio confiable",
    description: "Atención enfocada en cada cliente.",
  },
  {
    number: "03",
    title: "Atención cercana",
    description: "Comunicación directa y clara.",
  },
  {
    number: "04",
    title: "Distribución",
    description: "Soluciones para las necesidades de tu negocio.",
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Principales atributos de Casa Blanca Distribuciones"
      className="relative overflow-hidden border-y border-black/[0.06] bg-white"
    >
      <div className="container-cb">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative flex min-h-[145px] flex-col justify-center px-5 py-7 sm:min-h-[155px] lg:px-7 ${
                index < trustItems.length - 1
                  ? "border-b border-black/[0.06] lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#6C1F29]/45">
                  {item.number}
                </span>

                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#6C1F29]/25 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#6C1F29]" />
              </div>

              <h2 className="mt-4 text-[15px] font-extrabold tracking-[-0.01em] text-[#111111] sm:text-[16px]">
                {item.title}
              </h2>

              <p className="mt-1.5 max-w-[230px] text-[12px] leading-5 text-[#737373]">
                {item.description}
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.08,
                }}
                className="absolute bottom-0 left-5 h-[2px] w-10 origin-left bg-[#6C1F29] opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:left-7"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}