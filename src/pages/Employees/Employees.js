import {React, useState} from 'react'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PageHeader from '../../components/PageHeader';
import { Paper, TableBody, TableCell, TableHead, TableRow,Toolbar,InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import Controls from '../../components/controls/Controls';
import {Search} from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Popup from '../../components/Popup';
import  Notification from '../../components/Notification';
import ConfirmDialog from '../../components/ConfirmDialog';


const useStyles=makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(4),
        padding:theme.spacing(3)
    },
    searchInput:{
        width:'75%'
    },
    newButton:{
        position:'absolute',
        right:'10px'
    }
}))

const headCells=[
    {id:'fullName',label:'Employee Name'},
    {id:'email',label:'Email Address(Personal)'},
    {id:'mobile',label:'Mobile Number'},
    {id:'department',label:'Department', disableSorting:true},
    {id:'actions',label:'Actions',disableSorting:true}
]
export default function Employees() {

    const classes=useStyles()

    
     const [records,setRecords]=useState(employeeService.getAllEmployees())
     const [recordForEdit,setRecordForEdit]=useState(null)
     const [filterFn,setFilterFn]=useState({fn : items => {return items}})
     const {TblContainer,TblHead,TblPagination,recordsAfterPagingAndSorting} = useTable(records,headCells,filterFn);
     const [openPopup,setOpenPopup]=useState(false)
     const [notify,setNotify]=useState({isOpen:false,message:'',type:''})
     const [confirmDialog,setConfirmDialog]=useState({isOpen:false,title:'',subTitle:''})
     const handleSearch=e =>
     {
         let target= e.target
         setFilterFn({
             fn:items =>{
                 if(target.value == '')
                    return items
                 else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
             }
         })
     }

     const addOrEdit=(employee,resetForm) =>{
         if(employee.id ==0)
                employeeService.insertEmployee(employee)
         else
                employeeService.updateEmployee(employee)
        resetForm()
        setOpenPopup(false)
        setRecordForEdit(null)
        setRecords(employeeService.getAllEmployees())
        setNotify({
            isOpen:true,
            message:"Submitted Successfully",
            type:"success"

        })
     }

     const openInPopup = item =>{
         setRecordForEdit(item)
         setOpenPopup(true)
     }

     const onDelete = id =>{
            setConfirmDialog({
                ...confirmDialog,
                isOpen:false
            })
            employeeService.deleteEmployee(id)
            setRecords(employeeService.getAllEmployees())
            setNotify({
                isOpen:true,
                message:"Deleted Successfully",
                type:"error"
    
            })
        

     }
     return (
        <>
         <PageHeader
    title="New Employee"
    subTitle="Form Design with validation"
    icon={<PeopleOutlineIcon fontSize="small"/>}/>
    <Paper className={classes.pageContent}>
    
     <Toolbar>
         <Controls.Input 
         className={classes.searchInput}
         label="Search Employee"
         onChange={handleSearch}
         InputProps={{
                 startAdornment:(<InputAdornment position="start">
                     <Search />
                 </InputAdornment>)
             }}
       />
       <Controls.Button 
       className={classes.newButton}
       text="Add Employee"
       variant="outlined"
       startIcon={<AddIcon/>}
       onClick={() => {setOpenPopup(true);setRecordForEdit(null)}}

       />
     </Toolbar>
    <TblContainer>
      
            <TblHead/>
       
            <TableBody>
            
               {
                   recordsAfterPagingAndSorting().map(item => (
                    <TableRow  key={item.id}>
                       <TableCell>{item.fullName}</TableCell>
                       <TableCell>{item.email}</TableCell>
                       <TableCell>{item.mobile}</TableCell>
                       <TableCell>{item.department }</TableCell>
                       <TableCell>
                           <Controls.ActionButton
                            color="primary"
                            onClick={()=> {openInPopup(item)}}
                            >
                                 <EditOutlinedIcon fontsize='small'/>
                           </Controls.ActionButton>
                           <Controls.ActionButton
                            color="secondary"
                            onClick={()=>{
                                // onDelete(item.id)
                                setConfirmDialog({
                                    isOpen:true,
                                    title:"Are you sure to delete this record",
                                    subTitle:"You can't undo this operation",
                                    onConfirm: ()=>{onDelete(item.id)}
                                })
                            }}
                            >
                           <CloseIcon fontsize='small'/>
                           </Controls.ActionButton>
                       </TableCell>
                       </TableRow>
                   ))
               }
           
            </TableBody>
    </TblContainer>
    <TblPagination />
    </Paper>
     <Popup
     openPopup={openPopup}
     setOpenPopup={setOpenPopup}
     title="Employee Form"
     >
     <EmployeeForm 
     
     addOrEdit={addOrEdit}
     recordForEdit={recordForEdit}
     />
     </Popup>
      <Notification 
      notify={notify}
      setNotify={setNotify}
      />
      <ConfirmDialog 
      confirmDialog={confirmDialog}
      setConfirmDialog={setConfirmDialog}
      />
       </>
    )
}
