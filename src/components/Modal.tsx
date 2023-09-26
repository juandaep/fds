import { classNames } from "@/utils/classNames";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex min-h-screen items-center justify-center z-50">
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
              "dark:bg-default-900"
            )}
          >
            <div className="flex flex-col p-3">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
