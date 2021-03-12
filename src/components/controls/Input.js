import { TextField } from '@material-ui/core'
import React from 'react'

export default function Input(props) {
    const {name,label,value,onChange,error=null}=props
    return (
        <TextField variant="outlined" 
        label={label}
        value={value} 
        name={name}
        onChange={onChange}
        
        {...(error && {error:true,helperText:error} )}
        />
    )
}
