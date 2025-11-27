import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Chip, Container } from "@mui/material";
 
function Details() {
  const { id } = useParams();
  const [data, setData] = useState();
 
  const API_KEY = import.meta.env.VITE_CINE_API_KEY;
 
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
 
    fetchDetails();
  }, [id]);
 
  if (!data) return <h2 style={{ marginTop: "100px" }}>Loading...</h2>;
 
  return (
    <Container sx={{ mt: 10 }}>
      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
 
        <Box>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            style={{ width: 300, borderRadius: "12px" }}
          />
        </Box>
 
        <Box sx={{ maxWidth: 600 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {data.title}
          </Typography>
 
          <Typography variant="body1" sx={{ mb: 2 }}>
            {data.overview}
          </Typography>
 
          <Typography variant="h6" sx={{ mt: 2 }}>
            Rating: {data.vote_average.toFixed(1)}
          </Typography>
 
          <Typography variant="h6" sx={{ mt: 1 }}>
            Release Date: {data.release_date}
          </Typography>
 
          <Typography variant="h6" sx={{ mt: 3 }}>
            Genres:
          </Typography>
 
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
            {data.genres.map((g) => (
              <Chip key={g.id} label={g.name} />
            ))}
          </Box>
 
          <Typography variant="h6" sx={{ mt: 3 }}>
            Runtime: {data.runtime} minutes
          </Typography>
 </Box>
      </Box>
    </Container>
  );
}
 
export default Details;