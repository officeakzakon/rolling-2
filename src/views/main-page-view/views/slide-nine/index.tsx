import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import { SliderWrapper } from "@/shared/styles/styles/sliders/styles";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const banks = [
  "/images/main-page/slide-9/1.png",
  "/images/main-page/slide-9/2.png",
  "/images/main-page/slide-9/3.png",
  "/images/main-page/slide-9/4.png",
  "/images/main-page/slide-9/5.png",
  "/images/main-page/slide-9/6.png",
  "/images/main-page/slide-9/7.png",
  "/images/main-page/slide-9/8.png",
  "/images/main-page/slide-9/9.png",
  "/images/main-page/slide-9/10.png",
  "/images/main-page/slide-9/11.png",
  "/images/main-page/slide-9/12.png",
  "/images/main-page/slide-9/13.png",
];

const SlideNine = () => {
  const normalWith = 1260;
  const defaultSlides = 5;
  const { height, width } = useWindowDimensions();
  const contentWidth = width > normalWith ? normalWith : width;
  const [isLoad, setIsLoad] = useState(false);
  const calculateSlides = Math.floor(
    (contentWidth * defaultSlides) / normalWith
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: calculateSlides,
    slidesToScroll: calculateSlides > 3 ? 2 : 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  useEffect(() => {
    setIsLoad(true);
  }, []);

  return (
    <div className="mt-[50px] bg-custom-grey-3 py-[50px] rounded-[20px] px-[20px]">
      <p className="text-custom-green-1 text-[20px] font-bold text-center">
        Партнёры
      </p>
      <h2 className="text-[42px] text-center text-white font-bold mt-5 max-md:text-[30px]">
        Банки
      </h2>
      {isLoad && (
        <SliderWrapper>
          <Slider className="items-center" {...settings}>
            {banks.map((item, index) => (
              <Image
                key={`${item} ${index}`}
                width={168}
                height={30}
                className="flex w-full  max-w-[160px] mx-auto"
                src={item}
                alt=""
              />
            ))}
          </Slider>
        </SliderWrapper>
      )}

      {/* <ul className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-[500px]:grid-cols-1 mt-[20px] items-center"></ul> */}
    </div>
  );
};

export default SlideNine;
