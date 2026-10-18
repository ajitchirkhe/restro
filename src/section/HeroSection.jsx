import Animated from "../components/Animated";
import { Star } from "lucide-react";

const avatars = [
  "/assets/user-1.jpeg",
  "/assets/user-2.jpeg",
  "/assets/user-3.jpeg",
  "/assets/user-4.jpeg",
];

const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[url('/assets/heroBanner.png')] bg-cover bg-center bg-no-repeat px-4 pt-20">
      <Animated y={-20} delay={0.2}>
        <p className="text-orange-600">WHERE FLAVOR MEETS ELEGANGE</p>
      </Animated>

      <Animated>
        <h1 className="mt-5 max-w-3xl text-center font-urbanist text-5xl font-medium text-balance md:text-6xl">
          Created for unforgettable dining moments
        </h1>
      </Animated>

      <Animated delay={0.2}>
        <p className="mt-3 max-w-md text-center text-zinc-600">
          Exprience carefully curated menus, fresh local ingredients and
          impeccable services in a space made for every celebrations
        </p>
      </Animated>

      <Animated>
        <a
          href="#booking-process"
          className="mt-8 block rounded-full bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
        >
          Book a table
        </a>
      </Animated>

      {/* Guest avatars and rating */}
      <Animated
        y={20}
        delay={0.3}
        className="mt-9 flex items-center justify-center md:justify-start"
      >
        {/* Guest avatars */}
        <div className="flex -space-x-3 pr-3">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Guest ${i + 1}`}
              className="relative size-10 rounded-full border-2 border-slate-50 object-cover transition hover:-translate-y-px"
              style={{ zIndex: i + 1 }}
            />
          ))}
        </div>

        {/* Rating */}
        <div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="size-3.5 fill-orange-500 text-orange-500"
              />
            ))}
          </div>

          <p className="text-zinc-800">4.8/5 Rating - 10,000 reviews</p>
        </div>
      </Animated>
    </section>
  );
};

export default HeroSection;
