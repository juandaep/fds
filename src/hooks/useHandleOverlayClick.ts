import React from "react";

export const useHandleOverlayClick = (onClose: () => void) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return handleOverlayClick;
};
