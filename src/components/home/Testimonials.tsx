import FadeIn from "@/components/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Excellent work and very good service, I recommend them! They treated me directly and I recommend them 100%.",
    name: "Viridiana Cervantes",
    title: "Google Review",
  },
  {
    quote:
      "Great service and product!! Very accommodating!! Best place for your printing and wrapping needs for your company!",
    name: "Local SoundStage",
    title: "Google Review",
  },
  {
    quote:
      "Great art work and quick turn around time. The material used for our t-shirts is super soft. Highly recommend all their services.",
    name: "Anthony Lee",
    title: "Google Review",
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
