import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { Fav, Remfav } from "../redux/favAction";
import { List, Remlist } from "../redux/watchAction";
import { useNavigate } from "react-router-dom";
 
function Card({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const email = useSelector(state => state.auth?.user?.email);
  const fav = useSelector(state => state.fav.favmovie);
  const watch = useSelector(state => state.watch.addlist);
 
  const isFav = fav?.some(f => f.id === item.id);
  const isWatch = watch?.some(w => w.id === item.id);
 
  const handleFav = (e) => {
    e.stopPropagation();
    if (!email) return alert("Login required");
    isFav ? dispatch(Remfav(item, email)) : dispatch(Fav(item, email));
  };
 
  const handleWatch = (e) => {
    e.stopPropagation();
    if (!email) return alert("Login required");
    isWatch ? dispatch(Remlist(item, email)) : dispatch(List(item, email));
  };
 
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: "12px",
        background: "#3C3D37",
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": { transform: "scale(1.04)" },
        position: "relative",
      }}
      onClick={() => navigate(`/details/${item.id}`)}
    >
      <IconButton
        onClick={handleFav}
        sx={{
          position: "absolute",
          top: 6,
          right: 6,
          background: "#ECDFCC",
          color: "red",
          "&:hover": {
            background: "#d2c4b1",
          }
        }}
      >
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
 
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.title || item.name}
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      />

      <Typography
        variant="body2"
        
        sx={{
          color: "#ECDFCC",
          mt: 1.2,
          textAlign: "center",
          fontWeight: 500,
            
    overflow: "hidden",
    height: 15,
        }}
      >
        {item.title || item.name}
      </Typography>
 
      <Button
        onClick={handleWatch}
        fullWidth
        sx={{
          mt: 1,
          background: isWatch ? "#697565" : "transparent",
          fontSize: "0.8rem",
          border: "1px solid #ECDFCC",
          color: "#ECDFCC",
          "&:hover": {
            background: "#697565",
          },
          borderRadius: "8px",
        }}
      >
        {isWatch ? "Remove" : "Add to Watchlist"}
      </Button>
    </Box>
  );
}
 
export default Card ;