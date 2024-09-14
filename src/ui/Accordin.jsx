import { motion } from "framer-motion";
import { useState } from "react";
const minus = (
  <svg
    width="18"
    height="7"
    viewBox="0 0 18 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 6.14V0.5H17.76V6.14H0Z" fill="black" />
  </svg>
);
const plus = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z"
      fill="#191A23"
    />
  </svg>
);

function Accordion({ data }) {
  const isMobile = window.matchMedia("(max-width: 426px)").matches;
  const isTablet = window.matchMedia("(max-width: 1024px)").matches;

  const { id, label, content } = data;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`accordion ${isOpen ? "bg-brand_1" : ""}`}
      variants={{
        anime: { height: isTablet ? 400 : 450 },
        init: { height: isMobile ? 150 : isTablet ? 150 : 275 },
      }}
      animate={isOpen ? "anime" : "init"}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 Tablet:gap-3 text-[1.1rem] text-center  Tablet:text-[1.7rem] Laptops:text-[2.5rem] Tablet:text-nowrap">
          <span>0{id}</span>
          <h1>{label}</h1>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-3 Laptops:p-7 w-[45px] h-[45px] Laptops:w-[75px] Laptops:h-[75px] rounded-full flex items-center justify-center border-2 border-brand_2 [&>svg]:scale-75 Laptops:[&>svg]:scale-100"
        >
          {!isOpen ? plus : minus}
        </button>
      </div>
      <motion.div
        className={`mt-[50px] px-7 `}
        variants={{
          anime: { display: "block", opacity: 1 },
          init: { display: "none", opacity: 0 },
        }}
        animate={isOpen ? "anime" : "init"}
        transition={{ duration: 0.25, opacity: { delay: 0.5, duration: 0.5 } }}
      >
        <p className="border-t-2 border-brand_2 pt-7 Tablet:text-[1.3rem] Laptops:text-[1.5rem]">
          {content}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Accordion;
