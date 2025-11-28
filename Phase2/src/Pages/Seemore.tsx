import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button
} from "@mui/material";
 
import { setSearch } from "../redux/searchAction";
import Card from "../Components/Card";
import type { RootState } from "../redux/rootReducer";

 
import {
  nowPlayingfn,
  Popularfn,
  topRatedfn,
  upComingfn,
  airingTodayfn,
  ontheAirfn,
  topRatedfns,
  Popularfns,
} from "../redux/homeAction";
import { useNavigate } from "react-router-dom";
 
function Seemore() {
  const { type } = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [localSearch, setLocalSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [sort, setSort] = useState("none");
 
  const searchText = useSelector((state:RootState) => state.search.search);
 

  const inputStyle = {
    '& .MuiInputBase-input': {
      color: '#FFFFFF', 
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FFFFFF', 
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FFFFFF', 
    },
  };
 
  useEffect(() => {
    console.log(filtered.length)
    const delay = setTimeout(() => dispatch(setSearch(localSearch)), 800);
    return () => clearTimeout(delay);
  }, [localSearch]);
 

  
  const movies = useSelector((state:RootState) => {
    if (type === "nowplaying") return state.home.nowplaying;
    if (type === "popular") return state.home.popular;
    if (type === "toprated") return state.home.toprated;
    if (type === "upcoming") return state.home.upcoming;
    if (type === "airingtoday") return state.home.airingtoday;
    if (type === "ontheair") return state.home.ontheair;
    if (type === "populars") return state.home.populars;
    if (type === "rated") return state.home.toprateds;
    return [];
  });
 

  const filtered = movies
    ?.filter((item) =>
      (item.title || item.name)
        .toLowerCase()
        .includes(searchText.toLowerCase())
    )
    ?.filter((item) => {
      if (genre === "all") return true;
      return item.genre_ids?.includes(Number(genre));
    })
    ?.sort((a, b) => {
      if (sort === "rating") return b.vote_average - a.vote_average;
      if (sort === "popularity") return b.popularity - a.popularity;
      if (sort === "date")
        return new Date(b.release_date) - new Date(a.release_date);
      return 0;
    });

  useEffect(() => {
    if (type === "nowplaying") dispatch(nowPlayingfn(page));
    if (type === "popular") dispatch(Popularfn(page));
    if (type === "toprated") dispatch(topRatedfn(page));
    if (type === "upcoming") dispatch(upComingfn(page));
    if (type === "airingtoday") dispatch(airingTodayfn(page));
    if (type === "ontheair") dispatch(ontheAirfn(page));
    if (type === "populars") dispatch(Popularfns(page));
    if (type === "rated") dispatch(topRatedfns(page));
  }, [page, type]);
 
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 150 >=
        document.documentElement.scrollHeight
      ) {
        setPage((p) => p + 1);
      }
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
 
  return (
    <Box
      sx={{
        background: "#181C14",
        pt: 10,
        pb: 5,
        px: { xs: 2,  },
        mt:7
      }}
    >
      <Button variant="text" sx={{color:"whitesmoke"}} onClick={() => Navigate(-1)}>
        Back
      </Button>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          textTransform: "capitalize",
          color: "#ECDFCC",
          fontWeight: 700,
        }}
      >
        {type?.toUpperCase()}
      </Typography>
 
      <Grid
        container
        spacing={2}
        sx={{
          mb: 4,
          p: 2,
          borderRadius: "12px",
          justifyContent: 'center'
        }}
      >
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Search"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            InputLabelProps={{ style: { color: "#ECDFCC" } }}
            sx={inputStyle}
          />
        </Grid>
 
        <Grid item xs={6} md={4}>
          <TextField
            select
            fullWidth
            label="Filter by Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            InputLabelProps={{ style: { color: "#ECDFCC" } }}
            sx={inputStyle}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="28">Action</MenuItem>
            <MenuItem value="12">Adventure</MenuItem>
            <MenuItem value="16">Animation</MenuItem>
            <MenuItem value="35">Comedy</MenuItem>
            <MenuItem value="18">Drama</MenuItem>
            <MenuItem value="14">Fantasy</MenuItem>
            <MenuItem value="27">Horror</MenuItem>
          </TextField>
        </Grid>
 
        <Grid item xs={6} md={4}>
          <TextField
            select
            fullWidth
            label="Sort By"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            InputLabelProps={{ style: { color: "#ECDFCC" } }}
            sx={inputStyle}
          >
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="popularity">Popularity</MenuItem>
            <MenuItem value="date">Release Date</MenuItem>
          </TextField>
        </Grid>
      </Grid>
 
   
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(6, 1fr)",
          },
        }}
      >

        {filtered.length===0 && <Box sx={{display:'flex',justifyContent:'center',color:'white',height:'100vh'}}>
          <Typography>No results found</Typography>
          </Box>}
        {filtered?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}
 
export default Seemore;