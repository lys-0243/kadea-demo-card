import React from "react";

export default function BackCard({cvc}: {cvc: string}) {
  return (
    <div className=" bg-white w-96 h-56 rounded-md shadow-2xl py-5">
      <div className=" bg-slate-900 h-10 "></div>
      <div className="flex px-3 py-2 bg-slate-400 mt-6 mx-8 rounded justify-end">
        <p className=" text-white">{cvc!=''? cvc: '000'}</p>
      </div>

      <div className="flex flex-col gap-[3px] mt-3">
        <div className=" h-[3px] mx-24 rounded-lg bg-slate-300"></div>
        <div className=" h-[3px] mx-24 rounded-lg bg-slate-300"></div>
        <div className=" h-[3px] mx-24 rounded-lg bg-slate-300"></div>
      </div>
    </div>
  );
}
