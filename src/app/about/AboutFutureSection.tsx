"use client";

import Image from "next/image";

export default function AboutFutureSection() {
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
                src="/about/3.svg"
                alt="future vision"
                width={420}
                height={320}
                className="w-full max-w-44 md:max-w-64 lg:max-w-sm h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Masa Depan
            <br />
            Finansial Mandiri
          </h1>

          <p className="mt-4 text-lg leading-relaxed">
            Kami berdedikasi penuh untuk membangun sebuah ekosistem digital yang
            memungkinkan setiap individu memiliki kendali mutlak atas
            kesejahteraan mereka. Fokus kami adalah menghilangkan kecemasan
            finansial melalui transparansi data yang mendalam, sehingga Anda
            dapat merencanakan masa depan dengan rasa aman dan penuh percaya
            diri.
          </p>
        </div>
      </div>
    </section>
  );
}
