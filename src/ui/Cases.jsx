import {
  motion,
  stagger,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const ico = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
      fill="#B9FF66"
    />
  </svg>
);

function Cases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (inView) {
      controls.start("reveal");
      animate(
        ".case-card",
        { opacity: 1 },
        {
          duration: 0.5,
          delay: stagger(0.7),
        }
      );
    }
  }, [inView, animate, controls]);

  return (
    <motion.section
      ref={ref}
      id="Uses"
      className="p-50 Laptops:p-[100px] px-7 flex flex-col
     gap-[50px]"
      variants={{
        hidden: { opacity: 0, x: "100%" },
        reveal: { opacity: 1, x: 0 },
      }}
      initial={"hidden"}
      animate={controls}
      transition={{ duration: 0.25, delay: 0.25 }}
    >
      <div className="flex items-center text-center flex-col gap-5 Laptops:text-start Laptops:flex-row Laptops:w-3/4 ">
        <h1 className="before before:w-[260px] before:left-1/2 before:-translate-x-1/2 Laptops:before:-left-1 Laptops:before:translate-x-0 text-nowrap Laptops:w-1/2 ">
          Case Studies
        </h1>
        <p className="text-[1.2rem] font-medium">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <motion.div
        ref={scope}
        className="bg-brand_2 py-[50px] Laptops:py-[100px] px-[50px] rounded-3xl flex flex-nowrap items-start gap-7 flex-col Laptops:flex-row"
      >
        <motion.div className="case-card opacity-0">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <button>Learn more {ico}</button>
        </motion.div>
        <motion.div className="case-card opacity-0">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <button>Learn more {ico}</button>
        </motion.div>
        <motion.div className="case-card opacity-0">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <button>Learn more {ico}</button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Cases;
