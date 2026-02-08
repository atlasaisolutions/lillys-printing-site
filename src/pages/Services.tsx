import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { Printer, Shirt, CarFront, Monitor } from "lucide-react";

const services = [
  {
    icon: CarFront,
    title: "Vehicle Wraps & Graphics",
    image: "/service-wrap.png",
    description:
      "Turn your company vehicles into powerful mobile billboards. Our premium vinyl wraps offering vibrant colors and durable protection while generating thousands of daily impressions.",
    process: [
      "Vehicle Measurement & Template Design",
      "Custom Graphic Design & Approval",
      "High-Resolution Vinyl Printing",
      "Professional Installation",
    ],
    benefits: [
      "24/7 Mobile Advertising",
      "Protects Original Paint",
      "Cost-Effective Marketing",
      "5-7 Year Durability",
    ],
  },
  {
    icon: Monitor,
    title: "Digital Business Solutions",
    image: "/service-digital.png",
    description:
      "We don't just print; we build brands online. From responsive websites to social media management, we help you connect with customers in the digital space.",
    process: [
      "Digital Strategy Discovery",
      "UX/UI Design & Prototyping",
      "Development & Optimization",
      "Launch & Ongoing Management",
    ],
    benefits: [
      "Mobile-Responsive Websites",
      "SEO-Optimized Content",
      "Unified Brand Identity",
      "Social Media Growth",
    ],
  },
  {
    icon: Shirt,
    title: "Apparel & Merchandise",
    image: null,
    description:
      "Outfit your team in style with custom embroidered uniforms and screen-printed promotional gear. We source high-quality garments that look great and last long.",
    process: [
      "Garment Selection & Sizing",
      "Logo Digitization or Screen Setup",
      "Production & Quality Control",
      "Folding & Packaging",
    ],
    benefits: [
      "Premium Brands (Nike, Port Authority, etc.)",
      "Durable Embroidery & Prints",
      "Bulk Pricing Available",
      "Fast Turnaround",
    ],
  },
  {
    icon: Printer,
    title: "Print Marketing",
    image: null,
    description:
      "From business cards to large-scale banners, our commercial printing services ensure your physical marketing materials reflect the quality of your business.",
    process: [
      "File Review & Pre-Press",
      "Proof Approval",
      "Precision Printing",
      "Finishing (Cut, Fold, Bind)",
    ],
    benefits: [
      "High-Quality Paper Stocks",
      "Vibrant Color Reproduction",
      "Same-Day Rush Options",
      "Direct Mail Services",
    ],
  },
];

const Services = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive printing solutions engineered for businesses that demand
              excellence.
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
                        <span className="w-8 h-[2px] bg-primary block"></span> Our Process
                      </h3>
                      <ol className="space-y-3">
                        {service.process.map((step, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-3">
                            <span className="text-primary font-bold min-w-[20px]">{j + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-primary block"></span> Benefits
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((b, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-3">
                            <span className="text-primary font-bold">✓</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button asChild size="lg" className="mt-2">
                    <Link to="/contact">Get a Quote</Link>
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
