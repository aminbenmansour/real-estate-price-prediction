import React, { useState } from "react";
import { useForm } from "react-hook-form";
import locations from '../data/locations.json';
// import { api } from "../App";


let locs = locations["locs"];

function Form() {
    const [price, setPrice] = useState(-1)
    const {register, handleSubmit} = useForm();

    let prediction = <h2>{price}</h2>;

    const submitForm = async (data) => {

        await api.post('predict-home-price', data)
                            .then(function(response) {
                                setPrice(response.data['estimated_price']);
                            })
    }


    return (
        <div className="Form">
            <div className="title">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <form onSubmit={handleSubmit(submitForm)}>
                    <input type="number" placeholder="rooms" {...register('rooms', {required: true})} />
                    <input type="number" placeholder="sqft" {...register('sqft')} />
                    <input type="number" placeholder="baths" {...register('baths')} />
                    <select {...register('location')}>
                        {
                            locs.map((loc) => 
                                <option key={loc} value={loc}>{loc}</option>
                            )
                        }
                        
                    </select>
                    <input type="submit" value="submit"/>
                </form>
            </div>
            
        {price > 0 && prediction}
        </div>

    );
}

export default Form;
