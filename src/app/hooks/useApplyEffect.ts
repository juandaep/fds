import { useEffect, useState } from "react";

export const useApplyEffect = () => {
  const [applyEffect, setApplyEffect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setApplyEffect(true);
      } else {
        setApplyEffect(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return applyEffect;
};
