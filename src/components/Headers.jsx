import { AppBar, Box, Typography ,Button} from "@mui/material"
import { useTheme } from '@mui/material';
import { styled } from "@mui/material/styles";
import Image from "../images/brandBanner.jpg"
import NavAppBar from "./AppBar";
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import GitHubIcon from '@mui/icons-material/GitHub';

import Typed from "react-typed"
import GitHub from "@mui/icons-material/GitHub";
const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '90vh',
    height:"auto",
    background: `linear-gradient(to bottom right,#04303140,#00606473),url(${Image})`,
    backgroundSize:"cover",
    backgroundRepeat: 'no-repeat',
  }));
const HeaderContainer=styled(Box)(({ theme })=>({
  width: '80%',
  minHeight: '90vh',
  height:"auto",
  padding:"20px",
  display: 'flex',
  flexFlow:'column wrap',
  fontFamily:"roboto",
 // alignItems: 'center',
  justifyContent: 'center',
}))
const Decorator=styled(Box)(({ theme })=>({
  display: "flex",
  fontWeight: "bolder",
  fontFamily: "roboto",
  position: "relative",
  marginTop: "20px",
  ":before": {
    width: "40px",
    height: "40px",
    backgroundColor: theme.colors.primary,
    content: '""',
    borderRadius: "50%",
}}
))
const Arrow=styled(Typography)(({ theme })=>({
 position: "absolute",
 color:theme.colors.base2,
 left:"105px",
 lineHeight: "50px",
 animationName: "arrow",
 animationDuration:"0.7s",
 animationIterationCount: "infinite",

 "@keyframes arrow":{
  "0%": {
    transform: "scale(1,1)",
    paddingTop: "0px",
  },
  "100%": {
    transform: "scale(1,2)",
    paddingTop: "11px",
  },

 }
}
))
const Header=()=>{
   const theme=useTheme()
    return(
        <>  
        
        <HeaderWrapper>
        <NavAppBar/>
        <HeaderContainer>
          <Typography variant="h3" color="#fff" component="h4" sx={{maxHeight:"200px" ,fontSize:{xs:"2rem",sm:"3rem"},}}>I am a {" "} 
          <Typed
                strings={[
                    'Programmer',
                    'Web Developer',
                    'C++ Expert',
                     "Desktop Application",
                      ]}
                    typeSpeed={40}
                    backSpeed={50}
                  
                    loop />
        </Typography>
          <Typography variant="h3" color="#fff" component="h4" sx={{fontSize:{xs:"1.5rem",sm:"2rem"},margin: theme.spacing(1, 0),}}>I create Websites 
          <br></br>and Applications....</Typography>
          <Decorator>
          <Typography variant="h3" color="#fff" component="h4" sx={{fontSize:{xs:"1rem",sm:"1.3rem"},lineHeight:"40px",position:"absolute",left:"20px"}}>About us</Typography>
          
          <Arrow variant="span">
            <ArrowDownwardRoundedIcon></ArrowDownwardRoundedIcon>
          </Arrow>
          </Decorator>

        
        </HeaderContainer>
        </HeaderWrapper>
        

        </>
    )
}
export default Header;