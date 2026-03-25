"use client";

export default function StatsSection() {
  const stats = [
    {
      value: "10K+",
      label: "Pengguna Aktif",
    },
    {
      value: "25+",
      label: "Bank & E-Wallet",
    },
    {
      value: "98%",
      label: "Pengguna Puas",
    },
  ];

  return (
    <section className="w-full px-8 pt-32 md:pt-36 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {stats.map((item, i) => (
            <div
              key={i}
              className="
                rounded-xl
                bg-white/70
                backdrop-blur-sm
                p-6
                text-center
                shadow-sm
              "
            >
              <h1 className=" font-bold  text-2xl md:text-[32px]">
                {item.value}
              </h1>
              <p className="mt-1 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}