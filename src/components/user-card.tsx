

type Props = {
    nom: string
    email: string
}

export default function UserCard({nom, email}: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-semibold">{nom}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  )
}