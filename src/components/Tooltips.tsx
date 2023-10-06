import { motion } from "framer-motion";
import React, { MouseEvent, ReactNode, useState } from "react";

type TooltipProps = {
  content: ReactNode;
  direction?:
    | "top-start"
    | "top-center"
    | "top-end"
    | "right"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end"
    | "left";
  delay?: number;
  timeout?: number;
  trigger?: "hover" | "click";
  children: ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({
  content,
  direction = "top-center",
  delay = 400,
  timeout = 2000,
  trigger = "hover",
  children,
}) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeoutId = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearTimeout(timeoutId);
    setActive(false);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    event.persist();
    if (trigger === "hover") {
      showTip();
    }
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.persist();
    if (trigger === "hover") {
      hideTip();
    }
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.persist();
    if (trigger === "click") {
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, timeout);
    }
  };

  return (
    <motion.div
      className="Tooltip-Wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={`Tooltip-Tip ${direction}`}
        >
          {content}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Tooltip;
motion.div;
