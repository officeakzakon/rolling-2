import Image from "next/image";
import React from "react";

const whyItems = [
  {
    title: "Обещают вернуть деньги в криптовалюте",
    description:
      "Мошенники используют рабочий метод Rolling Reserve и предлагают вернуть деньги в криптовалюте. Чаще всего они просят открыть криптокошелёк с «специальным» протоколом на сайте, которым управляют сами, а затем заплатить за активацию кошелька. После придумывают новые причины для выманивания средств.",
  },
  {
    title: "Оказывают услуги без договора",
    description:
      "Если компания не заключила с вами договор в начале сотрудничества — это мошенники. Проверенная юридическая фирма всегда сперва заключает договор, а после оказывает какие-либо услуги. Перед работой следует проверить данные компании по реестру.",
  },
  {
    title: "Работают без расходов и только за процент",
    description:
      "Мошенники говорят клиентам, что платить за юридические услуги до момента получения денег  не нужно. Затем, в 99% случаев такие  «мошенники-юристы» придумывают непредвиденные расходы и требуют оплатить разного рода пошлины, чтобы получить деньги с клиента. Итог такой работы всегда один — потеря денег.",
  },
];

const SlideFive = () => {
  return (
    <div className="mt-[40px] bg-custom-black-3 py-[120px] rounded-[20px] px-[20px] flex gap-6 max-md:flex-col">
      <Image
        className="flex flex-col w-full max-md:hidden"
        width={400}
        height={800}
        src={"/images/main-page/slide-4/slide-4-1.png"}
        alt={""}
      />
      <div className="flex flex-col w-full">
        <p className="text-custom-red-1 text-[20px] font-bold text-center">
          Популярные схемы обмана
        </p>
        <h2 className="text-[42px] text-center text-white font-bold mt-5 max-md:text-[30px]">
          Как обманывают жулики через Rolling Reserve?
        </h2>
        <ul className="flex flex-col gap-5 mt-[20px]">
          {whyItems.map((item, index) => (
            <li className="flex w-full gap-5" key={`${item.title} ${index}`}>
              <div className="min-w-[40px] w-[40px] h-[40px] bg-custom-red-1 rounded-full flex justify-center items-center">
                <Image
                  className="flex w-[30px] h-[30px] mx-auto"
                  width={30}
                  height={30}
                  src={"/images/main-page/slide-5/exclamation-triangle.svg"}
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
    </div>
  );
};

export default SlideFive;
