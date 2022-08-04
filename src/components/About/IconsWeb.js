
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../theme'
const IconsWeb = ({icon:Icon,type}) => {
  return (
    <Box spacing={2} sx={{display: 'flex',alignItems:"center",height:"100%", mb:"20px"}}>
         <Box ><Avatar sx={{ minWidth:"60px",minHeight:"60px"  ,backgroundColor:`${theme.colors.primary}`}}>{<Icon style={{minWidth:"40px",minHeight:"40px"}}/>}</Avatar> </Box>
         <Box sx={{wordWrap:"wrap",pl:"5px",fontSize:{xs:"1rem",sm:"1.5rem"}}}><Typography variant='content' component="h4" style={{wordWrap:"wrap"}}>{type}</Typography></Box>




    </Box>
  )
}

export default IconsWeb