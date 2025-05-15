import { useState } from "react"


type Props = {}

export default function FormExemple({}: Props) {
    const [email, setEmail] = useState<string>()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(`"Email soumis !" : ${email}`)
    }
 return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Envoyer
      </button>
    </form>
  );
}