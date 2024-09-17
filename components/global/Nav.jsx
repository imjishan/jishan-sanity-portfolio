import Link from "next/link";
import { Links, Footerlinks } from "./Navdata";
import { motion } from "framer-motion";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (index) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + index * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};
const slideIn = {
  initial: {
    opacity: 0,
    y: 30,
    x: -20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 1.2 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};
const Nav = () => {
  return (
    <div
      className="h-full
    pt-20
    pr-10
    pb-12
    pl-8
    box-border
    flex
    flex-col
    justify-between"
    >
      <div
        className="flex
      gap-2
      flex-col"
      >
        {Links.map((link, index) => {
          return (
            <div key={index} className="">
              <motion.div
                custom={index}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <Link
                  href={link.href}
                  className="text-black
                text-3xl"
                >
                  {link.title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div
        className="flex
      flex-wrap"
      >
        {Footerlinks.map((link, i) => {
          return (
            <motion.a
              key={`f_${i}`}
              className="w-1/2
              text-black
              no-underline
              text-[14px]"
              // classname finished
              href={link.href}
              target="_blank"
              variants={slideIn}
              custom={i}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              {link.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};
export default Nav;