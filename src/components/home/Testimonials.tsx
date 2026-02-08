import FadeIn from "@/components/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lilly's Printing transformed our brand presence. Their attention to detail and consistent quality across all our materials is unmatched.",
    name: "Sarah Mitchell",
    title: "Marketing Director, TechCorp Industries",
  },
  {
    quote:
      "We needed a printing partner who could handle enterprise-scale orders without sacrificing quality. Lilly's exceeded every expectation.",
    name: "James Harrington",
    title: "VP Operations, Metro Fitness Group",
  },
  {
    quote:
      "The turnaround time is incredible. What used to take weeks with other vendors, Lilly's delivers in days. A true game-changer for our business.",
    name: "Diana Nguyen",
    title: "CEO, GreenLeaf Products",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-background rounded-lg p-8 shadow-sm h-full flex flex-col">
                <Quote size={24} className="text-primary mb-4" />
                <p className="text-foreground leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-heading font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
