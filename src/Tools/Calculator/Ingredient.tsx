import React from 'react';
import { Grid, TextField }  from '@mui/material'

type IngredientProps = {
    name: string
}

class Ingredient extends React.Component<IngredientProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Grid
                container
                id="calc-water"
                justifyContent='center'
            >
                <Grid
                    item
                    sx={{my: .5}}
                >
                    <TextField
                        id="calc-water-percentage"
                        label={this.props.name + " (%)"}
                        variant="outlined"
                        sx = {{mx: .2}}
                    />
                    <TextField
                        id="calc-water-weight"
                        label={this.props.name + " (g)"}
                        variant="outlined"
                        sx = {{mx: .2}}
                    />
                </Grid>
            </Grid>
        )

    }
}

export default Ingredient;