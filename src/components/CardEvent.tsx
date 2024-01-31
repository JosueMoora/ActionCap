import { Card, CardMedia, Typography } from '@mui/material'
interface Props {
    title: string,
    image: string
}

export const CardEvent = ({title, image}: Props) => {
  return (
        <Card  style={{ display: "flex", justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: '20px', width: '218px', height: '337px' }}>
                <CardMedia component="img" src={image} alt="nombre"  style={{ borderRadius: '10px', objectFit: 'cover', position: 'absolute', width: '100%', height: '100%'}} />
                    <Typography variant="h2" fontWeight={700} sx={{zIndex:10, position: 'relative'}}>
                        {title}
                    </Typography>
                    <Typography variant="h2" fontWeight={600} fontSize="15px" sx={{zIndex:10, position: 'absolute', bottom: 0}}>
                        Fecha <br/>
                        Hora
                    </Typography>
            </Card>
  )
}
