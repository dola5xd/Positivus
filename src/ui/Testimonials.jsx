import Slider from "./Slider";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Testimonials() {
  const container = useRef(null);
  const isInView = useInView(container);

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("reveal");
    }
  }, [isInView, controls]);
  return (
    <motion.section
      ref={container}
      className="py-[50px] px-[10px] Laptops:p-[100px]"
      variants={{
        reveal: { scale: 1, opacity: 1 },
        init: { scale: 0, opacity: 0 },
      }}
      initial="init"
      animate={controls}
      transition={{
        scale: { duration: 0.5, delay: 0 },
        opacity: { duration: 0.5, delay: 0.25 },
      }}
    >
      <div className="flex items-center text-center flex-col gap-5 Laptops:text-start Laptops:flex-row Laptops:w-3/4 ">
        <h1 className="before before:w-[200px] before:left-1/2 before:-translate-x-1/2 Laptops:before:-left-1 Laptops:before:translate-x-0 text-nowrap Laptops:w-1/3 text-[2rem] ">
          Testimonials
        </h1>
        <p className="text-[1.2rem] font-medium Laptops:text-balance">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="py-[50px]">
        <Slider />
      </div>
    </motion.section>
  );
}

export default Testimonials;
