import { classNames } from "@/utils/classNames";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

export const MobileSidebar: FC<MobileSidebarProps> = ({ isOpen, children }) => {
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
            "scrollbar-hide fixed inset-x-0 bottom-0 top-[112px] z-30 flex w-screen max-w-full flex-col gap-2 overflow-y-auto bg-light/80 px-6 pt-4 backdrop-blur-xl backdrop-saturate-150",
            "dark:bg-dark/80",
            "lg:hidden",
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
