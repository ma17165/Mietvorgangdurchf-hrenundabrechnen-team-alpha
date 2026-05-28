-- Testdaten für Autovermietung "Alpha Rent"
-- Erstellt für Meilenstein 3 (M3 / db/seed.sql)

-- 1. Testdaten für Kunden (Passwörter sind beispielhaft als Hash-Dummies hinterlegt)
INSERT INTO `Kunde` (`kundenNr`, `nachname`, `vorname`, `eMail`, `passwort`, `istAktiv`) VALUES
(1, 'Müller', 'Max', 'max.mueller@mail.de', '$2y$10$xyz1234567890abcdefgh', 1),
(2, 'Schmitz', 'Sabine', 'sabine.schmitz@firma.de', '$2y$10$abcdefghijklmnopqrst', 1),
(3, 'Bauer', 'Thomas', 'thomas.bauer@web.de', '$2y$10$9876543210zyxwvutsrq', 1);

-- 2. Testdaten für Mitarbeiter
INSERT INTO `Mitarbeiter` (`personalNr`, `nachname`, `vorname`, `eMail`, `passwort`, `rolle`) VALUES
(1, 'Krause', 'Christian', 'c.krause@alpharent.de', '$2y$10$profpasswort12345678', 'Admin'),
(2, 'Fischer', 'Andreas', 'a.fischer@alpharent.de', '$2y$10$mitarbeiterpasswort', 'Station_Manager');

-- 3. Testdaten für Mietstationen
INSERT INTO `Mietstation` (`stationsId`, `bezeichnung`, `ort`, `plz`, `strasse`) VALUES
(1, 'Hauptbahnhof Gelsenkirchen', 'Gelsenkirchen', '45879', 'Bahnhofsvorplatz 1'),
(2, 'Campus-Station Buer', 'Gelsenkirchen', '45894', 'Neidenburger Str. 43');

-- 4. Testdaten für den Fuhrpark (Kfz)
INSERT INTO `Kfz` (`kfzId`, `kennzeichen`, `marke`, `modell`, `kilometerstand`, `tankstatus`, `status`) VALUES
(1, 'GE-AR-2026', 'VW', 'Golf 8', 12450, 100, 'Verfügbar'),
(2, 'GE-EV-999E', 'Tesla', 'Model 3', 8900, 92, 'Verfügbar'),
(3, 'GE-RE-4567', 'BMW', '3er Touring', 45120, 45, 'Werkstatt');

-- 5. Testdaten für Mietverträge
INSERT INTO `Mietvertrag` (`vertragsNr`, `kundenNr`, `kfzId`, `abholStationId`, `rueckgabeStationId`, `mietbeginn`, `mietende`, `kmStart`, `kmEnde`, `tankstatusAbholung`, `tankstatusRueckgabe`, `vertragstatus`) VALUES
(1, 1, 1, 1, 1, '2026-05-20 08:00:00', '2026-05-22 18:00:00', 12300, 12450, 100, 100, 'Beendet'),
(2, 2, 2, 2, 2, '2026-05-28 09:00:00', '2026-05-30 09:00:00', 8900, NULL, 92, NULL, 'Laufend'),
(3, 3, 3, 1, 2, '2026-06-01 10:00:00', '2026-06-05 10:00:00', 45120, NULL, 100, NULL, 'Reserviert');

-- 6. Testdaten für Rechnungen (Passend zu Vertrag 1)
INSERT INTO `Rechnung` (`rechnungsNr`, `vertragsNr`, `rechnungsDatum`, `gesamtBetragNetto`, `mwstBetrag`, `gesamtBetragBrutto`, `zahlungsstatus`) VALUES
(1, 1, '2026-05-22', 150.00, 28.50, 178.50, 'Bezahlt');
