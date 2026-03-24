import { BackgroundPaths } from "@/components/ui/background-paths";
import { Navbar } from "@/components/navbar";
import { ProductsSection } from "@/components/products-section";
import { FeaturesSection } from "@/components/features-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <BackgroundPaths
        title="Our Software Products"
        subtitle="From productivity tools to outreach automation — discover the products built by MetaMinds to help you work smarter."
        badgeText="Now Launching"
        ctaPrimary="Explore Products"
        ctaPrimaryHref="#products"
        ctaSecondary="Visit MetaMinds"
        ctaSecondaryHref="https://metaminds.firm.in"
        stats={[
          { value: "2", label: "Products" },
          { value: "2K+", label: "Early Users" },
          { value: "40+", label: "Countries" },
          { value: "24/7", label: "Support" },
        ]}
      />

      <ProductsSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </>
  );
}
