import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core'
import { NotListedLocation } from '@material-ui/icons'
import React from 'react'
import Controls from './controls/Controls'
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
const useStyles=makeStyles(theme=>({
    dialog:{
        position:'absolute',
        top:theme.spacing(5),
        padding:theme.spacing(2)

    },
    dialogTitle:{
            textAlign:'center'
    },
    dialogContent:{
        textAlign:'center'
    },
    dialogActions:{
        justifyContent:'center'
    },
    titleIcon:{
        backgroundColor: theme.palette.secondary.light,
        color:theme.palette.secondary.main,
        '&:hover':{
            backgroundColor:theme.palette.secondary.light,
            cursor:'default'
        },
        '& .MuiSvgIcon-root':{
            fontSize:'8rem'
        }
    }
}))



export default function ConfirmDialog(props) {
   const classes=useStyles()
    const{confirmDialog,setConfirmDialog}=props
    return (
        <Dialog open={confirmDialog.isOpen}  classes={{paper:classes.dialog}}>
            <DialogTitle className={classes.dialogTitle }>
            <IconButton disableRipple className={classes.titleIcon}>
                <NotListedLocationIcon/>
            </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
            <Typography variant="h6">
                {confirmDialog.title}
            </Typography>
            <Typography variant="subtitle2">
                {confirmDialog.subTitle}
            </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
<Controls.Button 
text="No"
color="default"
onClick={()=>setConfirmDialog({...confirmDialog,isOpen:false})}
/>
<Controls.Button 
text="Yes"
color="secondary"
onClick={confirmDialog.onConfirm}
/>

            </DialogActions>
        </Dialog>
    )
}