import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "TechCorp Annual Report",
    description: "500-page premium bound report with foil stamping",
  },
  {
    title: "Metro Fitness Rebrand",
    description: "Complete branded apparel line for 12 franchise locations",
  },
  {
    title: "Downtown Gala Signage",
    description: "Large format event signage and directional displays",
  },
  {
    title: "GreenLeaf Product Catalog",
    description: "120-page full-color catalog with matte finish",
  },
  {
    title: "Horizon Bank Materials",
    description: "Business cards, letterheads, and envelope suite",
  },
  {
    title: "Summit Conference Package",
    description: "Badges, banners, programs, and promotional items",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Featured Work
            </h2>
            <p className="mt-4 text-muted-foreground">
              A selection of projects that showcase our capabilities.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-muted cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground/50 font-heading text-lg">
                    {project.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-primary-foreground p-6">
                  <h3 className="font-heading font-bold text-lg text-center">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 mt-2 text-center">
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PortfolioPreview;
