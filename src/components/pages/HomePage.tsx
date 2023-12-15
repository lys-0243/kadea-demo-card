import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { appRoutes } from "../../lib/routes";
import InputForm from "../Form/InputForm";
import FrontCard from "../Card/FrontCard";
import BackCard from "../Card/BackCard";
import LabelField from "../Form/LabelField";
import { inputData } from "../../lib/types";
import ErrorFieldMessage from "../ErrorFieldMessage";

export default function HomePage() {
  const [data, setData] = useState<inputData>({
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });
  const [fieldError, setFieldError] = useState("");
  const [hidden, setHidden] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const field = e.target.name;

    if (["name", "expiryMonth", "expiryYear", "cvc"].includes(field)) {
      setHidden(true);
      setDisabled(false)
      setData({
        ...data,
        [field]: value,
      });
    } else if (field === "cardNumber") {
      setHidden(true);
      setDisabled(false)
      value = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();

      setData({
        ...data,
        [field]: value,
      });
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const field = e.target.name;
    if (value == "") {
      setFieldError(field);
      setHidden(false);
      setDisabled(true)
    } else setHidden(true);
  };

  return (
    <section className="flex relative">
      <div className="bg-gradient-to-br from-purple-900 via-blue-800 to-gray-800 w-[33%] h-screen"></div>
      <div className="flex bg-slate-50 h-screen w-full items-center justify-center">
        <form className="flex flex-col w-80 gap-5">
          <div className="flex flex-col">
            <LabelField htmlFor="name" labelText="Card Name" />
            <input
              className="w-[100%] h-10 border-2 border-gray-300 rounded px-2"
              placeholder="Votre Nom"
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              required
            />
          </div>

          <div className="flex flex-col">
            <LabelField htmlFor="name" labelText="Card Number" />
            <input
              className="w-[100%] h-10 border-2 border-gray-300 rounded px-2"
              placeholder="Card Number"
              type="text"
              name="cardNumber"
              maxLength={19}
              value={data.cardNumber}
              required
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
          </div>

          <div className="flex w-full gap-4">
            <div className="flex flex-col">
              <LabelField htmlFor="name" labelText="Exp.Date" />
              <input
                className=" w-[100%] h-10 border-2 border-gray-300 rounded px-2"
                placeholder="MM"
                maxLength={2}
                type="text"
                name="expiryMonth"
                value={data.expiryMonth}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div className="flex flex-col">
              <LabelField htmlFor="name" labelText="Exp.Year" />
              <input
                className="w-[100%] h-10 border-2 border-gray-300 rounded px-2"
                placeholder="YY"
                type="text"
                name="expiryYear"
                maxLength={2}
                value={data.expiryYear}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div className="flex flex-col">
              <LabelField htmlFor="name" labelText="cvc" />
              <input
                className="w-[100%] h-10 border-2 border-gray-300 rounded px-2"
                placeholder="eg. 123"
                type="text"
                maxLength={3}
                name="cvc"
                value={data.cvc}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>

          <div className={disabled? "flex bg-slate-500 cursor-not-allowed rounded justify-center items-center text-white font-bold py-2":"flex bg-blue-800 rounded justify-center items-center text-white font-bold py-2"}>
            <input type="submit" value="Confirmer" disabled={disabled} />
          </div>

          <div>
            <ErrorFieldMessage field={fieldError} isHidden={hidden} />
          </div>
        </form>
      </div>

      <div className="absolute top-[20%] left-[7%] flex flex-col gap-9">
        <FrontCard
          month={data.expiryMonth}
          year={data.expiryYear}
          name={data.name}
          cardNumber={data.cardNumber}
        />
        <div className=" ml-20">
          <BackCard cvc={data.cvc} />
        </div>
      </div>
    </section>
  );
}
