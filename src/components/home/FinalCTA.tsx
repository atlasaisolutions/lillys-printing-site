import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold">
              Ready to Elevate Your Brand?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Partner with Lilly's Printing for enterprise-level quality that sets
              your business apart.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contact">Request a Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/contact">Start Your Order</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;
