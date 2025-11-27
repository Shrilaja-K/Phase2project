import React from "react";
import { useSelector } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import Card from "../Components/Card";
 
function Watchlist() {
  const addlist = useSelector((state) => state.watch.addlist);
  const userEmail = useSelector((state) => state.auth?.user?.email);
 
  if (!userEmail) {
    return (
      <Container sx={{ marginTop: 10 }}>
        <Typography variant="h5" color="error">
          Please login to view your Watchlist.
        </Typography>
      </Container>
    );
  }
 
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Your Watchlist 
      </Typography>
 
      {addlist.length === 0 ? (
        <Typography>No Watchlist added yet.</Typography>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {addlist.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Box>
      )}
    </Container>
  );
}
 
export default Watchlist;