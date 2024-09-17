"use client";
import { motion } from "framer-motion";
const Button = ({ isActive, setIsActive }) => {
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={handleClick} //handleClick function
      className="h-10
      w-24
      rounded-3xl
      cursor-pointer
      absolute
      top-0
      right-0
      overflow-hidden"
    >
      <motion.div
        className="relative
        h-full
        w-full"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="h-full
        flex
        items-center
        justify-center
        w-full
        bg-[#c9fd74]"
        >
          <p>MENU</p>
        </div>
        <div
          className="h-full
        flex
        items-center
        justify-center
        w-full
        bg-black
        text-white
        absolute
        top-full"
        >
          <p>CLOSE</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Button;