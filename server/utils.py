import json
import pickle

def load_saved_artifacts():
    print('Loading saved artifacts ... start')
    global __data_columns
    global __locations

    with open('./artifacts/columns.json', 'r') as f:
        __data_columns = json.load(f)['columns']
        __locations = __data_columns[3:]

    global __model
    with open('./artifacts/bangalore_real_estate_price_prediction_model.pickle', 'rb') as f:
        __model = pickle.load(f)
    print('Loading saved artifacts ... done')
