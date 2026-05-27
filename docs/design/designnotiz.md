1. Einleitung & Design-Philosophie
Im Rahmen des Meilensteins 2 wurde das User Interface (UI) für die Web-Anwendung „Alpha Rent“ entworfen. Ziel war es, eine intuitive, moderne
und barrierefreie Benutzeroberfläche zu schaffen, die den Kunden und Mitarbeitern eine effiziente Interaktion ermöglicht. Das Design folgt einem
konsequenten „Dark Mode“-Ansatz mit einer professionellen Farbpalette aus anthrazitfarbenen Hintergründen und prominenten, signalgebenden
Akzentfarben in Orange und Blau. Dieser visuelle Stil (inspiriert vom modernen „DriveNow“-Look) strahlt Dynamik, Premium-Qualität und Zuverlässigkeit aus.

2. Übersicht der implementierten UI-Screens
Die Benutzeroberfläche deckt alle im Projektplan geforderten Kernprozesse (Business Cases B1 bis B4) lückenlos ab. Folgende vier Artefakte wurden
in Figma erstellt und als produktionsbereite PNG-Dateien exportiert:

Dateiname	                         Zugeordneter Business Case (BC)	                      Beschreibung der Kernfunktionalität
B1_Login_Maske.png	               B1: Reservierung / Authentifizierung	                  Eingabe der Kundennummer und des Passworts. Enthält einen 
                                                                                          expliziten roten Warnhinweis zur automatischen Kontosperrung 
                                                                                          nach 3 Falscheingaben inklusive direktem Aktivierungslink.
                                                                                          
B1_Fahrzeugauswahl.png	           B1: Reservierung / Fahrzeugflotte	                    Kundenansicht der verfügbaren Fahrzeugklassen (Kompakt, Premium, SUV).                  
                                                                                          Anzeige von Preisen pro Tag in Euro, technischen Spezifikationen und 
                                                                                          einem direkten Buchungsbutton.  
                                                                                          
B2_B3_Mitarbeiter_Dashboard.png	   B2 & B3: Abholung & Rückgabe	                          Interne Stations-Ansicht für Mitarbeiter zur digitalen Erfassung von 
                                                                                          Kilometerstand, Tankfüllung in % und dem Kontrollstatus des 
                                                                                          Kundenführerscheins mit PDF-Mietvertragserstellung.       

B4_Abrechnung_Rechnung.png	       B4: Abrechnung	                                        Detaillierte Kostenaufstellung (Mietdauer, Fahrzeugtyp, 19% MwSt., 
                                                                                          Gesamtbetrag). Bietet eine dedizierte Option zur Aktivierung von 
                                                                                          Sammelrechnungen für Geschäftskunden.          

3. KI-gestützter Design-Workflow
Entsprechend den Vorgaben des Projektplans wurde ein innovativer, KI-gestützter UI/UX-Workflow gewählt. Als primäres Werkzeug kam das generative KI-Tool
v0.dev (by Vercel) zum Einsatz. Durch präzises, iteratives Prompting in deutscher und englischer Sprache wurde die UI komponentenbasiert generiert. Dieser
Ansatz bot signifikante Vorteile:
- Effizienz und Geschwindigkeit: Die Erstellung hochprofessioneller Komponenten-Layouts erfolgte in Bruchteilen der herkömmlichen Designzeit.

- Direkte Code-Nähe: Da v0.dev echten, lauffähigen Code im Hintergrund erzeugt (React/Tailwind CSS), ist eine nahtlose Transformation des Designs in die
 nachfolgende Programmierphase (Meilenstein 3/4) ohne Informationsverlust gewährleistet.

- Iterative Verfeinerung: Durch zielgerichtete Folge-Prompts (z.B. die nachträgliche Änderung von „E-Mail“ zu „Kundennummer“ sowie das Einfügen spezifischer
 Fehlermeldungen) wurde das KI-Design exakt an die funktionalen Anforderungen der Projektbeschreibung angepasst.

 4. Dokumentation der Projektreferenzen
Die designten Oberflächen wurden zur weiteren Abstimmung im Team und zur Abgabe für die Projektleitung in das zentrale Design-Repository überführt.
Figma Projekt-Link: https://www.figma.com/design/pINa25RcJ7kXoOSghkel03/B4_Abrechnung_Rechnung?node-id=0-1&p=f&t=g2bR16tsqZlOr4wn-0

Die vier exportierten PNG-Grafiken wurden im lokalen Dateisystem gesichert und stehen zur Übertragung in das GitHub-Verzeichnis /docs/design/ bereit.
