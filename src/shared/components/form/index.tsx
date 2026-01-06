import {
  Button,
  CircularProgress,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "./helpers/validationSchema";
import { FormUl, FormWrap } from "./styles";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toUpper } from "./helpers/toUpper";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { whiteTheme } from "shared/themes/white-theme";
import { WhiteBackground } from "shared/styles/styles";
import { sendDataBot } from "@/app/api/sendDataBot";

interface IProps {
  onAcceptFrom?: () => void;
}

interface IInputOptions {
  bigLitters?: boolean;
  setStartPlus?: boolean;
}

const initialValues = {
  firstName: "",
  email: "",
  phone: "",
  lostMoney: "",
  lostMoneySelect: "",
  workWithOther: "Нет",
  hostName: "",
};

const lostMoney = {
  title: "Потеря средств",
  items: [
    "Биржевой брокер",
    "Криптоинвестиции",
    "Казино",
    "Интернет мошенничество",
    "Другое",
  ],
};
const workWithOtherContent = {
  title: "Вы сотрудничали с юридическими компаниями?",
  items: ["Да", "Нет"],
};

const plusRegex = /^\+.*/;

const Form: React.FC<IProps> = (props) => {
  const { onAcceptFrom = () => null } = props;
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const sendForm = useCallback(async (values: typeof initialValues) => {
    const parsedValues = Object.entries(values)
  .map(([key, value]) => `${key}: ${value}`)
  .join("\n");
    await sendDataBot(parsedValues);
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSending(true);
      const finalValues = {
        ...values,
        lostMoneySelect: `${lostMoney.title} - ${values.lostMoneySelect}`,
        workWithOther: `${workWithOtherContent.title} - ${values.workWithOther}`,
      };
      await sendForm(finalValues);
      resetForm();
      setIsSending(false);
      onAcceptFrom();
      router.push("/thanks");
    },
  });

  useEffect(() => {
    const currentUrl = window.location.hostname;

    if (currentUrl) {
      formik.setFieldValue("hostName", currentUrl);
    }
  }, []);

  const phoneInput = (
    <>
      <PhoneInput
        countrySelectorStyleProps={{
          style: { height: "56px" },
          buttonStyle: { height: "56px" },
        }}
        inputStyle={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          height: "56px",
        }}
        defaultCountry="ua"
        value={formik.values.phone}
        onChange={(phone) => formik.setFieldValue("phone", phone)}
        className="w-full"
      />
    </>
  );

  const lostMoneySelect = (
    <WhiteBackground>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">{lostMoney.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={formik.values.lostMoneySelect}
          id="lostMoneySelect"
          name="lostMoneySelect"
          onChange={formik.handleChange}
        >
          {lostMoney.items.map((item, index) => (
            <MenuItem key={`${item}_${index}`} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </WhiteBackground>
  );

  const workWithOther = (
    <ThemeProvider theme={whiteTheme}>
      <FormControl className="workWithOther">
        <span>{workWithOtherContent.title}</span>
        <RadioGroup
          row
          id="workWithOther"
          name="workWithOther"
          value={formik.values.workWithOther}
          onChange={formik.handleChange}
        >
          {workWithOtherContent.items.map((item, index) => (
            <FormControlLabel
              key={`${item}_${index}`}
              value={item}
              control={<Radio />}
              label={item}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );

  const inputs = [
    {
      id: "firstName",
      label: "Фамилия Имя",
      className: "",
      options: { bigLitters: true },
    },
    { id: "phone", customComponent: phoneInput },
    {
      id: "email",
      label: "Email",
    },
    { id: "lostMoneySelect", customComponent: lostMoneySelect },
    {
      id: "lostMoney",
      label: "Сумма потери в USD (От 500 USD)",
    },
    {
      id: "workWithOther",
      customComponent: workWithOther,
    },
  ];

  const getValue = (value: string, options?: IInputOptions) => {
    let newValue = value;

    if (options) {
      const { bigLitters, setStartPlus } = options;
      if (bigLitters) {
        newValue = toUpper(newValue);
      }

      if (setStartPlus) {
        if (!plusRegex.test(newValue)) {
          newValue = `+${newValue}`;
        }
      }
    }

    return newValue;
  };

  // Country code
  useEffect(() => {
    const getCountryCode = async () => {
      const { data } = await axios({
        method: "GET",
        url: "https://ipapi.co/json/",
      });
      formik.setFieldValue("phone", data.country_calling_code);
    };

    getCountryCode();
  }, []);

  return (
    <>
      <FormWrap onSubmit={formik.handleSubmit}>
        <FormUl>
          {inputs.map((input, index) => {
            const id = input.id as keyof typeof initialValues;

            return (
              <li key={`${input.label}_${index}`}>
                {input.customComponent ? (
                  <div key={index}>{input.customComponent}</div>
                ) : (
                  <TextField
                    variant="filled"
                    label={input.label}
                    id={id}
                    name={id}
                    onChange={formik.handleChange}
                    value={getValue(
                      formik.values[id as keyof typeof initialValues],
                      input.options
                    )}
                  />
                )}
                {formik.errors[id] && formik.touched[id] ? (
                  <span className="error-text">{formik.errors[id]}</span>
                ) : null}
              </li>
            );
          })}
          <div>
            <Button
              disabled={isSending}
              className="formButton"
              variant="contained"
              type="submit"
            >
              {isSending ? <CircularProgress /> : "Оставить заявку"}
            </Button>
          </div>
        </FormUl>
      </FormWrap>
    </>
  );
};

export default Form;
