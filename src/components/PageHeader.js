import { Card, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'


const useStyles=makeStyles(theme=>({
    root:{
        backgroundColor:"#fdfdff"
    },
    pageHeader:{
        padding:theme.spacing(2),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        color:"#2ECCFA",
        display:'inlineBlock',
        padding:theme.spacing(2)
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))
export default function PageHeader(props) {
    const {title,subTitle,icon}=props
    const classes=useStyles()
    return (
        <Paper  elevation={0} square className={classes.root}>
            <div  className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                   {icon}
                 </Card>
                   <div className={classes.pageTitle}>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="subtitle2" component="div">
                        {subTitle}
                    </Typography>
                    </div>
            </div>
        </Paper>
    )
}
