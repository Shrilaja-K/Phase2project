import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography ,Button} from "@mui/material";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
function Watchlist() {
  const Navigate = useNavigate();
  const addlist = useSelector((state) => state.watch.addlist);
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
          Please login to view your Watchlist.
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
       <Button variant="text" sx={{color:"whitesmoke"}} onClick={() => Navigate(-1)}>
              Back
            </Button>
      <Typography variant="h4" sx={{ mb: 3, color: "#ECDFCC", textAlign: "center" }}>
        Your Watchlist
      </Typography>

      {addlist.length === 0 ? (
        <Typography sx={{ color: "#ECDFCC", textAlign: "center" }}>No Watchlist added yet.</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {addlist.map((item) => (
            <Box key={item.id} sx={{ width: { xs: "45%", sm: "200px", md: "180px" } }}>
              <Card item={item} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Watchlist;