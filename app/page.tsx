import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import OriginalProduct from "@/components/OriginalProduct";
import Services from "@/components/Services";
import Categories from "@/components/Categories";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Casa Blanca Distribuciones",
  description:
    "Empresa de distribución y abastecimiento para negocios en Guadalajara, Jalisco.",
  telephone: "+52 33 3394 4105",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  url: "https://casablancadist.com",
};

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Hero />

        <TrustBar />

        <About />

        <OriginalProduct />

        <Services />

        <Categories />

        <WhyUs />

        <CTA />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}