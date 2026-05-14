"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2, Globe, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-xl font-bold text-[#ededed]">
          david<span className="text-zinc-500">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-1 py-2 transition-colors hover:text-[#ededed] ${
                  isActive ? "text-[#ededed]" : "text-zinc-400"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-[#ededed]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-4 text-zinc-400">
          <Link href="https://github.com" target="_blank" className="hover:text-[#ededed] transition-colors">
            <Code2 className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-[#ededed] transition-colors">
            <Globe className="w-5 h-5" />
          </Link>
          <Link href="mailto:david@example.com" className="hover:text-[#ededed] transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-[#ededed] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-[#0a0a0a] border-b border-white/10 px-6 py-4 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium ${
                pathname === link.path ? "text-[#ededed]" : "text-zinc-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-zinc-400">
            <Link href="https://github.com" target="_blank">
              <Code2 className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Globe className="w-6 h-6" />
            </Link>
            <Link href="mailto:david@example.com">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
