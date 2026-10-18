import { ChefHat, Heart, Leaf } from "lucide-react";
import Animated from "../components/Animated";
import { featuresData } from "../data/data";

const iconMap = {
  ChefHat,
  Leaf,
  Heart,
};

const Features = () => {
  return (
    <section id="features" className="mt-44 px-4">
      <div className="mb-16 text-center">
        <Animated delay={0.2}>
          <p className="mb-3.5 font-medium uppercase text-orange-500">
            What Sets Us Apart
          </p>
        </Animated>

        <Animated>
          <h2 className="mx-auto max-w-lg text-balance text-4xl md:text-5xl">
            Crafting memorable dining experiences
          </h2>
        </Animated>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-14 md:flex-row">
        <div className="max-w-md space-y-10">
          {featuresData.map((item, index) => {
            const IconComponent = iconMap[item.icon];

            return (
              <Animated
                key={index}
                y={150}
                delay={index * 0.15}
                className="flex items-start gap-4 text-left"
              >
                {IconComponent && (
                  <IconComponent className="mt-0.5 size-5 shrink-0 text-orange-500" />
                )}

                <div>
                  <h3 className="mb-2 text-xl">{item.title}</h3>
                  <p className="max-w-sm text-zinc-600">{item.description}</p>
                </div>
              </Animated>
            );
          })}
        </div>

        <Animated x={50} y={0}>
          <img
            src="/assets/chef.png"
            alt="Chef"
            className="h-111 w-full max-w-sm rounded-3xl object-cover"
          />
        </Animated>
      </div>
    </section>
  );
};

export default Features;
