from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, vehicles, rentals  # Alle Router importieren

app = FastAPI(
    title="Alpha Rent API",
    description="Backend für den Mietvorgang und die Abrechnung (Team Alpha)",
    version="1.0.0"
)

# CORS erlaubt React-Verbindungen
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Hier melden wir alle Schichten/Endpunkte an
app.include_router(auth.router)
app.include_router(vehicles.router)
app.include_router(rentals.router)

@app.get("/")
def read_root():
    return {"status": "Online", "message": "Willkommen beim Alpha Rent Backend!"}