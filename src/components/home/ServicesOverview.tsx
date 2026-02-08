import { Link } from "react-router-dom";
import { Printer, Shirt, CarFront, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: CarFront,
    title: "Vehicle Wraps & Graphics",
    description:
      "Transform your fleet into mobile billboards with premium full/partial wraps for cars, trucks, and vans.",
  },
  {
    icon: Monitor,
    title: "Digital Business Solutions",
    description:
      "Custom websites, social media management, and logo design to build a powerful online presence.",
  },
  {
    icon: Shirt,
    title: "Apparel & Merchandise",
    description:
      "High-quality embroidered uniforms and screen-printed gear that unites your team and promotes your brand.",
  },
  {
    icon: Printer,
    title: "Print Marketing",
    description:
      "Business cards, flyers, and brochures printed with precision to leave a lasting professional impression.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Our Services
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive printing solutions designed for businesses that demand
              quality, consistency, and reliability.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="bg-background border border-border rounded-lg p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
                <service.icon size={32} className="text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
                <Button asChild variant="link" className="mt-4 p-0 justify-start">
                  <Link to="/services">Learn More →</Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
