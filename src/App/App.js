
import './App.css';
import Header from '../components/Header';

import SideMenu from '../components/SideMenu';
import {createMuiTheme, CssBaseline, Grid,MenuItem,FormHelperText,FormControl,Select,InputLabel} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';

import Employees from '../pages/Employees/Employees';

const theme=createMuiTheme({
  palette:{
    primary:{
     main:"#2ECCFA",
     
    },
    secondary:{
      main:"#E6E6E6",
     
    },
    root:{
      backgroundColor:"E6E6E6"
    }

  },
  overrides:{
    MuiAppBar:{
    root:{
      transform:'translateZ(0)'
    }
  }
  },

  props:{
    MuiIconButton:{
      disableRipple:'true'
    }
  }
})


const useStyles=makeStyles({
  appMain:{
    paddingLeft:'150px',
    width:'100%'
  }
})

export default function App() {
   const classes=useStyles();
  return (
     <ThemeProvider theme={theme}>
     <SideMenu/>
     <div className={classes.appMain}>
    <Header/>
   
    <Employees/>
 
    <CssBaseline/>
     </div>
    </ThemeProvider>
  );
}


