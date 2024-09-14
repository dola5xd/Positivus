import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Illustration = (
  <svg
    width="359"
    height="395"
    viewBox="0 0 359 395"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <motion.path
        d="M337.5 198.5C337.5 200.778 336.403 203.052 334.208 205.306C332.012 207.561 328.746 209.76 324.497 211.87C316 216.09 303.672 219.904 288.398 223.113C257.858 229.528 215.644 233.5 169 233.5C122.356 233.5 80.1418 229.528 49.6017 223.113C34.3276 219.904 22.0001 216.09 13.5033 211.87C9.25393 209.76 5.98843 207.561 3.79163 205.306C1.5966 203.052 0.5 200.778 0.5 198.5C0.5 196.222 1.5966 193.948 3.79163 191.694C5.98843 189.439 9.25393 187.24 13.5033 185.13C22.0001 180.91 34.3276 177.096 49.6017 173.887C80.1418 167.472 122.356 163.5 169 163.5C215.644 163.5 257.858 167.472 288.398 173.887C303.672 177.096 316 180.91 324.497 185.13C328.746 187.24 332.012 189.439 334.208 191.694C336.403 193.948 337.5 196.222 337.5 198.5Z"
        stroke="black"
        variants={{ move: { y: 0, opacity: 1 }, init: { y: 25, opacity: 0 } }}
        initial="init"
        animate="move"
        transition={{ delay: 1.25, duration: 0.5 }}
      />
      <motion.path
        d="M337.5 223.5C337.5 225.778 336.403 228.052 334.208 230.306C332.012 232.561 328.746 234.76 324.497 236.87C316 241.09 303.672 244.904 288.398 248.113C257.858 254.528 215.644 258.5 169 258.5C122.356 258.5 80.1418 254.528 49.6017 248.113C34.3276 244.904 22.0001 241.09 13.5033 236.87C9.25393 234.76 5.98843 232.561 3.79163 230.306C1.5966 228.052 0.5 225.778 0.5 223.5C0.5 221.222 1.5966 218.948 3.79163 216.694C5.98843 214.439 9.25393 212.24 13.5033 210.13C22.0001 205.91 34.3276 202.096 49.6017 198.887C80.1418 192.472 122.356 188.5 169 188.5C215.644 188.5 257.858 192.472 288.398 198.887C303.672 202.096 316 205.91 324.497 210.13C328.746 212.24 332.012 214.439 334.208 216.694C336.403 218.948 337.5 221.222 337.5 223.5Z"
        stroke="black"
        variants={{ move: { y: 0, opacity: 1 }, init: { y: 25, opacity: 0 } }}
        initial="init"
        animate="move"
        transition={{ delay: 0.75, duration: 0.5 }}
      />
      <motion.path
        d="M337.5 248.5C337.5 250.778 336.403 253.052 334.208 255.306C332.012 257.561 328.746 259.76 324.497 261.87C316 266.09 303.672 269.904 288.398 273.113C257.858 279.528 215.644 283.5 169 283.5C122.356 283.5 80.1418 279.528 49.6017 273.113C34.3276 269.904 22.0001 266.09 13.5033 261.87C9.25393 259.76 5.98843 257.561 3.79163 255.306C1.5966 253.052 0.5 250.778 0.5 248.5C0.5 246.222 1.5966 243.948 3.79163 241.694C5.98843 239.439 9.25393 237.24 13.5033 235.13C22.0001 230.91 34.3276 227.096 49.6017 223.887C80.1418 217.472 122.356 213.5 169 213.5C215.644 213.5 257.858 217.472 288.398 223.887C303.672 227.096 316 230.91 324.497 235.13C328.746 237.24 332.012 239.439 334.208 241.694C336.403 243.948 337.5 246.222 337.5 248.5Z"
        stroke="black"
        variants={{ move: { y: 0, opacity: 1 }, init: { y: 25, opacity: 0 } }}
        initial="init"
        animate="move"
        transition={{ delay: 0.25, duration: 0.5 }}
      />
    </g>

    <g>
      <motion.path
        d="M252.343 66.6293L252.511 67.5347L253.179 66.9008L300.311 22.177L272.341 80.823L271.945 81.6542L272.858 81.534L337.276 73.0554L280.177 104.061L279.368 104.5L280.177 104.939L337.276 135.945L272.858 127.466L271.945 127.346L272.341 128.177L300.311 186.823L253.179 142.099L252.511 141.465L252.343 142.371L240.5 206.257L228.657 142.371L228.489 141.465L227.821 142.099L180.689 186.823L208.659 128.177L209.055 127.346L208.142 127.466L143.724 135.945L200.823 104.939L201.632 104.5L200.823 104.061L143.724 73.0554L208.142 81.534L209.055 81.6542L208.659 80.823L180.689 22.177L227.821 66.9008L228.489 67.5347L228.657 66.6293L240.5 2.74317L252.343 66.6293Z"
        stroke="black"
        variants={{
          animate: { scale: 1, rotate: "1turn" },
          init: { scale: 0, rotate: 0 },
        }}
        initial="init"
        animate="animate"
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 0.7,
        }}
      />
      <motion.path
        d="M277 177L294.789 222.06L341.11 207.874L316.972 249.877L356.944 277.247L309.055 284.563L312.578 332.879L277 300L241.422 332.879L244.945 284.563L197.056 277.247L237.028 249.877L212.89 207.874L259.211 222.06L277 177Z"
        fill="#D9D9D9"
        variants={{
          animate: { scale: 1, rotate: "1turn" },
          init: { scale: 0, rotate: 0 },
        }}
        initial="init"
        animate="animate"
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 0.7,
        }}
      />
      <motion.path
        d="M112.194 306.102L135.134 264L158.258 306.102L200.269 329.134L158.258 352.166L135.134 394.269L112.194 352.166L70 329.134L112.194 306.102Z"
        fill="#B9FF66"
        variants={{
          animate: { scale: 1, rotate: "1turn" },
          init: { scale: 0, rotate: 0 },
        }}
        initial="init"
        animate="animate"
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 0.7,
        }}
      />
    </g>
    <motion.g
      variants={{ move: { y: 0, opacity: 1 }, init: { y: -250, opacity: 0 } }}
      initial="init"
      animate="move"
      transition={{
        delay: 0.25,
        duration: 0.5,
        y: { delay: 0.25, duration: 0.5 },
      }}
    >
      <circle cx="152.5" cy="186.5" r="62" fill="black" stroke="black" />
      <motion.ellipse
        cx="132"
        cy="173"
        rx="10"
        ry="20"
        fill="white"
        variants={{ hide: { opacity: 1 }, init: { opacity: 0 } }}
        animate="hide"
        initial="init"
        transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
      />
      <motion.ellipse
        cx="173"
        cy="173"
        rx="10"
        ry="20"
        fill="white"
        variants={{ hide: { opacity: 1 }, init: { opacity: 0 } }}
        animate="hide"
        initial="init"
        transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
      />
    </motion.g>
  </svg>
);

function Subscripe() {
  const container = useRef(null);
  const isInView = useInView(container);

  const controls = useAnimation();
  useEffect(() => {
    if (isInView) controls.start("reveal");
  }, [controls, isInView]);

  return (
    <motion.div
      ref={container}
      variants={{
        reveal: { scale: 1, opacity: 1 },
        init: { scale: 0, opacity: 0 },
      }}
      animate={controls}
      initial="init"
      transition={{ duration: 0.5, delay: 0.25 }}
      className="px-[2rem] Laptops:px-[5rem] py-[3rem]"
    >
      <div className="card bg-brand_3 w-full shadow-none border-none rounded-3xl">
        <div className="Laptops:w-1/2 text-brand_2">
          <h1 className=" font-semibold mb-5 text-[2rem] Laptops:text-[3rem]">
            Let’s make things happen
          </h1>
          <p className="text-[1rem] Laptops:text-[1.2rem] font-medium">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="btn-primary mt-7 w-full Laptops:w-auto">
            Get your free proposal
          </button>
        </div>
        <div className="Laptops:block hidden">{Illustration}</div>
      </div>
    </motion.div>
  );
}

export default Subscripe;
