import { classNames } from "@/utils/classNames";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useEffect } from "react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const MobileSidebar: FC<SidebarProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, onClose]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{
            x: 0,
          }}
          exit={{
            x: "-100%",
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className={classNames(
            "z-30 px-6 fixed flex max-w-full top-[104px] inset-x-0 bottom-0 w-screen flex-col gap-2 overflow-y-auto backdrop-blur-xl backdrop-saturate-150 bg-light/80",
            "dark:bg-dark/80",
            "lg:hidden"
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
