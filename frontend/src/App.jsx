import React, { useState } from 'react';

// Dummies für die Screens, bis wir den echten Code in den nächsten Schritten einfügen
const LoginScreen = () => <div class="p-8 text-center bg-[#2d2d2d] rounded border border-gray-700"><h2 class="text-2xl font-bold text-[#ff6600]">B1: Login Maske</h2><p class="text-gray-400 mt-2">[Komponente wird im nächsten Schritt implementiert]</p></div>;
const VehicleSelectScreen = () => <div class="p-8 text-center bg-[#2d2d2d] rounded border border-gray-700"><h2 class="text-2xl font-bold text-[#ff6600]">B1: Fahrzeugauswahl</h2><p class="text-gray-400 mt-2">[Komponente wird im nächsten Schritt implementiert]</p></div>;
const DashboardScreen = () => <div class="p-8 text-center bg-[#2d2d2d] rounded border border-gray-700"><h2 class="text-2xl font-bold text-[#ff6600]">B2/B3: Mitarbeiter-Dashboard</h2><p class="text-gray-400 mt-2">[Komponente wird im nächsten Schritt implementiert]</p></div>;
const BillingScreen = () => <div class="p-8 text-center bg-[#2d2d2d] rounded border border-gray-700"><h2 class="text-2xl font-bold text-[#ff6600]">B4: Abrechnung / Rechnung</h2><p class="text-gray-400 mt-2">[Komponente wird im nächsten Schritt implementiert]</p></div>;

export default function App() {
  // Der 'currentScreen' State steuert, welche Maske gerade angezeigt wird
  const [currentScreen, setCurrentScreen] = useState('login');

  // Hilfsfunktion zum Rendern der ausgewählten Maske
  const renderScreen = () => {
    switch (currentScreen) {
      case 'login': return <LoginScreen />;
      case 'vehicles': return <VehicleSelectScreen />;
      case 'dashboard': return <DashboardScreen />;
      case 'billing': return <BillingScreen />;
      default: return <LoginScreen />;
    }
  };

  return (
    <div class="min-h-screen bg-[#1a1a1a] text-white flex flex-col">
      {/* 🛠️ Professor-Leiste: Simuliert das Routing für die Abgabe */}
      <header class="bg-[#2d2d2d] border-b border-gray-700 p-4 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="text-[#ff6600] font-black text-xl tracking-wider">ALPHA RENT</span>
            <span class="text-xs bg-gray-600 text-gray-200 px-2 py-0.5 rounded uppercase font-mono">M4 Front-End</span>
          </div>
          
          <nav class="flex flex-wrap gap-2">
            <button 
              onClick={() => setCurrentScreen('login')}
              class={`px-3 py-1.5 rounded text-xs font-semibold transition ${currentScreen === 'login' ? 'bg-[#ff6600] text-white' : 'bg-[#1a1a1a] text-gray-400 hover:text-white'}`}>
              B1: Login
            </button>
            <button 
              onClick={() => setCurrentScreen('vehicles')}
              class={`px-3 py-1.5 rounded text-xs font-semibold transition ${currentScreen === 'vehicles' ? 'bg-[#ff6600] text-white' : 'bg-[#1a1a1a] text-gray-400 hover:text-white'}`}>
              B1: Fuhrpark
            </button>
            <button 
              onClick={() => setCurrentScreen('dashboard')}
              class={`px-3 py-1.5 rounded text-xs font-semibold transition ${currentScreen === 'dashboard' ? 'bg-[#ff6600] text-white' : 'bg-[#1a1a1a] text-gray-400 hover:text-white'}`}>
              B2/3: Dashboard
            </button>
            <button 
              onClick={() => setCurrentScreen('billing')}
              class={`px-3 py-1.5 rounded text-xs font-semibold transition ${currentScreen === 'billing' ? 'bg-[#ff6600] text-white' : 'bg-[#1a1a1a] text-gray-400 hover:text-white'}`}>
              B4: Abrechnung
            </button>
          </nav>
        </div>
      </header>

      {/* Hauptinhalt: Hier wird die dynamisch geladene Maske gerendert */}
      <main class="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col justify-center">
        {renderScreen()}
      </main>

      {/* Footer */}
      <footer class="text-center p-4 text-xs text-gray-600 border-t border-gray-800">
        &copy; 2026 Alpha Rent Team - Westfälische Hochschule. Alle Kernkomponenten sind mit Mockdaten initialisiert.
      </footer>
    </div>
  );
}
