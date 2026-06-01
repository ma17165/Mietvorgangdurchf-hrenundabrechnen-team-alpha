import React, { useState } from 'react';

// Schritt 17 & 18: Import der echten, funktionalen Screen-Komponenten
import LoginScreen from './screens/LoginScreen.jsx';
import VehicleSelectScreen from './screens/VehicleSelectScreen.jsx';
import DashboardScreen from './screens/DashboardScreen.jsx';
import BillingScreen from './screens/BillingScreen.jsx';

export default function App() {
  // Der Zustand steuert das clientseitige Routing für das Mockup
  const [currentScreen, setCurrentScreen] = useState('login');

  // Dynamischer Wechsel der Ansichten basierend auf dem State
  const renderScreen = () => {
    switch (currentScreen) {
      case 'login': 
        return <LoginScreen />;
      case 'vehicles': 
        return <VehicleSelectScreen />;
      case 'dashboard': 
        return <DashboardScreen />;
      case 'billing': 
        return <BillingScreen />;
      default: 
        return <LoginScreen />;
    }
  };

  return (
    <div class="min-h-screen bg-[#1a1a1a] text-white flex flex-col font-sans">
      
      {/* 🛠️ Navigations-Header: Ermöglicht dem Professor das manuelle Durchklicken */}
      <header class="bg-[#2d2d2d] border-b border-gray-700 p-4 sticky top-0 z-50 shadow-md">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div class="flex items-center gap-2">
            <span class="text-[#ff6600] font-black text-xl tracking-wider">ALPHA RENT</span>
            <span class="text-[10px] bg-gray-700 text-gray-200 px-2 py-0.5 rounded uppercase font-mono tracking-widest">
              M4 Prototyp
            </span>
          </div>
          
          {/* Routing-Schaltflächen */}
          <nav class="flex flex-wrap gap-2">
            <button 
              onClick={() => setCurrentScreen('login')}
              class={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition duration-150 ${
                currentScreen === 'login' ? 'bg-[#ff6600] text-white shadow-md' : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
              }`}
            >
              B1: Login
            </button>
            <button 
              onClick={() => setCurrentScreen('vehicles')}
              class={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition duration-150 ${
                currentScreen === 'vehicles' ? 'bg-[#ff6600] text-white shadow-md' : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
              }`}
            >
              B1: Fuhrpark
            </button>
            <button 
              onClick={() => setCurrentScreen('dashboard')}
              class={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition duration-150 ${
                currentScreen === 'dashboard' ? 'bg-[#ff6600] text-white shadow-md' : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
              }`}
            >
              B2/B3: Dashboard
            </button>
            <button 
              onClick={() => setCurrentScreen('billing')}
              class={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition duration-150 ${
                currentScreen === 'billing' ? 'bg-[#ff6600] text-white shadow-md' : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
              }`}
            >
              B4: Abrechnung
            </button>
          </nav>

        </div>
      </header>

      {/* Hauptinhalt: Hier wird das ausgewählte UI-Modul geladen */}
      <main class="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col justify-center my-4 animate-fadeIn">
        {renderScreen()}
      </main>

      {/* Status-Footer für die Abgabe */}
      <footer class="text-center p-4 text-xs text-gray-600 border-t border-gray-800 bg-[#222]">
        &copy; 2026 Alpha Rent Team — Westfälische Hochschule Gelsenkirchen. 
        <span class="text-gray-500 block sm:inline sm:ml-2">
          Komponentenstruktur abgeleitet aus M2-Prototypen & M3-Klassendiagramm.
        </span>
      </footer>

    </div>
  );
}
