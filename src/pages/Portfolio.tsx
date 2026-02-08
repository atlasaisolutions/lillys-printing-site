import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const categories = ["All", "Vehicle Wraps", "Apparel", "Large Format", "Digital"];

const projects = [
  {
    title: "EcoFleet Van Wrap",
    category: "Vehicle Wraps",
    image: "/service-wrap.png",
    description: "Full fleet wrap implementation for local eco-friendly delivery service.",
  },
  {
    title: "TechStart Hoodie Series",
    category: "Apparel",
    image: "/service-digital.png", // Using digital image as placeholder for now
    description: "Premium embroidered hoodies for tech startup launch event.",
  },
  {
    title: "Downtown Storefront",
    category: "Large Format",
    image: "https://images.unsplash.com/photo-1559136555-930d72f186c6?auto=format&fit=crop&q=80&w=800",
    description: "Window graphics and illuminated signage for retail location.",
  },
  {
    title: "Metro Food Truck",
    category: "Vehicle Wraps",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&q=80&w=800",
    description: "Vibrant full wrap design for high-visibility food truck.",
  },
  {
    title: "Corporate Gala Banners",
    category: "Large Format",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    description: "Large scale step-and-repeat banners for annual corporate event.",
  },
  {
    title: "Lilly's Printing Rebrand",
    category: "Digital",
    image: "/service-digital.png",
    description: "Complete identity overhaul including logo, web, and social assets.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Our Portfolio
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of our premium work across vehicle wraps, apparel, and digital solutions.
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div className="group relative rounded-xl overflow-hidden shadow-md bg-secondary aspect-[4/3] cursor-pointer">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white font-heading font-bold text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              See something you like?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's bring your vision to life. Request a quote today and get a custom proposal for your project.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Portfolio;
