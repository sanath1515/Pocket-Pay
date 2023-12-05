import React from 'react'
import Image from '../../atoms/Image'
import MyText from '../../atoms/Typography'
import { Stack } from '@mui/material';
import Theme from '../../../themes';


interface HomeBackgroundProps{
  text?:string;
  src?:string;
  variant:any;
  height?:any;
  width?:any;
  textwidth?:any;
  textsx?:any;

}
const HomeBackground = (props:HomeBackgroundProps) => {
  return (
    <Stack alignItems={"center"} spacing={'3vh'} width={'30vw'}  paddingY={'21vh'}>
      <Image src={props.src} height={'30%'} width={'30%'} />
      <MyText sx={props.textsx} variant={'b1'} color={Theme.palette.text.medium}>{props.text}</MyText>
    </Stack>
  )
}
export default HomeBackground
