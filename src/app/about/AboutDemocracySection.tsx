"use client";

import Image from "next/image";

export default function AboutDemocracySection() {
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
                src="/about/4.svg"
                alt="democracy asset"
                width={260}
                height={220}
                className="w-full max-w-44 md:max-w-64 lg:max-w-sm h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="order-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1C0606]  leading-tight">
            Demokratisasi
            <br />
            Manajemen Aset Digital
          </h1>

          <p className="mt-4 text-sm text-[#1C0606]/60 md:text-base leading-relaxed">
            Melalui penggabungan teknologi cerdas dan desain yang inklusif, misi kami
            adalah menyediakan alat manajemen keuangan tercanggih yang dapat diakses
            oleh siapa saja. Kami berkomitmen untuk menyederhanakan proses menabung,
            memantau pengeluaran, hingga berinvestasi agar menjadi aktivitas harian
            yang menyenangkan dan memberdayakan.
          </p>
        </div>

      </div>
    </section>
  );
}