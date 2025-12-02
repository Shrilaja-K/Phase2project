import { Box, Typography } from "@mui/material";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Slider({ title, data, seeMorePath }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "#181C14",pb:4}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#ECDFCC", mt: 2 }}
                >
                  {title.toUpperCase()}
                </Typography>

        <Typography  onClick={() => navigate(seeMorePath)} sx={{ color: "#e2d6d6ff", cursor:'pointer',fontWeight: "bold" ,marginRight:2}}>
            See More →
          </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          overflowY:'hidden',
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {data?.map((item) => (
          <Box
            key={item.id}
            sx={{
              flexShrink: 0,
              width: {
                xs: "45%",    
                sm: "30%",    
                md: "18%",     
                lg: "15%",     
              },
            }}
          >
            <Card item={item} />
          </Box>
        ))}

        
      </Box>
    </Box>
  );
}

export default Slider;  