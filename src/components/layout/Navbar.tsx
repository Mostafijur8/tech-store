
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShop } from "@/hooks/useShop";

const Navbar = () => {
  const pathname = usePathname();
  const { wishlist, cart } = useShop();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          {/* SVG Logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black transition-transform duration-200 group-hover:scale-105">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* T shape */}
              <path d="M4 4H20V7H14V20H10V7H4V4Z" fill="white" />

              {/* Tech circuit detail */}
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

              <circle cx="20" cy="10" r="1" fill="#f97316" />

              <circle cx="19" cy="14" r="1" fill="#f97316" />
            </svg>
          </div>

          {/* Brand Name */}
          <div className="hidden sm:block">
            <h1 className="text-base font-extrabold tracking-tight text-gray-900">
              TECH<span className="text-orange-500">STORE</span>
            </h1>

            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-gray-400">
              Smart Shopping
            </p>
          </div>
        </Link>

        {/* Main Navigation */}
        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 p-1">
          {/* Home */}
          <Link
            href="/"
            className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 sm:px-4 ${
              isActive("/")
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:bg-white hover:text-black"
            }`}
          >
            Home
          </Link>

          {/* Products */}
          <Link
            href="/products"
            className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 sm:px-4 ${
              isActive("/products")
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:bg-white hover:text-black"
            }`}
          >
            Products
          </Link>
        </div>

        {/* Wishlist + Cart */}
        <div className="flex items-center gap-2">
          {/* Wishlist */}
          <Link
            href="/wishlist"
            className={`relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 ${
              isActive("/wishlist")
                ? "bg-orange-500 text-white"
                : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            }`}
          >
            {/* Heart SVG */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.61C20.55 4.32 20.2 4.09 19.81 3.93C19.42 3.77 19 3.69 18.58 3.69C18.16 3.69 17.74 3.77 17.35 3.93C16.96 4.09 16.61 4.32 16.32 4.61L12 8.93L7.68 4.61C7.09 4.02 6.29 3.69 5.45 3.69C4.61 3.69 3.81 4.02 3.22 4.61C2.63 5.2 2.3 6 2.3 6.84C2.3 7.68 2.63 8.48 3.22 9.07L12 17.85L20.78 9.07C21.37 8.48 21.7 7.68 21.7 6.84C21.7 6 21.43 5.2 20.84 4.61Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="hidden sm:inline">Wishlist</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
              {wishlist.length}
            </span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className={`relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 ${
              isActive("/cart")
                ? "bg-orange-500 text-white"
                : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            }`}
          >
            {/* Cart SVG */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L7.4 15.4C7.5 15.9 7.94 16.25 8.45 16.25H18.55C19.06 16.25 19.5 15.9 19.6 15.4L21 8H6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="9" cy="20" r="1.5" fill="currentColor" />

              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>

            <span className="hidden sm:inline">Cart</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-500 px-1 text-[10px] font-bold text-white">
              {cart.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
