
import './App.css';
import Header from '../components/Header';

import SideMenu from '../components/SideMenu';
import {CssBaseline, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles=makeStyles({
  appMain:{
    paddingLeft:'150px',
    width:'100%'
  }
})

export default function App() {
   const classes=useStyles();
  return (
     <>
     <SideMenu/>
     <div className={classes.appMain}>
    <Header/>
    <CssBaseline/>
     </div>
    
     

      
    </>
  );
}


