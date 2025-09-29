"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-[var(--background)] shadow-md z-10">
      <ul className="flex justify-evenly items-center py-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="px-4 py-2 text-white transition-all hover:text-[var(--accent)] hover:underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
