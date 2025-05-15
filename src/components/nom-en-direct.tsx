import { useState } from "react"


type Props = {}

export default function NomEnDirect({}: Props) {
    const [nom, setNom] = useState("")
    return (
        <div className="space-y-2">
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Entre ton nom"
            className="border p-2 rounded"
          />
          <p>Bonjour, {nom || "inconnu"} ! 👋</p>
        </div>
      );
}