import { useState } from 'react';

export default function FormulaireInscription() {
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, email, password } = form;

    if (!firstName || !email || !password) {
      alert("Tous les champs sont requis !");
      return;
    }

    alert(`Bienvenue ${firstName} !\nEmail : ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Inscription</h2>
      
      <input
        type="text"
        name="firstName"
        placeholder="Prénom"
        value={form.firstName}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={form.password}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
      >
        S'inscrire
      </button>
    </form>
  );
}

