import useGenres, { Genre } from "../hooks/useGenres";
import ListItem from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenresList = ({ onSelectGenre }: Props) => {
  const { genres } = useGenres();
  return (
    <>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <Box display="flex" alignItems="center">
            <ListItemAvatar>
              <Avatar
                src={genre.image_background}
                sx={{ borderRadius: "10%" }}
              />
            </ListItemAvatar>
            <Link
              underline="hover"
              component="button"
              onClick={() => {
                onSelectGenre(genre);
              }}
            >
              {genre.name}
            </Link>
          </Box>
        </ListItem>
      ))}
    </>
  );
};

export default GenresList;
