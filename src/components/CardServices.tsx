import { Card, CardContent, CardMedia, Typography } from '@mui/material'

interface Props {
    image: string;
    title: string;
}
export const CardServices = ({image, title}: Props) => {
  return (
    <Card elevation={2}  style={{ borderRadius: '20px', padding:"16px", width: 'fit-content' }}>
            <CardMedia component="img" src={image} alt="nombre" sx={{height: '162px', width: {md:'178px'}}} style={{ borderRadius: '100%', objectFit: 'cover' }} />
            <CardContent sx={{textAlign: 'center'}}>
                <Typography variant="h2" color="textSecondary" fontSize="20px"  fontWeight={500} >
                    {title}
                </Typography>
            </CardContent>
        </Card>
  )
}
