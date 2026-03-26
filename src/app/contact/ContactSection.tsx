"use client";

export default function ContactSection() {
  return (
    <section className="w-full px-8 pt-40  md:pt-48 lg:pt-52">
      <div className="mx-auto grid container gap-12 md:grid-cols-2 items-start ">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hubungi Kami
          </h1>

          <p className="mt-4 text-lg leading-relaxed">
            Monity hadir untuk mendefinisikan ulang cara Anda melihat,
            mengelola, dan menumbuhkan aset setiap hari.
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">First Name</label>
              <input
                type="text"
                placeholder="John..."
                className="w-full rounded-lg  bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#FFA930]/40"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Last Name</label>
              <input
                type="text"
                placeholder="Doe..."
                className="w-full rounded-lg  bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#FFA930]/40"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full rounded-lg  bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#FFA930]/40"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Message</label>
            <textarea
              rows={5}
              placeholder="Apakah kalian ingin memakan burger?"
              className="w-full rounded-lg  bg-white px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-[#FFA930]/40"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#FFA930] py-2.5 text-sm font-semibold text-white transition hover:bg-[#f09615]"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
}
