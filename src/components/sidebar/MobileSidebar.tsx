import { AnimatePresence, easeIn, motion } from "framer-motion";
import React, { FC, useEffect } from "react";
import { ComponentsNavbar } from "../navbar/ComponentsNavbar";

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
          className="fixed inset-0 top-24 flex min-h-screen items-center justify-center z-40"
        >
          <div className="fixed w-full h-full bg-white">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
