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

@app.post('/predict-home-price/')
def predict_home_price(data: House):
    total_sqft = data.sqft
    location = data.location
    bhk = data.rooms
    bath = data.baths

    response = {
        'estimated_price': utils.get_estimated_price(location,total_sqft,bhk,bath)
    }
    
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.get("/get-location-names")
def get_location_names():
    utils.get_location_names()