import React from "react";

export default function FrontCard({month, year, name, cardNumber}: {month: string, year: string, name: string, cardNumber: string}) {
  return (
    <div className=" bg-gradient-to-tl from-slate-900 via-purple-900 to-slate-900 w-96 h-56 rounded-md shadow-2xl px-6 py-4 flex flex-col justify-between">
      <div className=" flex items-center gap-4">
        <div className=" bg-slate-100 h-12 w-12 rounded-full"></div>
        <div className=" border-slate-100 border-2 h-6 w-6 rounded-full"></div>
      </div>

      <div >
        <h2 className=" text-3xl text-white font-bold">{cardNumber!=''?cardNumber:'0000 0000 0000 0000'}</h2>
        <div className=" text-white flex uppercase font-medium justify-between text-lg">
          <p>{name!=''?name:'Votre Nom'}</p>
          <p>{month!=''?month:'MM'}/{year!=''?year:'YY'}</p>
        </div>
      </div>
    </div>
  );
}
