import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex w-full mx-auto container flex-col items-center px-6 md:px-0 pt-40 text-center md:pt-48 lg:pt-52 ">
      {/* ── Headline ── */}
      <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl">
        Cara Baru Mengelola
        <br />
        Uang dengan Lebih Sadar
      </h1>

      {/* ── Subheadline ── */}
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
        Setiap rupiah tercatat, setiap keputusan lebih bijak.
      </p>

      {/* ── CTA Buttons ── */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/demo"
          className="rounded-full bg-[#F29D27] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Coba Sekarang
        </Link>
        <Link
          href="#how-it-works"
          className="rounded-full border border-[#E0D5C8] bg-white px-6 py-2.5 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#F5EDE0]"
        >
          Lihat Cara Kerja
        </Link>
      </div>

      {/* ── Tablet Image ── */}
      <div className="mt-10 w-full ">
        <Image
          src="/hero/full-tab.svg"
          alt="Monify App Preview"
          width={900}
          height={200}
          className="w-full object-contain drop-shadow-xl"
          priority
        />
      </div>
    </section>
  );
}