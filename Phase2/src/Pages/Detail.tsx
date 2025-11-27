import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Chip,
  Container,
  TextField,
  Button,
  Divider,
} from "@mui/material";
 
function Details() {
  const { id } = useParams();
 
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [ratingValue, setRatingValue] = useState("");
 
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
 

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
        );
        setReviews(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
 
    fetchReviews();
  }, [id]);
 

  const handleAddRating = async () => {
    try {
      await axios.post(
        `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${API_KEY}`,
        // {
        //   value: Number(ratingValue),
        // },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
 
      alert("Rating added successfully!");
      setRatingValue("");
    } catch (err) {
      console.log(err);
      alert("Error adding rating");
    }
  };

  const handleDeleteRating = async () => {
    try {
      await axios.delete(
        `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${API_KEY}`
      );
 
      alert("Your rating has been removed.");
    } catch (err) {
      console.log(err);
      alert("Error deleting rating");
    }
  };
 
  if (!data)
    return <h2 style={{ marginTop: "100px" }}>Loading...</h2>;
 
  return (
    <Container sx={{ mt: 10, pb: 10 }}>
 
      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          style={{ width: 300, borderRadius: "12px" }}
        />
 
        <Box sx={{ maxWidth: 600 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            {data.title}
          </Typography>
 
          <Typography variant="body1" sx={{ mb: 2 }}>
            {data.overview}
          </Typography>
 
          <Typography variant="h6"> Rating: {data.vote_average.toFixed(1)}</Typography>
          <Typography variant="h6"> Release: {data.release_date}</Typography>
 
          <Typography variant="h6" sx={{ mt: 2 }}> Genres:</Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
            {data.genres?.map((g) => (
              <Chip key={g.id} label={g.name} />
            ))}
          </Box>
 
          <Typography variant="h6" sx={{ mt: 2 }}>
             Runtime: {data.runtime} mins
          </Typography>
 
          <Typography variant="h6" sx={{ mt: 2 }}>
             Production Companies:
          </Typography>
          {data.production_companies?.map((c) => (
            <Typography key={c.id}>• {c.name}</Typography>
          ))}
 
          <Typography variant="h6" sx={{ mt: 2 }}>
             Spoken Languages:
          </Typography>
          {data.spoken_languages?.map((l, i) => (
            <Chip key={i} label={l.english_name} sx={{ mr: 1, mt: 1 }} />
          ))}
 
          <Typography variant="h6" sx={{ mt: 3 }}>
             Homepage:
          </Typography>
          <a href={data.homepage} >{data.homepage}</a>
        </Box>
      </Box>
 
 
      <Typography variant="h5">Rate this Movie</Typography>
 
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
        <TextField
          label="Rating"
          type="number"
          value={ratingValue}
          onChange={(e) => setRatingValue(e.target.value)}
          sx={{ width: 200 }}
        />
        <Button variant="contained" onClick={handleAddRating}>Add Rating</Button>
        <Button variant="outlined" color="error" onClick={handleDeleteRating}>
          Delete Rating
        </Button>
      </Box>
 
      <Divider sx={{ my: 4 }} />
 
      <Typography variant="h5">Reviews</Typography>
 
      {reviews.length === 0 ? (
        <Typography sx={{ mt: 2 }}>No reviews available.</Typography>
      ) : (
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 3 }}>
          {reviews.map((rev) => (
            <Box
              key={rev.id}
              sx={{ p: 2, borderRadius: "10px", border: "1px solid grey" }}
            >
              <Typography variant="h6">{rev.author}</Typography>
              <Typography variant="body2">{rev.content}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
}
 
export default Details;