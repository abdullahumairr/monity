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

export default function NotFound() {
  return (
    <div className="flex min-h-screen  flex-col ">
      <main
        className="relative flex flex-1 flex-col justify-end text-center overflow-hidden

    px-4
    pt-32 sm:pt-28 md:pt-36 lg:pt-44
    pb-0"
      >
        <span className="text-2xl md:text-[32px] text[#1C0606] font-semibold tracking-wide z-10     ">
          Halaman Tidak Ditemukan
        </span>

        <div className="relative leading-none">
          <span
            className="
        block font-bold
        translate-y-2 md:translate-y-5 lg:translate-y-10
      "
            style={{
              fontSize: "clamp(10rem, 30vw, 32rem)",
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
              background:
                "linear-gradient(to bottom, #1C0606 0%, rgba(28,6,6,0.25) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </span>
        </div>
      </main>

      <footer className="w-full px-8 ">
        <div className="mx-auto container rounded-t-3xl bg-[#1A1008] px-8 py-10 md:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="shrink-0 flex sm:justify-start justify-center">
              <Image
                src="/footer/white-logo.svg"
                alt="Monify"
                width={120}
                height={32}
              />
            </div>
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 md:gap-16 text-center sm:text-start   ">
              <div className="flex flex-col gap-2.5">
                <span className="mb-1 text-lg font-semibold text-white">
                  Navigasi
                </span>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-[#9E8C78] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="mb-1 text-lg font-semibold text-white">
                  Sosial Media
                </span>
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#9E8C78] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 text-center sm:text-start   ">
                <span className="mb-1 text-lg font-semibold text-white">
                  Demo
                </span>
                <Link
                  href="/error"
                  className="inline-block rounded-lg border border-[#3A2E22] bg-white px-5 py-2 text-lg font-medium text-black transition-colors hover:bg-[#9E8C78]"
                >
                  Coba Sekarang
                </Link>
              </div>
            </div>
          </div>

          <span className="mt-8 md:mt-0 text-lg text-[#9E8C78] flex sm:justify-start justify-center">
            © 2026 Monify. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
