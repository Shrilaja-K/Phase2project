import React from "react";
import { Box, Skeleton } from "@mui/material";

function SkeletonCard() {
  return (
    <Box
      sx={{
        width: { xs: "45%", sm: "200px", md: "180px" },
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#2a2c25",
        p: 1,
      }}
    >
      {/* Poster Skeleton */}
      <Skeleton
        variant="rectangular"
        width="100%"
        height={270}
        sx={{ borderRadius: 1 }}
      />

      {/* Title Skeleton */}
      <Skeleton
        variant="text"
        width="80%"
        height={25}
        sx={{ mt: 1, borderRadius: 0.5 }}
      />

     
    </Box>
  );
}

export default SkeletonCard;