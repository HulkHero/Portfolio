import React from 'react'
import { Box, Typography} from "@mui/material"
import { useTheme } from '@mui/material';
import { styled } from "@mui/material/styles";
import Image from "../../images/bg.jpg"


const Sec1=styled('section')(({ theme })=>({
    minHeight:"40vh",
    backgroundColor:"yellow"


}))
const Sec2=styled('section')(({ theme })=>({
     position:"-webkit-sticky",
    minHeight:"120vh",
    backgroundImage: `url(${Image})`,
    backgroundSize:"cover",
    // linear-gradient(to bottom right,#04303140,#00606473),
    backgroundAttachment:"fixed",

    
}))
const Test = () => {
    // var p=document.getElementsByClassName("sec2")
    // console.log(p,"p")
    // // var child =p.firstChild;
    //  p.style.color="600FF"
  return (
    <div>
        <Sec1>
            <h1>
                hello
            </h1>
        </Sec1>
        <Sec2 >
            <h1 className='sec2'>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>
            <h1>
                hellohello
            </h1>

        </Sec2>
        <Sec1>
            <h1>
                hello
            </h1>
        </Sec1>
    </div>
  )
}

export default Test