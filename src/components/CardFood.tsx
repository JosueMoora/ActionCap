import {Card, CardContent, CardMedia, Typography } from '@mui/material';
interface CardProps {
    image: string;
}

export const CardFood = ({ image }: CardProps) => {
    return (
        <Card elevation={2}  style={{ borderRadius: '20px', padding:"16px", width: 'fit-content' }}>
            <CardMedia component="img" src={image} alt="nombre" sx={{height: '162px', width: {md:'178px'}}} style={{ borderRadius: '10px', objectFit: 'cover' }} />
            <CardContent sx={{textAlign: 'center'}}>
                <Typography variant="h3" sx={{marginY: '24px'}}>
                    Nombre
                </Typography>
                <Typography variant="h3" fontSize="10px" fontWeight={400}>
                    00.00 $
                </Typography>
            </CardContent>
        </Card>
    );
};


