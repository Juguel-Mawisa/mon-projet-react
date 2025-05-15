import  { useEffect, useState } from 'react'

type Props = {}

export default function AutoColor({}: Props) {
    const [color, setColor] = useState("red")

    useEffect(()=>{
        const interval = setInterval(() => {
      setColor((prev) => (prev === "red" ? "green" : "red"));
    }, 1000);
    return () => clearInterval(interval);
    },[])
  return (
       <p style={{ color }} className="text-xl font-bold">
      Couleur automatique : {color}
    </p>
  )
}