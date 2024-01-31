/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Container } from "@mui/material";
import { Almuerzo, Desayuno, Postres, Bebidas } from "../data/info";
import { Carrusel } from "./Carrusel";

export const Recomendation = () => {
  

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Typography variant="h2" textAlign="center" color="textSecondary">
        Tus Recomendaciones
      </Typography>
      
      <Carrusel title="Almuerzo" data={Almuerzo} />
      <Carrusel title="Desayunos y Cenas" data={Desayuno} />
      <Carrusel title="Postres" data={Postres} />
      <Carrusel title="Bebidas" data={Bebidas} />
    </Container>
  );
};