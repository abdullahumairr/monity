import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full px-4 pt-16 pb-0 flex flex-col items-center text-center">
      {/* ── Headline ── */}
      <h1 className="max-w-2xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
        Cara Baru Mengelola
        <br />
        Uang dengan Lebih Sadar
      </h1>

      {/* ── Subheadline ── */}
      <p className="mt-4 text-sm md:text-base text-[#6B6B6B] max-w-sm leading-relaxed">
        Setiap rupiah tercatat, setiap keputusan lebih bijak.
      </p>

      {/* ── CTA Buttons ── */}
      <div className="mt-6 flex items-center gap-3 flex-wrap justify-center">
        <Link
          href="/demo"
          className="rounded-full bg-[#F29D27] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Coba Sekarang
        </Link>
        <Link
          href="#cara-kerja"
          className="rounded-full border border-[#E0D5C8] bg-white px-6 py-2.5 text-sm font-semibold text-[#1A1A1A] hover:bg-[#F5F0E8] transition-colors"
        >
          Lihat Cara Kerja
        </Link>
      </div>

      {/* ── Tablet Mockup + Floating Icons ── */}
      <div className="relative mt-12 w-full max-w-3xl mx-auto">
        {/* Floating icon — top right */}
        <div className="absolute -top-4 right-[6%] z-10 w-12 h-12 md:w-14 md:h-14">
          <Image
            src="/hero/icon-chart.png"
            alt=""
            fill
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* Floating icon — middle right */}
        <div className="absolute top-[40%] -right-4 z-10 w-12 h-12 md:w-14 md:h-14">
          <Image
            src="/hero/icon-wallet.png"
            alt=""
            fill
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* Floating icon — bottom left */}
        <div className="absolute bottom-[10%] -left-4 z-10 w-12 h-12 md:w-14 md:h-14">
          <Image
            src="/hero/icon-analytics.png"
            alt=""
            fill
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* Dashed curved lines between icons */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 700 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M 630 30 C 660 100, 670 200, 660 240"
            stroke="#F29D27"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            strokeLinecap="round"
          />
          <path
            d="M 650 260 C 600 350, 200 400, 30 420"
            stroke="#F29D27"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            strokeLinecap="round"
          />
        </svg>

        {/* Tablet image */}
        <Image
          src="/hero/full-tab.png"
          alt="Monify App Preview"
          width={900}
          height={640}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
