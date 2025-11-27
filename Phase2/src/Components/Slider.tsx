import { Box, Typography } from "@mui/material";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Slider({ title, data, seeMorePath }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "#181C14",pb:4}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="h5" sx={{ color: "#ECDFCC", fontWeight: 700 }}>
          {title}
        </Typography>

       
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          
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

        <Box
          onClick={() => navigate(seeMorePath)}
          sx={{
            flexShrink: 0,
            width: {
              xs: "45%",
              sm: "30%",
              md: "18%",
              lg: "15%",
            },
            borderRadius: "10px",
            background: "#2E2E2E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography sx={{ color: "#41ca48ff", fontWeight: "bold" }}>
            See More →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Slider;