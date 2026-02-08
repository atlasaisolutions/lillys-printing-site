import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { Printer, Shirt, Monitor, CarFront } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Transform Your Brand with{" "}
              <span className="text-primary block">Premium Printing & Digital Solutions.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Elevate your business presence with expert <strong>Vehicle Wraps</strong>, <strong>Custom Apparel</strong>, and <strong>Web Design</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base px-8 h-12">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 h-12 border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4 relative z-50">
            {[
              { icon: Shirt, label: "Branded Apparel", path: "/services" },
              { icon: Monitor, label: "Digital Solutions", path: "/services" },
              { icon: CarFront, label: "Vehicle Wraps", path: "/services" },
              { icon: Printer, label: "Print Marketing", path: "/services" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="bg-secondary rounded-lg p-8 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-secondary/80 hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md relative z-20 pointer-events-auto"
              >
                <item.icon size={40} className="text-primary" />
                <p className="text-sm font-medium text-foreground text-center">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
