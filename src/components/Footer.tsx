import { Typography, Divider, List, Box } from "@mui/material";
import {X, LinkedIn} from '@mui/icons-material';
export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#AE9672",
        py: "48px",
        px: {xs: "8px"},
      }}
    >
      <Box display='flex' justifyContent='center' flexDirection={{xs:'column', md: 'row'}} alignItems='center' gap={{xs:"20px", md:"124px"}}>
        <Box display='flex' flexDirection='row' gap='32px' alignItems='center' >
        <Typography variant="h4" fontWeight={700} fontSize={{ md: "30px" }}>
          Logo
        </Typography>
        <Divider orientation="vertical" color="white" flexItem sx={{width: '2px'}}/>
        <Box width={{md: '280px'}} gap={"16px"}>
        <Typography variant="h4" fontWeight={700}>About Us</Typography>
        <Typography variant="h4" fontWeight={300} fontSize="12px">
            Lorem ipsum dolor sit amet consectetur. Eget est diam pharetra porttitor malesuada facilisi. Dui lorem eget morbi diam. Sit justo vitae venenatis est nunc vel tellus auctor. Odio tincidunt tempor hendrerit nunc felis aliquet urna mollis quam.
        </Typography>
        </Box>
        </Box>
        <Box display={{xs: "flex"}} gap="80px">
            <Box>
            <Typography variant="h4" fontWeight={700} fontSize="16px">Quick Links</Typography>
            <List sx={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
            <Typography variant="h4" fontWeight={300} fontSize="12px">• Input</Typography>
            <Typography variant="h4" fontWeight={300} fontSize="12px">• Input</Typography>
            <Typography variant="h4" fontWeight={300} fontSize="12px">• Input</Typography>
            </List>
            </Box>
            <Box display={{md:"none"}}>
                <X/>
                <LinkedIn />
                <Typography variant="h4" fontWeight={700}>asdasd@sadas.com</Typography>
            </Box>
        </Box>
        <Box display={{xs:"none", md:"block"}} >
            <X/>
            <LinkedIn />
            <Typography variant="h4" fontWeight={700}>asdasd@sadas.com</Typography>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' alignItems="center" gap={{ md:"16px"}} marginTop={{xs: "10", md:'20px'}}>
        <Typography variant="h2" fontSize={{xs: "10px",md:'16px'}} fontWeight={700}>
        2023 Nombre. All right reserved
        </Typography>
        <Typography variant="h4" fontSize="12px" fontWeight={300}>
            Terminos y condiciones
        </Typography>
        <Typography variant="h4" fontSize="12px" fontWeight={300}>
            Politicas de privacidad
        </Typography>
        <Typography variant="h4" fontSize="12px" fontWeight={300}>
            Seguridad
        </Typography>
      </Box>
    </Box>
  );
};
