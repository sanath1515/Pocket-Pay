import { Grid } from '@mui/material'
import React from 'react'
import { Theme } from '../../../themes'

interface TemplateProps{
  leftChildren?: React.ReactNode
  main?: React.ReactNode
  Heading?: React.ReactNode
  leftxs?: any
  rightxs?: any
  headingsx?: any
  mainsx?: any
}

const Template = (props: TemplateProps) => {
  return (
    <Grid container height={'100%'} width={'100'} >
        <Grid item sx={{ backgroundColor: Theme.palette.structuralColors.white}} xs={props.leftxs}>
            {props.leftChildren}
        </Grid>
        <Grid item xs={props.rightxs}>
            <Grid item sx={props.headingsx}>
            {props.Heading}
            </Grid>
            <Grid item sx={props.mainsx}>
              {props.main}
            </Grid>
        </Grid>
    
    </Grid>
  )
}

export default Template