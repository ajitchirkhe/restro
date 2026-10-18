import React from "react";
import Animated from "./Animated";
import { quickLinks, sitemapLinks, socialLinks } from "../data/data";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="relative mt-44 overflow-hidden px-4">
        <div className="mx-auto max-w-7xl">
          {/* Row */}
          <div className="flex flex-wrap justify-between gap-6 pb-8">
            {/* Column 1 - Brand & Socials */}
            <div className="flex flex-col items-start text-left">
              <Animated>
                <img src="/assets/logo.svg" alt="logo" />
              </Animated>

              <Animated delay={0.2}>
                <p className="mt-3 max-w-81.25 text-sm/5.5 text-zinc-600">
                  serving freshly prepared dishes with authentic flavors,
                  premium ingredients and exceptional hopitality every day.
                </p>
              </Animated>

              <div className="mt-6 flex items-center gap-1.5">
                {socialLinks.map((item, index) => (
                  <Animated key={index} delay={index * 0.05}>
                    <a
                      href={item.href}
                      aria-label={item.name || "Social media"}
                      className="grid size-7.5 place-content-center rounded-full border border-slate-300"
                    >
                      {item.icon}
                    </a>
                  </Animated>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <p className="mb-5 font-medium">Quick Links</p>

              <div className="flex flex-col gap-2.5">
                {quickLinks.map((link, index) => (
                  <Animated key={link.name} delay={index * 0.05}>
                    <a
                      href={link.href}
                      className="text-zinc-600 hover:text-zinc-500"
                    >
                      {link.name}
                    </a>
                  </Animated>
                ))}
              </div>
            </div>

            {/* Column 3 - Get in Touch */}
            <div>
              <p className="mb-5 font-medium">Get in Touch</p>

              <div className="space-y-2">
                <Animated>
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                  >
                    <Mail size={16} className="shrink-0" />
                    hello@example.com
                  </a>
                </Animated>

                <Animated delay={0.2}>
                  <a
                    href="tel:123-456-7890"
                    className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                  >
                    <Phone size={16} className="shrink-0" />
                    123-456-7890
                  </a>
                </Animated>
              </div>
            </div>

            {/* Column 4 - Sitemap */}
            <div>
              <p className="mb-5 font-medium">Sitemap</p>

              <div className="flex flex-col gap-2.5">
                {sitemapLinks.map((link, index) => (
                  <Animated key={link.name} delay={index * 0.05}>
                    <a
                      href={link.href}
                      className="text-zinc-600 hover:text-zinc-500"
                    >
                      {link.name}
                    </a>
                  </Animated>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-200 py-4.5 text-zinc-500 sm:flex-row">
            <p>2026. All Right Reserved.</p>

            <p>
              Designed by{" "}
              <a
                href="https://greatstack.dev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-500"
              >
                GreatStack
              </a>
            </p>
          </div>
        </div>
        {/* Watermark Logo backdrop  */}
        <div className="absolute inset-0 text select-none -z-1 pointer-events-none">
                  <span className="text-[300px] tracking-wide font-urbanist font-semibold text-zinc-100/70">
                    Restro 
                  </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
