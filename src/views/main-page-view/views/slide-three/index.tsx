import Image from "next/image";
import React from "react";

const SlideThree = () => {
  return (
    <div className="mt-[50px] flex gap-x-5 justify-between max-md:flex-col max-md:justify-center">
      <div className="flex w-full h-full max-w-[450px] max-md:max-w-full">
        <Image
          className="w-full"
          width={230}
          height={500}
          src="/images/main-page/slide-3/3-bg.png"
          alt={""}
        />
      </div>

      <div className="flex flex-col w-full max-w-[600px] max-md:max-w-full max-md:text-center max-md:mt-[20px]">
        <p className="text-custom-green-1 text-[20px] font-bold text-center">
          Детальная информация
        </p>
        <h2 className="text-[42px] text-center text-white font-bold mt-5 max-md:text-[30px]">
          Что такое Rolling Reserve?
        </h2>
        <p className="text-custom-grey-2 text-[17px] max-md:mt-[20px]">
          Rolling Reserve — это процедура компенсации утерянных средств с
          банковского счёта компании путём подачи иска в адрес банка, где открыт
          счёт.  97% брокеров-мошенников используют альтернативные методы
          принятия средств, но в конечном итоге средства выводят на оффшорный
          банковский счёт. Требование на компенсацию средств можно подать по
          платежам совершённых на 3-тих лиц, банковские переводы, электронные
          деньги и криптовалюты. Компании намеренно используют такие методы
          принятия средств, чтобы клиенту усложнить процесс их возврата, так как
          правоохранительные органы и банки клиента бессильны в таких вопросах.
          Процедура эффективна благодаря тому, что исковые обращения подаются
          напрямую в банк той страны, где у компании открыт счёт и куда по итогу
          поступили средства. После рассмотрения запроса банком подаётся иск к
          Финансовому регулятору страны по месту нахождения банка. Надзорный
          орган является высшей структурой в решении таких споров. В случае,
          если орган выносит положительное решение — банк компенсирует средства
          клиенту изымая их со счёта компании.
        </p>
      </div>
    </div>
  );
};

export default SlideThree;
