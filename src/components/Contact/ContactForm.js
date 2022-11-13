import React, { useState, useRef } from 'react'
import { Button, TextField, Grid, styled } from '@mui/material'
import theme from '../theme'
import emailjs from '@emailjs/browser';
const CssTextField = styled(TextField)({
  maxWidth: "600px",
  marginTop: "20px",
  ".MuiFormLabel-root": {
    textColor: "white",
    color: "#0097a7",

  },

  "& .MuiInputBase-input": {
    color: "white",

    minWidth: "250px",

  },

  '& label.Mui-focused': {
    color: '#0097a7',

  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#0097a7',
    },
    '&:hover fieldset': {
      borderColor: '#0097a7',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0097a7',
      // backgroundColor: "red"


    },
  },
});
const ContactForm = () => {
  const form = useRef();
  const [user, setUser] = useState({
    name: "",
    email: "",
    messege: ""
  });
  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("user", user)
    console.log(form.current)
    emailjs.sendForm('service_v998a9x', 'template_o6lkv6s', form.current, 'keF1nJlnn208nArdw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (

    <form ref={form} onSubmit={sendEmail}>
      <Grid container justifyContent="center" sx={{ width: "90%" }} flexDirection={"column"} >
        <CssTextField type="name" value={user.name} name="name" id="outlined-basic" onChange={handleChange} sx={{ alignSelf: "center", maxWidth: "600px", mb: '10px', input: { color: `${theme.colors.base2}`, borderColor: `${theme.colors.base2}` }, bgcolor: `${theme.colors.base1}`, }} label="Name" variant="outlined" />
        <CssTextField type="email" value={user.email} name="email" id="outlined-basic" onChange={handleChange} sx={{ alignSelf: "center", maxWidth: "600px", mb: '10px', input: { color: `${theme.colors.base2}`, borderColor: `${theme.colors.base2}`, } }} label="Email" variant="outlined" />
        <CssTextField type="messege" value={user.messege} label="Message" name="messege" id="outlined-basic" onChange={handleChange} multiline={true} sx={{ alignSelf: "center", maxWidth: "600px", mb: '10px', minHeight: "100px", input: { color: `${theme.colors.base2}`, borderColor: `${theme.colors.base2}` }, bgcolor: `${theme.colors.base1}`, }} variant="outlined" />
        <Button type="submit" variant="contained" value="Send" sx={{ alignSelf: "center", width: "50px" }}>Send</Button>
      </Grid>
    </form>

  )
}

export default ContactForm