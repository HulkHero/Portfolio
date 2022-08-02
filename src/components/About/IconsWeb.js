
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../theme'
const IconsWeb = ({icon:Icon,type}) => {
  return (
    <Box spacing={2} sx={{display: 'flex',alignItems:"center",height:"100%"}}>
         <Box ><Avatar sx={{ minWidth:"60px",minHeight:"60px"  ,backgroundColor:`${theme.colors.primary}`}}>{<Icon style={{minWidth:"40px",minHeight:"40px"}}/>}</Avatar> </Box>
         <Box sx={{wordWrap:"wrap",pl:"5px"}}><Typography variant='content' component="h4" style={{wordWrap:"wrap"}}>{type}</Typography></Box>




    </Box>
  )
}

export default IconsWeb