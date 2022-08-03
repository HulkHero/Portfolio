
import React from 'react'
import { Box, Typography,Grid,styled} from '@mui/material'
import theme from '../theme'
import Image from '../../images/contactus.jpg'
import ContactForm from './ContactForm'
import { ContactUs } from './contact2'
const Decorator=styled(Box)(({ theme })=>({
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    position: "relative",
     paddingRight:"50px",
    ":before": {
      width: "40px",
      height: "40px",
      backgroundColor: theme.colors.primary,
      content: '""',
      borderRadius: "50%",
  }}
  ))
const Contact = () => {
  return (
    <div id="contact" style={{ width:"100%",bgcolor:`${theme.colors.base1}`,marginTop:"0"}}>
    <Box sx={{ width:"100%",bgcolor:`${theme.colors.base1}`,paddingTop:"60px"}}>
      
   <Grid
       container
        direction="row"
         justifyContent="center"
         alignItems="center"
                             >

       
       <Grid container item xs={12} justifyContent="center">
         <Decorator >
           <Typography variant="h3" color="#fff" component="h4" sx={{fontSize:{xs:"1rem",sm:"1.3rem"},lineHeight:"40px",position:"absolute",left:"20px"}}>Contact</Typography>
         </Decorator>
       </Grid>
        <Grid container item xs={12} justifyContent="center">
       <Typography variant="h3" component="h4" sx={{color:`${theme.colors.base2}`,marginTop:"20"}}>
         Contact 
        </Typography>
        
        </Grid>
        <Grid container xs={12} item justifyContent="center">
        <div data-aos="fade-up" style={{width:"100px",height:"6px",backgroundColor:`${theme.colors.primary}` ,zIndex:"1000",borderRadius:"20px" }}></div>
        </Grid>
        </Grid>
        <Grid container justifyContent="center"  sx={{marginTop:"25px"}} >
        <Grid item justifyContent="center" xs={0}  sx={{width:"50%", display:{xs:"none",sm:"block"}}} sm={5} md={4} >
            <Box  sx={{marginLeft:"40px"}}  ><img src={Image} style={{height:"500px"}}></img></Box>
            </Grid>
            <Grid item xs ={12} sm={7} md={8} sx={{width:"50%"}} ><ContactForm></ContactForm></Grid>
           
           </Grid>

        </Box>
        </div>
  )
}
 
export default Contact