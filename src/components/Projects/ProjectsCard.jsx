import React from 'react'
import { Box,Button,styled } from '@mui/material'
import theme from '../theme'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardBox=styled(Box)(({ theme })=>({
    
  

   
   

}))

const ProjectsCard = (props) => {
  return (
    <>
      <Card sx={{ minWidth: 300,maxWidth:"400px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.desc}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
           Tools used:{props.tools}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}

export default ProjectsCard