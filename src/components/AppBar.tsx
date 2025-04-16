import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import { useAuth } from "../contexts/AuthContext";
  
  export default function CustomAppBar() {
    const { user, logout } = useAuth();
  
    const handleLogout = () => {
      logout();
      window.location.href = "/login"; // redireciona após logout
    };
  
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
  
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sistema de Mapas
          </Typography>
  
          {user && (
            <Box display="flex" alignItems="center" gap={2}>
              <Typography variant="body1">{user.name}</Typography>
              <Button color="inherit" onClick={handleLogout}>
                Sair
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    );
  }
  