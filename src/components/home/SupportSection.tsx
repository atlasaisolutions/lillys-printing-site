import FadeIn from "@/components/FadeIn";
import { MessageCircle, FileText, Package, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FileText,
    title: "Instant Quote Requests",
    description: "Get pricing estimates for your projects in seconds.",
    path: "/contact",
  },
  {
    icon: Package,
    title: "Order Tracking",
    description: "Monitor your order status from production to delivery.",
    path: "/contact",
  },
  {
    icon: MessageCircle,
    title: "Customer Inquiries",
    description: "Get answers to your questions anytime, day or night.",
    path: "/automation",
  },
  {
    icon: UserPlus,
    title: "Lead Capture",
    description: "Express interest and our team will follow up promptly.",
    path: "/contact",
  },
];

const SupportSection = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Powered by <span className="text-primary">Atlas.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered 24/7 automation ensures you always have access to speed, support, and status updates.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Link
              key={f.title}
              to={f.path}
              className="block group"
            >
              <FadeIn delay={i * 0.1}>
                <div className="bg-background rounded-lg p-6 text-center h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-primary/10 cursor-pointer">
                  <f.icon size={28} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </FadeIn>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
