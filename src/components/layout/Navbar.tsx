"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path: string) => pathname === path;

  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    topOpen: { rotate: 45, y: 8 },
    bottomOpen: { rotate: -45, y: -8 },
    middleOpen: { opacity: 0, x: -10 },
  };

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang" },
    { name: "Solusi", path: "/solusi" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4">
      <nav className="w-full max-w-5xl h-17.5 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-between px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 relative">
        <Link href="/" className="flex items-center">
          <Image
            src="/navbar/yellow-logo.svg"
            alt="Monify"
            width={100}
            height={96}
            className="mx-auto"
          />
        </Link>

        <div className="hidden sm:flex items-center space-x-7">
          {menuItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.path}
                className={`text-sm transition-colors ${
                  isActive(item.path)
                    ? "text-black font-bold border-b-2 border-orange-400 pb-0.5"
                    : "text-gray-500 hover:text-orange-500 font-medium"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex sm:hidden items-center justify-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-white/50 transition-colors hover:bg-orange-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.span
              variants={lineVariants}
              animate={isOpen ? "topOpen" : "closed"}
              className="block h-0.5 w-6 rounded-full bg-slate-800 origin-center"
            />
            <motion.span
              variants={lineVariants}
              animate={isOpen ? "middleOpen" : "closed"}
              className="block h-0.5 w-6 rounded-full bg-slate-800"
            />
            <motion.span
              variants={lineVariants}
              animate={isOpen ? "bottomOpen" : "closed"}
              className="block h-0.5 w-6 rounded-full bg-slate-800 origin-center"
            />
          </motion.button>
        </div>

        <motion.div
          className="hidden sm:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/demo"
            className="bg-[#FFAC33] hover:bg-[#f09615] text-white px-7 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center justify-center"
          >
            Demo
          </Link>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-20 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4 sm:hidden z-40"
            >
              {menuItems.map((item) => (
                <motion.div key={item.path} whileHover={{ x: 5 }}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-orange-500 font-bold"
                        : "text-slate-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <hr className="border-gray-50 my-1" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/demo"
                  onClick={() => setIsOpen(false)}
                  className="w-full block bg-[#FFAC33] text-white py-3 rounded-xl font-bold text-center"
                >
                  Coba Demo Gratis
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
