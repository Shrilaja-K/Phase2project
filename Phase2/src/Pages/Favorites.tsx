import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import Card from "../Components/Card";

function Favorites() {
  const favmovie = useSelector((state) => state.fav.favmovie);
  const userEmail = useSelector((state) => state.auth?.user?.email);

  if (!userEmail) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#181C14",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ECDFCC",
          padding: 2,
        }}
      >
        <Typography variant="h5" color="error">
          Please login to view your favorites.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#181C14",
        paddingY: 5,
        paddingX: { xs: 2, sm: 5 },
        paddingTop:15
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, color: "#ECDFCC", textAlign: "center" }}>
        Your Favorites
      </Typography>

      {favmovie.length === 0 ? (
        <Typography sx={{ color: "#ECDFCC", textAlign: "center" }}>No favorites added yet.</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {favmovie.map((item) => (
            <Box key={item.id} sx={{ width: { xs: "45%", sm: "200px", md: "180px" } }}>
              <Card item={item} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Favorites;