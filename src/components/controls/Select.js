import { FormControl, InputLabel,MenuItem,Select as MuiSelect,FormHelperText } from '@material-ui/core'
import React from 'react'

export default function Select(props) {

    const {name,label,value,onChange,options}=props;
    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            name={name}
            label={label}
            value={value}
            onChange={onChange}>
                <MenuItem value="" >None</MenuItem>
               {
               options.map(
                       option =>     (<MenuItem key={option.id} value={option.id} >{option.title}</MenuItem> )           )
               }
            </MuiSelect>
           
        </FormControl>
        )
}
