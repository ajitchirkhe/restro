import Animated from "../components/Animated";
import { faqs } from "../data/data";
import { Plus, X } from "lucide-react";

const FAQs = () => {
  return (
    <section id="faq" className="mt-44 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <Animated delay={0.2}>
            <p className="mb-4 font-medium uppercase text-orange-500">FAQs</p>
          </Animated>

          <Animated>
            <h2 className="mx-auto max-w-2xl text-balance text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </Animated>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Animated key={index} y={150} delay={index * 0.15}>
              <details className="group rounded-lg border border-slate-200 text-zinc-500">
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 transition-colors hover:bg-slate-50/50 [&::-webkit-details-marker]:hidden">
                  <span className="pr-4 text-zinc-700">{faq.question}</span>

                  <span className="grid size-7 shrink-0 place-content-center rounded-full bg-black/5">
                    <Plus size={14} className="group-open:hidden" />
                    <X size={14} className="hidden group-open:block" />
                  </span>
                </summary>

                <p className="px-5 pb-4 leading-relaxed">{faq.answer}</p>
              </details>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
