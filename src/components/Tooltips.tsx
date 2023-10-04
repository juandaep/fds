import React, { useState, ReactNode, MouseEvent } from "react";

interface TooltipProps {
  content: ReactNode;
  direction?: "top" | "right" | "bottom" | "left";
  delay?: number;
  timeout?: number;
  trigger?: "hover" | "click";
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  direction = "top",
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
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      {active && <div className={`Tooltip-Tip ${direction}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;
