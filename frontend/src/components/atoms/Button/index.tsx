import React from 'react'
import  MuiButton from '@mui/material/Button'
import { ThemeProvider } from '@mui/material'
import Theme from '../../../themes'

interface ButtonProps{
    variant:"outlined"|"contained"|"text",
    color?:"primary"|"secondary",
    size?:"small"|"medium"|"large",
    name?:any,
    disabled?:boolean,
    onClick?:any,
    sx?: any,
    children?: React.ReactNode,
    label?:string,
    textVariant?:string,
    startIcon?:any,
    endIcon?: any,
    bgColor?:any,
    
}

const Button = (props:ButtonProps) => {
  return (
    <>
    <ThemeProvider theme={Theme}>
      <MuiButton  sx={{textTransform:"none"}}{...props}>
        {props.name}
      </MuiButton>
      </ThemeProvider>
    </>
  )
}

export  default Button
