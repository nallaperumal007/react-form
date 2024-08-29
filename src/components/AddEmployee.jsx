import { Grid, TextField } from '@mui/material';
import React from 'react';

function AddEmployee(props) {
    return (
        <Grid container spacing={2} margin={4}>
            <Grid item xs={4}>
                <div>
                    <label htmlFor="uniqueId">System Generated ID</label>
                </div>
                <div>
                    <TextField />
                </div>
            </Grid>
            <Grid item xs={4}>
                <label htmlFor="uniqueId">System Generated ID</label>
                <TextField />
            </Grid>
            <Grid item xs={4}>
                <label htmlFor="uniqueId">System Generated ID</label>
                <TextField />
            </Grid>
            <Grid item xs={4}>
                <label htmlFor="uniqueId">System Generated ID</label>
                <TextField />
            </Grid>
            <Grid item xs={4}>
                <label htmlFor="uniqueId">System Generated ID</label>
                <TextField />
            </Grid>
        </Grid>

    );
}

export default AddEmployee;