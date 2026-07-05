import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-green-500 uppercase tracking-widest mb-4">
          About Me
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Building scalable software products.
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
          {portfolioData.about}
        </p>
      </div>
    </section>
  );
}