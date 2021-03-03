import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles=makeStyles({
    sideMenu:{
    display: 'flex',
    flexDirection:'column',
    position: 'absolute',
    height: '100%',
    left: '0px',
    width: '150px',
    backgroundColor: '#253053'
  }
})


export default function SideMenu() {
    const classes=useStyles();
    return (
        // <div className="side-menu">
           <div className={classes.sideMenu}>
        </div>
    )
}
