"use client";
import Header from "@/shared/components/header";
import Wrapper from "@/shared/components/wrapper";
import React, { useState } from "react";
import SlideOne from "./views/slide-one";
import SlideTwo from "./views/slide-two";
import SlideThree from "./views/slide-three";
import SlideFour from "./views/slide-four";
import SlideFive from "./views/slide-five";
import SlideSix from "./views/slide-six";
import SlideSeven from "./views/slide-seven";
import SlideEight from "./views/slide-eight";
import SlideNine from "./views/slide-nine";
import SlideTen from "./views/slide-ten";
import SlideEleven from "./views/slide-eleven";
import Footer from "@/shared/components/footer";
import FormModal from "@/shared/components/form-modal";
import { scrollToElement } from "@/shared/helpers/scrollToElement";

const MainPageView = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col w-full h-full bg-custom-black-1">
      {showModal && <FormModal onCloseFrom={() => setShowModal(false)} />}
      <Wrapper>
        <Header
          onLeaveApplication={() => setShowModal(true)}
          onReadReview={() => scrollToElement("review")}
        />
        <SlideOne
          onLeaveApplication={() => setShowModal(true)}
          onReadReview={() => scrollToElement("review")}
        />
        <SlideTwo />
        <SlideThree />
        <SlideFour />
        <SlideFive />
        <SlideSix onLeaveApplication={() => setShowModal(true)} />
        <SlideSeven />
        <SlideEight />
        <SlideNine />
        <SlideTen />
        <SlideEleven onLeaveApplication={() => setShowModal(true)}/>
        <Footer />
      </Wrapper>
    </div>
  );
};

export default MainPageView;
