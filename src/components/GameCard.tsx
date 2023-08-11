import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import { Typography } from "@mui/material";
import CriticScore from "./CriticScore";
import Stack from "@mui/material/Stack";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card variant="outlined">
      <CardMedia component="img" height="200" image={game.background_image} />
      <CardContent sx={{ height: 120 }}>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <Stack direction="row" spacing={10}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore count={game.metacritic} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GameCard;
