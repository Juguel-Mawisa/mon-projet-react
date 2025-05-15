import { useState } from "react";


function getCouleurAleatoire() {
    const couleurs = ["red", "green", "blue", "orange", "purple", "pink", "teal"];
    const index = Math.floor(Math.random() * couleurs.length);
    return couleurs[index];
  }
  type Props = {}

export default function ColorBox({}: Props) {

    const [couleur, setCouleur] = useState("gray");
  return (
    <div className="space-y-4">
    <div
      className="w-40 h-40 rounded shadow"
      style={{ backgroundColor: couleur }}
    />
    <button
      onClick={() => setCouleur(getCouleurAleatoire())}
      className="bg-blue-500 text-black px-4 py-2 rounded"
    >
      Changer la couleur
    </button>
  </div>
  )
}