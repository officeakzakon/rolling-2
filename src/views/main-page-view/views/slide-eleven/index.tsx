import DefaultButton from "@/shared/components/buttons/default-button";
import Image from "next/image";
import React from "react";

interface IProps {
  onLeaveApplication: () => void;
}

const whyItems = [
  {
    title: "",
    description:
      "Заполните заявку для бесплатного анализа вашей ситуации и шансов на возврат средств по процедуре Rolling Reserve!",
  },
];

const SlideEleven = ({ onLeaveApplication }: IProps) => {
  return (
    <div className="mt-[40px] bg-custom-black-3 py-[120px] rounded-[20px] px-[20px] flex gap-6 max-md:flex-col">
      <Image
        className="flex flex-col w-full max-w-[500px] h-full max-h-[500px] max-md:mx-auto"
        width={500}
        height={600}
        src={"/images/main-page/slide-11/slide11-1.webp"}
        alt={""}
      />
      <div className="flex flex-col w-full">
        <p className="text-custom-green-1 text-[20px] font-bold text-center">
          Помощь в возврате денег
        </p>
        <h2 className="text-[42px] text-center text-white font-bold mt-5 max-md:text-[30px] max-md:text-[30px]">
          Получите консультацию по вашей проблеме
        </h2>
        <ul className="flex flex-col gap-5">
          {whyItems.map((item, index) => (
            <li className="flex w-full gap-5" key={`${item.title} ${index}`}>
              <div className="flex w-full flex-col gap-4 gap-4">
                <h4 className="text-white text-[18px] font-bold">
                  {item.title}
                </h4>
                <p className="text-custom-grey-2">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-[50px] justify-center items-center mx-auto">
          <DefaultButton
            onClick={onLeaveApplication}
            colorButton="green-1"
            sizeButton="medium-1"
          >
            Бесплатная консультация &#8628;
          </DefaultButton>
        </div>
      </div>
    </div>
  );
};

export default SlideEleven;
