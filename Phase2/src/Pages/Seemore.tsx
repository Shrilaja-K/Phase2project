import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {type}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {movies?.map((item) => (
          <Box key={item.id} sx={{ width: 150 }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{ width: "100%", borderRadius: "10px" }}
              alt={item.title || item.name}
            />
            <Typography sx={{ textAlign: "center", mt: 1 }}>
              {item.title || item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Seemore;