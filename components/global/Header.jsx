"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Header/Button";
import { motion } from "framer-motion";
import Nav from "./Nav";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const variants = {
    open: {
      width: 350,
      height: 500,
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 96,
      height: 40,
      top: "0px",
      right: "0px",
      transition: { duration: 0.8, delay: 0.17, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const [isActive, setIsActive] = useState(false);
  // remove the below code if it does not work

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isActive &&
        !event.target.closest(".menu-box") &&
        !event.target.closest(".hamburger")
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  return (
    <div
      className="fixed
      right-8
      top-8"
    >
      <motion.div
        className="w-[350px]
          h-[520px]
          bg-[#c9fd74]
          rounded-3xl
          relative"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {/* navigation items */}

        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};
export default Header;