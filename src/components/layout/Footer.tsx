import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto w-full px-8 pt-32 md:pt-36 lg:pt-40">
      <div className="mx-auto container mb-32 md:mb-36 lg:mb-40 flex max-w-4xl flex-col items-center text-center">
        <div className="mb-5">
          <Image
            src="/footer/yellow-logo.svg"
            alt="Monify"
            width={48}
            height={32}
            className="mx-auto"
          />
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#1A1A1A]  sm:text-5xl md:text-6xl">
          Siap Pegang Kendali
          <br />
          Finansial Anda?
        </h1>

        <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
          Lihat bagaimana Monify mentransformasi cara Anda menabung dan
          bertumbuh setiap hari.
        </p>

        <Link
          href="/demo"
          className="rounded-full bg-[#F29D27] px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Coba Sekarang
        </Link>
      </div>

      <div className="mx-auto container rounded-t-3xl bg-[#1C0606] px-10 py-10   flex flex-col md:flex-row justify-between relative ">
        <div className="flex flex-col justify-between h-full space-y-12 md:space-y-0">
          <div className="flex items-center gap-2">
            <Image
              src="/footer/white-logo.svg"
              alt="Monity Logo"
              width={120}
              height={40}
            />
          </div>
          <p className="text-white text-sm font-light">
            © 2026 Monity. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-20 mt-10 md:mt-0">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm">Navigasi</h4>
            <div className="flex flex-col gap-2">
              {["Beranda", "Tentang", "Solusi", "Kontak"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm">Sosial Media</h4>
            <div className="flex flex-col gap-2">
              {["YouTube", "Facebook", "Instagram"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm">Demo</h4>
            <Link
              href="/demo"
              className="bg-white text-black px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all text-center"
            >
              Coba Sekarang
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
