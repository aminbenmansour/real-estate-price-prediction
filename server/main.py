from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class House(BaseModel):
    rooms: int
    sqft: float
    baths: int
    location: str