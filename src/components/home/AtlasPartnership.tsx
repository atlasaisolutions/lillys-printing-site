import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { DollarSign, Zap, Users, Headphones } from "lucide-react";

const metrics = [
  { icon: DollarSign, value: "$100K+", label: "Annual Savings" },
  { icon: Zap, value: "42%", label: "Faster Response" },
  { icon: Users, value: "31%", label: "Retention Increase" },
  { icon: Headphones, value: "24/7", label: "Automated Support" },
];

const AtlasPartnership = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold">
              Operational Excellence Powered by Atlas Business Solutions
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/80 leading-relaxed">
              Lilly's Printing partnered with Atlas Business Solutions, a
              Baltimore-based automation consulting firm, to modernize operations and
              increase efficiency.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <m.icon size={28} className="mx-auto mb-3 text-primary-foreground/80" />
                <p className="text-3xl font-heading font-bold">{m.value}</p>
                <p className="text-sm text-primary-foreground/70 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/automation">
                Learn About Our Automation Infrastructure
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AtlasPartnership;
