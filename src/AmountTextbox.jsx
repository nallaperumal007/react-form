import { InputAdornment, TextField } from '@mui/material';
import React from 'react';

function AmountTextbox(props) {

    const { value, onChange, decimalDigits } = props;

    const onChangeHandler = (e) => {
        // 45
        // 45.5
        // 45.55
        // 45.55

        const values = e.target.value.split(".");

        if(values.length === 1 || (values.length === 2 && values[1].length <= decimalDigits)) {
            onChange(e.target.value)
        }
    }

    const onBlueHandler = (e) => {
        onChange(parseFloat(e.target.value).toFixed(decimalDigits));
    }

    return (
        <div>
            <TextField
                id="filled-basic"
                type='number'
                value={value}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                onChange={onChangeHandler}
                onBlur={onBlueHandler}
            />
        </div>
    );
}

export default AmountTextbox;