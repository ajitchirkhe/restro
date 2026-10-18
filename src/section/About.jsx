import React from "react";
import Animated from "../components/Animated";

const About = () => {
  return (
    <section id="about" className="px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 md:flex-row md:gap-18">
        {/* Left Side main image */}
        <Animated scale={0.8} y={0} className="w-full md:w-1/2">
          <img
            src="/assets/about.png"
            alt="Dish"
            className="h-full max-h-[600px] w-full rounded-3xl object-cover"
          />
        </Animated>

        {/* Right Side content details */}
        <div className="flex w-full flex-col justify-center md:w-1/2">
          <Animated scale={0.8} y={0} className="flex items-center gap-2">
            <img src="/assets/iconL.png" alt="iconLeft" />

            <span className="font-medium uppercase">Created with Passion</span>

            <img src="/assets/iconR.png" alt="iconRight" />
          </Animated>

          <Animated>
            <h2 className="mt-5 text-4xl text-balance md:text-5xl">
              Exprience dining beyond expectations
            </h2>
          </Animated>

          <Animated delay={0.2}>
            <p className="mt-4 text-zinc-600">
              We combine fresh local ingredients, creative recipes and elegant
              presentation to deliver memorable Exprience with every visit.
            </p>
          </Animated>

          <Animated delay={0.3}>
            <p className="mt-4 text-zinc-600">
              We combine fresh local ingredients, creative recipes and elegant
              presentation to deliver memorable Exprience with every visit.
            </p>
          </Animated>

          {/* Location card */}
          <Animated
            delay={0.4}
            className="mt-9 flex w-fit items-center gap-3 rounded-lg bg-orange-500 p-2 pr-8 text-white"
          >
            <img
              src="/assets/about.png"
              alt="Bistro Royale Location Preview"
              className="size-15 shrink-0 rounded-lg object-cover"
            />

            <div className="flex flex-col gap-2">
              <p className="font-medium">Bistro Royal, NY</p>

              <a href="#" className="underline underline-offset-4">
                View on Map
              </a>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default About;
