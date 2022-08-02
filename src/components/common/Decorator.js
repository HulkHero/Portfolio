

import React from 'react'
import {Divider, styled} from '@mui/material'
import { AppBar, Box, Typography } from "@mui/material"

import { styled } from "@mui/material/styles";




const Decorator=styled(Box)(({ theme })=>({
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    position: "relative",
    marginTop: "20px",
    ":before": {
      width: "40px",
      height: "40px",
      backgroundColor: theme.colors.primary,
      content: '""',
      borderRadius: "50%",
  }}
  ))
  const Arrow=styled(Typography)(({ theme })=>({
   position: "absolute",
   color:theme.colors.base2,
   left:"105px",
   lineHeight: "50px",
   animationName: "arrow",
   animationDuration:"0.7s",
   animationIterationCount: "infinite",
  
   "@keyframes arrow":{
    "0%": {
      transform: "scale(1,1)",
      paddingTop: "0px",
    },
    "100%": {
      transform: "scale(1,2)",
      paddingTop: "10px",
    },
  
   }
  
  
  }
  ))

export default Decorator =({label,withicon,icon})=> {
  return (
    <Decorator>
    <Typography variant="h3" color="#fff" component="h4" sx={{fontSize:{xs:"1rem",sm:"1.3rem"},lineHeight:"40px",position:"absolute",left:"20px"}}>{label}</Typography>
    {withicon? <Arrow variant="span">
      {icon}
    </Arrow>:null }
   
    </Decorator>
  )
}

