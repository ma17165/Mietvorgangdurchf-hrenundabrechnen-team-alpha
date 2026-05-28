-- Datenbank-Schema für Autovermietung "Alpha Rent"
-- Abgeleitet und normalisiert aus der Klassendiagramm-Vorgabe (M3)

-- 1. Stammdaten-Tabellen
CREATE TABLE IF NOT EXISTS `Kunde` (
  `kundenNr` INT AUTO_INCREMENT PRIMARY KEY,
  `nachname` VARCHAR(100) NOT NULL,
  `vorname` VARCHAR(100) NOT NULL,
  `eMail` VARCHAR(150) UNIQUE NOT NULL,
  `passwort` VARCHAR(255) NOT NULL,
  `istAktiv` BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS `Mitarbeiter` (
  `personalNr` INT AUTO_INCREMENT PRIMARY KEY,
  `nachname` VARCHAR(100) NOT NULL,
  `vorname` VARCHAR(100) NOT NULL,
  `eMail` VARCHAR(150) UNIQUE NOT NULL,
  `passwort` VARCHAR(255) NOT NULL,
  `rolle` VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS `Mietstation` (
  `stationsId` INT AUTO_INCREMENT PRIMARY KEY,
  `bezeichnung` VARCHAR(100) NOT NULL,
  `ort` VARCHAR(100) NOT NULL,
  `plz` VARCHAR(10) NOT NULL,
  `strasse` VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS `Kfz` (
  `kfzId` INT AUTO_INCREMENT PRIMARY KEY,
  `kennzeichen` VARCHAR(20) UNIQUE NOT NULL,
  `marke` VARCHAR(50) NOT NULL,
  `modell` VARCHAR(50) NOT NULL,
  `kilometerstand` INT NOT NULL,
  `tankstatus` INT DEFAULT 100,
  `status` VARCHAR(30) DEFAULT 'Verfügbar'
);

-- 2. Transaktions- und Bewegungshistorie
CREATE TABLE IF NOT EXISTS `Mietvertrag` (
  `vertragsNr` INT AUTO_INCREMENT PRIMARY KEY,
  `kundenNr` INT NOT NULL,
  `kfzId` INT NOT NULL,
  `abholStationId` INT NOT NULL,
  `rueckgabeStationId` INT NOT NULL,
  `mietbeginn` DATETIME NOT NULL,
  `mietende` DATETIME NOT NULL,
  `kmStart` INT NOT NULL,
  `kmEnde` INT DEFAULT NULL,
  `tankstatusAbholung` INT DEFAULT 100,
  `tankstatusRueckgabe` INT DEFAULT NULL,
  `vertragstatus` ENUM('Reserviert', 'Laufend', 'Beendet', 'Storniert') DEFAULT 'Reserviert',
  FOREIGN KEY (`kundenNr`) REFERENCES `Kunde`(`kundenNr`) ON DELETE RESTRICT,
  FOREIGN KEY (`kfzId`) REFERENCES `Kfz`(`kfzId`) ON DELETE RESTRICT,
  FOREIGN KEY (`abholStationId`) REFERENCES `Mietstation`(`stationsId`) ON DELETE RESTRICT,
  FOREIGN KEY (`rueckgabeStationId`) REFERENCES `Mietstation`(`stationsId`) ON DELETE RESTRICT
);

-- 3. Finanzwesen
CREATE TABLE IF NOT EXISTS `Rechnung` (
  `rechnungsNr` INT AUTO_INCREMENT PRIMARY KEY,
  `vertragsNr` INT UNIQUE NOT NULL,
  `rechnungsDatum` DATE NOT NULL,
  `gesamtBetragNetto` DECIMAL(10,2) NOT NULL,
  `mwstBetrag` DECIMAL(10,2) NOT NULL,
  `gesamtBetragBrutto` DECIMAL(10,2) NOT NULL,
  `zahlungsstatus` ENUM('Offen', 'Bezahlt', 'Mahnung') DEFAULT 'Offen',
  FOREIGN KEY (`vertragsNr`) REFERENCES `Mietvertrag`(`vertragsNr`) ON DELETE CASCADE
);
