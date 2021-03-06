import { makeStyles, Snackbar } from '@material-ui/core'
import React from 'react'
import {Alert} from '@material-ui/lab'
import { RepeatRounded } from '@material-ui/icons'
const useStyles=makeStyles(theme =>({
    root:{
        top:theme.spacing(9)
    }
}))
export default function Notification(props) {

    const {notify,setNotify}=props
   const classes=useStyles()

   const handleClose = (event,reason)=>{
       if(reason === 'clickaway'){
           return;
       }
       setNotify({
           ...notify,
           isOpen:false
   })
   }
    return (
        <Snackbar
        open={notify.isOpen}
        autoHideDuration={4000}
        anchorOrigin={{vertical:'top', horizontal:'right'}}
        className={classes.root}
        onClose={handleClose}
        >
            <Alert severity={notify.type}
             onClose={handleClose}>
            {notify.message}
            </Alert>
        </Snackbar>
    )
}
