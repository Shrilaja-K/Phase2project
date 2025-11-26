import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { nowPlayingfn } from "../redux/homeAction";
 
function NowPlayingPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.home.nowplaying);
 
  const [page, setPage] = useState(1);
 
  useEffect(() => {
    dispatch(nowPlayingfn(page));
  }, [page]);
 

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Now Playing
      </Typography>
 
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {movies.map((item) => (
          <Box key={item.id} sx={{ width: 150 }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{ width: "100%", borderRadius: "10px" }}
              alt={item.title}
            />
            <Typography sx={{ textAlign: "center", mt: 1 }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
 
export default NowPlayingPage;