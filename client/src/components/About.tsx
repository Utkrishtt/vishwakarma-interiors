/**
 * About Component
 * Design: Asymmetric layout with generous whitespace
 * - Large serif heading
 * - Gold divider line
 * - Two-column layout on desktop
 */
export default function About() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest">
              ABOUT US
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground max-w-2xl">
            Refined Spaces, Designed with Purpose
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-lg text-secondary leading-relaxed">
              Vishwakarma Interior & Decorators is a distinguished design studio
              specializing in luxury interiors and architectural solutions. With
              over two decades of expertise, we are recognized for crafting
              bespoke spaces for clients who value refinement, detail, and
              timeless design.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              We believe exceptional interiors are born from a seamless balance
              of creativity, functionality, and enduring elegance. Every project
              begins with a deep understanding of our client's vision,
              lifestyle, and aspirations, allowing us to transform ideas into
              thoughtfully designed, sophisticated spaces.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Our Philosophy
              </h3>
              <p className="text-secondary leading-relaxed">
                Our process is rooted in collaboration. By engaging closely with our clients from the first concept to final execution, we deliver design solutions thoughtfully tailored to individual needs and aspirations.
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Founded in 2010s
              </h3>
              <p className="text-secondary leading-relaxed">
                Founded by Shri Rajesh Kumar Sharma, our firm has grown from a clear vision into a full-service design and build firm, creating refined spaces for luxury residential and commercial clientele.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
