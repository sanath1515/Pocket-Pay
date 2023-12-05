import React from 'react'
import MuiCheckBox from '@mui/material/Checkbox'
import Theme from '../../../themes';
import { ThemeProvider } from '@emotion/react';


interface CheckBoxProps{
    checked:boolean,
    color?:"primary"|"secondary",
    size?:"medium"|"small",
    onChange?:any,
    sx?:any;
}

const CheckBox = (props:CheckBoxProps) => {
  return (
    <ThemeProvider theme={Theme}>
    <>
      <MuiCheckBox  {...props}  />
    </>
    </ThemeProvider>
  )
}

export default CheckBox
