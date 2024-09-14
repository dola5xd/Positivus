import Accordion from "./Accordin";
import {
  motion,
  stagger,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    label: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    label: "Research and Strategy Development",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 3,
    label: "Implementation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 4,
    label: "Monitoring and Optimization",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 5,
    label: "Reporting and Communication",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 6,
    label: "Continual Improvement",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

function Process() {
  const container = useRef(null);
  const isInView = useInView(container);

  const controls = useAnimation();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      controls.start("reveal");
      animate(
        ".accordion",
        { opacity: 1 },
        {
          duration: 0.5,
          delay: stagger(1),
        }
      );
    }
  }, [isInView, animate, controls]);

  return (
    <motion.section
      ref={container}
      className="py-[100px] px-3 Tablet:px-10"
      variants={{
        reveal: { x: 0, opacity: 1 },
        init: { x: "-100%", opacity: 0 },
      }}
      initial="init"
      animate={controls}
      transition={{
        x: { duration: 0.5, delay: 0 },
        opacity: { duration: 0.5, delay: 0.25 },
      }}
    >
      <div className="flex items-center text-center flex-col gap-5 Laptops:text-start Laptops:flex-row Laptops:w-1/2 ">
        <h1 className="before before:w-[325px] before:left-1/2 before:-translate-x-1/2 Laptops:before:-left-1 Laptops:before:translate-x-0 text-nowrap Laptops:w-3/4 text-[2rem] ">
          Our Working Process
        </h1>
        <p className="text-[1.2rem] font-medium">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div ref={scope} className="flex flex-col gap-7 py-10 Laptops:px-4">
        {data.map((e) => (
          <Accordion data={e} key={e.id} />
        ))}
      </div>
    </motion.section>
  );
}

export default Process;
