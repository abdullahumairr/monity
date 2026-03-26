"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

export default function OptimizeSection() {
  const features = [
    {
      title: "Setiap Rupiah Teratur",
      desc: "Alokasikan budget agar pengeluaran selalu terjaga.",
    },
    {
      title: "Efisiensi Aktivitas",
      desc: "Hemat waktu dengan kalkulasi otomatis yang presisi.",
    },
    {
      title: "Kontrol Nyata",
      desc: "Peringatan dini saat pengeluaran mendekati batas limit.",
    },
    {
      title: "Target Masa Depan",
      desc: "Pantau progres tabungan mimpi dari dasbor utama.",
    },
  ];

  return (
    <section className="w-full px-8 pt-32 md:pt-36 lg:pt-40">
      <div className="mx-auto grid container items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-bold text-[#1C0606]sm:text-5xl md:text-6xl">
            Kelola & Optimalkan
          </h1>

          <p className="mt-3 text-lg text-[#1C0606]/60 ">
            Ambil kendali penuh dengan fitur manajemen anggaran yang fleksibel
            dan berbasis data akurat.
          </p>

          <ul className="mt-6 space-y-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 text-[#FFA930]">
                  <FiCheckCircle size={18} />
                </span>

                <div>
                  <h3 className="text-lg font-semibold ">
                    {item.title}
                  </h3>
                  <p className="text-lg text-[#1C0606]/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
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
                src="/home/optimize/optimize.svg"
                alt="money grafik"
                width={420}
                height={320}
                className="w-full max-w-md sm:max-w-lg md:max-w-xl  h-auto object-contain pt-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
