import classNames from "classnames";
import React from "react";
interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  buttonType?: "button" | "submit";
  variant?: "primary" | "secondary";
  hasIcon?: boolean;
  onClick?: () => void;
}
const Button = ({
  className,
  children,
  buttonType = "button",
  variant,
  hasIcon = false,
  onClick
}: ButtonProps) => {
  const primaryClass =
    "bg-white py-2 pr-2 pl-4 text-xs uppercase hover:bg-transparent hover:text-white border-2 border-gray-400/0.8 transition-all duration-300";
  const secondaryClass =
    "bg-transparent py-2 pr-2 border-2 pl-4 text-white hover:text-black hover:bg-white/30 transition-all duration-300";
  const buttonClass =
    variant === "primary"
      ? primaryClass
      : variant === "secondary"
        ? secondaryClass
        : "";

  return (
    <button
      onClick={onClick}
      type={buttonType}
      className={classNames(
        className,
        buttonClass,
        "items-center rounded-full text-xs uppercase",
        {
          "inline-flex w-auto justify-between xl:text-left lg:w-48":
            hasIcon,
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
