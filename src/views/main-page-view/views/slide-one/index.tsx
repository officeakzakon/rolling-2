import DefaultButton from "@/shared/components/buttons/default-button";
import Image from "next/image";
import React from "react";

interface IProps {
  onLeaveApplication: () => void;
  onReadReview: () => void;
}

const SlideOne = ({ onLeaveApplication, onReadReview }: IProps) => {
  return (
    <div className="flex gap-x-[10px] justify-between max-md:flex-col max-md:justify-center">
      <div className="flex flex-col gap-y-[50px] my-auto max-md:text-center">
        <h1 className="text-[60px] text-white font-bold max-md:text-[40px]">
          Rolling Reserve - процедура возврата денег
        </h1>
        <div className="flex gap-x-[20px] max-w-[350px] max-md:justify-center max-md:max-w-full">
          <div className="bg-custom-grey-2 w-[2px]" />
          <p className="text-custom-grey-2 text-[24px] leading-[36px] w-full">
            Rolling Reserve — это процедура возврата денег из брокерских
            компаний путём подачи исков в адрес банка или криптовалютной биржи,
            где у компании открыт счёт.
          </p>
        </div>
        <div className="flex gap-x-2 max-md:justify-center">
          <DefaultButton
            onClick={onReadReview}
            colorButton="green-1"
            sizeButton="medium-1"
          >
            Видео отзывы &#8628;
          </DefaultButton>
          <DefaultButton onClick={onLeaveApplication} sizeButton="medium-1">
            Консультация &raquo;
          </DefaultButton>
        </div>
        <p className="flex items-center gap-x-2 text-custom-grey-2 max-md:justify-center">
          <Image
            width={30}
            height={30}
            src={"/images/main-page/slide-1/yellow-cloud.svg"}
            alt={"cloud"}
          />
          Пошаговая инструкция процедуры Rolling Reserve
        </p>
      </div>
      <div className="flex w-full h-full mx-auto items-center justify-center max-md:mt-[30px]">
        <Image
          className="rounded-[30px] "
          width={390}
          height={840}
          src={"/images/main-page/slide-1/bg-1.png"}
          alt={"rolling reverse"}
        />
      </div>
    </div>
  );
};

export default SlideOne;
