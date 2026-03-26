"use client";

import Image from "next/image";

export default function SolutionAutomationSection() {
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
                src="/solutions/2.svg"
                alt="automation"
                width={320}
                height={240}
                className="w-full max-w-56 md:max-w-64 lg:max-w-sm h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Automasi Finansial
            <br />
            Tanpa Batas
          </h2>

          <p className="mt-4 text-lg  leading-relaxed">
            Lupakan pencatatan manual yang melelahkan. Monity menghubungkan
            seluruh aset Anda secara real-time, memastikan setiap transaksi
            tercatat dengan presisi standar perbankan tanpa satu pun yang
            terlewat.
          </p>
        </div>
      </div>
    </section>
  );
}
