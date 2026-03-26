import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex w-full mx-auto container flex-col items-center px-8 md:px-0 pt-40 text-center md:pt-48 lg:pt-52 ">
      <h1 className=" font-bold tracking-tight text-[#1A1A1A] text-4xl sm:text-5xl md:text-6xl">
        Cara Baru Mengelola
        <br />
        Uang dengan Lebih Sadar
      </h1>

      <p className="mt-4 text-lg leading-relaxed">
        Setiap rupiah tercatat, setiap keputusan lebih bijak.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/demo"
          className="rounded-full bg-[#F29D27] px-6 py-2.5 text-lg font-semibold text-white transition-opacity hover:opacity-90"
        >
          Coba Sekarang
        </Link>
        <Link
          href="#   monitor-section"
          className="rounded-full border border-[#E0D5C8] bg-white px-6 py-2.5 text-lg font-semibold text-[#1A1A1A] transition-colors hover:bg-[#F5EDE0]"
        >
          Lihat Cara Kerja
        </Link>
      </div>

      <div className="mt-10 w-full ">
        <Image
          src="/home/hero/full-tab.svg"
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