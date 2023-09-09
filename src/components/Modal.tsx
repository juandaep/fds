import { classNames } from "@/utils/classNames";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import React, { FC, Fragment, useEffect } from "react";

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
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  const closeModalOverlayClick = () => {
    onClose();
  };

  return (
    <Fragment>
      <div className="relative z-10">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 0.1,
                },
              }}
              className={`fixed inset-0 ${
                isOpen ? "flex" : "hidden"
              } items-center justify-center z-50`}
            >
              <div
                className="fixed inset-0 bg-default-400 bg-opacity-30 backdrop-blur-sm"
                onClick={closeModalOverlayClick}
              ></div>

              <div className="overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        ease: "easeInOut",
                        duration: 0.4,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.75,
                      transition: {
                        ease: "easeInOut",
                        duration: 0.2,
                      },
                    }}
                    className="surface-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50"
                  >
                    <div className="py-4 px-6">{children}</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Fragment>
  );
};
