import React from 'react'
import { useEffect } from 'react'
import {Box,Typography,styled,Grid} from '@mui/material'
import theme from "../theme"
import Icons from './icons'
import Image from '../../images/About.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"
import "./portfolio.css"


const Decorator=styled(Box)(({ theme })=>({
  display: "flex",
  fontWeight: "bolder",
  fontFamily: "roboto",
  position: "relative ",
  paddingRight:"70px",
  ":before": {
    width: "40px",
    height: "40px",
    backgroundColor: theme.colors.primary,
    content: '""',
    borderRadius: "50%",
}}
))



 

export const Portfolio = () => {
  useEffect(() => {
   
    Aos.init({duration:2000});
  
    
  }, [])
  return (
    <div id="portfolio"  style={{ width:"100%" , backgroundColor:`${theme.colors.primary1}`,marginTop:"0px",pt:"0px",pb:"20px"}}>
             <div class="custom-shape-divider-top-1665227565">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      
       <Box sx={{width:{xs:"100%",sm:"90%"}, bgcolor:`${theme.colors.primary1}`,paddingTop:"10px"}}>
         
      <Grid
          container
           direction="row"
            justifyContent="center"
            alignItems="center"
                                >

          
          <Grid container item xs={12} justifyContent="center">
            <Decorator data-aos="fade-down">
              <Typography variant="h3" color="#fff" component="h4" sx={{fontSize:{xs:"1rem",sm:"1.3rem"},lineHeight:"40px",position:"absolute",left:"20px"}}>Portfolio</Typography>
            </Decorator>
          </Grid>
           <Grid container item xs={12} justifyContent="center">
          <Typography variant="h3" component="h4" sx={{color:`${theme.colors.base2}`,marginTop:"20px",fontSize:{xs:"2rem",sm:"3rem"}}}>
            Knowledge Set
           </Typography>
           
           </Grid>
           <Grid container xs={12} item justifyContent="center">
           <div data-aos="fade-up" style={{width:"200px",height:"4px",backgroundColor:`${theme.colors.primary}` ,zIndex:"1000",borderRadius:"20px" }}></div>
           </Grid>
           </Grid>
            <Grid container sx={{marginTop:"25px"}} >
            <Grid item xs ={12} sm={7} md={8} sx={{width:"50%"}} data-aos="fade-right">  <Icons></Icons></Grid>
            <Grid item xs={0} sx={{width:"50%",display:{xs:"none",sm:"block"}}} sm={5} md={4} >
            <Box data-aos="fade-right" sx={{width:"50%"}}><img src={Image} style={{height:"500px"}}></img></Box>
            </Grid>
           </Grid>
        </Box>
       
        </div>
  )
}
