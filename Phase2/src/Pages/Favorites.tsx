import React from "react";
import { useSelector } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import Card from "../Components/Card";
 
function Favorites() {
  const favmovie = useSelector((state) => state.fav.favmovie);
  const userEmail = useSelector((state) => state.auth?.user?.email);
 
  if (!userEmail) {
    return (
      <Container sx={{ marginTop: 10 }}>
        <Typography variant="h5" color="error">
          Please login to view your favorites.
        </Typography>
      </Container>
    );
  }
 
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Your Favorites 
      </Typography>
 
      {favmovie.length === 0 ? (
        <Typography>No favorites added yet.</Typography>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {favmovie.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Box>
      )}
    </Container>
  );
}
 
export default Favorites;