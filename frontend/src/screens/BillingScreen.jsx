import React, { useState } from 'react';

export default function BillingScreen() {
  // Schritt 18: Abgeschlossener Vertrag als Mockdatenbasis
  const basePriceNetto = 147.00; // 3 Tage à 49,00 € (Beispiel VW Golf)
  
  // Interaktive Zustände für zusätzliche Gebühren
  const [extraCharges, setExtraCharges] = useState('0');
  const [invoiceGenerated, setInvoiceGenerated] = useState(false);
  const [error, setError] = useState('');

  // Live-Berechnung der kaufmännischen Werte (Schritt 18/19)
  const currentExtra = parseFloat(extraCharges) || 0;
  const gesamtBetragNetto = basePriceNetto + currentExtra;
  const mwstBetrag = gesamtBetragNetto * 0.19;
  const gesamtBetragBrutto = gesamtBetragNetto + mwstBetrag;

  const handleGenerateInvoice = (e) => {
    e.preventDefault();
    setError('');

    // Validierung: Keine negativen Zusatzgebühren erlauben
    if (currentExtra < 0) {
      setError('Zusatzgebühren können nicht negativ sein.');
      return;
    }

    setInvoiceGenerated(true);
  };

  return (
    <div class="space-y-6 max-w-4xl mx-auto">
      <div class="text-center sm:text-left">
        <h2 class="text-2xl font-black text-[#ff6600] tracking-wider uppercase">B4: Abrechnung & Rechnungsstellung</h2>
        <p class="text-gray-400 text-sm">Finanzabschluss für beendete Mietverträge durchführen.</p>
      </div>

      {error && (
        <div class="p-3 bg-red-900/50 border border-red-500 text-red-200 text-xs rounded-md">
          ⚠️ {error}
        </div>
      )}

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        
        <div class="bg-[#2d2d2d] p-6 rounded-lg border border-gray-700 space-y-4 text-xs">
          <h3 class="text-sm font-bold text-white uppercase tracking-wide border-b border-gray-800 pb-2">Vorgangsdaten</h3>
          
          <div class="grid grid-cols-2 gap-2 font-mono text-gray-300">
            <span class="text-gray-500">Vertrags-Nr:</span> <span class="text-white">#101</span>
            <span class="text-gray-500">Kunde:</span> <span class="text-white">Max Müller</span>
            <span class="text-gray-500">Fahrzeug:</span> <span class="text-white">VW Golf 8</span>
            <span class="text-gray-500">Grundmiete Netto:</span> <span class="text-white">147,00 €</span>
          </div>

          <form onSubmit={handleGenerateInvoice} class="space-y-4 pt-4 border-t border-gray-800">
            <div>
              <label class="block font-semibold text-gray-400 uppercase mb-1">Zusätzliche Gebühren (z.B. Betankung / Reinigung) in €</label>
              <input 
                type="number" 
                value={extraCharges}
                onChange={(e) => { setExtraCharges(e.target.value); setInvoiceGenerated(false); }}
                min="0"
                step="0.01"
                class="w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded text-white focus:outline-none focus:border-[#ff6600]"
              />
            </div>

            <button 
              type="submit"
              class="w-full py-2.5 bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold uppercase tracking-wider rounded shadow transition"
            >
              Rechnungsdaten kalkulieren
            </button>
          </form>
        </div>

        <div class="bg-[#222] p-6 rounded-lg border border-dashed border-gray-700 relative overflow-hidden text-xs">
          <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4 flex justify-between items-center">
            <span>📄 Rechnungsbeleg (Vorschau)</span>
            {invoiceGenerated && <span class="text-green-400 font-mono text-[10px] bg-green-950/60 px-2 py-0.5 rounded uppercase border border-green-800">Abgabe-Bereit</span>}
          </h3>

          <div class="space-y-3 font-mono">
            <div class="flex justify-between border-b border-gray-800 pb-2 text-gray-500">
              <span>Posten</span>
              <span>Betrag</span>
            </div>
            <div class="flex justify-between text-gray-300">
              <span>Fahrzeugmiete (3 Tage Grundpreis)</span>
              <span>147,00 €</span>
            </div>
            <div class="flex justify-between text-gray-300">
              <span>Zusatzaufwände / Schadenpauschale</span>
              <span>{currentExtra.toFixed(2)} €</span>
            </div>
            
            <div class="pt-4 border-t border-gray-800 space-y-1.5">
              <div class="flex justify-between text-gray-400 text-[11px]">
                <span>Gesamtbetrag Netto:</span>
                <span>{gesamtBetragNetto.toFixed(2)} €</span>
              </div>
              <div class="flex justify-between text-gray-400 text-[11px]">
                <span>Umsatzsteuer (19%):</span>
                <span>{mwstBetrag.toFixed(2)} €</span>
              </div>
              <div class="flex justify-between text-white text-sm font-black border-t border-gray-700 pt-2">
                <span class="text-[#ff6600]">RECHNUNGSBETRAG BRUTTO:</span>
                <span class="text-[#ff6600]">{gesamtBetragBrutto.toFixed(2)} €</span>
              </div>
            </div>
          </div>

          {invoiceGenerated && (
            <div class="mt-6 p-2 bg-[#2d2d2d] rounded border border-gray-700 text-center text-[10px] text-gray-400 animate-fadeIn">
              💡 Datensatz wird beim Backend-Schnitt vorbereitet für Entität <span class="text-[#ff6600] font-mono">Rechnung</span>.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
