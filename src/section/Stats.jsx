import Animated from "../components/Animated";
import { statsData } from "../data/data";

const Stats = () => {
  return (
    <section id="stats" className="mt-32 px-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row md:gap-25">
        {statsData.map((item, index) => (
          <Animated
            key={index}
            delay={0.2 * (index + 1)}
            className="flex flex-col items-center text-center"
          >
            <span className="text-6xl">{item.number}</span>

            <h3 className="mt-5 text-2xl">{item.title}</h3>

            <p className="mt-3.5 max-w-73 font-light text-zinc-600">
              {item.description}
            </p>
          </Animated>
        ))}
      </div>
    </section>
  );
};

export default Stats;
