# real-estate-price-prediction

In this project we aim to take advantage of a machine learning model by making predictions through a web application.

We constructed the model step by step going through all the hooks data scientists usually do building a machine learning model like *data cleaning*, *feature engineering*, *outlier removal* and *training the model*.

We consumed the model through RESTFUL API thanks to a reactjs client.

# Usage

## Backend
get into ```server``` subdirectory
1. create a virtual environment and install dependecies
```
pipenv shell && pipenv install
``` 
2. launch fastapi server
```
uvicorn main:app
```
## Frontend
get into ```client``` subdirectory
1. install dependencies
```
npm install
```
2. launch node server
```
npm run dev
```
