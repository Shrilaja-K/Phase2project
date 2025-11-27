import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from "./Card";



const renderSection = (title, list, path) => {
  return (
    <Box sx={{ mt: 4, px: 1 }}>
 
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#ECDFCC",
            letterSpacing: "0.5px",
          }}
        >
          {title}
        </Typography>
 
        <Typography
          sx={{
            color: "#697565",
            cursor: "pointer",
            fontWeight: "bold",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={() => navigate(path)}
        >
          See More →
        </Typography>
      </Box>
 
     
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "nowrap",
        }}
      >
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};
 
