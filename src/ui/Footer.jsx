import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Footer() {
  const container = useRef(null);
  const isInView = useInView(container, { once: false });

  const controls = useAnimation();
  useEffect(() => {
    if (isInView) controls.start("anime");
    else controls.start("init");
  }, [controls, isInView]);

  return (
    <motion.footer className="Laptops:px-[200px]" ref={container}>
      <motion.div
        variants={{
          init: { x: 0, opacity: 0, y: "100%" },
          anime: { x: 0, opacity: 1, y: 0 },
        }}
        initial="init"
        animate={controls}
        className="bg-brand_2 rounded-t-3xl flex-col px-5 py-7 text-brand_3"
      >
        <div className="flex items-center justify-between flex-col gap-7 Laptops:gap-0 Laptops:flex-row">
          <div className="flex gap-3 items-center font-medium text-[2rem]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_903_228)">
                <path
                  d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
                  className="fill-brand_3"
                />
              </g>
              <defs>
                <clipPath id="clip0_903_228">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Positivus</span>
          </div>
          <ul className="flex items-center gap-[1.2rem] ">
            <li className="[&>a]:hover:text-brand_1 duration-500">
              <a href="#">About Us</a>
            </li>
            <li className="[&>a]:hover:text-brand_1 duration-500">
              <a href="#">Services</a>
            </li>
            <li className="[&>a]:hover:text-brand_1 duration-500">
              <a href="#">Use Cases</a>
            </li>
            <li className="[&>a]:hover:text-brand_1 duration-500">
              <a href="#">Pricing</a>
            </li>
            <li className="[&>a]:hover:text-brand_1 duration-500">
              <a href="#">Blog</a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="15" fill="white" />
                <path
                  d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z"
                  fill="black"
                />
                <path
                  d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z"
                  fill="black"
                />
                <path
                  d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="15" fill="white" />
                <path
                  d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex items-center py-10 flex-col gap-7 Laptops:gap-0 Laptops:flex-row">
          <div className="Laptops:w-1/2 flex flex-col gap-5">
            <h4 className="before before:w-[120px] before:-left-1 text-[1.2rem] text-brand_2 ">
              Contact us:
            </h4>
            <h3>Email: info@positivus.com</h3>
            <h3>Phone: 555-567-8901</h3>
            <h3 className="text-balance w-1/2">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </h3>
          </div>
          <div className="flex bg-[#292A32] py-7 px-4 rounded-xl  flex-col gap-5 Laptops:gap-3 Laptops:flex-row w-full Laptops:w-auto">
            <input
              type="email"
              name="email"
              id="Email"
              placeholder="Email"
              className="bg-transparent border-2 border-brand_3 px-3 py-4 Laptops:py-0 rounded-xl duration-500"
            />
            <button className="py-[15px] px-[15px] Laptops:px-[30px] rounded-xl bg-brand_1 duration-500 text-brand_2 hover:bg-opacity-50">
              Subscribe to news
            </button>
          </div>
        </div>
        <hr className="bg-brand_3 h-[1px] w-full rounded-md my-3" />
        <div className="flex items-center justify-between py-3 flex-col gap-7 Laptops:gap-0 Laptops:flex-row">
          <h2>© {new Date().getFullYear()} Positivus. All Rights Reserved.</h2>
          <a href="#privcy" className="underline">
            Privacy Policy
          </a>
        </div>
        <p className="text-center mt-[20px] Laptops:mt-0">
          Coding by{" "}
          <a href="https://github.com/dola5xd" className="underline">
            Adel Yasser
          </a>
          , and figma file from
          <a
            href="https://www.figma.com/@olgaaverchenko"
            className="underline ml-1"
          >
            Olga
          </a>
        </p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
