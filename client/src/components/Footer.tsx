/**
 * Footer Component
 * Design: Luxury minimalist footer with contact information
 * - Company details and contact information
 * - Social links and quick navigation
 * - Gold accent dividers
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="container py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="Vishwakarma Interior & Decorators Logo"
                className="h-10 w-auto object-contain"
                style={{ maxWidth: 48 }}
              />
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              Architect & Interiors Design Consultant. Creating luxury spaces
              since 2000s.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-widest">
              CONTACT
            </h3>
            <div className="space-y-3 text-sm text-secondary">
              <div>
                <p className="font-medium text-foreground mb-1">Email</p>
                <a
                  href="mailto:vishwakarma.interiors.7@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  vishwakarma.interiors.7@gmail.com
          
                </a>
                <br />
                <a
                  href="mailto:raj9871569819@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  raj9871569819@gmail.com
          
                </a>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Phone</p>
                <div className="space-y-1">
                  <a
                    href="tel:+919999772839"
                    className="block hover:text-accent transition-colors"
                  >
                    +91 9999772839
                  </a>
                  <a
                    href="tel:+919871569819"
                    className="block hover:text-accent transition-colors"
                  >
                    +91 9871569819
                  </a>
                  <a
                    href="tel:+918470802035"
                    className="block hover:text-accent transition-colors"
                  >
                    +91 8470802035
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-widest">
              LOCATION
            </h3>
            <div className="rounded-lg overflow-hidden border border-border shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13754.066839687732!2d77.02604875463662!3d28.61891531075132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050009a6eb3b%3A0x4b1416755290db06!2sVishwakarma%20Interior%20%26%20Decorators!5e1!3m2!1sen!2sin!4v1769538393547!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vishwakarma Interior & Decorators Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-secondary">
          <p>&copy; {currentYear} Vishwakarma Interior & Decorators. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
