import theme from "../theme"


export const Divider2=()=>{
      console.log("divider2")
    return(
        <div  style={{width:"60px",height:"10px",backgroundColor:`${theme.palette.primary.main}` ,zIndex:"1000" }}></div>
    )
}


//sx={{width:"80px",height:"4px",bgcolor:`${theme.colors.primary}`,borderBottomWidth: '20px',borderRadius:"20px" }}