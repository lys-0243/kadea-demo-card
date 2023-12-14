import React from 'react'
import { NavLink } from 'react-router-dom'
import { appRoutes } from '../../lib/routes'
import InputForm from '../Form/InputForm'

export default function HomePage() {
  return (
    <section className='flex flex-row'>
      <div className=' bg-violet-700 w-[33%] h-screen'></div>
      <div className=' bg-white'><p className=' text-black'>Formulaire</p>
      <InputForm/>
      </div>
    </section>
  )
}
