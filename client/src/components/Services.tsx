/**
 * Services Component
 * Design: Grid layout with service cards
 * - Gold accent borders
 * - Minimal styling with emphasis on typography
 * - Hover effects for interactivity
 */

// const services = [
//   {
//     title: "Residential Design",
//     description:
//       "Transform your home into a sanctuary of elegance and comfort. We create personalized living spaces that reflect your lifestyle and aspirations.",
//     icon: "🏠",
//   },
//   {
//     title: "Commercial Interiors",
//     description:
//       "Design professional environments that inspire productivity and reflect your brand identity. From offices to retail spaces, we deliver excellence.",
//     icon: "🏢",
//   },
//   {
//     title: "Architectural Services",
//     description:
//       "Comprehensive architectural solutions including 3D rendering, space planning, and house plan drafting with artistic precision.",
//     icon: "📐",
//   },
//   {
//     title: "Concept Design",
//     description:
//       "Innovative concept development that focuses on your specific needs. We create preliminary designs that bring your vision to life.",
//     icon: "✨",
//   },
//   {
//     title: "Building & Planning",
//     description:
//       "Expert guidance from project conception to completion. We provide cost-saving advice and strategic planning for your dream project.",
//     icon: "🔨",
//   },
//   {
//     title: "Exterior Design",
//     description:
//       "Create stunning outdoor spaces that complement your interior design. Landscaping and exterior aesthetics that enhance your property.",
//     icon: "🌿",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-24 sm:py-32 lg:py-40 bg-background">
//       <div className="container">
//         {/* Section Header */}
//         <div className="mb-16 sm:mb-24 max-w-2xl">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="h-1 w-12 bg-accent" />
//             <span className="text-accent text-sm font-semibold tracking-widest">
//               OUR SERVICES
//             </span>
//           </div>
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
//             Comprehensive Design Solutions
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group p-8 border border-border hover:border-accent transition-all duration-300 bg-card/50 hover:bg-card"
//             >
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-bold text-foreground mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-secondary text-sm leading-relaxed">
//                 {service.description}
//               </p>
//               <div className="mt-6 h-1 w-8 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
const services = [
  {
    title: "Residential Design",
    description:
      "We design homes that feel personal, calm, and beautifully lived in—spaces shaped around your lifestyle.",
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  // {
  //   title: "Commercial Interiors",
  //   description:
  //     "Thoughtfully designed workspaces that inspire productivity while expressing your brand’s identity.",
  //   image:
  //     "https://unsplash.com/photos/mall-interior-with-kfc-and-seating-areas-MDibPJ0WHZc",
  // },
  {
    title: "Modular Kitchen Design",
    description:
      "Precision-crafted modular kitchens blending functionality, elegance, and intelligent storage.",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Architectural Services",
    description:
      "From space planning to immersive 3D visuals, we deliver architectural solutions with precision.",
    image:
      "https://images.unsplash.com/photo-1749984739767-afd0cb96c3cb?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Concept Design",
    description:
      "Every exceptional space begins with an idea. We translate your vision into refined design concepts.",
    image:
      "https://plus.unsplash.com/premium_photo-1722048810826-751afbcc98c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbmNlcHQlMjBkZXNpZ24lMjBpbnRlcmlvciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Building & Planning",
    description:
      "End-to-end guidance through planning, budgeting, and execution for a seamless experience.",
    image:
      "https://images.unsplash.com/photo-1610650394144-a778795cf585?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGluZyUyMHBsYW5pbmclMjBpbnRlcmlvciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Exterior Design",
    description:
      "Elegant outdoor spaces designed to complement your interiors with harmony and balance.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 py-24 sm:py-32 lg:py-40 bg-background"
    >
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Design Solutions Crafted Around You
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-border bg-card hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 h-1 w-8 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
