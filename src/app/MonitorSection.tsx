"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

export default function MonitorSection() {
  const features = [
    {
      title: "Sinkronasi Instan",
      desc: "Hubungkan akun bank atau e-wallet dalam detik.",
    },
    {
      title: "Visualisasi Nyata",
      desc: "Pantau saldo melalui grafik intuitif yang dinamis.",
    },
    {
      title: "Kategorisasi Otomatis",
      desc: "Sistem pintar memilah kebutuhan dan keinginan Anda.",
    },
    {
      title: "Update Real-Time",
      desc: "Notifikasi saldo masuk dan keluar seketika.",
    },
  ];

  return (
    <section className="w-full px-6 pt-32 md:pt-36 lg:pt-52 ">
      <div className="mx-auto grid container items-center gap-10 md:grid-cols-2">
        {/* ── IMAGE ── */}
        <div className="relative flex justify-center">
          <div
            className="
      w-full max-w-185
      aspect-740/481
      md:h-120.25 md:aspect-auto
      rounded-2xl bg-white/70
      shadow-sm
    "
          >
            <Image
              src="/home/monitor/money-hand.png"
              alt="money hand"
              fill
              className="object-contain object-bottom max-w-[256px] sm:max-w-lg mx-auto pr-4 sm:pr-14"
            />
          </div>
        </div>

        {/* ── TEXT ── */}
        <div>
          <h2 className="text-4xl font-semibold text-[#1C0606] sm:text-5xl md:text-6xl">
            Hubungkan & Pantau
          </h2>

          <p className="mt-3 text-sm text-zinc-400 md:text-base">
            Mulailah perjalanan finansial Anda dengan mengintegrasikan seluruh
            sumber pendapatan ke dalam satu ekosistem digital yang aman.
          </p>

          {/* FEATURES */}
          <ul className="mt-6 space-y-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                {/* ICON */}
                <span className="mt-1 text-[#FFA930]">
                  <FiCheckCircle size={18} />
                </span>

                {/* TEXT */}
                <div>
                  <h3 className="text-sm font-semibold text-[#1C0606] md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1C0606]/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
