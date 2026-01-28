import React from "react";

const blogPosts = [
	{
		id: 1,
		title: "5 Luxury Interior Design Trends for 2026",
		date: "January 28, 2026",
		image: "/images/blog/luxury-interior-design-2026.jpg",
		alt: "Luxury interior design trends by Vishwakarma Interiors",
		content: `
Luxury interior design in 2026 is centered around comfort, sustainability, and
smart living. At Vishwakarma Interiors, we believe luxury should feel timeless,
functional, and personal.

Sustainable materials such as natural stone, reclaimed wood, and eco-friendly
finishes are redefining premium homes. Vishwakarma Interior Design focuses on
creating elegant spaces that respect nature.

Smart home automation is another major trend. Vishwakarma Interior Designer
solutions integrate lighting, climate control, and security seamlessly.

Warm neutral shades like beige, sand, and earthy browns are replacing cool greys.
Our team at Vishwakarma Architects and Interior Designers carefully curates calm
and welcoming color palettes.

Statement lighting, custom furniture, and personalized layouts complete the luxury
experience. Vishwakarma Interior delivers designs built for the future.
		`,
	},
	{
		id: 2,
		title: "How to Choose the Right Decor for Your Space",
		date: "January 15, 2026",
		image: "/images/blog/right-decor-interior-design.jpg",
		alt: "Interior decor ideas by Vishwakarma Interior Designer",
		content: `
Choosing the right decor can completely transform a space. Vishwakarma Interiors
recommends understanding your room size, layout, and lighting first.

Defining a clear style—modern, minimal, or traditional—helps maintain visual
consistency. Vishwakarma Interior Design experts suggest balanced color palettes
and materials.

Neutral base tones with accent pieces create harmony. Vishwakarma Architects
focus on decor that enhances both aesthetics and functionality.

Functional decor such as mirrors, rugs, and shelves improves usability while adding
character. Vishwakarma Interior Designer solutions balance beauty with purpose.

Personal touches like artwork and custom furniture bring warmth to your home.
		`,
	},
	{
		id: 3,
		title: "Modern Living Room Interior Design Ideas for Indian Homes",
		date: "February 5, 2026",
		image: "/images/blog/living-room-interior-design.jpg",
		alt: "Modern living room interior design by Vishwakarma Interiors",
		content: `
The living room is the heart of every home. Vishwakarma Interiors designs modern
living rooms that balance comfort, elegance, and functionality.

Open layouts, minimal furniture, and layered lighting create a spacious feel.
Vishwakarma Interior Design uses neutral tones with textured elements for depth.

Custom TV units, smart storage, and statement lighting elevate the overall look.
Our Vishwakarma Interior Designer team ensures every detail serves a purpose.

Natural light, indoor plants, and soft furnishings make the space inviting.
Vishwakarma Architects and Interior Designers craft living rooms that feel warm,
modern, and timeless.
		`,
	},
	{
		id: 4,
		title: "Modular Kitchen Design: Smart, Stylish, and Space-Efficient",
		date: "February 12, 2026",
		image: "/images/blog/modular-kitchen-design.jpg",
		alt: "Modular kitchen design by Vishwakarma Interior",
		content: `
A modular kitchen combines functionality with modern aesthetics. Vishwakarma
Interiors specializes in designing kitchens that are efficient and stylish.

Smart storage solutions, soft-close drawers, and ergonomic layouts improve
workflow. Vishwakarma Interior Design ensures every inch is utilized effectively.

High-quality materials, easy-to-maintain finishes, and proper lighting enhance
both durability and visual appeal. Vishwakarma Interior Designer solutions are
customized to your cooking habits.

From compact apartments to spacious homes, Vishwakarma Architects and Interior
Designers deliver kitchens that are practical and beautiful.
		`,
	},
	{
		id: 5,
		title: "Bedroom Interior Design Tips for Comfort and Elegance",
		date: "February 20, 2026",
		image: "/images/blog/bedroom-interior-design.jpg",
		alt: "Bedroom interior design by Vishwakarma Architects and Interior Designers",
		content: `
A well-designed bedroom promotes relaxation and comfort. Vishwakarma Interiors
creates bedrooms that feel calm, cozy, and elegant.

Soft color palettes, layered lighting, and comfortable furniture set the tone.
Vishwakarma Interior Design focuses on simplicity with subtle luxury.

Custom wardrobes, smart storage, and clutter-free layouts enhance functionality.
Our Vishwakarma Interior Designer team ensures a perfect balance of form and
function.

Thoughtful details like textures, fabrics, and lighting complete the look.
Vishwakarma Architects and Interior Designers transform bedrooms into peaceful
retreats.
		`,
	},
];

export default function Blog() {
	return (
		<section className="min-h-screen bg-background py-20 px-4">
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4 text-center">
					Interior Design Blogs
				</h1>
				<div className="flex justify-center mb-8">
					<div className="h-1 w-16 bg-accent rounded" />
				</div>
				<p className="text-secondary max-w-2xl mx-auto mb-16 text-center">
					Design insights, expert tips, and the latest trends from Vishwakarma
					Interior Designer and Vishwakarma Architects and Interior Designers.
				</p>

				{/* Blog List */}
				<div className="space-y-16">
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className="bg-white rounded-xl shadow border border-border overflow-hidden"
						>
							{/* Image */}
							<div className="h-[220px] md:h-[320px] w-full">
								<img
									src={post.image}
									alt={post.alt}
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>

							{/* Content */}
							<div className="p-6 md:p-10">
								<h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
									{post.title}
								</h2>
								<div className="text-xs text-accent mb-4">
									{post.date}
								</div>
								<p className="text-gray-800 leading-7 whitespace-pre-line">
                                    {post.content}
                                </p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
