import React, { useState } from "react";
import { useForm } from "react-hook-form";
import locations from '../data/locations.json';
import { api } from "../App";

import Card from "@mui/material/Card";
import Input from "@mui/material/Input";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { CardActions, CardContent, Grid, Typography } from "@mui/material";


let locs = locations["locs"];

function Form() {
    const [price, setPrice] = useState(-1)
    const { register, handleSubmit } = useForm();

    let prediction = <div>
        <Typography>
            <h2>The estimated price is: {-price} rupees</h2>
        </Typography>
    </div>;

    const submitForm = async (data: any) => {

        await api.post('predict-home-price', data)
            .then(function (response) {
                setPrice(response.data['estimated_price']);
            })
    }


    return (
        <div className="Form">
            <div className="title">
                <Grid container justifyContent="center">
                    <Card variant="outlined" sx={{ width: 1/4 }}>
                        <form onSubmit={handleSubmit(submitForm)}>
                            <CardContent>
                                <Input sx={{ width: 3/4 }} type="number" placeholder="Type the number of rooms" {...register('rooms', { required: true })} required /> <br />
                                <Input sx={{ width: 3/4 }} type="number" placeholder="Type square feet" {...register('sqft')} required /> <br />
                                <Input sx={{ width: 3/4 }} type="number" placeholder="Type the number of baths" {...register('baths')} required /> <br />

                                <InputLabel id="select-locations">Locations</InputLabel>
                                <Select {...register('location')}
                                    sx={{ width: 3/4 }} 
                                    labelId="select-locations"
                                    label="Choose location"
                                    defaultValue="other">
                                    {
                                        locs.map((loc) =>
                                            <MenuItem key={loc} value={loc}>{loc}</MenuItem>
                                        )
                                    }

                                </Select> <br />
                            </CardContent>

                            <CardActions>
                                <Button variant="contained" color="success" type="submit" value="submit">Submit</Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
            </div>

            {prediction}
        </div>

    );
}

export default Form 
