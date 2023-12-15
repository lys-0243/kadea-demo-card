import React from "react";

export default function LabelField({
  htmlFor,
  labelText,
}: {
  htmlFor: string;
  labelText: string;
}) {
  return (
    <label htmlFor={htmlFor} className=" text-slate-600 text-sm uppercase">
      {labelText}
    </label>
  );
}
