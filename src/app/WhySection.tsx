"use client";

import { PiHandEye, PiStrategy } from "react-icons/pi";
import { FaCrosshairs } from "react-icons/fa";

export default function WhySection() {
  const items = [
    {
      icon: <FaCrosshairs size={40} />,
      title: "Presisi Tanpa Ribet",
      desc: "membantu mengategorikan transaksi Anda secara instan dan akurat.",
    },
    {
      icon: <PiHandEye size={40} />,
      title: "Transparansi Total",
      desc: "Lihat ke mana setiap sen mengalir. Tidak ada lagi 'biaya siluman' atau langganan terlupakan",
    },
    {
      icon: <PiStrategy size={40} />,
      title: "Strategi Pertumbuhan",
      desc: "Dapatkan rekomendasi cerdas untuk alih pengeluaran impulsif jadi tabungan produktif.",
    },
  ];

  return (
    <section className="w-full px-8 ">
      <div className="mx-auto container text-center pt-32 md:pt-36 lg:pt-40">
        
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Kenapa Pilih Monify?
        </h1>

        <p className="mt-3 text-lg">
          Sistem yang dirancang untuk mempermudah hidup, bukan menambah beban pikiran.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/70 p-6 text-left shadow-sm backdrop-blur-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg  p-2 text-[#FFA930]">
                {item.icon}
              </div>

              <h3 className="text-2xl md:text-[32px] font-semibold text-[#1C0606]">
                {item.title}
              </h3>

              <p className="mt-2 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}