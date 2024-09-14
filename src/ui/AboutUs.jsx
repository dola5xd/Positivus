import {
  motion,
  stagger,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";

import { useEffect, useRef } from "react";

function AboutUs() {
  const container = useRef(null);
  const isInView = useInView(container);

  const controls = useAnimation();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      controls.start("reveal");
      animate(
        ".card",
        { opacity: 1 },
        {
          duration: 0.5,
          delay: stagger(0.5),
        }
      );
    }
  }, [isInView, animate, controls]);

  return (
    <motion.section
      ref={container}
      id="About"
      className="py-[50px] px-[20px] Tablet:p-[50px] Laptops:p-[50px]"
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
      <div className="flex Laptops:items-center Laptops:w-[75%] gap-7 flex-col Laptops:flex-row">
        <h1 className="before w-[170px] Laptops:w-[250px]">Services</h1>
        <h4 className="text-balance font-medium text-[1.2rem]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </h4>
      </div>
      <motion.div
        ref={scope}
        className="py-[50px] flex items-center gap-[40px] flex-wrap flex-col Laptops:flex-row"
      >
        <div className=" bg-brand_3 card opacity-0">
          <div className="flex flex-col gap-[50px]">
            <span>
              <h1 className="before ">Search engine</h1>
              <h1 className="before w-[250px]">optimization</h1>
            </span>
            <button className="flex items-center gap-3 cursor-pointer">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ rotate: 30 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                <path
                  d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                  fill="#B9FF66"
                />
              </motion.svg>
              <span className="cursor-pointer">Learn more</span>
            </button>
          </div>
          <img
            src="/assets/Illustration_Card_1.svg"
            alt="Illustration_Card_1.svg"
          />
        </div>
        <div className=" bg-brand_1 card opacity-0">
          <div className="flex flex-col gap-[50px]">
            <span>
              <h1 className="before before:bg-brand_3">Pay-per-click</h1>
            </span>
            <button className="flex items-center gap-3">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ rotate: 30 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                <path
                  d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                  fill="#B9FF66"
                />
              </motion.svg>
              <span>Learn more</span>
            </button>
          </div>
          <img
            src="/assets/Illustration_Card_2.svg"
            alt="Illustration_Card_2.svg"
          />
        </div>
        <div className=" bg-brand_2 card opacity-0">
          <div className="flex flex-col gap-[50px]">
            <span>
              <h1 className={"before before:bg-brand_3 before:rounded-bl-none"}>
                Social Media
              </h1>
              <h1
                className={
                  "before before:bg-brand_3 w-[200px] before:rounded-t-none"
                }
              >
                Marketing
              </h1>
            </span>
            <button className="flex items-center gap-3 text-brand_3">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ rotate: 30 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="#F3f3f3" />
                <path
                  d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                  fill="#191A23"
                />
              </motion.svg>
              <span>Learn more</span>
            </button>
          </div>
          <img
            src="/assets/Illustration_Card_3.svg"
            alt="Illustration_Card_3.svg"
          />
        </div>
        <div className=" bg-brand_3 card opacity-0">
          <div className="flex flex-col gap-[50px]">
            <span>
              <h1 className="before">Email Marketing</h1>
            </span>
            <button className="flex items-center gap-3">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ rotate: 30 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                <path
                  d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                  fill="#B9FF66"
                />
              </motion.svg>
              <span>Learn more</span>
            </button>
          </div>
          <img
            src="/assets/Illustration_Card_4.svg"
            alt="Illustration_Card_4.svg"
          />
        </div>
        <div className=" bg-brand_1 card opacity-0">
          <div className="flex flex-col gap-[50px]">
            <span>
              <h1 className={"before before:bg-brand_3"}>Content Creation</h1>
            </span>
            <button className="flex items-center gap-3">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ rotate: 30 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                <path
                  d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                  fill="#B9FF66"
                />
              </motion.svg>
              <span>Learn more</span>
            </button>
          </div>
          <img
            src="/assets/Illustration_Card_5.svg"
            alt="Illustration_Card_5.svg"
          />
        </div>
        <div className=" bg-brand_2 card opacity-0">
          <div className="flex flex-col gap-[50px]">
            <span>
              <h1 className={"before before:bg-brand_1 before:rounded-bl-none"}>
                Analytics and
              </h1>
              <h1
                className={
                  "before before:bg-brand_1 before:rounded-t-none before:w-[170px]"
                }
              >
                Tracking
              </h1>
            </span>
            <button className="flex items-center gap-3 text-brand_3 cursor-pointer z-50">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ rotate: 30 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="#F3f3f3" />
                <path
                  d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                  fill="#191A23"
                />
              </motion.svg>
              <span>Learn more</span>
            </button>
          </div>
          <img
            src="/assets/Illustration_Card_6.svg"
            alt="Illustration_Card_6.svg"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AboutUs;
