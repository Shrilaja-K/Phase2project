import { useSelector } from "react-redux";
import { Box, Typography,Button } from "@mui/material";
import Card from "../Components/Card";
import type { RootState } from "../redux/rootReducer";
import { useNavigate } from "react-router-dom";


function Favorites() {
 const Navigate = useNavigate();
  const favmovie = useSelector((state:RootState) => state.fav.favmovie);
  const userEmail = useSelector((state:RootState) => state.auth?.user?.email);

  const userFav=favmovie.filter((f) => f.favby===userEmail)
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
      <Button variant="text" sx={{color:"whitesmoke"}} onClick={() => Navigate(-1)}>
        Back
      </Button>
      <Typography variant="h4" sx={{ mb: 3, color: "#ECDFCC", textAlign: "center" }}>
        Your Favorites
      </Typography>

      {userFav.length === 0 ? (
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
          {userFav.map((item) => (
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