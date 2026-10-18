import { useState } from "react";
import Animated from "../components/Animated";
import { dishes } from "../data/data";
import { motion } from "motion/react";

const Dishes = () => {
  const [rotate, setRotate] = useState({});

  return (
    <section id="dishes" className="mt-44 px-4">
      <div className="mb-16 text-center">
        <Animated delay={0.2}>
          <p className="mb-3.5 font-medium uppercase text-orange-500">
            Chef's Signature Selection
          </p>
        </Animated>

        <Animated>
          <h2 className="mx-auto max-w-lg text-balance text-4xl md:text-5xl">
            Discover our signature dishes
          </h2>
        </Animated>
      </div>

      <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-18 max-w-5xl mx-auto">
        {dishes.map((dish, index) => (
          <Animated
            key={index}
            y={80}
            delay={index * 0.1}
            className="flex flex-col items-center shrink-0 cursor-pointer"
            onMouseEnter={() =>
              setRotate((prev) => ({
                ...prev,
                [index]: (prev[index] || 0) + 180,
              }))
            }
          >
            <motion.div
              animate={{ rotate: rotate[index] || 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
            >
              <img
                src={dish.img}
                alt={dish.title}
                className="size-30 md:size-35 object-cover"
                onError={(e) =>
                  console.error("Image load failed:", dish.img, e)
                }
              />
            </motion.div>

            <h3 className="mt-5">{dish.title}</h3>
            <p className="mt-2 text-zinc-600">{dish.price}</p>
          </Animated>
        ))}
      </div>
    </section>
  );
};

export default Dishes;
