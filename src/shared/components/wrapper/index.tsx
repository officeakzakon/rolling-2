import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

const Wrapper = ({ children }: IProps) => {
  return (
    <div className="max-w-screen-xl w-full px-[10px] mx-auto">{children}</div>
  );
};

export default Wrapper;
