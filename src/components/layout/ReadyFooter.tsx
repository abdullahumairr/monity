import Image from "next/image";
import Link from "next/link";

export default function ReadyFooter() {
  return (
    <section className="mt-auto w-full px-8 pt-32 md:pt-36 lg:pt-40">
      <div className="mx-auto container flex max-w-4xl flex-col items-center text-center">
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
          href="/error"
          className="rounded-full bg-[#F29D27] px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Coba Sekarang
        </Link>
      </div>
    </section>
  );
}
