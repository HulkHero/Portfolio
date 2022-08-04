import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {styled,Drawer,Grid} from '@mui/material'
import theme from './theme';
import { HashLink } from 'react-router-hash-link';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const FAppBar= styled(AppBar)(({theme})=>({
   backgroundColor:theme.colors.base1,
   color:theme.colors.base2,


}))

export default function NavAppBar() {

  const [drawer, setDrawer] = React.useState(false)
    const navLinks=[{
        label:"About",Id:"About"},
    {
        label:"Portfolio",Id:"Portfolio"},
    {
        label:"Contact",Id:"Contact"},

    ]
  return (
 
      <FAppBar position="fixed">
        <Toolbar sx={{
            display: 'flex',
            flexFlow:"row wrap",
            justifyContent: 'space-between',

        }}>
          <Typography variant="h5" component="h6">
            {"< Hulk >"}
          </Typography>
          <Box>
            <Box sx={{display:{ sm:"block",xs:"none"}}}>
            <Button  sx={{ color:"#fff",width:"50px" }} ><a target="_blank" sx={{color:"#fff",textDecoration:"none"}} href="https://github.com/HulkHero"><GitHubIcon sx={{color:"#fff",mt:"5px"}}/></a></Button>
               <HashLink style={{textDecoration:'none'}} smooth to="#about"> <Button sx={{ color:"#fff" }}>About</Button></HashLink>
               <HashLink style={{textDecoration:'none'}} smooth to="#portfolio"> <Button sx={{ color:"#fff" }}>Portfolio</Button></HashLink>
               <HashLink style={{textDecoration:'none'}} smooth to="#contact"> <Button sx={{ color:"#fff" }}>Contact</Button></HashLink>
            

             </Box>
             <Box sx={{display:{xs:"block",sm:"none"}}}>
              <Button onClick={()=>{setDrawer(!drawer)}} sx={{ color:"#fff",width:"50px" }} ><MenuRoundedIcon></MenuRoundedIcon></Button>
              <Drawer 
            anchor="left"
            open={drawer}
            onClose={()=>{setDrawer(false)}}
            onOpen={()=>(setDrawer(true))}
          >
            <Grid container  sx={{Width:"50%",height:"100%", Display:"flex",flexDirection:"column", backgroundColor:`${theme.colors.base1}`}} >
            <Button  sx={{ color:"#fff",width:"50px" }} ><a target="_blank" sx={{alignSelf:"center", color:"#fff",textDecoration:"none"}} href="https://github.com/HulkHero"><GitHubIcon sx={{color:"#fff",mt:"5px"}}/></a></Button>
               <HashLink  style={{textDecoration:'none'}} smooth to="#about"> <Button onClick={()=>setDrawer(false)} sx={{ color:"#fff" }}>About</Button></HashLink>
               <HashLink style={{textDecoration:'none'}} smooth to="#portfolio"> <Button onClick={()=>setDrawer(false)} sx={{ color:"#fff" }}>Portfolio</Button></HashLink>
               <HashLink style={{textDecoration:'none'}} smooth to="#contact"> <Button onClick={()=>setDrawer(false)}  sx={{ color:"#fff" }}>Contact</Button></HashLink>

            </Grid>
            
          </Drawer>
            </Box>
            
          </Box>
          
        </Toolbar>
      </FAppBar>
  
  );
}