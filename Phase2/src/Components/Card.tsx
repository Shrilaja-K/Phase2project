import { Box, Typography } from "@mui/material";

function Card({ item }) {
  return (
    <Box sx={{ width: 150, flexShrink: 0 }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        style={{ width: "100%", borderRadius: "10px" }}
        alt={item.title || item.name}
      />

      <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
        {item.title || item.name}
      </Typography>
    </Box>
  );
}

export default Card;