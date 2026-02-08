import FadeIn from "@/components/FadeIn";
import { MessageCircle, FileText, Package, UserPlus } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Instant Quote Requests",
    description: "Get pricing estimates for your projects in seconds.",
  },
  {
    icon: Package,
    title: "Order Tracking",
    description: "Monitor your order status from production to delivery.",
  },
  {
    icon: MessageCircle,
    title: "Customer Inquiries",
    description: "Get answers to your questions anytime, day or night.",
  },
  {
    icon: UserPlus,
    title: "Lead Capture",
    description: "Express interest and our team will follow up promptly.",
  },
];

const SupportSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Support That Never Sleeps.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered 24/7 chat support ensures you always have access to the
              help you need, whenever you need it.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div className="bg-background rounded-lg p-6 text-center">
                <f.icon size={28} className="mx-auto mb-3 text-primary" />
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
