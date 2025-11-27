import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";
import { setSearch } from "../redux/searchAction";
import Card from "../Components/Card";

import {
  nowPlayingfn,
  Popularfn,
  topRatedfn,
  upComingfn,
  airingTodayfn,
  ontheAirfn,
  topRatedfns,
  Popularfns
} from "../redux/homeAction";


function Seemore() {
  const { type } = useParams();  
  const dispatch = useDispatch();
  
  const [page, setPage] = useState(1);
  const searchText = useSelector((state) => state.search.search);
  const [localSearch, setLocalSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [sort, setSort] = useState("none");

     useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(setSearch(localSearch));
    }, 400);
 
    return () => clearTimeout(delay);
  }, [localSearch]);

  const movies = useSelector((state) => {
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
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        setPage((p) => p + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ marginTop: 10 }}>
      <Typography variant="h4" sx={{ mb: 3, textTransform: "capitalize" }}>
        {type}
      </Typography>
 
  
      <Grid container spacing={2} sx={{ mb: 3 }}>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Search"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </Grid>
 
  
        <Grid item xs={6} md={4}>
          <TextField
            select
            fullWidth
            label="Filter by Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
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
          >
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="popularity">Popularity</MenuItem>
            <MenuItem value="date">Release Date</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {filtered?.map((item) => (
          <Box key={item.id} sx={{ width: 150 }}>
            <Card item={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
 
export default Seemore;