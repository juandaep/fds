import { useCloseOnEscape } from "@/app/hooks/useCloseOnEscape";
import { useHandleOverlayClick } from "@/app/hooks/useHandleOverlayClick";
import { classNames } from "@/utils/classNames";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = useHandleOverlayClick(onClose);
  useCloseOnEscape(isOpen, onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className={classNames(
            "fixed inset-0 z-50 flex min-h-screen items-center justify-center",
            "lg:hidden",
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classNames(
              "fixed inset-0 bg-default-400/30 backdrop-blur-sm",
              "dark:bg-dark/30",
            )}
            onClick={handleOverlayClick}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: "easeOut",
                duration: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: "easeIn",
                duration: 0.15,
              },
            }}
            className={classNames(
              "z-50 mx-auto w-11/12 rounded-lg bg-light shadow-lg",
              "sm:max-w-sm",
              "dark:border dark:border-default-800 dark:bg-default-900",
            )}
          >
            <div className="flex flex-col p-3">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
