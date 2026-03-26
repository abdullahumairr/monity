"use client";

import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="w-full px-8 pt-40  md:pt-48 lg:pt-52 ">
      <div className="mx-auto grid container items-center gap-10 md:grid-cols-2">
        <div className="text-center md:text-start flex flex-col gap-4 justify-center items-center md:items-start ">
          <h1 className=" font-bold leading-tight text-4xl sm:text-5xl md:text-6xl">
            Membangun Fondasi
            <br />  
            Finansial yang Kokoh
          </h1>

          <p className="text-lg   ">
            Monity hadir untuk mendefinisikan ulang cara Anda melihat,
            mengelola, dan menumbuhkan aset setiap hari.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div
            className="
      relative
      w-full max-w-180
      aspect-16/10
      md:h-105 md:aspect-auto
      rounded-2xl
      border-8 border-white/80
      bg-white
      p-1.5
      shadow-[0_25px_60px_rgba(0,0,0,0.12)]
    "
          >
            <Image
              src="/about/hero.png"
              alt="about hero"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
