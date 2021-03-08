import {  Grid} from '@material-ui/core';
import Controls from '../../components/controls/Controls'

import React from 'react'

import {useForm,Form} from '../../components/useForm';
import * as employeeService from '../../service/employeeService';


const genderItems=[
    {id:'male',title:'Male'},
    {id:'female',title:'FeMale'},
    {id:'other',title:'Other'}
]

const initialFValues={
    id:0,
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
    
    
const {values,setValues,handleInputChange}=useForm(initialFValues);
     
    return (
        
            <Form >          
                 <Grid container>
                <Grid item xs={6}>
                    <Controls.Input  
                    label="Full Name" 
                    value={values.fullName}
                    name="fullName" 
                    onChange={handleInputChange}/>

                 
                    <Controls.Input 
                    label="Email" 
                    value={values.email} 
                    name="email" 
                    onChange={handleInputChange} />

                    <Controls.Input 
                    label="Mobile" 
                    value={values.mobile} 
                    name="mobile" 
                    onChange={handleInputChange} />

                    <Controls.Input 
                    label="City" 
                    value={values.city} 
                    name="city" 
                    onChange={handleInputChange} />

                    
                  
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
                     name="department"
                     value={values.departmentId}
                     label="Department"
                     onChange={handleInputChange}
                     options={employeeService.getDepartmentCollection()}
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
                        /> 
                    </div>
                </Grid>

            </Grid>
                
                </Form>
        
    )
}
