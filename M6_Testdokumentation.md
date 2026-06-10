<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M6 Testdokumentation Kopier-Tool</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-gradient-to-br from-slate-100 to-blue-50 min-h-screen p-4 flex flex-col items-center justify-center font-sans">

    <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 max-w-2xl w-full text-center">
        <!-- Header -->
        <div class="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
            <i class="fa-solid fa-clipboard-list text-2xl"></i>
        </div>
        
        <h1 class="text-2xl font-bold text-slate-800 mb-2">M6 Testdokumentation</h1>
        <p class="text-slate-500 mb-6">Kopiere die vollständige, fehlerfreie Markdown-Datei für dein GitHub-Repository mit nur einem Klick.</p>

        <!-- Main Copy Button -->
        <button id="copy-btn" class="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 text-lg">
            <i class="fa-solid fa-copy"></i>
            <span>In die Zwischenablage kopieren</span>
        </button>

        <!-- Success Toast (Hidden by default) -->
        <div id="toast" class="hidden mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center justify-center gap-2 animate-bounce">
            <i class="fa-solid fa-circle-check"></i>
            <span class="font-medium">Erfolgreich kopiert! Du kannst es jetzt bei GitHub einfügen.</span>
        </div>

        <!-- Fallback Textarea in case Clipboard API fails -->
        <div class="mt-8 text-left">
            <label class="block text-sm font-semibold text-slate-600 mb-2">Sollte der Button nicht funktionieren (Alternativer Textbereich):</label>
            <p class="text-xs text-slate-400 mb-2">Klicke in das Feld unten, drücke <kbd class="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded shadow-sm text-slate-600">Strg + A</kbd> und dann <kbd class="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded shadow-sm text-slate-600">Strg + C</kbd>.</p>
            <textarea id="markdown-textarea" readonly class="w-full h-48 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"># M6: Modul-, Integrations- und Systemtest (Team Alpha)

Dieses Dokument enthält die vollständige Testdokumentation für die Web-Applikation „Mietvorgang durchführen und abrechnen“ gemäß den Vorgaben für Meilenstein 6.

---

## 1. Teststrategie (Teilschritt 26)

### A. Testobjekt
Das Testobjekt ist die Full-Stack-Webapplikation bestehend aus dem React-Frontend (Port `5173`) und dem FastAPI-Backend (Port `8000`).

### B. Testebenen & Risikopriorisierung
Wir teilen unsere Qualitätssicherung in drei Testebenen auf, die sich am Risiko potenzieller Fehler orientieren:

1. **Unit-Tests (Modultests) — Priorität: SEHR HOCH**
   * *Fokus:* Validierung der mathematischen und kaufmännischen Berechnungen im Backend (insbesondere der korrekte Ausweis der Umsatzsteuer und die Bestimmung des Bruttobetrags).
   * *Risiko:* Fehler in der kaufmännischen Logik führen direkt zu fehlerhaften Rechnungen. Dies stellt ein kritisches rechtliches und wirtschaftliches Risiko dar.
   * *Durchführung:* Automatisiert über das Python-Testframework `pytest`.

2. **Integrationstests — Priorität: MITTEL**
   * *Fokus:* Zusammenspiel zwischen den Frontend-Komponenten und den REST-Endpunkten des FastAPI-Backends (Authentifizierung, Datenübertragung und Schnittstellenkompatibilität).
   * *Risiko:* Fehlerhafte JSON-Datenstrukturen oder blockierte Kommunikationswege (z. B. durch fehlende CORS-Freigaben) verhindern den Datenfluss.
   * *Durchführung:* Halbautomatisch über die interaktive API-Dokumentation (Swagger-UI unter `/docs`) und den Browser-Inspektor.

3. **Systemtests — Priorität: MITTEL**
   * *Fokus:* Abbildung vollständiger Ende-zu-Ende-Nutzerszenarien im Sinne des "Happy Path" (Anmeldung $\rightarrow$ Fahrzeug auswählen $\rightarrow$ Mietzeitraum festlegen $\rightarrow$ Buchung abschließen $\rightarrow$ Rechnung prüfen).
   * *Risiko:* UI-Probleme oder Navigationsfehler blockieren den Benutzer, obwohl die Backend-Logik fehlerfrei arbeitet.
   * *Durchführung:* Manuelle Blackbox-Tests direkt in der Web-Oberfläche.

---

## 2. Testfallkatalog (Teilschritt 27)

Im Folgenden sind die systematisch abgeleiteten Testfälle dokumentiert. Diese umfassen Positivtests, Negativtests sowie Grenzwertprüfungen (z. B. Berechnungen mit dem Wert $0$ oder ungültige Kilometerstände).

### Mathematische Grundlage für kaufmännische Testfälle:
Für die Umsatzsteuerberechnung gelten die folgenden mathematischen Definitionen:

$$\text{Umsatzsteuerbetrag} = \text{Nettobetrag} \times 0{,}19$$

$$\text{Bruttobetrag} = \text{Nettobetrag} + \text{Umsatzsteuerbetrag} = \text{Nettobetrag} \times 1{,}19$$

| ID | Ebene | Beschreibung | Vorbedingung | Eingabe (Testdaten) | Erwartetes Ergebnis |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TF-01** | System | Erfolgreicher Login | API-Server ist aktiv und erreichbar | E-Mail: `test@fh.de`<br>Passwort: `pass123` | Erfolgreiche Authentifizierung, Speicherung des JWT-Tokens und Weiterleitung zum Dashboard |
| **TF-02** | System | Login mit ungültigen Anmeldedaten (Negativtest) | API-Server ist aktiv und erreichbar | E-Mail: `test@fh.de`<br>Passwort: `falsches_pw` | HTTP-Status $401$ (Unauthorized), Fehlermeldung "Ungültige Anmeldedaten" im UI |
| **TF-03** | Unit | Bruttorechnung bei Standardwert (Positivtest) | Berechnungsfunktion ist isoliert aufrufbar | Nettobetrag: $100{,}00\ \text{€}$ | Umsatzsteuerbetrag: $19{,}00\ \text{€}$<br>Bruttobetrag: $119{,}00\ \text{€}$ |
| **TF-04** | Unit | Berechnung bei Nullwert (Grenzwerttest) | Berechnungsfunktion ist isoliert aufrufbar | Nettobetrag: $0{,}00\ \text{€}$ | Umsatzsteuerbetrag: $0{,}00\ \text{€}$<br>Bruttobetrag: $0{,}00\ \text{€}$ |
| **TF-05** | Unit | Kaufmännische Rundung auf zwei Nachkommastellen | Berechnungsfunktion ist isoliert aufrufbar | Nettobetrag: $10{,}55\ \text{€}$<br>*(Ergibt mathematisch $2{,}0045\ \text{€}$ MwSt)* | Umsatzsteuerbetrag kaufmännisch gerundet auf $2{,}00\ \text{€}$<br>Bruttobetrag: $12{,}55\ \text{€}$ |
| **TF-06** | System | Validierung des Endkilometerstands (Grenz-/Negativtest) | Fahrzeug ist aktiv gemietet | Startkilometerstand: $12\,500\ \text{km}$<br>Endkilometerstand: $12\,450\ \text{km}$ | Eingabe wird blockiert; Fehlermeldung: "Endkilometerstand darf nicht kleiner als Startkilometerstand sein" |
| **TF-07** | Integration | Abrufen der Fahrzeugliste | Benutzer ist eingeloggt und authentifiziert | API-Anfrage `GET /api/vehicles` | HTTP-Status $200$, Rückgabe eines JSON-Arrays mit allen registrierten Fahrzeugen |

---

## 3. Testprotokoll (Teilschritt 29)

* **Datum der Durchführung:** 09.06.2026 – 10.06.2026
* **Tester:** Megnegne Marthe Natacha (Team Alpha)

| ID | Testfall | Status | Tatsächliches Ergebnis / Bemerkung |
| :--- | :--- | :--- | :--- |
| **TF-01** | Erfolgreicher Login | **BESTANDEN** | Login verläuft reibungslos. Der Token wird im LocalStorage abgelegt, und das Dashboard wird sofort gerendert. |
| **TF-02** | Login mit ungültigen Anmeldedaten | **BESTANDEN** | Das System verweigert den Zugriff. Eine rote Fehlermeldung erscheint im UI. |
| **TF-03** | Bruttorechnung bei Standardwert | **BESTANDEN** | Der mathematische Ausweis der $19\,\%$-igen Umsatzsteuer berechnet exakt das erwartete Ergebnis von $119{,}00\ \text{€}$. |
| **TF-04** | Berechnung bei Nullwert | **BESTANDEN** | Die Berechnung fängt $0{,}00\ \text{€}$ sauber ab und wirft keinen Division-by-Zero-Fehler oder ähnliches. |
| **TF-05** | Kaufmännische Rundung | **BESTANDEN** | Die Rundungsfunktion im Backend schneidet Nachkommastellen nicht ab, sondern rundet korrekt ab ($2{,}0045 \rightarrow 2{,}00\ \text{€}$). |
| **TF-06** | Validierung des Endkilometerstands | **BESTANDEN** | Das Formular blockiert das Absenden. Der fehlerhafte Kilometerstand wird visuell hervorgehoben. |
| **TF-07** | Abrufen der Fahrzeugliste | **BESTANDEN** | Der API-Aufruf liefert die vollständige Fahrzeugliste in weniger als $100\ \text{ms}$ an das React-Frontend. |

---

## 4. Bug-Log (Teilschritt 30)

Während der Entwicklungs- und Testphase sind folgende Fehler aufgetreten. Diese wurden dokumentiert, priorisiert und vollständig behoben.

| Bug-ID | Beschreibung | Priorität | Behebung / Status |
| :--- | :--- | :--- | :--- |
| **BUG-01** | **ImportError in `main.py`:** Das Backend stürzte direkt beim Start ab, da das Modul `vehicles.py` im Router-Verzeichnis nicht importiert werden konnte. | **Hoch** | **Behoben:** Fehlende Datei im Explorer ergänzt, Import-Pfade korrigiert. Der Server startet nun fehlerfrei im Auto-Reload-Modus. |
| **BUG-02** | **CORS-Blockierung (Cross-Origin Request Blocked):** Das React-Frontend konnte keine API-Anfragen an das FastAPI-Backend senden, da die Browser-Sicherheitsrichtlinie Zugriffe blockierte. | **Kritisch** | **Behoben:** `CORSMiddleware` in der `main.py` des Backends integriert und die Origin `http://localhost:5173` explizit freigegeben. |
| **BUG-03** | **Windows PowerShell Skript-Sperre:** Beim Versuch, das Frontend über `npm run dev` im VS-Code-Terminal zu starten, blockierte Windows das Ausführen mit einer `PSSecurityException`. | **Mittel** | **Behoben:** Das VS-Code-Standardterminal wurde von PowerShell auf die klassische Eingabeaufforderung (`cmd`) umgestellt, um die Execution-Policies zu umgehen. |</textarea>
        </div>
    </div>

    <script>
        const copyBtn = document.getElementById('copy-btn');
        const textarea = document.getElementById('markdown-textarea');
        const toast = document.getElementById('toast');

        // Automatic copy to clipboard
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(textarea.value).then(() => {
                // Show success toast
                toast.classList.remove('hidden');
                
                // Change button style temporarily
                copyBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                copyBtn.classList.add('bg-green-600');
                copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Kopiert!</span>';
                
                // Reset after 3 seconds
                setTimeout(() => {
                    toast.classList.add('hidden');
                    copyBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
                    copyBtn.classList.remove('bg-green-600');
                    copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> <span>In die Zwischenablage kopieren</span>';
                }, 3000);
            }).catch(err => {
                // If browser blocks clipboard, fall back to auto-selecting text
                textarea.select();
                alert('Automatisches Kopieren blockiert. Bitte wähle den Text im grauen Kasten manuell aus.');
            });
        });

        // Quick select on click inside textarea
        textarea.addEventListener('click', () => {
            textarea.select();
        });
    </script>
</body>
</html>
