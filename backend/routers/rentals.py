from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from datetime import datetime

router = APIRouter(
    prefix="/api/rentals",
    tags=["Mietvorgang & Abrechnung"]
)

# Datenstruktur für eine neue Buchung
class RentalCreate(BaseModel):
    customer_name: str
    vehicle_id: int
    days: int

# Simulierte Datenbank für die erstellten Mietvorgänge
MOCK_RENTALS = {}
NEXT_ID = 1

@router.post("/start")
def start_rental(rental: RentalCreate):
    global NEXT_ID
    if rental.days <= 0:
        raise HTTPException(status_code=400, detail="Die Mietdauer muss mindestens 1 Tag betragen.")
    
    # Preisberechnung basierend auf Fahrzeug-ID (Simuliert)
    price_per_day = 79.0 if rental.vehicle_id == 2 else 49.0
    total_price = rental.days * price_per_day
    
    new_rental = {
        "id": NEXT_ID,
        "customer_name": rental.customer_name,
        "vehicle_id": rental.vehicle_id,
        "days": rental.days,
        "status": "Aktiv",
        "start_date": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "total_price": total_price
    }
    
    MOCK_RENTALS[NEXT_ID] = new_rental
    NEXT_ID += 1
    return {"success": True, "message": "Mietvorgang erfolgreich gestartet!", "rental": new_rental}

@router.get("/{rental_id}/invoice")
def get_invoice(rental_id: int):
    """Generiert die Abrechnung für einen Mietvorgang (Teilschritt 22/23)"""
    if rental_id not in MOCK_RENTALS:
        raise HTTPException(status_code=404, detail="Mietvorgang nicht gefunden.")
    
    rental = MOCK_RENTALS[rental_id]
    
    # Hier erstellen wir das Abrechnungsobjekt
    return {
        "invoice_number": f"INV-2026-{rental['id']:04d}",
        "customer": rental["customer_name"],
        "calculated_days": rental["days"],
        "net_amount": round(rental["total_price"] / 1.19, 2),
        "vat_amount": round(rental["total_price"] - (rental["total_price"] / 1.19), 2),
        "gross_total": rental["total_price"],
        "status": "Bereit zur Abrechnung"
    }