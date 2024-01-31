/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Typography } from '@mui/material'
import { CardEvent } from './CardEvent'
import {Evento} from '../data/info'
export const Eventos = () => {
  return (
    <Container>
        <Box display="flex" flexDirection="column" gap="40px">
        <Typography
            variant="h2"
            fontWeight={500}
            color="textSecondary"
            fontSize="25px"
        >
            Eventos
        </Typography>
        <Box display="flex" flexDirection={{xs:"column", md:"row"}} justifyContent='center' alignItems='center' gap={{xs:"10px", md:"40px"}}>
            {Evento.map((evento: any) => (
                <CardEvent key={evento.id} title={evento.title} image={evento.imagen} />
            ))}
        </Box>
        </Box>
    </Container>
  )
}
