"use client";
import React from "react";
import Image from "next/image";

import { ThanksBgc, ThanksContent, ThanksWrap } from "./styles";
import { Button } from "@mui/material";
import Link from "next/link";

const thanksPage = {
  title: "СПАСИБО! МЫ ПОЛУЧИЛИ ВАШУ ЗАЯВКУ!",
  description:
    "В ближайшее время с вами свяжется наш специалист для уточнения деталей вашей задачи.",
  buttonText: "ВЕРНУТЬСЯ НА ГЛАВНУЮ",
  link: "/",
};

const ThanksPageView = () => {
  return (
    <ThanksBgc>
      <ThanksWrap>
        <Image src={"/images/main-page/logosvg.svg"} alt="logo" width={120} height={80} />
        <ThanksContent>
          <h1>{thanksPage.title}</h1>
          <p>{thanksPage.description}</p>
          <Link href={thanksPage.link}>
            <Button className="thanks-btn" variant="contained">
              {thanksPage.buttonText}
            </Button>
          </Link>
        </ThanksContent>
      </ThanksWrap>
    </ThanksBgc>
  );
};

export default ThanksPageView;
