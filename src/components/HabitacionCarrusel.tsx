/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CardMedia,  Container,  IconButton, Typography } from "@mui/material"
import { Habitacion } from "../data/info"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { useEffect, useState } from "react";
export const HabitacionCarrusel = () => {
  const [current, setCurrent] = useState(0); 
  const previousSlide = () => {
    if (current === 0) setCurrent(Habitacion.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === Habitacion.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(()=>{
    setTimeout(() => {
      if (current === Habitacion.length - 1) setCurrent(1)
      else {
      setCurrent(current + 1)
    }
    }, 6000)
  },[current])

  return (
    <Box display="flex" justifyContent="center" sx={{backgroundColor: '#AE9672', marginY: 10 }}>

        <Container  sx={{display: 'flex', alignItems: 'center', gap: {xs:1, md:4}, paddingY: 4}}>
          <Box display="flex" alignItems="center">
            <IconButton onClick={previousSlide}>
              <ArrowBackIos sx={{color: 'white'}} />
            </IconButton>
          </Box>
        <CardMedia component="img" src={Habitacion[current].imagen} alt="nombre" sx={{width: {xs:'30%', md:'50%'}, height:{xs:'30%', md:'100%'}}} style={{borderRadius: "10px",objectFit: 'cover' }} />
        <Box display="flex" flexDirection="column" justifyContent="space-between">
            <Typography variant="h3" color="textPrimary" fontWeight={800} fontSize={{xs:'15px', md:'31px'}}>
                Nombre de la habitación
            </Typography>
            <Typography component="p" variant="h3" color="textPrimary" fontWeight={400} fontSize={{xs:'8px', md:'18px'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eaque repellendus itaque vero pariatur. Ad quo, dolorum minus iusto commodi, quas sit magni, itaque exercitationem non in ipsam illo numquam.
            </Typography>
            <IconButton>
          <Box
            borderRadius={"10px"}
            width={"100%"}
            paddingY={"8px"}
            sx={{ backgroundColor: "white"}}
          >
            <Typography
              color="primary"
              variant="h2"
              fontSize={{ xs: "16px", sm: "20px" }}
              fontWeight={500}
            >
              Hacer una reserva
            </Typography>
          </Box>
        </IconButton>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton onClick={nextSlide}>
            <ArrowForwardIos sx={{color: 'white'}} />
          </IconButton>
        </Box>
        </Container>
    </Box>
  )
}
