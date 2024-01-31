import { Typography, Container, Box, Toolbar, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export const Navbar = () => {
  return (
    <Container>
      <Box
        sx={{
          background:
            "linear-gradient(rgba(60, 60, 60, 0.5), rgba(60, 60, 60, 0.5)), url(./src/assets/bg.png) no-repeat center/cover",
          width: "100%",
          height: "376px",
          position: "absolute",
          left: 0,
          zIndex: -1,
        }}
      />
      <Container >
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Typography variant="h2" fontWeight={900} sx={{ 
            fontSize: { 
              xs: '1.5rem', 
              sm: '2rem', 
              md: '2.5rem'
            } 
          }}>
            Logo
          </Typography>
          <Toolbar sx={{gap: {xs: '10px', sm: '15px', md: '20px'}}}>
            <Typography variant="h4" sx={{ textDecorationLine: "underline", fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }} fontWeight={600}>
              Home
            </Typography>
            <Typography variant="h4" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>Menu</Typography>
            <Typography variant="h4" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>Eventos</Typography>
            <Typography variant="h4" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>Servicios</Typography>
          </Toolbar>
          <IconButton sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "5px",
            }}>
            <PersonIcon color="secondary" />
          </IconButton>
        </Toolbar>
      </Container>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography
          variant="h2"
          fontSize={{ xs: "30px", sm: "40px" }}
          fontWeight={900}
          marginTop={10}
        >
          Nombre del Hotel
        </Typography>
        <IconButton>
          <Box
            marginTop={3}
            borderRadius={"10px"}
            paddingX={{ xs: "50px", sm: "100px" }}
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
    </Container>
  );
};
