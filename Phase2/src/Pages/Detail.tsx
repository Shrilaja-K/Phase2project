import  { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Typography,
  Chip,
  TextField,
  Button,
  Divider,
} from "@mui/material";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_CINE_API_KEY;

  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showFull, setShowFull] = useState({});
  const [ratingValue, setRatingValue] = useState("");
  const [providers, setProviders] = useState([]);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating_${id}`);
    if (savedRating) setRatingValue(savedRating);
  }, [id]);

  const handleAddRating = () => {
    localStorage.setItem(`rating_${id}`, ratingValue);
    alert("Rating saved locally!");
  };

  const handleDeleteRating = () => {
    localStorage.removeItem(`rating_${id}`);
    setRatingValue("");
    alert("Rating removed");
  };

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

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`
        );
        const IN = res.data.results?.IN;
        if (IN?.flatrate) setProviders(IN.flatrate);
        else setProviders([]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProviders();
  }, [id]);

 
  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
        );
        setSimilar(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSimilar();
  }, [id]);

  if (!data)
    return (
      <Typography
        sx={{ color: "#ECDFCC", mt: 20, textAlign: "center", fontSize: 24 }}
      >
        Loading...
      </Typography>
    );

  return (
    <Box sx={{ background: "#181C14", p: 4, pt: 12, color: "#ECDFCC" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "350px 1fr 300px" },
          gap: 4,
        }}
      >
     
        <Box>
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            sx={{
              width: "100%",
              borderRadius: 2,
              boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
            }}
          />
        </Box>

    
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
        >
          <Typography variant="h4" sx={{ gridColumn: "1/3", mb: 1 }}>
            {data.title}
          </Typography>

          <Typography sx={{ gridColumn: "1/3", color: "#697565" }}>
            {data.overview}
          </Typography>

          <Typography>⭐ Rating: {data.vote_average.toFixed(1)}</Typography>
          <Typography>📅 Release: {data.release_date}</Typography>

          <Box sx={{ gridColumn: "1/3" }}>
            <Typography>🎬 Genres:</Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
              {data.genres.map((g) => (
                <Chip
                  key={g.id}
                  label={g.name}
                  sx={{ background: "#3C3D37", color: "#ECDFCC" }}
                />
              ))}
            </Box>
          </Box>

          <Typography>⏱ Runtime: {data.runtime} mins</Typography>

          <Box sx={{ gridColumn: "1/3" }}>
            <Typography>🗣 Languages:</Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
              {data.spoken_languages.map((l, i) => (
                <Chip
                  key={i}
                  label={l.english_name}
                  sx={{ background: "#3C3D37", color: "#ECDFCC" }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ gridColumn: "1/3" }}>
            <Typography sx={{ mt: 2 }}>🎥 Watch Providers:</Typography>
            {providers.length === 0 ? (
              <Typography>No providers available.</Typography>
            ) : (
              <Box sx={{ display: "flex", gap: 2, mt: 1, flexWrap: "wrap" }}>
                {providers.map((p) => (
                  <Box
                    key={p.provider_id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 1,
                      background: "#3C3D37",
                      borderRadius: 1,
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w92${p.logo_path}`}
                      style={{ width: 30 }}
                    />
                    <Typography>{p.provider_name}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            background: "#3C3D37",
            borderRadius: 2,
            p: 2,
            height: "100%",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Similar Movies
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {similar.slice(0, 4).map((item) => (
              <Box
                key={item.id}
                sx={{ display: "flex", gap: 2, cursor: "pointer" }}
                onClick={() => navigate(`/details/${item.id}`)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  style={{ width: 60, borderRadius: 4 }}
                />
                <Typography>{item.title}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography sx={{ mb: 1, fontSize: 20 }}>Rate this Movie</Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Rating"
            type="number"
            value={ratingValue}
            onChange={(e) => setRatingValue(e.target.value)}
            sx={{
              width: 120,
              input: { color: "#ECDFCC" },
              label: { color: "#ECDFCC" },
            }}
          />
          <Button variant="contained" onClick={handleAddRating}>
            Save
          </Button>
          <Button color="error" variant="outlined" onClick={handleDeleteRating}>
            Delete
          </Button>
        </Box>
      </Box>

      <Divider sx={{ my: 5 }} />

      <Typography sx={{ mb: 2, fontSize: 20 }}>Reviews</Typography>

      {reviews.map((rev) => {
        const isFull = showFull[rev.id];
        const content = isFull
          ? rev.content
          : rev.content.slice(0, 200) + (rev.content.length > 200 ? "..." : "");

        return (
          <Box
            key={rev.id}
            sx={{
              background: "#3C3D37",
              p: 2,
              borderRadius: 2,
              mb: 2,
            }}
          >
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              {rev.author}
            </Typography>

            <Typography>{content}</Typography>

            {rev.content.length > 200 && (
              <Button
                sx={{ mt: 1 }}
                size="small"
                onClick={() =>
                  setShowFull({ ...showFull, [rev.id]: !isFull })
                }
              >
                {isFull ? "Show Less" : "Show More"}
              </Button>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default Details;