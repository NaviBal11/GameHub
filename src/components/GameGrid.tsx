import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import Grid from "@mui/material/Grid";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { games } = useGames(selectedGenre);
  return (
    <Grid container spacing={3} alignItems="center">
      {games.map((game) => (
        <Grid key={game.id} item xs={4}>
          <GameCard game={game} />
        </Grid>
      ))}
    </Grid>
  );
};
export default GameGrid;
