import React from 'react'
import theme from '../theme'
import { Box,styled,Grid,Typography } from '@mui/material'
import ProjectsCard from './ProjectsCard'

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
  
const Projects = () => {
  return (
    <div id="portfolio"  style={{ width:"100%" , backgroundColor:`${theme.colors.primary1}`,marginTop:"0px",pt:"20px",pb:"20px"}}>
       <Box sx={{width:{xs:"100%",sm:"100%"}, bgcolor:`${theme.colors.primary1}`,paddingTop:"60px"}}>
         
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
            Projects
           </Typography>
           
           </Grid>
           <Grid container xs={12} item justifyContent="center">
           <div data-aos="fade-up" style={{width:"200px",height:"4px",backgroundColor:`${theme.colors.primary}` ,zIndex:"1000",borderRadius:"20px" }}></div>
           </Grid>
           </Grid>
           <Grid container  direction="row"
            justifyContent="center"
            alignItems="center" alightContent="center" spacing={2}  sx={{display:"flex",width:{xs:"95%",sm:"100%"}, padding:{xs:"0",sm:"5%"},paddingBottom:"5%",margin:"0"}} >
           <Grid item xs={12} sm={6}  lg={4} sx={{paddingBottom:"5%",display:"flex",justifyContent:"center"}} ><ProjectsCard heading={"Mern App"} desc={"Mern app with database and authentication.Only shows data when you log in."} tools={"Mern Stack, Material UI"} ></ProjectsCard></Grid> 
           <Grid item xs={12} sm={6}  lg={4} sx={{paddingBottom:"5%",display:"flex",justifyContent:"center"}} ><ProjectsCard heading={"Desktop App"} desc={"Desktop application which stores the customers data and generates Pdf reports.Stores data like debit,credit,balance individually of each customer."} tools={"C sharp, XML, itextSharp"} ></ProjectsCard></Grid> 
           <Grid item xs={12} sm={6}  lg={4} sx={{paddingBottom:"5%",display:"flex",justifyContent:"center"}} ><ProjectsCard heading={"Intelligent Riding System"} desc={"Measures the speed,temperature and pressure.Turns the lights on in dark automatically.Beeps  when the distance is too short with other object"} tools={"Stm32f407, ultrasonic sensor, bmp 180, LDR, Hall effect Sensor"}></ProjectsCard></Grid> 
           <Grid item xs={12} sm={6}  lg={4} sx={{paddingBottom:"5%",display:"flex",justifyContent:"center"}} ><ProjectsCard heading={" "} desc={" "} ></ProjectsCard></Grid> 
           <Grid item xs={12} sm={6}  lg={4} sx={{paddingBottom:"5%",display:"flex",justifyContent:"center"}} ><ProjectsCard heading={" "} desc={" "} ></ProjectsCard></Grid> 
           <Grid item xs={12} sm={6}  lg={4} sx={{paddingBottom:"5%",display:"flex",justifyContent:"center"}} ><ProjectsCard heading={" "} desc={" "} ></ProjectsCard></Grid> 
           </Grid>
        </Box>
        </div>
  )
}

export default Projects