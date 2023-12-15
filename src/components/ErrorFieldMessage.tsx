import React from 'react'

export default function ErrorFieldMessage({field, isHidden}:{field:string, isHidden:boolean}) {
  return (
    <div className={isHidden?' hidden':" text-red-500"}>
      <p >Erreur: Veuillez remplir el champ {field}</p>
    </div>
  )
}
