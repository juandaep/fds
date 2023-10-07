import { FC } from "react";

export const Button: FC<BtnProps> = ({
  bgColor,
  textColor,
  leftIcon,
  children,
  rightIcon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${bgColor} ${textColor} flex w-max items-center justify-center gap-3 rounded-lg px-4 py-2 text-base font-medium -tracking-[0.014em] shadow-md transition-colors hover:bg-primary-600 dark:hover:bg-primary-400 md:text-lg`}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
