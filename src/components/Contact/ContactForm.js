import React, { useState ,useRef} from 'react'
import { Button, TextField,Grid } from '@mui/material'
import theme from '../theme' 
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [user, setUser] = useState({
    name:"",
    email:"",
    messege:""
  });
  const handleChange = (e) => {
    setUser((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("user",user)
  console.log(form.current)
    emailjs.sendForm('service_v998a9x', 'template_o6lkv6s',form.current, 'keF1nJlnn208nArdw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
   
     <form ref={form} onSubmit={sendEmail}>
      <Grid container justifyContent="center" flexDirection={"column"} >
    <TextField type="name" value={user.name} name="name" id="outlined-basic" onChange={handleChange} sx={{maxWidth:"400px",mb:'10px',input :{color:`${theme.colors.base2}`,borderColor:`${theme.colors.base2}`},bgcolor:`${theme.colors.primary1}`}} label="Name" variant="outlined" />     
    <TextField type="email" value={user.email} name="email" id="outlined-basic" onChange={handleChange} sx={{maxWidth:"400px",mb:'10px',input :{color:`${theme.colors.base2}`,borderColor:`${theme.colors.base2}`}}}  label="Email" variant="outlined" />
    <TextField type="messege" value={user.messege} name="messege" id="outlined-basic" onChange={handleChange} multiline={true} sx={{maxWidth:"400px",mb:'10px',minHeight:"200px",input :{color:`${theme.colors.base2}`,borderColor:`${theme.colors.base2}`}}} label="Message" variant="outlined" />
    <Button type="submit"  value="Send" sx={{width:"50px"}}>Submit</Button>
    </Grid>
    </form>
    
  )
}

export default ContactForm