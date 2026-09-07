"use client";

import { motion } from "framer-motion";

const whatsappNumber = "523333944105";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero conocer más sobre Casa Blanca Distribuciones."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed bottom-5 right-5 z-[120] sm:bottom-6 sm:right-6"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Casa Blanca Distribuciones por WhatsApp"
        className="group relative flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#6C1F29] text-white shadow-[0_12px_30px_rgba(108,31,41,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#48141B] hover:shadow-[0_16px_38px_rgba(108,31,41,0.34)] sm:h-[60px] sm:w-[60px]"
      >
        {/* Pulso */}

        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-[#6C1F29]/40 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
        />

        {/* Icono */}

        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          <path
            d="M20.52 3.48A11.78 11.78 0 0 0 12.07 0C5.52 0 0.19 5.33 0.19 11.88c0 2.09.55 4.13 1.6 5.92L.12 24l6.34-1.66a11.84 11.84 0 0 0 5.61 1.42h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.44-8.4Z"
            fill="currentColor"
          />

          <path
            d="M17.54 13.76c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.65-.95-2.26-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.15 3.28 5.2 4.6.73.32 1.3.51 1.75.65.74.24 1.41.2 1.94.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.12-.28-.2-.58-.35Z"
            fill="#6C1F29"
          />
        </svg>

        {/* Tooltip */}

        <span className="pointer-events-none absolute right-[calc(100%+12px)] hidden min-w-max rounded-full bg-[#111111] px-4 py-2 text-[11px] font-bold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
          Habla con nosotros
        </span>
      </a>
    </motion.div>
  );
}