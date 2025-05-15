import React from 'react'

 type Props = {
    nom:string
     age:number
}

export default function Welcome({nom, age}: Props) {
  return (
    <h1 className='text-3xl'>Bonjour {nom}, {age < 17? 'tu es mineur': 'tu es majeur'}  </h1>
  )
}