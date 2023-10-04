import React, { useState, ReactNode, MouseEvent } from "react";

interface TooltipProps {
  content: ReactNode;
  direction?: "top" | "right" | "bottom" | "left";
  delay?: number;
  trigger?: "hover" | "click"; // Tambahkan properti trigger
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  direction = "top",
  delay = 400,
  trigger = "hover", // Atur default trigger ke "hover"
  children,
}) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);
  const [tooltipActive, setTooltipActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearTimeout(timeout);
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
      setActive(!active); // Toggle tooltip saat diklik
    }
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // Tambahkan event handler untuk klik
    >
      {children}
      {active && <div className={`Tooltip-Tip ${direction}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;
