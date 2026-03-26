"use client";

export default function PrinciplesSection() {
  const items = [
    {
      number: "1.",
      title: "Keamanan Mutlak",
      desc: "Enkripsi standar bank untuk menjaga privasi data finansial Anda",
    },
    {
      number: "2.",
      title: "Transparansi Penuh",
      desc: "Akses informasi jujur tanpa biaya atau data yang tersembunyi",
    },
    {
      number: "3.",
      title: "Inovasi Inklusif",
      desc: "Teknologi canggih yang dirancang mudah bagi setiap individu.",
    },
  ];

  return (
    <section className="w-full px-8 pt-32 md:pt-36 lg:pt-40">
      <div className="mx-auto container">
        
        <div className="text-center pt-0 md:pt-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Prinsip Utama Monity
          </h2>

          <p className="mt-3 text-lg">
            Landasan kuat yang mendasari setiap inovasi kami dalam menjaga dan
            mengelola aset berharga Anda.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                rounded-xl
                bg-white/70
                backdrop-blur-sm
                p-6
                shadow-sm
                transition
                hover:-translate-y-1
              "
            >
              <span className="text-4xl font-semibold text-[#FFA930]">
                {item.number}
              </span>

              <h5 className="mt-1 font-semibold text-2xl md:text-[32px]">
                {item.title}
              </h5>

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