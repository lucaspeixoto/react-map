import CustomAppBar from "../components/AppBar";
import { Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <CustomAppBar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bem-vindo ao sistema!
        </Typography>
        <Typography>Em breve, o mapa será exibido aqui.</Typography>
      </Container>
    </>
  );
}
