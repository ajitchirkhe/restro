import { Star } from "lucide-react";
import Animated from "../components/Animated";
import { bookingSteps, bookingTestimonial } from "../data/data";

const BookingProcess = () => {
  return (
    <section id="booking-process" className="mt-44 px-4">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-25">
        {/* Left side */}
        <div className="flex flex-col text-center md:text-left">
          <Animated delay={0.2}>
            <p className="mb-4 font-medium uppercase text-orange-500">
              Table Reservation Process
            </p>
          </Animated>

          <Animated delay={0.2}>
            <h2 className="mb-16 text-4xl md:text-5xl">
              Reserve your table in three simple steps
            </h2>
          </Animated>

          <Animated className="mb-6 flex justify-center gap-0.5 md:justify-start">
            {[...Array(bookingTestimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="size-4 fill-orange-500 text-orange-500"
              />
            ))}
          </Animated>

          <Animated delay={0.2}>
            <p className="mb-4 max-w-xs text-zinc-600 max-md:mx-auto">
              "{bookingTestimonial.quote}"
            </p>
          </Animated>

          <Animated className="flex items-center justify-center gap-3 md:justify-start">
            <img
              src={bookingTestimonial.authorImg}
              alt={bookingTestimonial.authorName}
              className="size-12 rounded-full object-cover"
            />

            <p className="text-lg">{bookingTestimonial.authorName}</p>
          </Animated>
        </div>

        {/* Right side */}
        <div className="space-y-14 text-left">
          {bookingSteps.map((step, index) => (
            <Animated
              key={index}
              y={150}
              delay={index * 0.15}
              className="flex items-start gap-9"
            >
              <span className="shrink-0 text-lg font-medium text-orange-500">
                {step.number}
              </span>

              <div className="flex flex-col">
                <h3 className="mb-5 text-xl">{step.title}</h3>
                <p className="text-zinc-600">{step.description}</p>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;

