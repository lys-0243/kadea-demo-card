import React, { useState } from "react";
import LabelField from "./LabelField";
import { inputData } from "../../lib/types";

export default function InputForm() {
  const [data, setData] = useState<inputData>({
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const field = e.target.name;
    if (
      ["name", "cardNumber", "expiryMonth", "expiryYear", "cvc"].includes(field)
    ) {
      setData({
        ...data,
        [field]: value,
      });
    }
  };

  return (
    <>
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
            value={data.cardNumber}
            onChange={(e) => handleChange(e)}
            required
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
              type="number"
              maxLength={3}
              name="cvc"
              value={data.cvc}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>

        <div className="flex bg-blue-800 rounded justify-center items-center text-white font-bold py-2">
          <input type="submit" value="Confirmer" />
        </div>
      </form>
    </>
  );
}
