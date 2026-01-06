import React, { ButtonHTMLAttributes, ReactNode } from "react";

const sizesButton = {
  "small-1": "text-[20px] px-4 py-2",
  "medium-1": "text-[16px] px-[30px] py-[15px]",
};

const colorsButton = {
  "grey-1": "text-custom-grey-1 border-[3px] border-custom-black-2",
  "green-1": "text-white bg-custom-green-1 border-[3px] border-custom-black-2",
};

interface IDefaultButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  sizeButton?: keyof typeof sizesButton;
  colorButton?: keyof typeof colorsButton;
}

const DefaultButton = ({
  children,
  className,
  sizeButton = "small-1",
  colorButton = "grey-1",
  ...otherButtonProps
}: IDefaultButton) => {
  return (
    <button
      className={`font-bold rounded-3xl ${sizesButton[sizeButton]} ${colorsButton[colorButton]} ${className}`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
