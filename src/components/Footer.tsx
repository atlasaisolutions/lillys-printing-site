import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              Lilly's <span className="text-primary">Printing</span>
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Enterprise-level printing solutions delivered with precision and professionalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: t("nav.home"), path: "/" },
                { name: t("nav.services"), path: "/services" },
                { name: t("nav.about"), path: "/about" },
                { name: t("nav.portfolio"), path: "/portfolio" },
                { name: t("nav.contact"), path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{t("footer.services")}</h4>
            <div className="space-y-2">
              {[
                t("services.wraps"),
                t("services.apparel"),
                t("services.digital"),
                t("services.print"),
              ].map((s) => (
                <p key={s} className="text-sm text-background/70">
                  {s}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>info@lillysprinting.com</p>
              <p>(443) 454-2210</p>
              <p>{t("footer.hours")}</p>
              <p>{t("footer.hours_sat")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {new Date().getFullYear()} Lilly's Printing. All rights reserved.</p>

          <a
            href="https://atlasservice.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
          >
            <span className="text-xs uppercase tracking-wider font-medium">Powered & Optimized by</span>
            <span className="font-heading font-bold text-lg text-background">Atlas.</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
