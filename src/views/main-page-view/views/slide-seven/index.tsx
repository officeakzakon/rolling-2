import Image from "next/image";
import React from "react";

const whyItems = [
  {
    title: "",
    description:
      "Возврат финансов от черного брокера ранее казался невыполнимой миссией, особенно если компания была расположена в офшорной зоне, и работала без регуляции. В начале 2020 года, реальностью стало то, что практически во всех 100% случаев деньги можно было вернуть. Помогла восстановить справедливость обманутым трейдерам процедура Rolling Reserve, зарекомендовавшая себя с лучшей стороны.",
  },
  {
    title: "Особенности процедуры и нюансы ее проведения",
    description:
      "Возврат денег Роллинг Резерв – процедура, позволяющая отследить путь платежа клиента, определить, куда поступили средства в конечном результате и вернуть их, за счет подачи соответственного запроса в банк и финансовому регулятору. Для реализации возврата по данной процедуре, потерпевшему стоит обратиться в юридическую компанию, предоставив выписки по счету и доказательства обмана, далее специалисты изучат эту информацию, поэтапно реализуя процедуру возврата.",
  },
];

const SlideSeven = () => {
  return (
    <div className="mt-[40px] bg-custom-black-3 py-[120px] rounded-[20px] px-[20px] flex gap-6 max-md:flex-col">
      <Image
        className="flex flex-col w-full max-w-[300px] max-md:mx-auto"
        width={400}
        height={700}
        src={"/images/main-page/slide-7/slide-7-1.png"}
        alt={""}
      />
      <div className="flex flex-col w-full">
        <p className="text-custom-green-1 text-[20px] font-bold text-center">
          Подробная информация
        </p>
        <h2 className="text-[42px] text-center text-white font-bold mt-5 max-md:text-[30px]">
          Отзывы и обзор Rolling Reserve
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
      </div>
    </div>
  );
};

export default SlideSeven;
