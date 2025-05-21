import { Box, Container, CssBaseline } from "@mui/material";
import { NavBar } from "./app/layout/NavBar";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { HomePage } from "./features/home/HomePage";

export const App = () => {
  const location = useLocation();

  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      {/* Material icon command that makes it so the navbar is snugly against the top */}
      <ScrollRestoration />
      <CssBaseline />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container maxWidth="xl" sx={{ pt: 14 }}>
            <Outlet />
          </Container>
        </>
      )}
    </Box>
  );
};
