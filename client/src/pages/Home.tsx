import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

/**
 * Home Page
 * Design: Luxury Minimalist with full-bleed sections
 * - Hero section with background image
 * - About, Services, Portfolio, Contact sections
 * - Smooth scrolling and animations
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        id="home"
        title="Elegant, Refined, Iconic"
        subtitle="Where your dreams meet elegant design."
        backgroundImage="/images/hero-main.jpg"
        cta={{ label: "Explore Our Work", href: "/portfolio" }}
      />

      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
