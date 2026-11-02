import { Link } from "wouter";

/**
 * Hero Component
 * Design: Full-bleed background image with centered text overlay
 * - Large serif typography for impact
 * - Centered text with gold accent line
 * - Call-to-action button
 */
interface HeroProps {
  id?: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta?: {
    label: string;
    href: string;
  };
}

export default function Hero({
  id,
  title,
  subtitle,
  backgroundImage,
  cta,
}: HeroProps) {
  return (
    <section
      id={id}
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container text-center text-white max-w-3xl px-4 animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="h-1 w-12 bg-accent" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-8 font-light">
          {subtitle}
        </p>

        {cta && (
          <Link href={cta.href}>
            <a className="inline-block px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium">
              {cta.label}
            </a>
          </Link>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="text-accent text-sm">Scroll to explore</div>
        <div className="text-accent mt-2">↓</div>
      </div>
    </section>
  );
}
