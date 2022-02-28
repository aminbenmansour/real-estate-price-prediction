from fastapi import FastAPI
from pydantic import BaseModel
import utils

app = FastAPI()

class House(BaseModel):
    rooms: int
    sqft: float
    baths: int
    location: str

@app.on_event("startup")
async def startup_event():
    utils.load_saved_artifacts()