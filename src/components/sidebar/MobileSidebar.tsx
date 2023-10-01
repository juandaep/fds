import { classNames } from "@/utils/classNames";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect } from "react";

export const MobileSidebar: FC<MobileSidebarProps> = ({
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
            "z-30 px-6 fixed flex max-w-full top-[112px] inset-x-0 bottom-0 w-screen flex-col gap-2 pt-4 overflow-y-auto scrollbar-hide backdrop-blur-xl backdrop-saturate-150 bg-light/80",
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
