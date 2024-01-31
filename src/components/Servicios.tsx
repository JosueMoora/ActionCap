/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material'
import { CardServices } from './CardServices'
import {Servicio} from '../data/info'
export const Servicios = () => {
  return (
    <Container sx={{marginY:'80px'}}>
        <Box display="flex" flexDirection="column" gap="40px">
        <Typography
            variant="h2"
            fontWeight={500}
            color="textSecondary"
            fontSize="25px"
        >
            Servicios
        </Typography>
        <ImageList  cols={4} gap={20}>
            {Servicio.map((servicio: any) => (
                <ImageListItem key={servicio.id}>
                    <CardServices image={servicio.imagen} title={servicio.title} />
                </ImageListItem>
            )
                )}
        </ImageList>
        </Box>
    </Container>
  )
}
