import  { useEffect, useState } from 'react'

type Props = {}

export default function FakeApi({}: Props) {
    const [data, setData] = useState<string>("Chargement")

    useEffect(() => {
    setTimeout(() => {
      setData("Voici des données simulées 🎉");
    }, 2000);
  }, [])

  return <p className="text-purple-600">{data}</p>;
    
  
}