/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { CardFood } from './CardFood';
import { useState } from 'react';

interface CarruselProps {
    data: [],
    title: string
}

import { useMediaQuery, useTheme } from "@mui/material";

export const Carrusel = ({data, title }: CarruselProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const itemsToShow = isSmallScreen ? 1 : 3; // Muestra 1 elemento en pantallas pequeñas, 3 en otras

  const [current, setCurrent] = useState(0); 

  const previousSlide = () => {
    setCurrent(current > 0 ? current - 1 : data.length - itemsToShow);
  };

  const nextSlide = () => {
    setCurrent(current < data.length - itemsToShow ? current + 1 : 0);
  };

  return (
    <Box display="flex" flexDirection="column" gap="40px">
      <Typography
        variant="h2"
        fontWeight={500}
        color="textSecondary"
        fontSize="25px"
      >
        {title}
      </Typography>
      <Box display="flex" justifyContent='center' alignItems='center' gap="40px">
        <IconButton  onClick={previousSlide}>
          <ArrowBackIos />
        </IconButton>

        {data.slice(current, current + itemsToShow).map((item: any) => (
          // Resto del código...
          <CardFood key={item.id} image={item?.imagen} />
        ))}

        <IconButton onClick={nextSlide}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
      </Box>
  )
}
