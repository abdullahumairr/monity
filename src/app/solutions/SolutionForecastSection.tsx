"use client";

import Image from "next/image";

export default function SolutionForecastSection() {
  return (
    <section className="w-full px-8 pt-32 md:pt-36 lg:pt-40">
      <div className="mx-auto grid container items-center gap-10 md:grid-cols-2">
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
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
                src="/solutions/4.svg"
                alt="forecast"
                width={320}
                height={240}
                className="w-full max-w-36 md:max-w-72 lg:max-w-xs h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Proyeksi Masa
            <br />
            Depan Akurat
          </h1>

          <p className="mt-4 text-lg leading-relaxed">
            Bukan sekadar melihat ke belakang, Monify membantu Anda memprediksi
            kondisi finansial di masa depan. Atur target tabungan otomatis dan
            biarkan sistem cerdas kami memandu Anda mencapainya lebih cepat.
          </p>
        </div>

      </div>
    </section>
  );
}