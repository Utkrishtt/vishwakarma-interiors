import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_3kvwklu",
      "template_i9ceypg",
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        project_type: form.projectType,
        message: form.message,
        to_email: "utkrishtsharma1607@gmail.com",
      },
      "EIv8CDF_al67_DvJ9"
    )
    .then(() => {
      alert("Thank you for your inquiry! We will contact you soon.");
      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
      setLoading(false);
    })
    .catch(() => {
      alert("Something went wrong. Please try again later.");
      setLoading(false);
    });
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Let’s Design Something Timeless
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-background p-8 rounded-xl shadow border border-border"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="architectural">Architectural</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-accent text-background font-semibold rounded hover:bg-accent/90 transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-secondary leading-relaxed">
                Have a project in mind? We'd love to hear from you. Get in touch
                with us to discuss your interior design needs.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-border">
              <div>
                <h4 className="text-sm font-semibold text-accent mb-2 tracking-widest">
                  EMAIL
                </h4>
                <a
                  href="mailto:vishwakarma.interiors.7@gmail.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  vishwakarma.interiors.7@gmail.com
                  
                </a>
                <br />
                <a
                  href="mailto:raj9871569819@gmail.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  raj9871569819@gmail.com
                  
                </a>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent mb-2 tracking-widest">
                  PHONE
                </h4>
                <div className="space-y-2">
                  <a
                    href="tel:+919999772839"
                    className="block text-foreground hover:text-accent transition-colors"
                  >
                    +91 9999772839
                  </a>
                  <a
                    href="tel:+919871569819"
                    className="block text-foreground hover:text-accent transition-colors"
                  >
                    +91 9871569819
                  </a>
                  <a
                    href="tel:+918470802035"
                    className="block text-foreground hover:text-accent transition-colors"
                  >
                    +91 8470802035
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent mb-2 tracking-widest">
                  OFFICE ADDRESS
                </h4>
                <p className="text-foreground">
                  K-665, Nawada Industrial Area
                  <br />
                  Uttam Nagar, New Delhi-110059
                </p>
              </div>

              <div>
                {/* Google Map Embed */}
                <div className="rounded-lg overflow-hidden border border-border shadow mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13754.066839687732!2d77.02604875463662!3d28.61891531075132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050009a6eb3b%3A0x4b1416755290db06!2sVishwakarma%20Interior%20%26%20Decorators!5e1!3m2!1sen!2sin!4v1769538393547!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vishwakarma Interior & Decorators Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
