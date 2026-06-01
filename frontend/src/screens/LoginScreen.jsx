import React, { useState } from 'react';

export default function LoginScreen() {
  // Lokale Zustände (States) für die Formularfelder und Fehlermeldungen
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Schritt 19: Clientseitige Validierungs-Logik beim Absenden
  const handleSubmit = (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite
    setError('');
    setSuccess(false);

    // 1. Einfache Prüfung auf Pflichtfelder
    if (!email || !password) {
      setError('Bitte füllen Sie alle Felder aus.');
      return;
    }

    // 2. Validierung des E-Mail-Formats via Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }

    // 3. Passwort-Längenbeschränkung (Sicherheitsrichtlinie)
    if (password.length < 6) {
      setError('Das Passwort muss aus mindestens 6 Zeichen bestehen.');
      return;
    }

    // Wenn alle clientseitigen Prüfungen bestanden sind:
    setSuccess(true);
    console.log('Clientseitige Validierung erfolgreich! Daten bereit für PHP:', { email, password });
  };

  return (
    <div class="w-full max-w-md mx-auto bg-[#2d2d2d] p-8 rounded-lg shadow-xl border border-gray-700">
      
      <div class="text-center mb-8">
        <h2 class="text-3xl font-black text-[#ff6600] tracking-wider">ALPHA RENT</h2>
        <p class="text-gray-400 text-sm mt-1">Anmeldung zum Systemkomponenten-Mockup</p>
      </div>

      {error && (
        <div class="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-200 text-sm rounded-md flex items-center gap-2 animate-pulse">
          <span>⚠️</span> {error}
        </div>
      )}

      {success && (
        <div class="mb-4 p-3 bg-green-900/50 border border-green-500 text-green-200 text-sm rounded-md flex items-center gap-2">
          <span>✅</span> Login erfolgreich! (Simulation valide)
        </div>
      )}

      <form onSubmit={handleSubmit} class="space-y-6">
        
        <div>
          <label class="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">E-Mail-Adresse</label>
          <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="max.mueller@mail.de"
            class="w-full px-4 py-2.5 bg-[#1a1a1a] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition text-sm"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Passwort</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            class="w-full px-4 py-2.5 bg-[#1a1a1a] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition text-sm"
          />
        </div>

        <button 
          type="submit" 
          class="w-full py-3 bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold rounded-md shadow-lg transition duration-150 text-sm uppercase tracking-wider">
          Formular prüfen & Einloggen
        </button>

      </form>

      <div class="mt-6 pt-4 border-t border-gray-800 text-center text-[11px] text-gray-500 space-y-1">
        <p>Geforderte Validierung: Pflichtfeld-Check, E-Mail-Regex, Min-Length (6).</p>
        <p class="font-mono text-[#ff6600]">Datenstruktur konform mit Tabelle 'Kunde'/'Mitarbeiter'.</p>
      </div>

    </div>
  );
}
