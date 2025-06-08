import { Container, Typography, Box } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Phonebook App!
        </Typography>
        <Typography variant="body1">
          Please register or log in to manage your contacts.
        </Typography>
      </Box>
    </Container>
  );
}
