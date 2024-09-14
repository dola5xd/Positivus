import TeamCard from "./TeamCard";
import {
  motion,
  stagger,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const TeamInfo = [
  {
    id: 1,
    avatar: "/assets/Team_1.png",
    name: "John Smith",
    position: "CEO and Founder",
    info: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    id: 2,
    avatar: "/assets/Team_2.png",
    name: "Jane Doe",
    position: "Director of Operations",
    info: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    id: 3,
    avatar: "/assets/Team_3.png",
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    info: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    id: 4,
    avatar: "/assets/Team_4.png",
    name: "Emily Johnson",
    position: "PPC Manager",
    info: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    id: 5,
    avatar: "/assets/Team_5.png",
    name: "Brian Williams",
    position: "Social Media Specialist",
    info: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    id: 6,
    avatar: "/assets/Team_6.png",
    name: "Sarah Kim",
    position: "Content Creator",
    info: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

function Team() {
  const container = useRef(null);
  const isInView = useInView(container);

  const controls = useAnimation();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      controls.start("reveal");
      animate(
        ".team-card",
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
      id="Team"
      className="py-[50] Laptops:p-[100px] flex flex-col gap-20"
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
        <h1 className="before before:w-[90px] before:left-1/2 before:-translate-x-1/2 Laptops:before:-left-1 Laptops:before:translate-x-0 text-nowrap Laptops:w-1/2 text-[2rem] ">
          Team
        </h1>
        <p className="font-medium text-[1.2rem] ">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies{" "}
        </p>
      </div>

      <div
        ref={scope}
        className="flex flex-wrap w-full gap-[30px] flex-col Laptops:flex-row px-[25px] Laptops:px-0"
      >
        {TeamInfo.map((e) => (
          <TeamCard data={e} key={e.id} />
        ))}
      </div>
      <div className=" flex items-end justify-end px-[30px]">
        <button className="btn-primary w-full Laptops:w-1/4">
          See all team
        </button>
      </div>
    </motion.section>
  );
}

export default Team;
