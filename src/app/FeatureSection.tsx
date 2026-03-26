"use client";

import Image from "next/image";
import { PiHandDeposit } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { TbTipJar } from "react-icons/tb";

export default function FeatureSection() {
  return (
    <section className="w-full px-8 pt-32 md:pt-36 lg:pt-40">
      <div className="mx-auto container">
        <div className="text-center">
          <h1 className="text-4xl font-bold  sm:text-5xl md:text-6xl">
            Fitur Apa Saja yang Ada
            <br /> di Dalam Monity?
          </h1>
          <p className="mt-3 text-lg">
            Sistem cerdas yang menyederhanakan cara Anda mengelola uang setiap
            hari.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white/70 p-2 shadow-sm backdrop-blur-sm">
            <div className="rounded-lg bg-[#ede7e39f] pt-14 flex items-center justify-center">
              <Image
                src="/home/feature/grafik-money.svg"
                alt="grafik money"
                width={600}
                height={400}
                className="object-contain object-bottom"
              />
            </div>

            <div className="p-5">
              <h3 className="mt-4 text-2xl md:text-[32px] font-semibold ">
                Multi-Account Tracking
              </h3>
              <p className="text-lg ">
                Pantau semua bank dan e-wallet satu layar.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white/70 p-2 shadow-sm backdrop-blur-sm">
            <div className="rounded-lg bg-[#ede7e39f] p-24 ">
              <div className="bg-linear-to-b from-[#d3cfcf] to-[#F8F2EC] flex items-center justify-center rounded-xl pt-3">
                {" "}
                <Image
                  src="/home/feature/belanja.svg"
                  alt="belanja"
                  width={170}
                  height={170}
                />
                <Image
                  src="/home/feature/langganan.svg"
                  alt="langganan"
                  width={170}
                  height={170}
                />
                <Image
                  src="/home/feature/darurat.svg"
                  alt="darurat"
                  width={170}
                  height={170}
                />
              </div>
            </div>
            <div className="p-5">
              {" "}
              <h3 className="mt-4 text-2xl md:text-[32px] font-semibold ">Custom Tags</h3>
              <p className="text-lg ">
                Kelola pengeluaran spesifik dengan label yang personal.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white/70 p-5 shadow-sm backdrop-blur-sm">
            <div className="mb-3 text-[#FFA930]">
              <PiHandDeposit size={40} />
            </div>
            <h4 className="font-semibold text-2xl md:text-[32px]">Export Reports</h4>
            <p className="text-lg ">
              Unduh laporan ke dalam bentuk PDF atau CSV secara instan.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl bg-white/70 p-5 shadow-sm backdrop-blur-sm">
            <div className="mb-3 text-[#FFA930]">
              <GoShieldCheck size={40} />
            </div>
            <h4 className="font-semibold text-2xl md:text-[32px]">AES-256 Security</h4>
            <p className="text-lg ">
              Proteksi data finansial dengan enkripsi standar bank.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl bg-white/70 p-5 shadow-sm backdrop-blur-sm">
            <div className="mb-3 text-[#FFA930]">
              <TbTipJar size={40} />
            </div>
            <h4 className="font-semibold text-2xl md:text-[32px]">Target Savings</h4>
            <p className="text-lg ">
              Wujudkan mimpi Anda dengan sistem tabungan otomatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
