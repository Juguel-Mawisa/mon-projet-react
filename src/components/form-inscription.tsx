import { useState } from 'react';

export default function FormulaireInscription() {
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    password: '',
    accepted: false,
  });

  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
    password: '',
    accepted: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    setErrors({ ...errors, [name]: '' }); // reset erreur au changement
  };
   const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: typeof errors = {
      firstName: '',
      email: '',
      password: '',
      accepted: '',
    };

    if (!form.firstName.trim()) newErrors.firstName = 'Le prénom est requis.';
     if (!form.email.trim()) {
      newErrors.email = 'L’email est requis.';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Format d’email invalide.';
    }

    if (!form.password.trim()) {
      newErrors.password = 'Le mot de passe est requis.';
    } else if (form.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères.';
    }

    if (!form.accepted) newErrors.accepted = 'Vous devez accepter les conditions.';

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) return;

    // succès
    setMessage(`Bienvenue ${form.firstName} ! Votre inscription est validée.`);

    setForm({
      firstName: '',
      email: '',
      password: '',
      accepted: false,
    });

    setErrors({
      firstName: '',
      email: '',
      password: '',
      accepted: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 space-y-4 bg-white p-6 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Inscription</h2>

      <div>
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={form.firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="accepted"
            checked={form.accepted}
            onChange={handleChange}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <span className="text-sm">J’accepte les conditions</span>
        </label>
        {errors.accepted && <p className="text-red-500 text-sm mt-1">{errors.accepted}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
      >
        S'inscrire
      </button>

      {message && (
        <p className="text-green-600 text-center font-medium">{message}</p>
      )}
    </form>
  );
}
