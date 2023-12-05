import { SxProps } from '@mui/material';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import React from 'react';
export interface ButtonImageProps {
  src: string;
  onClick?: any;
  variant:"outlined"|"contained"|"text";
  buttonText: any;
  sx?:SxProps;
}

const ButtonImage = (props:ButtonImageProps) => {
  return (
      <Button {...props} name={props.buttonText} endIcon={<Image src={props.src} alt='Button Image'/>}>
      </Button>
  );
};

export default ButtonImage;
