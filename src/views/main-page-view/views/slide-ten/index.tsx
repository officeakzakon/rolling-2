import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import { SliderWrapper } from "@/shared/styles/styles/sliders/styles";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const banks = [
  "/images/main-page/slide-10/1.png",
  "/images/main-page/slide-10/2.png",
  "/images/main-page/slide-10/3.png",
  "/images/main-page/slide-10/4.png",
  "/images/main-page/slide-10/5.png",
  "/images/main-page/slide-10/6.jpg",
  "/images/main-page/slide-10/7.png",
];

const SlideTen = () => {
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
      <h2 className="text-[42px] text-center text-white font-bold mt-5 max-md:text-[30px]">
        Криптобиржи
      </h2>
      {isLoad && (
        <SliderWrapper>
          <Slider className="items-center" {...settings}>
            {banks.map((item, index) => (
              <Image
                key={`${item} ${index}`}
                width={168}
                height={30}
                className="flex w-full  max-w-[160px] max-h-[40] mx-auto"
                src={item}
                alt=""
              />
            ))}
          </Slider>
        </SliderWrapper>
      )}
    </div>
  );
};

export default SlideTen;
