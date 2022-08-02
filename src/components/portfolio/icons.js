
import React from 'react'
import{Grid, Box,Tooltip}from '@mui/material'
import theme from "../theme"
const Icons = () => {
  return (
    <Box sx={{display: 'flex',justifyContent:"center",bgcolor:`${theme.colors.primary1}`}}>
        <Grid container spacing={2} sx={{width:"50%"}}>
        <Grid item xs={4}> <Tooltip arrow sx={{color:`${theme.colors.primary1}`}}   title="stm32f4">
          <img  src={require("./icons/mcu.png")} ></img>
          </Tooltip></Grid>
        <Grid item xs={4}>  <Tooltip arrow title="c++" sx={{padding:"5px"}}>
          <img  src={require("./icons/c++.png")} ></img>
          </Tooltip></Grid>
        <Grid item xs={4}>  <Tooltip arrow title="material ui" sx={{padding:"5px"}}>
          <img  src={require("./icons/mui.png")} ></img>
          </Tooltip></Grid>
        <Grid item xs={4}>  <Tooltip arrow title="react js" sx={{padding:"5px"}}>
          <img  src={require("./icons/react.png")} ></img>
          </Tooltip></Grid>
        <Grid item xs={4}>  <Tooltip arrow title="node js" sx={{padding:"5px"}}>
          <img  src={require("./icons/nodejs.png")} ></img>
          </Tooltip></Grid>
        <Grid item xs={4}>  <Tooltip arrow title="mongodb" sx={{padding:"5px"}}>
          <img  src={require("./icons/mongodb.png")} ></img>
          </Tooltip></Grid>
        <Grid itemxs={12} sx={{paddingLeft:"14px"}}>  <Tooltip arrow title="c sharp" sx={{padding:"5px",marginLeft:"20px"}}>
          <img  src={require("./icons/csharp.png")} ></img>
          </Tooltip></Grid>
          
       </Grid>

    </Box>
  )
}

export default Icons