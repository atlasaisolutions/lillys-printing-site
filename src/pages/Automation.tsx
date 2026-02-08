import FadeIn from "@/components/FadeIn";
import {
  Bot,
  Users,
  Workflow,
  FileText,
  UserCheck,
  DollarSign,
  Zap,
  TrendingUp,
  Headphones,
} from "lucide-react";

const automations = [
  {
    icon: Bot,
    title: "AI Customer Support",
    description:
      "24/7 intelligent chatbot handling inquiries, quotes, and order tracking.",
  },
  {
    icon: Users,
    title: "CRM Integration",
    description:
      "Automated customer data management and relationship tracking.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Streamlined production workflows from order intake to delivery.",
  },
  {
    icon: FileText,
    title: "Automated Quote Processing",
    description:
      "Instant, accurate quotes generated from project specifications.",
  },
  {
    icon: UserCheck,
    title: "Customer Follow-Up Sequences",
    description:
      "Automated post-delivery follow-ups and satisfaction tracking.",
  },
];

const results = [
  { icon: DollarSign, value: "$100K+", label: "Annual Cost Savings" },
  { icon: Zap, value: "42%", label: "Faster Client Response" },
  { icon: TrendingUp, value: "31%", label: "Retention Increase" },
  { icon: Headphones, value: "24/7", label: "Lead Capture Active" },
];

const Automation = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Built for Scale.{" "}
              <span className="text-primary">Powered by Automation.</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Lilly's Printing implemented intelligent automation systems through
              Atlas Business Solutions to reduce costs, improve response time, and
              scale without increasing overhead.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {automations.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.1}>
              <div className="bg-secondary rounded-lg p-8 h-full">
                <a.icon size={32} className="text-primary mb-4" />
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {a.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="bg-primary text-primary-foreground rounded-lg p-12">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-center mb-10">
              Measurable Results
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((r) => (
                <div key={r.label} className="text-center">
                  <r.icon
                    size={28}
                    className="mx-auto mb-3 text-primary-foreground/80"
                  />
                  <p className="text-3xl font-heading font-bold">{r.value}</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Automation systems implemented by
            </p>
            <a
              href="https://atlasservice.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-heading font-bold text-primary hover:underline"
            >
              Atlas Business Solutions →
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Automation;
