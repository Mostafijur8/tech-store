"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-bold text-white transition-transform duration-200 group-hover:scale-105">
            T
          </div>

          <div className="hidden sm:block">
            <h1 className="text-base font-extrabold tracking-tight text-gray-900">
              TECH<span className="text-indigo-600">STORE</span>
            </h1>

            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-gray-400">
              Smart shopping
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 p-1">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive("/")
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:bg-white hover:text-black"
            }`}
          >
            Home
          </Link>

          <Link
            href="/products"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive("/products")
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:bg-white hover:text-black"
            }`}
          >
            Products
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Wishlist */}
          <Link
            href="/wishlist"
            className={`group relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 ${
              isActive("/wishlist")
                ? "border-black bg-black text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-black"
            }`}
            aria-label="Wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
              />
            </svg>

            {/* Count - Context পরে এখানে আসবে */}
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[9px] font-bold text-white">
              0
            </span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className={`group relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 ${
              isActive("/cart")
                ? "border-black bg-black text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-black"
            }`}
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 7H6"
              />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            {/* Count - Context পরে এখানে আসবে */}
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[9px] font-bold text-white">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;