import { useEffect, useState } from "react";

export const useThemeMounted = () => {
  const [mounted, setMounted] = useState(false);
  //Ater mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  return mounted;
};
