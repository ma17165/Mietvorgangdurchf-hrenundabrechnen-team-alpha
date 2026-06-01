# 🖥️ Alpha Rent — Front-End Dokumentation & Setup (M4)

Dieses Verzeichnis enthält den lauffähigen Front-End-Prototypen für das Autovermietungssystem **Alpha Rent** im Rahmen von Meilenstein 4. Die Benutzeroberflächen wurden aus den Mockups in Meilenstein 2 abgeleitet und funktional mit logischen Kontrollmechanismen erweitert.

---

## 🛠️ 1. Technologie-Stack & Architektur

Basierend auf den empfohlenen Werkzeugen der Projektvorgabe wurde ein moderner, komponentenbasierter Stack gewählt:
* **Framework:** React (Vite-Boilerplate) für ein schnelles, modulares UI-Rendering und stabiles State-Management.
* **Styling:** Tailwind CSS (Utility-First-Framework) zur exakten Umsetzung unseres Corporate Designs (Dark-Mode mit markanten Alpha-Orange-Akzenten).
* **Icons:** Lucide-React für konsistente, leichtgewichtige UI-Symbole.

### Komponentenstruktur & Routing:
Da das Projekt in dieser Phase als reiner Front-End-Prototyp ohne Live-Server läuft, wird das Routing clientseitig über das React-State-Management in `App.jsx` gesteuert. Ein globaler Navigations-Header ermöglicht dem Korrekturleser das direkte Springen zwischen den vier geforderten Kern-Masken:

1. `LoginScreen.jsx` (B1: Authentifizierungsmaske für Kunden & Mitarbeiter)
2. `VehicleSelectScreen.jsx` (B1: Fuhrparkübersicht und Mietzeitraum-Reservierung für Kunden)
3. `DashboardScreen.jsx` (B2/B3: Dispositionstool für Mitarbeiter zur digitalen Übergabe/Rücknahme)
4. `BillingScreen.jsx` (B4: Abrechnungsmaske mit automatisiertem kaufmännischen Steuerausweis)

---

## 🔍 2. Clientseitige Validierungen & Mockdaten

Jeder Screen wurde mit interaktiver Logik und Validierungsskripten (Schritt 19) ausgestattet:
* **Login-Validierung:** Überprüfung auf Pflichtfelder, clientseitiger Formatcheck der E-Mail via Regular Expressions (Regex) sowie eine Passwort-Mindestlängenbeschränkung von 6 Zeichen.
* **Reservierungs-Validierung:** Plausibilitätsprüfung des Mietzeitraums im Browser. Das System blockiert Buchungen, bei denen das Mietende zeitlich vor dem Mietbeginn liegt.
* **Protokoll-Validierung:** Mathematischer Abgleich bei der Fahrzeugrücknahme. Der eingegebene Kilometerstand darf nicht niedriger sein als der Stand bei Fahrzeugübergabe. Zusätzlich Absicherung des Tankstatus auf Werte zwischen 0 % und 100 %.
* **Kaufmännische Live-Kalkulation:** Eingabe von Zusatzgebühren berechnet im Browser direkt in Echtzeit den korrekten Netto-Gesamtbetrag, schlägt die gesetzliche Umsatzsteuer von 19 % auf und gibt den finalen Brutto-Rechnungsbetrag aus.
* **Datenbasis:** Alle Screens nutzen realistische Mockdaten, welche strukturell exakt mit den Datenbank-Tabellen (`Kunde`, `Kfz`, `Mietvertrag`, `Rechnung`) und Testdaten aus Meilenstein 3 übereinstimmen.

---

## 🚀 3. Setup- & Installationsanleitung (Lokaler Start)

Befolgen Sie diese Schritte, um den Front-End-Prototypen lokal auf Ihrem System auszuführen:

### Voraussetzungen:
* [Node.js](https://nodejs.org/) (Version 18 oder neuer wird empfohlen) muss auf Ihrem Computer installiert sein.

### Schritt-für-Schritt-Ausführung:

1. **Repository klonen oder Ordner herunterladen:**
```bash
   git clone https://github.com/ma17165/Mietvorgangdurchf-hrenundabrechnen-team-alpha 
   cd [PROJEKT_ORDNER]/frontend
