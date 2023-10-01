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
            "fixed inset-0 flex min-h-screen items-center justify-center z-50",
            "lg:hidden"
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classNames(
              "fixed inset-0 bg-default-400/30 backdrop-blur-sm",
              "dark:bg-dark/30"
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
              "bg-light w-11/12 mx-auto rounded-lg shadow-lg z-50",
              "sm:max-w-sm",
              "dark:bg-default-900 dark:border dark:border-default-800"
            )}
          >
            <div className="flex flex-col p-3">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
