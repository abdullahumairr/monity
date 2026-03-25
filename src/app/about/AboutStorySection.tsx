"use client";

import Image from "next/image";

export default function AboutStorySection() {
  return (
    <section className="w-full px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        
        {/* ── IMAGE ── */}
        <div className="order-1 flex justify-center md:justify-start">
          <div
            className="
              relative
              w-full max-w-[520px]
              aspect-[16/10]
              md:h-[320px] md:aspect-auto
              rounded-2xl
              bg-[#EDE7E3]
              p-4
              shadow-sm
            "
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/about/2.png"
                alt="about story"
                width={320}
                height={240}
                className="w-full max-w-[320px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="order-2">
          <h2 className="text-2xl font-semibold text-[#1C0606] md:text-4xl leading-tight">
            Lahir dari Kebutuhan
            <br />
            akan Kejelasan
          </h2>

          <p className="mt-4 text-sm text-[#1C0606]/60 md:text-base max-w-md leading-relaxed">
            Kami percaya bahwa setiap keputusan finansial dimulai dari pemahaman
            yang baik. Monify diciptakan untuk menyederhanakan kompleksitas dan
            memberikan transparansi penuh atas setiap arus uang Anda.
          </p>
        </div>

      </div>
    </section>
  );
}