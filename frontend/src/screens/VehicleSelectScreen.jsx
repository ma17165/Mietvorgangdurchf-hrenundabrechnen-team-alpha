import React, { useState } from 'react';

export default function VehicleSelectScreen() {
  // Schritt 18: Realistische Mockdaten basierend auf unserer 'Kfz'-Tabelle in der seed.sql
  const mockVehicles = [
    { kfzId: 1, marke: 'VW', modell: 'Golf 8', fahrzeugklasse: 'Kompaktklasse', kilometerstand: 12450, tankstatus: 100, status: 'Verfügbar', preisProTag: 49.00 },
    { kfzId: 2, marke: 'Tesla', modell: 'Model 3', fahrzeugklasse: 'Oberklasse / Elektro', kilometerstand: 8900, tankstatus: 92, status: 'Verfügbar', preisProTag: 89.00 },
    { kfzId: 3, marke: 'BMW', modell: '3er Touring', fahrzeugklasse: 'Kombi / Premium', kilometerstand: 45120, tankstatus: 45, status: 'Werkstatt', preisProTag: 75.00 }
  ];

  // Zustände für die Mieterauswahl
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [mietbeginn, setMietbeginn] = useState('');
  const [mietende, setMietende] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Schritt 19: Clientseitige Prüfung des Buchungszeitraums
  const handleBooking = (e) => {
    e.preventDefault();
    setValidationError('');
    setBookingSuccess(false);

    if (!mietbeginn || !mietende) {
      setValidationError('Bitte wählen Sie sowohl den Mietbeginn als auch das Mietende aus.');
      return;
    }

    if (new Date(mietbeginn) >= new Date(mietende)) {
      setValidationError('Das Mietende muss zeitlich nach dem Mietbeginn liegen.');
      return;
    }

    setBookingSuccess(true);
  };

  return (
    <div class="space-y-8">
      <div class="text-center sm:text-left">
        <h2 class="text-2xl font-black text-[#ff6600] tracking-wider uppercase">B1: Fahrzeugauswahl & Reservierung</h2>
        <p class="text-gray-400 text-sm">Wählen Sie Ihr gewünschtes Fahrzeug aus unserem aktuellen Fuhrpark.</p>
      </div>

      {/* Grid-Layout für die Fahrzeug-Cards */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockVehicles.map((vehicle) => (
          <div 
            key={vehicle.kfzId} 
            class={`bg-[#2d2d2d] rounded-lg p-5 border transition flex flex-col justify-between ${
              selectedVehicle?.kfzId === vehicle.kfzId ? 'border-[#ff6600] ring-1 ring-[#ff6600]' : 'border-gray-700'
            } ${vehicle.status === 'Werkstatt' ? 'opacity-50' : 'hover:border-gray-500'}`}
          >
            <div>
              <div class="flex justify-between items-start mb-2">
                <span class="text-xs font-mono text-gray-400 bg-[#1a1a1a] px-2 py-0.5 rounded">{vehicle.fahrzeugklasse}</span>
                <span class={`text-[11px] px-2 py-0.5 rounded font-bold uppercase ${
                  vehicle.status === 'Verfügbar' ? 'bg-green-900/40 text-green-400' : 'bg-red-900/40 text-red-400'
                }`}>{vehicle.status}</span>
              </div>
              
              <h3 class="text-xl font-bold mt-1">{vehicle.marke} {vehicle.modell}</h3>
              
              <div class="text-xs text-gray-400 mt-3 space-y-1 font-mono">
                <p>📊 KM-Stand: {vehicle.kilometerstand} km</p>
                <p>🔋 Tank/Batterie: {vehicle.tankstatus}%</p>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center">
              <div>
                <span class="text-xl font-black text-[#ff6600]">{vehicle.preisProTag.toFixed(2)} €</span>
                <span class="text-[10px] text-gray-400 block">/ Tag Netto</span>
              </div>
              
              <button
                type="button"
                disabled={vehicle.status === 'Werkstatt'}
                onClick={() => { setSelectedVehicle(vehicle); setBookingSuccess(false); }}
                class={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition ${
                  selectedVehicle?.kfzId === vehicle.kfzId 
                    ? 'bg-white text-black' 
                    : 'bg-[#ff6600] hover:bg-[#e65c00] text-white disabled:bg-gray-700 disabled:text-gray-500'
                }`}
              >
                {selectedVehicle?.kfzId === vehicle.kfzId ? 'Ausgewählt' : 'Wählen'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interaktives Buchungsformular (wird eingeblendet, wenn ein Auto gewählt wurde) */}
      {selectedVehicle && (
        <div class="bg-[#2d2d2d] p-6 rounded-lg border border-gray-700 max-w-xl mx-auto animate-fadeIn">
          <h4 class="text-lg font-bold text-white mb-4 border-b border-gray-800 pb-2">
            Reservierung verbindlich konfigurieren: <span class="text-[#ff6600]">{selectedVehicle.marke} {selectedVehicle.modell}</span>
          </h4>

          {validationError && (
            <div class="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-200 text-xs rounded-md">
              ⚠️ {validationError}
            </div>
          )}

          {bookingSuccess && (
            <div class="mb-4 p-3 bg-green-900/50 border border-green-500 text-green-200 text-xs rounded-md">
              🎉 Fahrzeug erfolgreich reserviert! (Datensatz bereit für Tabelle 'Mietvertrag')
            </div>
          )}

          <form onSubmit={handleBooking} class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-[11px] font-semibold text-gray-400 uppercase mb-1">Mietbeginn (Datum & Uhrzeit)</label>
              <input 
                type="datetime-local" 
                value={mietbeginn}
                onChange={(e) => setMietbeginn(e.target.value)}
                class="w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded text-sm text-white focus:outline-none focus:border-[#ff6600]"
              />
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-gray-400 uppercase mb-1">Mietende (Datum & Uhrzeit)</label>
              <input 
                type="datetime-local" 
                value={mietende}
                onChange={(e) => setMietende(e.target.value)}
                class="w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded text-sm text-white focus:outline-none focus:border-[#ff6600]"
              />
            </div>
            <div class="sm:col-span-2 mt-2">
              <button 
                type="submit"
                class="w-full py-2.5 bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold text-xs uppercase tracking-wider rounded shadow-md transition"
              >
                Reservierung abschicken
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
