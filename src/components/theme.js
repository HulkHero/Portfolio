import {createTheme} from "@mui/material"
const theme=createTheme({
    palette:{
      primary:{
        main:'#0097a7'
      },
      action:{
        hover:"#0097a7"
      }

    },
    colors: {
        base1: "#1e464a", // deep green backgrounf [navbar, about , contact]
        base2: "#fff", //white
        primary: "#0097a7", //lighter green
        primary1: "#143438", // deepest green [portfolio, footer]
      }
   

})

export default theme;