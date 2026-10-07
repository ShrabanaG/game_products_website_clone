import FooterLogo from "../assets/icons/FooterLogo";

import { ChevronUp, Headphones, Mail } from "lucide-react";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const footerData = [
  {
    title: "Sharepal",
    links: ["About", "Why SharePal", "Sitemap", "CarePal"],
  },
  {
    title: "Become a Pal",
    links: [
      "Sharepal for Creators",
      "Careers",
      "Sharepal for Brands",
      "Asset Funding Program",
      "Rent Your Gear",
    ],
  },
  {
    title: "Information",
    links: [
      "How it works?",
      "FAQs",
      "Verification",
      "Cancellation Policy",
      "Life at Sharepal",
    ],
  },
  {
    title: "Policies",
    links: [
      "Terms & Condition",
      "Shipping policy",
      "Damage Policy",
      "Terms of Use",
      "Privacy Policy",
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#031042] p-3">
        <FooterLogo />
      </div>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 lg:px-6">
        {/* Normal columns */}
        {footerData.map((column) => (
          <div key={column.title}>
            <h3 className="mb-8 text-left text-sm font-bold text-white">
              {column.title}
            </h3>

            <div className="flex flex-col items-start gap-7">
              {column.links.map((link) => (
                <a
                  href="#"
                  key={link}
                  className="text-[12px] font-medium text-[#9ba3b8] transition-colors hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Need Help */}
        <div>
          <h3 className="mb-8 text-left text-sm font-bold text-white">
            Need Help
          </h3>

          <div className="flex flex-col items-start gap-7">
            <a
              href="#"
              className="flex items-start justify-center gap-3 text-[12px] font-medium text-[#9ba3b8] transition-colors hover:text-white"
            >
              <Headphones size={18} strokeWidth={1.8} />

              <span>Contact Support</span>
            </a>

            <a
              href="#"
              className="text-[12px] font-medium text-[#9ba3b8] transition-colors hover:text-white"
            >
              Contact Us
            </a>

            <a
              href="mailto:care@sharepal.in"
              className="flex items-start gap-3 text-[12px] font-medium text-[#9ba3b8] transition-colors hover:text-white"
            >
              <Mail size={18} strokeWidth={1.8} />

              <span>care@sharepal.in</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-start gap-6 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#9ba3b8] transition-colors hover:text-white"
              >
                <FaFacebookSquare
                  size={24}
                  fill="currentColor"
                  strokeWidth={0}
                />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-[#9ba3b8] transition-colors hover:text-white"
              >
                <FaInstagramSquare size={24} strokeWidth={3} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#9ba3b8] transition-colors hover:text-white"
              >
                <FaLinkedin size={24} fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#758fe5] mx-4 mt-10 mb-4" />
      <div className="w-full text-[#758fe5] flex items-start justify-between">
        <button
          className="flex flex-row gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-sm font-bold">Go Up</span>
          <span>
            <ChevronUp />
          </span>
        </button>
        <p>© 2026. SWNAC E-Kiraya Services Pvt Ltd</p>
        <p>Made with ♥️ for India</p>
      </div>
    </>
  );
};

export default Footer;
