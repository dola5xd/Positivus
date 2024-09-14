import Form from "./Form";

import { motion } from "framer-motion";

const Sun = (
  <motion.svg
    width="651"
    height="649"
    viewBox="0 0 651 649"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ rotate: { rotate: 360 } }}
    animate="rotate"
    transition={{
      duration: 60,
      repeat: Infinity,
      repeatDelay: 0,
      repeatType: "reverse",
    }}
  >
    <mask
      id="path-1-outside-1_341_594"
      maskUnits="userSpaceOnUse"
      x="-0.289063"
      y="-0.5"
      width="651"
      height="650"
      fill="black"
    >
      <rect fill="white" x="-0.289063" y="-0.5" width="651" height="650" />
      <path d="M325.641 162.061L346.068 0.5L345.909 163.337L386.445 5.60362L366.017 167.165L426.024 15.6514L385.488 173.545L464.007 30.6432L403.841 182.157L499.756 50.2603L421.077 193.162L532.632 74.343L436.876 206.08L562.475 102.253L450.761 220.913L588.489 133.673L462.73 237.499L610.353 168.122L472.625 255.362L627.749 204.964L480.126 274.341L640.356 243.719L485.233 294.118L648.017 283.751L487.786 314.213L650.57 324.42L487.786 334.628L648.017 365.09L485.233 354.883L640.356 405.121L480.126 374.659L627.749 444.036L472.625 393.638L610.353 480.878L462.73 411.501L588.489 515.328L450.761 427.928L562.475 546.747L436.876 442.76L532.632 574.657L421.077 455.838L499.756 598.58L403.841 466.684L464.007 618.197L385.488 475.455L426.024 633.189L366.017 481.676L386.445 643.396L345.909 485.503L346.068 648.5L325.641 486.779L305.213 648.5L305.213 485.503L264.676 643.396L285.264 481.676L225.257 633.189L265.794 475.455L187.274 618.197L247.44 466.684L151.526 598.58L230.205 455.838L118.49 574.657L214.405 442.76L88.8058 546.747L200.52 427.928L62.7923 515.328L188.551 411.501L40.9282 480.878L178.656 393.638L23.5326 444.036L171.155 374.659L10.9248 405.121L166.048 354.883L3.26441 365.09L163.495 334.628L0.710937 324.42L163.495 314.213L3.26441 283.751L166.048 294.118L10.9248 243.719L171.155 274.341L23.5326 204.964L178.656 255.362L40.9282 168.122L188.551 237.499L62.7923 133.673L200.52 220.913L88.8058 102.253L214.405 206.08L118.49 74.343L230.205 193.162L151.526 50.2603L247.44 182.157L187.274 30.6432L265.794 173.545L225.257 15.6514L285.264 167.165L264.676 5.60362L305.213 163.337V0.5L325.641 162.061Z" />
    </mask>
    <path
      d="M325.641 162.061L346.068 0.5L345.909 163.337L386.445 5.60362L366.017 167.165L426.024 15.6514L385.488 173.545L464.007 30.6432L403.841 182.157L499.756 50.2603L421.077 193.162L532.632 74.343L436.876 206.08L562.475 102.253L450.761 220.913L588.489 133.673L462.73 237.499L610.353 168.122L472.625 255.362L627.749 204.964L480.126 274.341L640.356 243.719L485.233 294.118L648.017 283.751L487.786 314.213L650.57 324.42L487.786 334.628L648.017 365.09L485.233 354.883L640.356 405.121L480.126 374.659L627.749 444.036L472.625 393.638L610.353 480.878L462.73 411.501L588.489 515.328L450.761 427.928L562.475 546.747L436.876 442.76L532.632 574.657L421.077 455.838L499.756 598.58L403.841 466.684L464.007 618.197L385.488 475.455L426.024 633.189L366.017 481.676L386.445 643.396L345.909 485.503L346.068 648.5L325.641 486.779L305.213 648.5L305.213 485.503L264.676 643.396L285.264 481.676L225.257 633.189L265.794 475.455L187.274 618.197L247.44 466.684L151.526 598.58L230.205 455.838L118.49 574.657L214.405 442.76L88.8058 546.747L200.52 427.928L62.7923 515.328L188.551 411.501L40.9282 480.878L178.656 393.638L23.5326 444.036L171.155 374.659L10.9248 405.121L166.048 354.883L3.26441 365.09L163.495 334.628L0.710937 324.42L163.495 314.213L3.26441 283.751L166.048 294.118L10.9248 243.719L171.155 274.341L23.5326 204.964L178.656 255.362L40.9282 168.122L188.551 237.499L62.7923 133.673L200.52 220.913L88.8058 102.253L214.405 206.08L118.49 74.343L230.205 193.162L151.526 50.2603L247.44 182.157L187.274 30.6432L265.794 173.545L225.257 15.6514L285.264 167.165L264.676 5.60362L305.213 163.337V0.5L325.641 162.061Z"
      stroke="black"
      strokeWidth="2"
      strokeMiterlimit="10"
      mask="url(#path-1-outside-1_341_594)"
    />
  </motion.svg>
);

const blackStar = (
  <motion.svg
    width="253"
    height="253"
    viewBox="0 0 253 253"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-1/4"
    variants={{ anime: { scale: 1, rotate: 360 }, init: { scale: 0 } }}
    initial="init"
    animate="anime"
    transition={{
      repeat: Infinity,
      duration: 1,
      repeatDelay: 5.5,
      repeatType: "mirror",
    }}
  >
    <path
      d="M171.102 82.0649L252.777 126.566L171.102 171.425L126.422 252.922L81.7418 171.425L0.0665586 126.566L81.7418 82.0649L126.422 0.210938L171.102 82.0649Z"
      fill="#191A23"
    />
  </motion.svg>
);

const smallStar = (
  <motion.svg
    width="253"
    height="253"
    viewBox="0 0 253 253"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-2/3 -left-20 scale-50"
    variants={{ anime: { scale: 0.5, rotate: 360 }, init: { scale: 0 } }}
    initial="init"
    animate="anime"
    transition={{
      repeat: Infinity,
      duration: 1,
      repeatDelay: 5,
      repeatType: "mirror",
    }}
  >
    <path
      d="M171.102 82.0649L252.777 126.566L171.102 171.425L126.422 252.922L81.7418 171.425L0.0665586 126.566L81.7418 82.0649L126.422 0.210938L171.102 82.0649Z"
      fill="#B9FF66"
    />
  </motion.svg>
);

function Contact() {
  return (
    <section className="p-[30px] Laptops:p-[100px] flex flex-col gap-[50px] overflow-hidden">
      <div className="flex items-center text-center flex-col gap-5 Laptops:gap-0 Laptops:text-start Laptops:flex-row Laptops:w-1/2 ">
        <h1 className="before before:w-[220px] Laptops:before:w-[220px] before:left-1/2 before:-translate-x-1/2 Laptops:before:-left-1 Laptops:before:translate-x-0 text-nowrap Laptops:w-[350px] ">
          Contact Us
        </h1>
        <p className="text-[1.2rem] font-medium text-balance">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="flex relative w-full bg-brand_3 p-[50px] Laptops:p-[100px] rounded-3xl overflow-hidden">
        <Form />
        <div className=" absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden Laptops:block">
          {Sun}
          {blackStar}
          {smallStar}
        </div>
      </div>
    </section>
  );
}

export default Contact;
