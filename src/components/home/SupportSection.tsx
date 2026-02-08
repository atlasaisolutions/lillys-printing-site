import FadeIn from "@/components/FadeIn";
import { MessageCircle, FileText, Package, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";



import { useTranslation } from "react-i18next";

const SupportSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              {t("support.powered_by")} <span className="text-primary">Atlas.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {t("support.description")}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: FileText,
              title: t("support.quote_requests"),
              description: t("support.quote_desc"),
              path: "/contact",
            },
            {
              icon: Package,
              title: t("support.order_tracking"),
              description: t("support.tracking_desc"),
              path: "/contact",
            },
            {
              icon: MessageCircle,
              title: t("support.inquiries"),
              description: t("support.inquiries_desc"),
              path: "/automation",
            },
            {
              icon: UserPlus,
              title: t("support.lead_capture"),
              description: t("support.lead_desc"),
              path: "/contact",
            },
          ].map((f, i) => (
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
