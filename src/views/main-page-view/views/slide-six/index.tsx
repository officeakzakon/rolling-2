import DefaultButton from "@/shared/components/buttons/default-button";
import React from "react";

interface IProps {
  onLeaveApplication: () => void;
}

const videos = [
  "ELP22QcUb5s",
  "-P_1t6QgcqY",
  "Ehwy8GR02ZE",

  "7xDT2zBhEMQ",
  "QuL-XHxe0Cs",
  "Np7e35OhUyA",

  "qa5m6ie0bVA",
  "EAN7_wO1FIY",
  "IyA7-z-XvH4",

  "I0gUZyDcyGs",
  "YF6POh1cwN8",
  "FLD3JDdunDo",
];

const SlideSix = ({ onLeaveApplication }: IProps) => {
  return (
    <div id="review" className="mt-[50px] flex flex-col">
      <p className="text-custom-green-1 text-[20px] font-bold text-center">
        Реальные мнения клиентов
      </p>
      <h2 className="text-[42px] text-center text-white font-bold mt-5 max-md:text-[30px]">
        Отзывы о процедуре Rolling Reserve
      </h2>
      <ul className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-[500px]:grid-cols-1 mt-[20px]">
        {videos.map((item, index) => (
          <iframe
            key={`${item} ${index}`}
            className="flex w-full"
            src={`https://www.youtube.com/embed/${item}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ))}
      </ul>
      <div className="mt-[50px] justify-center items-center mx-auto">
        <DefaultButton
          onClick={onLeaveApplication}
          colorButton="green-1"
          sizeButton="medium-1"
        >
          Оставить заявку &raquo;
        </DefaultButton>
      </div>
    </div>
  );
};

export default SlideSix;
