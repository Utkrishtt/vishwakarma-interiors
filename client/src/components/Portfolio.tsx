/**
 * Portfolio Component
 * Design: Staggered image gallery with text overlays
 * - Large images with minimal text
 * - Hover effects revealing more information
 * - Asymmetric layout for visual interest
 */
import {Link} from "wouter";

const portfolioItems = [
  {
    id: 1,
    title: "Luxury Penthouse",
    location: "Mumbai, India",
    image: "/images/portfolio-1.jpg",
    category: "Residential",
  },
  {
    id: 2,
    title: "Corporate Office",
    location: "Delhi, India",
    image: "/images/hero-services.jpg",
    category: "Commercial",
  },
  {
    id: 3,
    title: "Designer Apartment",
    location: "Bangalore, India",
    image: "/images/hero-about.jpg",
    category: "Residential",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-20 py-24 sm:py-32 lg:py-40 bg-background"
    >
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest">
              PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden aspect-square lg:aspect-auto ${
                index === 0 ? "lg:col-span-2 lg:aspect-video" : ""
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-accent text-sm font-semibold mb-3">
                  {item.category}
                </p>
                <p className="text-secondary text-sm">{item.location}</p>
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>


        {/* CTA */}
<div className="mt-16 text-center">
  <Link href="/portfolio">
    <a className="inline-block px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium">
      View All Projects
    </a>
  </Link>
</div>
      </div>
    </section>
  );
}
