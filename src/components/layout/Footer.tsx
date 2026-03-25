import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Solusi", href: "/solutions" },
  { label: "Kontak", href: "/contact" },
];

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full  pt-32 md:pt-36 lg:pt-52 ">
      <div className="mx-auto container mb-44 flex max-w-4xl flex-col items-center text-center">
        <div className="mb-5">
          <Image
            src="/footer/yellow-logo.svg"
            alt="Monify"
            width={48}
            height={32}
            className="mx-auto"
          />
        </div>

        <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#1A1A1A]  sm:text-5xl md:text-6xl">
          Siap Pegang Kendali
          <br />
          Finansial Anda?
        </h2>

        <p className="mb-8 max-w-sm text-sm leading-relaxed text-[#6B6B6B]">
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

      <div className="mx-auto container rounded-t-3xl bg-[#1A1008] px-10 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col justify-between gap-16 md:gap-24">
            <Image
              src="/footer/white-logo.svg"
              alt="Monify"
              width={120}
              height={32}
            />
            <p className="text-xs text-[#6B5E4E]">
              © 2026 Monify. All rights reserved.
            </p>
          </div>

          <div className="flex gap-16 md:gap-20">
            <div className="flex flex-col gap-3">
              <span className="mb-1 text-sm font-semibold text-white">
                Navigasi
              </span>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#9E8C78] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="mb-1 text-sm font-semibold text-white">
                Sosial Media
              </span>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#9E8C78] transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Demo */}
            <div className="flex flex-col gap-3">
              <span className="mb-1 text-sm font-semibold text-white">
                Demo
              </span>
              <Link
                href="/demo"
                className="rounded-lg border border-[#3A2E22] bg-[#2A1F14] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3A2E22]"
              >
                Coba Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
