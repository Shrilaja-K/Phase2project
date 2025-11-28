import { Box, Typography, Stack, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0a0a09ff",
        
        px: { xs: 2, md: 6 },
      }}
    >
      <Stack
        spacing={1}
        sx={{
          maxWidth: 1200,
          p:2,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#ECDFCC" }}
        >
          CineScope
        </Typography>


        <Typography
          variant="caption"
          sx={{ color: "#ECDFCC" }}
        >
          © {new Date().getFullYear()} CineScope. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
}