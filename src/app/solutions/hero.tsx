import Image from "next/image";

export default function SolutionsHero() {
  return (
    <section className="flex w-full flex-col items-center px-8 pt-40  md:pt-48 lg:pt-52">
      <div className="relative mb-10 flex items-center justify-center gap-0">
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFA930] shadow-md md:h-16 md:w-16">
          <Image
            src="/solutions/hero-left.svg"
            alt="Bank"
            width={28}
            height={28}
            className="h-14 w-14 md:h-16 md:w-16"
          />
        </div>

        <DashedLine />

        <div className="relative z-10 -mx-1 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#FFA930] shadow-lg md:h-24 md:w-24"
          style={{ boxShadow: "0 8px 32px rgba(242,127,39,0.35)" }}
        >
          <Image
            src="/solutions/hero-center.svg"
            alt="Monify"
            width={32}
            height={32}
            className="h-20 w-20 md:h-24 md:w-24"
          />
        </div>

        <DashedLine />

        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFA930] shadow-md md:h-16 md:w-16">
          <Image
            src="/solutions/hero-right.svg"
            alt="Transfer"
            width={28}
            height={28}
            className="h-14 w-14 md:h-16 md:w-16"
          />
        </div>
      </div>

      <h1 className="tracking-tight text-4xl sm:text-5xl md:text-6xl font-bold text-center justify-center items-center md:items-start ">
        Eksplorasi Kedalaman
        <br />
        Ekosistem Monity.
      </h1>

      <p className="mt-4 md:max-w-xl text-lg leading-relaxed text-center justify-center items-center md:items-start ">
        Mari membedah bagaimana setiap komponen dalam Monify bekerja secara
        harmonis untuk mengubah cara Anda mengelola kekayaan.
      </p>
    </section>
  );
}

function DashedLine() {
  return (
    <div className="relative flex items-center" aria-hidden>
      <svg
        className="w-16 sm:w-24 md:w-32"
        height="4"
        viewBox="0 0 128 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="2"
          x2="128"
          y2="2"
          stroke="#C4A882"
          strokeWidth="2.5"
          strokeDasharray="8 7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}