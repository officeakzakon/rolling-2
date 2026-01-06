import Image from "next/image";
import React from "react";

const whyItems = [
  {
    title: "Оплата только за результат",
    description:
      "Расходы по работе оплачиваются в середине дела и только в том случае, если Финансовый регулятор вынесет положительное решение",
  },
  {
    title: "Эффективность на 99%",
    description:
      "Если банковский счёт компании активен, а брокер работает без лицензии, то при рассмотрении иска банком в приоритете становится клиент, так как в ином случае он может лишиться своей лицензии, имея, дело с нелегальным брокером",
  },
  {
    title: "Безопасная работа",
    description:
      "При работе заключается договор на оказание услуг, в котором прописываются все детали работы, в том числе расходы, которые оплачиваются на официальные реквизиты компании",
  },
];

const SlideFour = () => {
  return (
    <div className="mt-[40px] bg-custom-black-3 py-[120px] rounded-[20px] px-[20px] flex gap-6 max-md:flex-col">
      <div className="flex flex-col w-full">
        <p className="text-custom-green-1 text-[20px] font-bold text-center">
          Преимущества процедуры
        </p>
        <h2 className="text-[42px] text-center text-white font-bold mt-5 max-md:text-[30px]">
          Почему Rolling Reserve?
        </h2>
        <ul className="flex flex-col gap-5">
          {whyItems.map((item, index) => (
            <li className="flex w-full gap-5" key={`${item.title} ${index}`}>
              <div className="min-w-[40px] w-[40px] h-[40px] bg-custom-green-1 rounded-full flex justify-center items-center">
                <Image
                  className="flex w-full"
                  width={33}
                  height={33}
                  src={"/images/main-page/slide-4/check.svg"}
                  alt={""}
                />
              </div>
              <div className="flex w-full flex-col gap-4">
                <h4 className="text-white text-[18px] font-bold">
                  {item.title}
                </h4>
                <p className="text-custom-grey-2">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Image
        className="flex flex-col w-full"
        width={400}
        height={800}
        src={"/images/main-page/slide-4/slide-4-1.png"}
        alt={""}
      />
    </div>
  );
};

export default SlideFour;
