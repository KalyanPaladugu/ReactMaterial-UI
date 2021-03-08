import React from 'react'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PageHeader from '../../components/PageHeader';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles=makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(4),
        padding:theme.spacing(3)
    }
}))
export default function Employees() {

    const classes=useStyles()
    return (
        <>
         <PageHeader
    title="New Employee"
    subTitle="Form Design with validation"
    icon={<PeopleOutlineIcon fontSize="small"/>}/>
    <Paper className={classes.pageContent}>
    <EmployeeForm/>
    </Paper>
      
       </>
    )
}
