import {  Grid,MenuItem,FormControl,InputLabel,Select as MuiSelect } from '@material-ui/core';
import Controls from '../../components/controls/Controls'

import React from 'react'

import {useForm,Form} from '../../components/useForm';
import * as employeeService from '../../services/employeeService';
import { ErrorSharp } from '@material-ui/icons';


const genderItems=[
    {id:'male',title:'Male'},
    {id:'female',title:'FeMale'},
    {id:'other',title:'Other'}
]

const initialFValues={
    id: 0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate:new Date(),
    isPermanent: false


}
export default function EmployeeForm() {

    const validate=(fieldValues=values)=>{
        const temp={...errors}
        if('fullName' in fieldValues)
            temp.fullName=fieldValues.fullName?"":"This field is required"
        if('email' in fieldValues)
            temp.email=(/$^|.+@.+..+.com|.in/).test(fieldValues.email)?"":"Email is not valid"
        if('mobile' in fieldValues)
            temp.mobile=fieldValues.mobile.length>9?"":"Minimum 10 numbers  required"
        if('departmentId' in fieldValues)
            temp.departmentId=fieldValues.departmentId.length!=0?"":"This field is required"
        setErrors({
            ...temp
        })
        if(fieldValues === values)
            return Object.values(temp).every(x=>x == "")
    }
    
    
const {values,setValues,errors,setErrors,handleInputChange,resetForm}=useForm(initialFValues,true,validate);
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validate()){
               
                employeeService.insertEmployee(values)
                resetForm()
        }
    } 
    return (
        
            <Form onSubmit={handleSubmit}>          
                 <Grid container>
                <Grid item xs={6}>
                    <Controls.Input  
                    label="Full Name" 
                    value={values.fullName}
                    name="fullName" 
                    onChange={handleInputChange}
                    error={errors.fullName}/>

                 
                    <Controls.Input 
                    label="Email" 
                    value={values.email} 
                    name="email" 
                    onChange={handleInputChange}
                    error={errors.email} />

                    <Controls.Input 
                    label="Mobile" 
                    value={values.mobile} 
                    name="mobile" 
                    onChange={handleInputChange}
                    error={errors.mobile} />

                    <Controls.Input 
                    label="City" 
                    value={values.city} 
                    name="city" 
                    onChange={handleInputChange} 
                    />

                    
                  
                  </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup 
                     name="gender"
                     value={values.gender}
                     onChange={handleInputChange}
                     label="Gender"
                     items={genderItems}
                     />
                   <Controls.Select
                    
                    name="departmentId"
                    label="Department"
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={employeeService.getDepartmentCollection()}
                    error={errors.departmentId}
                   />
                    
 
                     <Controls.DatePicker 
                     name="hireDate"
                     label="Hire Date"
                     value={values.hireDate}
                     onChange={handleInputChange}
                     />
                     <Controls.Checkbox
                     name="isPermanent"
                     label="Permanent Employee"
                     value={values.isPermanent}
                     onChange={handleInputChange}

                     />
                    <div>
                       <Controls.Button
                        type="submit"
                        text="Submit"
                        /> 
                        <Controls.Button
                        type="submit"
                        color="default"
                        text="Reset"
                        onClick={resetForm}
                        /> 
                    </div>
                </Grid>

            </Grid>
                
                </Form>
        
    )
}
