"use client";

import Image from "next/image";
import { CgEditBlackPoint } from "react-icons/cg";

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
    <section id="monitor-section" className="w-full px-8 pt-32 md:pt-36 lg:pt-52 ">
      <div className="mx-auto grid container items-center gap-10 md:grid-cols-2">
        <div className="relative flex justify-center">
          <div
            className="
      w-full max-w-185
      aspect-740/481
      md:h-120.25 md:aspect-auto
      rounded-2xl bg-[#ede7e39f]  
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

        <div>
          <h2 className="text-4xl font-bold text-[#1C0606] sm:text-5xl md:text-6xl">
            Hubungkan & Pantau
          </h2>

          <p className="mt-3 text-lg text-zinc-400 ">
            Mulailah perjalanan finansial Anda dengan mengintegrasikan seluruh
            sumber pendapatan ke dalam satu ekosistem digital yang aman.
          </p>

          <ul className="mt-6 space-y-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 text-[#FFA930]">
                  <CgEditBlackPoint size={18} />
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-[#1C0606] ">
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
      </div>
    </section>
  );
}
