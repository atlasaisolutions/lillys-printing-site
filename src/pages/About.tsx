import FadeIn from "@/components/FadeIn";
import { Target, Eye, Shield, Cpu } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide high-quality, reliable printing services that empower businesses to communicate their brand with confidence and consistency.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted printing partner for growing enterprises, setting the standard for quality, efficiency, and innovation in the industry.",
  },
  {
    icon: Shield,
    title: "Commitment to Quality",
    description:
      "Every project undergoes rigorous quality control. From color accuracy to material selection, we maintain the highest standards across every order.",
  },
  {
    icon: Cpu,
    title: "Technology-Driven Operations",
    description:
      "Through our partnership with Atlas Business Solutions, we leverage AI and automation to deliver faster turnarounds, smarter workflows, and superior client experiences.",
  },
];

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              About Lilly's Printing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Founded to provide high-quality, reliable printing services for
              businesses seeking scalable branding solutions.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto mb-20">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Lilly's Printing was built on a simple premise: businesses deserve a
              printing partner that treats every project as mission-critical. From our
              first order to our five-thousandth, we've maintained an unwavering
              commitment to precision, quality, and reliability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a commercial printing company serving growing businesses, we
              understand that your printed materials represent your brand. That's why
              we invest in the latest printing technology, maintain strict quality
              control processes, and continuously optimize our operations for speed and
              accuracy. We are proud to serve businesses throughout the **Maryland metro area**,
              including **Baltimore, Alexandria, Washington DC, Bethesda, and Rockville**.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our partnership with Atlas Business Solutions has enabled us to automate
              key operational workflows, implement AI-powered customer support, and
              reduce costs by over $100,000 annually — savings we pass on to our
              clients through competitive pricing and faster turnaround times.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <div className="bg-secondary rounded-lg p-8">
                <v.icon size={32} className="text-primary mb-4" />
                <h2 className="text-xl font-heading font-bold text-foreground mb-3">
                  {v.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
