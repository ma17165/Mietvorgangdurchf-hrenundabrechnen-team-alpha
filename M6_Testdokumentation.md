<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    

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
        
</body>
</html>
