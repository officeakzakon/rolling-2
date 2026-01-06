import Image from "next/image";
import React from "react";

const contactsItems = [
  {
    imgUrl: "/images/footer/location.svg",
    text: "207 Waterloo Rd, London SE1 8XD, Великобритания ",
  },
  { imgUrl: "/images/footer/mail.svg", text: "support@rollingreserv.info" },
  {
    imgUrl: "/images/footer/phone.svg",
    imgUrls: ["/images/footer/tele.png", "/images/footer/what.png"],
    text: "+447840133428",
  },
];

const Footer = () => {
  return (
    <div className="flex py-[50px] w-full text-custom-grey-2 gap-5 max-md:flex-col max-md:justify-center">
      <div className="flex flex-col w-full max-md:justify-center max-md:items-center">
        <Image
          width={378}
          height={96}
          src={"/images/main-page/logosvg.svg"}
          alt={"rolling reverse"}
        />
        <p>
          Rolling Reserve — это процедура возврата денег из брокерских компаний
          путём подачи исков к криптовалютным биржам и банкам, где у компании
          открыты счёта.
        </p>
      </div>
      <div className="flex flex-col w-full max-md:items-center">
        <span className="text-white font-bold text-[20px]">Контакты</span>
        <ul className="flex flex-col max-md:justify-center max-md:items-center gap-2">
          {contactsItems.map((item, index) => (
            <li
              className="flex w-full items-center gap-3 max-md:justify-center max-md:items-center"
              key={`${item.text} ${index}`}
            >
              {item.imgUrl && (
                <Image
                  className="flex w-[30px] h-[30px]"
                  width={30}
                  height={30}
                  src={item.imgUrl}
                  alt={""}
                />
              )}

              <p className=" flex ">{item.text}</p>

              {item.imgUrls &&
                item.imgUrls.map((imgUrl, imgIndex) => (
                  <Image
                    key={`${imgUrl} ${imgIndex}`}
                    className="flex w-[30px] h-[30px]"
                    width={30}
                    height={30}
                    src={imgUrl}
                    alt={""}
                  />
                ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
