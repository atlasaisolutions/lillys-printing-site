import { Link } from "react-router-dom";

const Footer = () => {
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
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
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
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              {[
                "Commercial Printing",
                "Corporate Apparel",
                "Large Format",
                "Rush Production",
              ].map((s) => (
                <p key={s} className="text-sm text-background/70">
                  {s}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>info@lillysprinting.com</p>
              <p>(555) 123-4567</p>
              <p>Mon–Fri: 8AM – 6PM</p>
              <p>Sat: 9AM – 2PM</p>
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
