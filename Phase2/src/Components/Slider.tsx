import { Box, Typography } from "@mui/material";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Slider({ title, data, seeMorePath }) {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h6" sx={{ mt: 3 ,color: "#ECDFCC", fontWeight: "bold"}}>
        {title.toUpperCase()}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          pb: 2,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ cursor: "pointer", color: "##ECDFCC", fontWeight: "bold" }}
            onClick={() => navigate(seeMorePath)}
          >
            See More
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Slider;