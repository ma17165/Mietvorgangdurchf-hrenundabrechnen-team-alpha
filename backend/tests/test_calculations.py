import pytest

# Hilfsfunktion für die kaufmännische Berechnung (Netto, MwSt, Brutto)
# Dies simuliert die Berechnungslogik, die in euren Routern/Services liegt.
def calculate_invoice_amounts(netto_amount: float) -> dict:
    """
    Berechnet die Umsatzsteuer (19%) und den Bruttobetrag basierend auf dem Netto.
    Rundet kaufmännisch sauber auf zwei Nachkommastellen.
    """
    # 19% Mehrwertsteuer berechnen
    tax_rate = 0.19
    raw_tax = netto_amount * tax_rate
    
    # Kaufmännische Rundung auf 2 Nachkommastellen
    tax_amount = round(raw_tax, 2)
    brutto_amount = round(netto_amount + tax_amount, 2)
    
    return {
        "netto": round(netto_amount, 2),
        "tax": tax_amount,
        "brutto": brutto_amount
    }

# =====================================================================
# UNIT TESTS (TEILSCHRITT 28)
# =====================================================================

def test_standard_invoice_calculation():
    """
    TF-03: Positivtest für Standard-Nettobetrag (100.00 €)
    Erwartet: 19.00 € MwSt und 119.00 € Brutto
    """
    result = calculate_invoice_amounts(100.00)
    
    assert result["netto"] == 100.00
    assert result["tax"] == 19.00
    assert result["brutto"] == 119.00


def test_zero_value_calculation():
    """
    TF-04: Grenzwerttest mit Nullwert (0.00 €)
    Erwartet: 0.00 € MwSt und 0.00 € Brutto ohne Absturz
    """
    result = calculate_invoice_amounts(0.00)
    
    assert result["netto"] == 0.00
    assert result["tax"] == 0.00
    assert result["brutto"] == 0.00


def test_commercial_rounding():
    """
    TF-05: Test für kaufmännische Rundung auf zwei Nachkommastellen
    Eingabe: 10.55 € Netto -> Mathematisch 2.0045 € MwSt.
    Erwartet: Auf 2.00 € abgerundete MwSt. und 12.55 € Brutto.
    """
    result = calculate_invoice_amounts(10.55)
    
    assert result["netto"] == 10.55
    assert result["tax"] == 2.00
    assert result["brutto"] == 12.55
