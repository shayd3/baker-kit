import React from 'react';
import { Grid, TextField }  from '@mui/material'
import Ingredient from './Ingredient';

type CalculatorState = { value: string, ingredients: Ingredient[] }

class Calculator extends React.Component<{}, CalculatorState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: '',
            ingredients: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        this.setState({value: event.target.value});
    }

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
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </Grid>

                <Ingredient
                    name="water"
                />
            </Grid>
        )
    }

}


export default Calculator;