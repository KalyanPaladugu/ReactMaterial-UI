import { FormControl,FormHelperText,InputLabel, MenuItem,Select as MuiSelect } from '@material-ui/core'
import React from 'react'

export default function Select1(props) {
  const {name,label,value,options,error=null,onChange}=props
    return (
       <FormControl variant="outlined" {...(error && {error:true} )}>
           <InputLabel>Department</InputLabel>
           <MuiSelect name={name}
           label={label}
           value={value}
           onChange={onChange}
           
           >
           <MenuItem value="">None</MenuItem>
           {
               options.map(
                   item => ( <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
               )
           }
           </MuiSelect>
           {error && <FormHelperText>{error}</FormHelperText>}
       </FormControl>
    )
}
