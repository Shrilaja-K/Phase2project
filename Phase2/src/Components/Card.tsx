import { Box, Typography, IconButton,Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { Fav, Remfav } from "../redux/favAction";
import { List,Remlist } from "../redux/watchAction";
import { useNavigate } from "react-router-dom";
 
function Card({ item }) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
 
  const userEmail = useSelector((state) => state.auth?.user?.email); 
  const favmovie = useSelector((state) => state.fav.favmovie );
  const addlist = useSelector((state) => state.watch.addlist );
  const isFav = favmovie?.some((p) => p.id === item.id);
   const listed = addlist?.some((p) => p.id === item.id);
 
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

  const handleWatchlist=()=>{
    if(!userEmail){
      alert("Please login to add to Watchlist");
      return;
    }
     if (listed) {
      dispatch(Remlist(item, userEmail));
    } else {
      dispatch(List(item, userEmail));
    }
  };
 
  return (
    <Box sx={{ width: 150, flexShrink: 0, position: "relative" ,cursor:'pointer'}}
    onClick={()=>Navigate(`/details/${item.id}`)}>
 
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
      <Button
        onClick={handleWatchlist}
      >
        Add to Watchlist
      </Button>
    </Box>
  );
}
 
export default Card;