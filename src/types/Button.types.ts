interface BtnProps {
  bgColor: string;
  textColor: string;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick: () => void;
}
