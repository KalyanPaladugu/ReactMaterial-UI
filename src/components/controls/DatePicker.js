import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'

export default function DatePicker(props) {

    const {name,label,value,onChange}=props
    const convertToDefEventParam=(name,value)=>({
        target:{
            name,value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
            name={name}
            label={label}
            value={value}
            formate="MM/dd/YYYY"
            onChange={date=>onChange(convertToDefEventParam(name,date))}
            >

            </KeyboardDatePicker>
        </MuiPickersUtilsProvider>
    )
}
