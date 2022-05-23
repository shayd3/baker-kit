import React from 'react';
import { Grid, TextField }  from '@mui/material'

type IngredientProps = {
    name: string
}

type IngredientState = {
    percentage: number,
    weight: number
}

class Ingredient extends React.Component<IngredientProps, IngredientState> {
    constructor(props: any) {
        super(props);
        this.state = {
            percentage: 0,
            weight: 0
        }
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handlePercentChange = this.handlePercentChange.bind(this);
    }

    handleWeightChange(event: any) {
        console.log(event)
        this.setState({
            weight: event.target.value
        })
    }

    handlePercentChange(event: any) {
        console.log(event)
        this.setState({
            percentage: event.target.value
        })
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
                        id={'calc-'+this.props.name.toLowerCase()+'-percentage'}
                        label={this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1) + " (%)"}
                        variant="outlined"
                        sx = {{mx: .2, my: .2}}
                        onChange={this.handlePercentChange}
                        value={this.state.percentage}
                    />
                    <TextField
                        id={'calc-'+this.props.name.toLowerCase()+'-weight'}
                        label={this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1) + " (g)"}
                        variant="outlined"
                        sx = {{mx: .2, my: .2}}
                        onChange={this.handleWeightChange}
                        value={this.state.weight}
                    />
                </Grid>
            </Grid>
        )

    }
}

export default Ingredient;