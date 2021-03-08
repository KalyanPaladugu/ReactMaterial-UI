import React from 'react'
import {Button as MuiButton, makeStyles} from '@material-ui/core'
export default function Button(props) {

    const useStyles=makeStyles(theme=>({
        root:{
            margin:theme.spacing(1)
        },
        label:{
            textTransform:'none'
        }

    }))

    const {text,size,color,variant,onClik,...other}=props
    const classes=useStyles()
    return (
        <MuiButton
        variant={variant || "contained"}
        color={color || "primary"}
        size={size || "large"}
        onClick={onClik}
        {...other}
        classes={{root:classes.root,label:classes.label}}
        >
                        {text}
        </MuiButton>
    )
}
