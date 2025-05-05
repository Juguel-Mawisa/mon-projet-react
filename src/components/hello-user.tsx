

type HelloUserProps = {
    prenom: string
}

export default function HelloUser({prenom}: HelloUserProps) {
  return (
    <h1 className='text-2xl font-light bg-amber-600 p-9'> Bonjour, {prenom} ! 👋</h1>
  )
}