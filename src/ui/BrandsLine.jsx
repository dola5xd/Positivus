import { motion } from "framer-motion";

function BrandsLine() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden gap-[100px] px-[150px]">
      <motion.ul
        className="flex items-center gap-[100px] justify-center "
        variants={{
          animate: { x: "-108%" },
          init: { x: 0 },
        }}
        animate="animate"
        initial="init"
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
          repeatDelay: 0,
          repeatType: "loop",
        }}
      >
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_1.svg"
            alt="Company logo_1"
          />
        </li>
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_2.svg"
            alt="Company logo_2"
          />
        </li>
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_3.svg"
            alt="Company logo_3"
          />
        </li>
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_4.svg"
            alt="Company logo_4"
          />
        </li>
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_5.svg"
            alt="Company logo_5"
          />
        </li>
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_6.svg"
            alt="Company logo_6"
          />
        </li>
      </motion.ul>
      <motion.ul
        className="flex items-center gap-[100px] justify-center   "
        variants={{
          animate: { x: "-108%" },
          init: { x: 0 },
        }}
        animate="animate"
        initial="init"
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
          repeatDelay: 0,
          repeatType: "loop",
        }}
      >
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_1.svg"
            alt="Company logo_1"
          />
        </li>
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_2.svg"
            alt="Company logo_2"
          />
        </li>
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_3.svg"
            alt="Company logo_3"
          />
        </li>
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_4.svg"
            alt="Company logo_4"
          />
        </li>
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_5.svg"
            alt="Company logo_5"
          />
        </li>
        <li>
          <img
            className="max-w-none"
            src="./assets/Company logo_6.svg"
            alt="Company logo_6"
          />
        </li>
      </motion.ul>
    </div>
  );
}

export default BrandsLine;
