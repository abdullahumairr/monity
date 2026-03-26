"use client";

import Image from "next/image";

export default function AboutFutureSection() {
  return (
    <section className="w-full px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
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
                src="/about/3.png"
                alt="future vision"
                width={420}
                height={320}
                className="w-full max-w-80 md:max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* ── TEXT ── */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-semibold text-[#1C0606] md:text-4xl leading-tight">
            Masa Depan
            <br />
            Finansial Mandiri
          </h2>

          <p className="mt-4 text-sm text-[#1C0606]/60 md:text-base max-w-md leading-relaxed">
            Kami berdedikasi penuh untuk membangun sebuah ekosistem digital yang
            memungkinkan setiap individu memiliki kendali mutlak atas keuangan
            mereka. Fokus kami adalah menghadirkan kecerdasan finansial melalui
            transparansi data yang mendalam, sehingga Anda dapat merencanakan
            masa depan dengan percaya diri.
          </p>
        </div>

      </div>
    </section>
  );
}