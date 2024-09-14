import { useState } from "react";
import { motion } from "framer-motion";
function MobileNav() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <span
        className={`cursor-pointer z-[1000] ${
          isOpen ? "fixed right-[20px]" : "static"
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 26 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M1 1.80664H25"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            variants={{
              init: { rotate: 0, y: 0 },
              hide: { rotate: -45, y: 10 },
            }}
            animate={isOpen ? "hide" : "init"}
            transition={{ duration: 0.5 }}
          />
          <motion.path
            d="M1 9.80664H25"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            variants={{ init: { opacity: 1 }, hide: { opacity: 0 } }}
            animate={isOpen ? "hide" : "init"}
            transition={{ duration: 0.25 }}
          />
          <motion.path
            d="M1 17.8066H25"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            variants={{
              init: { rotate: 0, y: 0 },
              hide: { rotate: 45, y: -5 },
            }}
            animate={isOpen ? "hide" : "init"}
            transition={{ duration: 0.5 }}
          />
        </svg>
      </span>
      {isOpen && (
        <div className="fixed h-full w-full bg-brand_3 top-0 left-0 z-[900]">
          <ul className="py-[150px] px-[50px] gap-7 text-brand_2 font-medium text-xl flex flex-col justify-center duration-500 ">
            <li className="duration-500 hover:underline">
              <a href="#About">About us</a>
            </li>
            <li className="duration-500 hover:underline">
              <a href="#Services">Services</a>
            </li>
            <li className="duration-500 hover:underline">
              {" "}
              <a href="#Uses">Use Cases</a>
            </li>
            <li className="duration-500 hover:underline">
              {" "}
              <a href="#Pricing">Pricing</a>
            </li>
            <li className="duration-500 hover:underline">
              {" "}
              <a href="#Blog">Blog</a>
            </li>
            <li className="duration-500 hover:[&>button]:bg-brand_1">
              <button className="border-2 border-brand_2 py-3 px-5 rounded-lg duration-500">
                {" "}
                <a href="#Request" className="outline-0">
                  Request a quote
                </a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
