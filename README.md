# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# JSS:
======
+ JSS is an authoring tool for CSS which allows you to use JavaScript to describe styles in a declarative, conflict-free and reusable way. It can compile in the browser, server-side or at build time in Node
+ When we working Material UI for React Applications we will use JSS syntax to define css rules dynamically
+ JSS plugins are loaded when we create a react application. We can see those modules in nodemodules folder
+ To apply styles we can use `withStyles` or `makeStyles` conversions those are imported from `@material-ui/styles`
+ Lets see examples how to write normal css code in jss(object) format for component `SideMenu`
    +  
    ```
    import { makeStyles } from '@material-ui/styles';
    import React from 'react'
       
       <!-- JSS CSS -->
        const  useStyles=makeStyles(   `makeStyles return a function that is stored in useStyles`
                         <!-- object opened -->
                            {
                sideMenu:{ 
                            display: 'flex',
                            flexDirection:'column',
                            position: 'absolute',
                            height: '100%',
                            left: '0px',
                            width: '150px',
                            backgroundColor: '#253053'
                            }
                    }
                    <!-- object closed -->
                    )

                       <!-- Normal css -->
                             .side-menu{
                                 display: flex;
                                 flex-direction: column;
                                 position: absolute;
                                 height: 100%;
                                 left: 0px;
                                 width: 150px;
                                 background-color: #253053;
                               } 

                            export default function SideMenu() {
                                const classes=useStyles();
                                return (
                                    <!-- normal css class -->
                                     <div className="side-menu">
                                    <div className={classes.sideMenu}>
                                    </div>
                                )
                            }
                            ```
                            
# Material UI:
==============
+ To develop React Applications easy and faster we can use Material UI
+ Material UI is availabla as npm package `@materil-ui/core`
+ References Links
    + https://material-ui.com/
    + https://material.io/

+ To work with material ui we have to install `@material-ui/core` by using `npm i --save @material-ui/core` . We can check dependicies added in package.json
+ Try to import @material-ui/core for import Button component


# Customize the theme and components:
=====================================

+ Now we can customize the AppBar(header) component
    + For the AppBar component default we are getting blue background color. Now we will change as white background color 
    + For this we will use the `makeStyles` conversion
    + Header.js
        ```
        import {makeStyles} from '@material-ui/core';

        const useStyles=makeStyles({
            root:{
                backgroundColor: '#fff'
            }
        }) 

        export default function Header() {

                const classes=useStyles();
                return (
                <AppBar position="static" className={classes.root}>

                </AppBar>)
        }```