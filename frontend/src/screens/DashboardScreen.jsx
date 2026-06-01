import React, { useState } from 'react';

export default function DashboardScreen() {
  // Schritt 18: Aktive Mietverträge als Mockdaten (Direkter Bezug zur Tabelle 'Mietvertrag')
  const [contracts, setContracts] = useState([
    { vertragsNr: 101, kunde: 'Max Müller', kfz: 'VW Golf 8 (GE-AR-2026)', kmStart: 12450, status: 'Reserviert' },
    { vertragsNr: 102, kunde: 'Sabine Schmitz', kfz: 'Tesla Model 3 (GE-EV-999E)', kmStart: 8900, status: 'Laufend' }
  ]);

  // Zustände für die Formular-Verarbeitung
  const [selectedContract, setSelectedContract] = useState(null);
  const [kmInput, setKmInput] = useState('');
  const [tankInput, setTankInput] = useState('100');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Schritt 19: Validierungslogik für Übergabe und Rücknahme
  const handleProtocolSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const kmValue = parseInt(kmInput, 10);
    const tankValue = parseInt(tankInput, 10);

    // 1. Pflichtfeld-Check
    if (!kmInput || !tankInput) {
      setError('Bitte füllen Sie alle Protokollfelder aus.');
      return;
    }

    // 2. Logik-Validierung für Kilometerstand
    if (selectedContract.status === 'Laufend' && kmValue < selectedContract.kmStart) {
      setError(`Ungültiger Kilometerstand! Der Rückgabe-Wert darf nicht niedriger sein als der Start-Wert (${selectedContract.kmStart} km).`);
      return;
    }

    // 3. Tank-Validierung (0-100%)
    if (tankValue < 0 || tankValue > 100) {
      setError('Der Tank- bzw. Batteriestatus muss zwischen 0 % und 100 % liegen.');
      return;
    }

    // Zustand in den Mockdaten simulieren
    setContracts(contracts.map(c => {
      if (c.vertragsNr === selectedContract.vertragsNr) {
        return { ...c, status: c.status === 'Reserviert' ? 'Laufend' : 'Beendet' };
      }
      return c;
    }));

    setSuccess(true);
    setSelectedContract(null);
    setKmInput('');
  };

  return (
    <div class="space-y-6">
      <div class="text-center sm:text-left">
        <h2 class="text-2xl font-black text-[#ff6600] tracking-wider uppercase">B2/B3: Mitarbeiter-Dashboard (Disposition)</h2>
        <p class="text-gray-400 text-sm">Übergabe- und Rücknahmeprotokolle für den Stationsalltag erfassen.</p>
      </div>

      {success && (
        <div class="p-3 bg-green-900/50 border border-green-500 text-green-200 text-xs rounded-md max-w-2xl mx-auto">
          ✅ Protokoll erfolgreich gespeichert! Der Status des Mietvertrags wurde aktualisiert.
        </div>
      )}

      {/* Tabelle der aktuellen Verträge */}
      <div class="bg-[#2d2d2d] rounded-lg border border-gray-700 overflow-hidden max-w-4xl mx-auto">
        <div class="p-4 bg-[#222] border-b border-gray-700 font-bold text-xs tracking-wider uppercase text-gray-400">
          Aktive Vorgänge an der Station
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="bg-[#1a1a1a] text-gray-400 border-b border-gray-800">
                <th class="p-3">Vertrag-Nr.</th>
                <th class="p-3">Kunde</th>
                <th class="p-3">Fahrzeug</th>
                <th class="p-3">Status</th>
                <th class="p-3 text-right">Aktion</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-800">
              {contracts.map((c) => (
                <tr key={c.vertragsNr} class="hover:bg-[#333]/40">
                  <td class="p-3 font-mono">#{c.vertragsNr}</td>
                  <td class="p-3 font-semibold">{c.kunde}</td>
                  <td class="p-3 text-gray-300">{c.kfz}</td>
                  <td class="p-3">
                    <span class={`px-2 py-0.5 rounded font-bold text-[10px] uppercase ${
                      c.status === 'Reserviert' ? 'bg-blue-900/40 text-blue-400' : 
                      c.status === 'Laufend' ? 'bg-orange-900/40 text-orange-400' : 'bg-gray-700 text-gray-300'
                    }`}>{c.status}</span>
                  </td>
                  <td class="p-3 text-right">
                    {c.status !== 'Beendet' ? (
                      <button
                        onClick={() => { setSelectedContract(c); setSuccess(false); setError(''); }}
                        class="px-3 py-1 bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold rounded tracking-wide transition uppercase text-[10px]"
                      >
                        {c.status === 'Reserviert' ? '🏁 Fahrzeug übergeben' : '🔄 Fahrzeug zurücknehmen'}
                      </button>
                    ) : (
                      <span class="text-gray-500 text-[11px] italic">Vorgang abgeschlossen</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interaktives Protokoll-Formular */}
      {selectedContract && (
        <div class="bg-[#2d2d2d] p-6 rounded-lg border border-gray-700 max-w-xl mx-auto animate-fadeIn">
          <h3 class="text-base font-bold text-white mb-4 border-b border-gray-800 pb-2 uppercase tracking-wide">
            {selectedContract.status === 'Reserviert' ? 'Übergabeprotokoll ausfüllen' : 'Rücknahmeprotokoll ausfüllen'} 
            <span class="text-[#ff6600] block text-xs mt-1 font-mono font-normal text-gray-400">Vorgang #{selectedContract.vertragsNr} - {selectedContract.kunde}</span>
          </h3>

          {error && (
            <div class="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-200 text-xs rounded-md">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleProtocolSubmit} class="space-y-4 text-xs">
            <div>
              <label class="block font-semibold text-gray-400 uppercase mb-1">
                {selectedContract.status === 'Reserviert' ? 'Aktueller Kilometerstand bei Übergabe' : 'Kilometerstand bei Rückgabe'} (km)
              </label>
              <input 
                type="number" 
                value={kmInput}
                onChange={(e) => setKmInput(e.target.value)}
                placeholder={selectedContract.status === 'Laufend' ? `Min. ${selectedContract.kmStart}` : '12450'}
                class="w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded text-white focus:outline-none focus:border-[#ff6600]"
              />
            </div>

            <div>
              <label class="block font-semibold text-gray-400 uppercase mb-1">Tank- / Batteriestand (%)</label>
              <input 
                type="number" 
                value={tankInput}
                onChange={(e) => setTankInput(e.target.value)}
                min="0"
                max="100"
                class="w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded text-white focus:outline-none focus:border-[#ff6600]"
              />
            </div>

            <button 
              type="submit"
              class="w-full py-2 bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold uppercase tracking-wider rounded shadow transition"
            >
              Protokoll digital signieren & speichern
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
