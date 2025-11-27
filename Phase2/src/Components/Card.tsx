import { Box, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { Fav, Remfav } from "../redux/favAction";
 
function Card({ item }) {
  const dispatch = useDispatch();
 
  const userEmail = useSelector((state) => state.auth?.user?.email); 
  const favmovie = useSelector((state) => state.fav.favmovie);
 
  const isFav = favmovie.some((p) => p.id === item.id);
 
  const handleFav = () => {
    if (!userEmail) {
      alert("Please login to add favorites");
      return;
    }
 
    if (isFav) {
      dispatch(Remfav(item, userEmail));
    } else {
      dispatch(Fav(item, userEmail));
    }
  };
 
  return (
    <Box sx={{ width: 150, flexShrink: 0, position: "relative" }}>
 
      <IconButton
        onClick={handleFav}
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
          color: "red",
          background: "white",
          "&:hover": { background: "#eee" },
        }}
      >
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
 
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        style={{ width: "100%", borderRadius: "10px" }}
        alt={item.title || item.name}
      />
 
      <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
        {item.title || item.name}
      </Typography>
    </Box>
  );
}
 
export default Card;