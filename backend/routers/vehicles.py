from fastapi import APIRouter

router = APIRouter(
    prefix="/api/vehicles",
    tags=["Fuhrpark"]
)

# Simulierte Fahrzeugdaten (Mock-Daten)
MOCK_VEHICLES = [
    {"id": 1, "brand": "VW", "model": "Golf ID.3", "type": "Elektro", "available": True, "price_per_day": 49.0},
    {"id": 2, "brand": "Tesla", "model": "Model 3", "type": "Elektro", "available": True, "price_per_day": 79.0},
    {"id": 3, "brand": "Audi", "model": "A4 Avant", "type": "Verbrenner", "available": False, "price_per_day": 65.0}
]

@router.get("")
def get_all_vehicles():
    """Gibt eine Liste aller Fahrzeuge im Fuhrpark zurück"""
    return MOCK_VEHICLES