from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentifizierung"]
)

# Datenstruktur für die Anfrage (was das Frontend schickt)
class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
def login(data: LoginRequest):
    # Einfacher Pflichtfeld-Check & Validierung (wie auf unserem Frontend-Foto gefordert!)
    if not data.email or not data.password:
        raise HTTPException(status_code=400, detail="E-Mail und Passwort sind Pflichtfelder")
    
    # Test-Validierung (Wir akzeptieren für den Prototyp das Beispiel aus eurem Mockup)
    if data.email == "max.mueller@mail.de" and data.password == "12345678":
        return {
            "success": True,
            "message": "Login erfolgreich!",
            "user": {
                "name": "Max Müller",
                "role": "Kunde/Mitarbeiter",
                "email": data.email
            }
        }
    
    # Wenn die Daten falsch sind
    raise HTTPException(status_code=401, detail="Ungültige E-Mail-Adresse oder Passwort")