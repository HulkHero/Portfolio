import { Box, Grid,Typography,styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import theme from '../theme'
import Image from '../../images/About.jpg'
import IconsWeb from './IconsWeb'
import WebIcon from '@mui/icons-material/Web';
import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Aos from "aos"
import "aos/dist/aos.css"


const Decorator=styled(Box)(({ theme })=>({
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    position: "relative",
   
    ":before": {
      width: "40px",
      height: "40px",
      backgroundColor: theme.colors.primary,
      content: '""',
      borderRadius: "50%",
  }}
  ))
export default function About() {

  useEffect(() => {
   
    Aos.init({duration:2000});
  
    
  }, [])
  
  return (
    <>
    <Box id="about" sx={{width:"100%" ,wordWrap: "break-word" ,backgroundColor: `${theme.colors.base1}`,pt:"100px" ,paddingLeft:"5%px",paddingBottom:"8%"}}>
   <Grid  data-aos="fade-right" container spacing={2} style={{width:"90%", backgroundColor: `${theme.colors.base1}`,marginLeft:"5%"}}> 
    <Grid item xs={0} sx={{display:{xs:"none",sm:"block"}}} sm={5} md={4} >
    <Box><img src={Image} style={{height:"500px"}}></img></Box>
  </Grid>
  <Grid data-aos="fade-up" item xs={12} sm={7} md={8} sx={{marginTop:"0px",paddingLeft:{xs:"4px",sm:"16"}}} >
    <Box sx={{color:`${theme.colors.base2}`,marginLeft:{xs:"5px",sm:"100px"}}}>
    <Decorator>
          <Typography variant="h3" color="#fff" component="h4" sx={{fontSize:{xs:"1rem",sm:"1.3rem"},lineHeight:"40px",position:"absolute",left:"20px"}}>About us</Typography>
     </Decorator>
        <Typography variant="h3" component="h4" sx={{fontSize:{xs:"2rem",sm:"3rem"}}}>
            Hello, I'm Hammad
        </Typography>
        <div data-aos="fade-up" style={{width:"80px",height:"6px",backgroundColor:`${theme.colors.primary}` ,zIndex:"1000",borderRadius:"20px" }}></div>
        <Typography variant="h5" component="h6"sx={{fontSize:{xs:"1.3rem",sm:"2rem"}}}>
            jusadhsanjdsadnjksdnfkjsnfkjsanfkjnsdkjfnskfnkjsfkj
            dsfsdfdsfsdf
        </Typography>
        <Grid container spacing={2} direction={{xs:'row',sm:"column",md:'row'}}>
          <Grid data-aos="fade-up" item xs={6} sx={{minHeight:{md:"200px",xs:"100px"}}} ><IconsWeb icon={WebIcon} type={"hellw wordsfsdfh fssj dhfg shdf gsjd"}/></Grid>
          <Grid data-aos="fade-up" item xs={6} sx={{minHeight:{md:"200px",xs:"100px"}}}><IconsWeb icon={LaptopIcon} type={"hellw wordsf sdf hfss jdhfg shd fgsjd"}/></Grid>
          <Grid data-aos="fade-up" item xs={6} sx={{minHeight:{md:"200px",xs:"100px"}}}><IconsWeb icon={LaptopIcon} type={"hellw wor dsfsdf hfssjd hfgsh dfgsjd"}/></Grid>
          <Grid data-aos="fade-up" item xs={6} sx={{minHeight:{md:"200px",xs:"100px"}}}><IconsWeb icon={PhoneAndroidIcon} type={"hellw word sfsdfhfss jdhfgshdfg sjd"}/></Grid>
        </Grid>
         

    </Box>
  </Grid>
   </Grid>
  
 


   </Box>
    </>
  )
}
