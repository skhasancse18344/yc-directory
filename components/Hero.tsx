export default function Hero() {
  return (
    <section className="bg-[#EE2B69]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Banner title */}
        <div className="mx-auto max-w-4xl">
          <div className="inline-block rounded-lg bg-black px-6 py-4">
            <h1 className="text-center text-2xl font-extrabold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
              Pitch your startup,
              <br className="hidden sm:block" />
              connect with entrepreneurs
            </h1>
          </div>

          <p className="mt-4 text-center text-sm text-white/90 sm:text-base">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions.
          </p>
        </div>
      </div>
    </section>
  );
}
