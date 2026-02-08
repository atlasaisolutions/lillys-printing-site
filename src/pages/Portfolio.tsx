import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "TechCorp Annual Report",
    industry: "Technology",
    services: "Offset Printing, Binding",
    result: "500-page premium bound report delivered in 5 business days",
  },
  {
    title: "Metro Fitness Rebrand",
    industry: "Fitness & Wellness",
    services: "Apparel, Signage",
    result: "Complete branded apparel line for 12 franchise locations",
  },
  {
    title: "Downtown Gala Signage",
    industry: "Events & Entertainment",
    services: "Large Format Printing",
    result: "40+ pieces of event signage and directional displays",
  },
  {
    title: "GreenLeaf Product Catalog",
    industry: "Consumer Goods",
    services: "Digital Printing, Binding",
    result: "120-page full-color catalog with premium matte finish",
  },
  {
    title: "Horizon Bank Materials",
    industry: "Financial Services",
    services: "Commercial Printing",
    result: "Complete stationery suite for 25 branch locations",
  },
  {
    title: "Summit Conference Package",
    industry: "Corporate Events",
    services: "Mixed Services",
    result: "Badges, banners, programs, and promotional items for 2,000 attendees",
  },
  {
    title: "Riverside Medical Signage",
    industry: "Healthcare",
    services: "Large Format, Wayfinding",
    result: "Interior and exterior signage system for new facility",
  },
  {
    title: "Atlas Business Rebrand",
    industry: "Consulting",
    services: "Full Branding Package",
    result:
      "Complete brand collateral including cards, letterheads, and presentations",
  },
  {
    title: "Coastal Real Estate Mailers",
    industry: "Real Estate",
    services: "Direct Mail, Commercial Print",
    result: "Monthly mailer campaign reaching 50,000 households",
  },
];

const Portfolio = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Our Portfolio
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects delivered with precision and professionalism.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.06}>
              <div className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-muted cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <span className="text-muted-foreground/50 font-heading text-lg text-center">
                    {project.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-primary-foreground p-6">
                  <h3 className="font-heading font-bold text-lg">
                    {project.title}
                  </h3>
                  <p className="text-xs text-primary-foreground/70 mt-1 uppercase tracking-wide">
                    {project.industry}
                  </p>
                  <p className="text-sm text-primary-foreground/80 mt-3">
                    {project.services}
                  </p>
                  <p className="text-sm text-primary-foreground/90 mt-2 leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
