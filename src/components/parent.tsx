import { useState } from "react";
import Enfant from "./Enfant";

export default function Parent() {
  const [taches, setTaches] = useState<string[]>([]);

  const ajouterTache = (nouvelleTache: string) => {
    if (!nouvelleTache.trim()) return; // sécurité input vide
    setTaches([...taches, nouvelleTache]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold text-center mb-4">Liste des tâches</h2>

      <Enfant ajouterTache={ajouterTache} />

      <ul className="mt-4 list-disc list-inside text-gray-700">
        {taches.map((tache, index) => (
          <li key={index}>{tache}</li>
        ))}
      </ul>
    </div>
  );
}
