import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-black text-white">
      <div className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-12 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 sm:gap-3"
            >
              {/* Logo */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white sm:h-11 sm:w-11 sm:rounded-xl">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:h-[27px] sm:w-[27px]"
                >
                  <path
                    d="M4 4H20V7H14V20H10V7H4V4Z"
                    fill="black"
                  />

                  <path
                    d="M17 10H20"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M17 14H19"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="20"
                    cy="10"
                    r="1"
                    fill="#f97316"
                  />

                  <circle
                    cx="19"
                    cy="14"
                    r="1"
                    fill="#f97316"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-sm font-extrabold tracking-tight sm:text-lg">
                  TECH
                  <span className="text-orange-500">
                    STORE
                  </span>
                </h2>

                <p className="text-[7px] font-medium uppercase tracking-[0.15em] text-gray-500 sm:text-[9px] sm:tracking-[0.2em]">
                  Smart Shopping
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-[11px] leading-5 text-gray-400 sm:mt-5 sm:text-sm sm:leading-6">
              Discover quality tech products at great
              prices. Simple shopping, trusted products,
              and a better shopping experience.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:h-9 sm:w-9"
              >
                <FaFacebookF size={11} className="sm:hidden" />
                <FaFacebookF size={14} className="hidden sm:block" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:h-9 sm:w-9"
              >
                <FaInstagram size={13} className="sm:hidden" />
                <FaInstagram size={16} className="hidden sm:block" />
              </a>

              {/* X */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:h-9 sm:w-9"
              >
                <FaXTwitter size={11} className="sm:hidden" />
                <FaXTwitter size={14} className="hidden sm:block" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:h-9 sm:w-9"
              >
                <FaYoutube size={13} className="sm:hidden" />
                <FaYoutube size={17} className="hidden sm:block" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white sm:mb-5 sm:text-sm">
              Quick Links
            </h3>

            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition hover:text-orange-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="text-gray-400 transition hover:text-orange-500"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/wishlist"
                  className="text-gray-400 transition hover:text-orange-500"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="text-gray-400 transition hover:text-orange-500"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white sm:mb-5 sm:text-sm">
              Categories
            </h3>

            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
              <li>
                <Link
                  href="/products?category=smartphones"
                  className="text-gray-400 transition hover:text-orange-500"
                >
                  Smartphones
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=laptops"
                  className="text-gray-400 transition hover:text-orange-500"
                >
                  Laptops
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=tablets"
                  className="text-gray-400 transition hover:text-orange-500"
                >
                  Tablets
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=accessories"
                  className="text-gray-400 transition hover:text-orange-500"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white sm:mb-5 sm:text-sm">
              Stay Updated
            </h3>

            <p className="mb-3 text-[11px] leading-5 text-gray-400 sm:mb-4 sm:text-sm sm:leading-6">
              Get the latest products, offers and tech
              updates directly in your inbox.
            </p>

            <div className="flex overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 w-full flex-1 bg-transparent px-2 py-2 text-[10px] text-white outline-none placeholder:text-gray-600 sm:px-3 sm:py-3 sm:text-sm"
              />

              <button
                type="button"
                className="shrink-0 bg-orange-500 px-2 text-[10px] font-semibold text-white transition hover:bg-orange-600 sm:px-4 sm:text-sm"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-gray-800 sm:my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-3 text-center text-[10px] text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-xs sm:text-left">

          <p>
            © {new Date().getFullYear()} TECHSTORE.
            All rights reserved.
          </p>

          <div className="flex justify-center gap-4 sm:justify-end sm:gap-5">
            <Link
              href="/privacy"
              className="transition hover:text-orange-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-orange-500"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;