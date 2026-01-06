import Image from "next/image";
import React from "react";
import DefaultButton from "../buttons/default-button";

interface IProps {
  onLeaveApplication: () => void;
  onReadReview: () => void;
}

const Header = ({ onLeaveApplication, onReadReview }: IProps) => {
  return (
    <div className="flex justify-between gap-x-2 items-center py-5 max-md:flex-col max-md:gap-5">
      <Image
        width={378}
        height={96}
        src={"/images/main-page/logosvg.svg"}
        alt={"rolling reverse"}
      />
      <div className="flex gap-x-2">
        <DefaultButton onClick={onReadReview}>
          Читать отзывы &#8628;
        </DefaultButton>
        <DefaultButton onClick={onLeaveApplication} colorButton="green-1">
          Оставить заявку &raquo;
        </DefaultButton>
      </div>
    </div>
  );
};

export default Header;
