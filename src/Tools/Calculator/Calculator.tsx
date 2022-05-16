import React from 'react';
import { Grid, TextField }  from '@mui/material'
import { spacing } from '@mui/system';

// (weight of ingredient / weight of flour) x 100 = baker’s percent
class Calculator extends React.Component {
    // calculateWeight(ingredientWeight: Number, flourWeight: Number) {

    // }

    render() {
        return (
            <Grid 
                id='calc' 
                className='Calculator'
                container
                direction='column'
                alignItems='center'
                justifyContent='center'    
            >
                <Grid item sx={{my: .5}} >
                    <TextField 
                    id="calc-flour" 
                    label="Flour (g)" 
                    variant="outlined"
                    />
                </Grid>
                <Grid item sx={{my: .5}}>
                    <TextField 
                    id="calc-water" 
                    label="Water (g)" 
                    variant="outlined" 
                    />
                </Grid>
                <Grid item sx={{my: .5}}>
                    <TextField 
                    id="calc-salt" 
                    label="Salt (g)" 
                    variant="outlined" 
                    />
                </Grid>
                <Grid item sx={{my: .5}}>
                    <TextField 
                    id="calc-yeast" 
                    label="Yeast (g)" 
                    variant="outlined" 
                    />
                </Grid>
                <Grid item sx={{my: .5}}>
                    <TextField 
                    id="calc-sugar" 
                    label="Sugar (g)" 
                    variant="outlined" 
                    />
                </Grid>
            </Grid>
        )   
    }
    
}


export default Calculator;