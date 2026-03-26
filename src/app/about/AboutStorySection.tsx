"use client";

import Image from "next/image";

export default function AboutStorySection() {
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
            <div className="absolute inset-0 flex items-center justify-center mx-0 md:mx-4 lg:mx-4">
              <Image
                src="/about/2.svg"
                alt="about story"
                width={420}
                height={320}
                className="w-full max-w-64 sm:max-w-80 md:max-w-lg  h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="order-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Lahir dari Kebutuhan
            <br />
            akan Kejelasan
          </h1>

          <p className="mt-4 text-lg leading-relaxed">
            Kami percaya bahwa setiap rupiah memiliki cerita. Monity diciptakan
            untuk menghilangkan kebingungan finansial dan memberikan
            transparansi penuh atas setiap keputusan yang Anda ambil demi masa
            depan.
          </p>
        </div>
      </div>
    </section>
  );
}
