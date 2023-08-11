import Box from "@mui/material/Box";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import NavBAr from "./components/NavBAr";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import Stack from "@mui/material/Stack";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [mode, setMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid>
          <Grid item xs={12} m={2}>
            <NavBAr
              handleChange={() => {
                setMode(!mode);
              }}
            />
          </Grid>
          <Stack direction="row" spacing={8}>
            <Grid
              item
              xs={false}
              md={3}
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <GenresList onSelectGenre={(genre) => setSelectedGenre(genre)} />
            </Grid>
            <Grid>
              <GameGrid selectedGenre={selectedGenre} />
            </Grid>
          </Stack>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
