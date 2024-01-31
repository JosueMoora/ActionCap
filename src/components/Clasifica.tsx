import { Box, Button, Container, Typography } from "@mui/material"

export const Clasifica = () => {
  return (
    <Container sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: 10}}>
        <Box>
        <Typography
              color="primary"
              variant="h2"
              fontSize={{ xs: "16px", sm: "32px" }}
              fontWeight={700}
              textAlign={"center"}
            >
                Clasifica tu experiencia
            </Typography>

      <Button sx={{backgroundColor: 'black', width: '100%'}}>
            <Typography
            sx={{textTransform: 'capitalize'}}
              color="textPrimary"
              variant="h2"
              fontSize={"16px"}
              fontWeight={500}
            >
              Clasificar
            </Typography>
        </Button>
        </Box>
    </Container>
  )
}
