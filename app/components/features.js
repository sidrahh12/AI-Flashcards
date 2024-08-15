import {
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Grid,
  Container,
} from "@mui/material";

export default function Features() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const features = [
    // Your features array remains unchanged
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 4, color: theme.palette.secondary.main }}
        >
          Features
        </Typography>
        <Grid container spacing={isSmallScreen ? 2 : 4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Example of a custom shadow
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography color="white">{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
