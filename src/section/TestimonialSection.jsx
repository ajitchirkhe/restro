import Animated from "../components/Animated";
import { testimonials } from "../data/data";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="mt-44 px-4">
      <div className="mb-14 text-center">
        <Animated delay={0.2}>
          <p className="mb-4 font-medium uppercase text-orange-500">
            LOVED BY FOOD LOVERS
          </p>
        </Animated>

        <Animated delay={0.2}>
          <h2 className="mx-auto max-w-lg text-balance text-4xl md:text-5xl">
            What Our Guests Say
          </h2>
        </Animated>
      </div>

      {/* Testimonials Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Animated
            key={index}
            y={80}
            delay={index * 0.1}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 p-6 text-left hover:bg-slate-50/50"
          >
            <div>
              <div className="mb-4 flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <p className="mb-6 leading-relaxed text-zinc-600">
                "{item.review}"
              </p>
            </div>

            <div className="mt-auto flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="size-11 shrink-0 rounded-full object-cover"
              />

              <div>
                <p className="mb-0.5 font-medium leading-tight">{item.name}</p>
                <p className="text-zinc-600">{item.location}</p>
              </div>
            </div>
          </Animated>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
