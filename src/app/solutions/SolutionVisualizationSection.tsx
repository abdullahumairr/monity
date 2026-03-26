"use client";

import Image from "next/image";

export default function SolutionVisualizationSection() {
  return (
    <section className="w-full px-8 pt-32 md:pt-36 lg:pt-40">
      <div className="mx-auto grid container items-center gap-10 md:grid-cols-2">
        <div className="order-1 flex justify-center md:justify-start">
          <div
            className="
              relative
              w-full max-w-185
              aspect-740/481
              md:h-110.25 md:aspect-auto
              lg:h-120.25 lg:aspect-auto
              rounded-2xl bg-[#ede7e39f] 
              shadow-sm
            "
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/solutions/3.svg"
                alt="visualization"
                width={320}
                height={240}
                className="w-full max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="order-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Visualisasi Data
            <br />
            Paling Intuitif
          </h2>

          <p className="mt-4 text-lg leading-relaxed">
            Kami mengubah angka-angka rumit menjadi narasi visual yang mudah
            dipahami. Lihat ke mana uang Anda pergi melalui grafik interaktif
            yang membantu Anda mengambil keputusan lebih bijak setiap hari.
          </p>
        </div>
      </div>
    </section>
  );
}
