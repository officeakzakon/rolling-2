import Image from "next/image";
import React from "react";

const stepsItems = [
  {
    imageUrl: "/images/main-page/slide-2/1.svg",
    title: "Сбор данных платежей",
    description:
      "Для отслеживания платежей потребуются выписки из банка или счёта на бирже, откуда проводились транзакции",
  },
  {
    imageUrl: "/images/main-page/slide-2/9.svg",
    title: "Юридическое сопровождение",
    description:
      "Вам будет предоставлен юридический специалист, который компетентен оказать помощь по процедуре Rolling Reserve",
  },
  {
    imageUrl: "/images/main-page/slide-2/3.svg",
    title: "Анализ и отслеживание платежей",
    description:
      "Путём обращения в службу финансового мониторинга вашего банка/криптовалютной биржи будет проведено расследование и установлен счёт конечного получателя средств",
  },
  {
    imageUrl: "/images/main-page/slide-2/4.svg",
    title: "Подача запроса в банк",
    description:
      "Направление запроса в банк получателя, где открыт счёт брокера. Запрос подаётся на наличие платежей в данном банке и активности счёта брокерской компании",
  },
  {
    imageUrl: "/images/main-page/slide-2/5.svg",
    title: "Направление исков к владельцу счёта",
    description:
      "После подтверждения банком наличия транзакций и активности счёта компании подаются иски в адрес владельца счёта. Иск может быть подан на личные средства, на невыплаченную прибыль и на моральную компенсацию",
  },
  {
    imageUrl: "/images/main-page/slide-2/6.svg",
    title: "Обращение к финансовому регулятору государства",
    description:
      "Направление запроса к финансовому регулятору государства, где находится банк с требованием компенсировать утерянные средства. К запросу прилагается ответ банка",
  },
  {
    imageUrl: "/images/main-page/slide-2/7.svg",
    title: "Решение регулирующего органа",
    description:
      "Регулирующий орган выносит решение по делу клиента, документ публикуется на сайте. В случае, если решение положительное — это гарантия на 100%, что средства будут компенсированы клиенту.  В документе указываются правовые акты вердикта и дальнейшие шаги по переводу средств",
  },
  {
    imageUrl: "/images/main-page/slide-2/8.svg",
    title: "Получение компенсации от банка",
    description:
      "Решение финансового регулятора передаётся в банк, где у компании открыт счёт. Клиенту необходимо открыть транзитный счёт для перечисления компенсации со счёта брокерской компании на личный счёт открытый в банке. После, средства переводятся по системе SWIFT на банковский счёт клиента в его страну",
  },
];

const SlideTwo = () => {
  return (
    <div className="mt-[40px] bg-custom-black-3 py-[120px] rounded-[20px] px-[20px]">
      <p className="text-custom-green-1 text-[20px] font-bold text-center">
        Этапы проведения процедуры
      </p>
      <h2 className="text-[42px] text-center text-white font-bold mt-5 max-md:text-[30px]">
        Механизм проведения процедуры Rolling Reserve
      </h2>
      <ul className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-[500px]:grid-cols-1 mt-[20px] items-start">
        {stepsItems.map((item, index) => (
          <li
            className=" flex flex-col items-center justify-center text-center gap-5"
            key={`${item.title} ${index}`}
          >
            <div className="bg-custom-green-1 w-[65px] h-[65px] rounded-full flex justify-center items-center">
              <Image width={30} height={30} src={item.imageUrl} alt={""} />
            </div>
            <span className="text-white text-[18px] font-bold">
              {index + 1}. {item.title}
            </span>
            <p className="text-custom-grey-2">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideTwo;
