const pillars = [
  {
    title: "Health-first sourcing",
    text: "Every puppy listed comes from breeders who pass strict screening and ongoing standards checks.",
  },
  {
    title: "Guided family matching",
    text: "Tell us your lifestyle, home setup, and energy preference—we’ll recommend the right breeds and puppies.",
  },
  {
    title: "Safe delivery process",
    text: "From checkout to arrival, your puppy journey is supported with clear updates and support.",
  },
  {
    title: "Real support on WhatsApp",
    text: "Skip forms and waiting. Chat directly with a puppy advisor and get answers in minutes.",
  },
];

const AboutText = () => {
  return (
    <section id="why-us" className="bg-slate-50 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Why PuppyHub USA</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 lg:text-4xl">Built to feel premium, trusted, and easy</h2>
          <p className="mt-4 text-base text-slate-600">
            We redesigned the experience to be cleaner and higher-converting: clear trust signals, stronger CTAs, and direct human support.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutText;
