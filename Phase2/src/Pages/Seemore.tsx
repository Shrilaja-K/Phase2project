import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import Card from "../Components/Card";

function Seemore() {
  const { type } = useParams();
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_CINE_API_KEY;

  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [genre, setGenre] = useState("all");
  const [sort, setSort] = useState("");

  const inputStyle = {
    "& .MuiInputBase-input": { color: "#FFFFFF" },
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FFFFFF" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#FFFFFF" },
    "& .MuiInputLabel-root": { color: "#ECDFCC" },
  };

const styleSX = {
  minWidth : '20%',
  ...inputStyle
}

  const fetchData = async () => {
    try {
      const params: any = { api_key: API_KEY, page, sort_by: sort };
      if (genre !== "all") params.with_genres = genre;

      const url =
        type === "tv"
          ? "https://api.themoviedb.org/3/discover/tv"
          : "https://api.themoviedb.org/3/discover/movie";

      const res = await axios.get(url, { params });
      setResults((prev) => [...prev, ...res.data.results]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, genre, sort, type]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY + 150 >=
        document.documentElement.scrollHeight
      ) {
        setPage((p) => p + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ background: "#181C14", pt: 10, pb: 5, px: 2 }}>
      <Button variant="text" sx={{ color: "white" }} onClick={() => navigate(-1)}>
        Back
      </Button>

      <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: "#ECDFCC", mt: 2 ,mb:2,textAlign:'center'}}
              >
                {type.toUpperCase()}
              </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 4 ,textAlign:'center',justifyContent:'center' ,}}>
        <TextField
          select
          label="Genre"
          value={genre}
          onChange={(e) => {
            setPage(1);
            setResults([]);
            setGenre(e.target.value);
          }}
         sx={styleSX}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="28">Action</MenuItem>
          <MenuItem value="12">Adventure</MenuItem>
          <MenuItem value="35">Comedy</MenuItem>
        </TextField>

        <TextField
          select
          label="Sort By"
          value={sort}
          onChange={(e) => {
            setPage(1);
            setResults([]);
            setSort(e.target.value);
          }}
          sx={styleSX}  
        >
          <MenuItem value="popularity.desc">Popularity</MenuItem>
          <MenuItem value="vote_average.desc">Rating</MenuItem>
          <MenuItem value="release_date.desc">Release Date</MenuItem>
        </TextField>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          },
        }}
      >
        {results.length === 0 && (
          <Typography sx={{ color: "white", textAlign: "center", mt: 5 }}>
            No results found
          </Typography>
        )}
        {results.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default Seemore;