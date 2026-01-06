import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Короткое значение")
    .max(50, "Длинное значение")
    .required("Обязательное поле"),
  email: Yup.string().email("Неправильный емейл").required("Обязательное поле"),
  phone: Yup.string()
    .min(5, "Короткое значение")
    .max(25, "Длинное значение")
    .required("Обязательное поле"),
  lostMoney: Yup.string()
    .min(1, "Короткое значение")
    .required("Обязательное поле"),
  lostMoneySelect: Yup.string().required("Обязательное поле"),
  workWithOther: Yup.string().required("Обязательное поле"),
});
