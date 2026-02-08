import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { Printer, Shirt, CarFront, Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: CarFront,
      title: t("services_page.wraps.title"),
      image: "/service-wrap.png",
      description: t("services_page.wraps.desc"),
      process: t("services_page.wraps.process", { returnObjects: true }) as string[],
      benefits: t("services_page.wraps.benefits", { returnObjects: true }) as string[],
      linkState: "Vehicle Wraps & Large Format",
    },
    {
      icon: Shirt,
      title: t("services_page.apparel.title"),
      image: null,
      description: t("services_page.apparel.desc"),
      process: t("services_page.apparel.process", { returnObjects: true }) as string[],
      benefits: t("services_page.apparel.benefits", { returnObjects: true }) as string[],
      linkState: "Apparel & Promotional",
    },
    {
      icon: Monitor,
      title: t("services_page.digital.title"),
      image: "/service-digital.png",
      description: t("services_page.digital.desc"),
      process: t("services_page.digital.process", { returnObjects: true }) as string[],
      benefits: t("services_page.digital.benefits", { returnObjects: true }) as string[],
      linkState: "Digital & Brand Identity",
    },
    {
      icon: Printer,
      title: t("services_page.print.title"),
      image: null,
      description: t("services_page.print.desc"),
      process: t("services_page.print.process", { returnObjects: true }) as string[],
      benefits: t("services_page.print.benefits", { returnObjects: true }) as string[],
      linkState: "Commercial Printing",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {t("services_page.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services_page.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-32">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon size={32} className="text-primary" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  {service.image && (
                    <div className="mb-8 rounded-xl overflow-hidden shadow-xl border border-border/50 aspect-video lg:hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                  )}

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-primary block"></span> {t("services_page.process")}
                      </h3>
                      <ol className="space-y-3">
                        {Array.isArray(service.process) && service.process.map((step, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-3">
                            <span className="text-primary font-bold min-w-[20px]">{j + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-primary block"></span> {t("services_page.benefits")}
                      </h3>
                      <ul className="space-y-3">
                        {Array.isArray(service.benefits) && service.benefits.map((b, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-3">
                            <span className="text-primary font-bold">✓</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button asChild size="lg" className="mt-2">
                    <Link to="/contact" state={{ service: service.linkState }}>{t("services_page.get_quote")}</Link>
                  </Button>
                </div>

                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} hidden lg:block`}>
                  {service.image ? (
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-[4/5] relative group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ) : (
                    <div className="bg-secondary/50 rounded-2xl p-12 h-full flex flex-col justify-center items-center text-center aspect-[4/5] border border-border/50">
                      <service.icon size={80} className="text-primary/20 mb-6" />
                      <h3 className="text-2xl font-bold text-muted-foreground/40">Premium {service.title}</h3>
                    </div>
                  )}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
