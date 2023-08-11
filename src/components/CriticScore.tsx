import Badge from "@mui/material/Badge";

interface Prop {
  count: number;
}
const CriticScore = ({ count }: Prop) => {
  const setColor =
    count > 75 ? "primary" : count > 60 ? "secondary" : "warning";
  return (
    <Badge
      color={setColor}
      badgeContent={count}
      sx={{
        padding: 0,
        top: 8,
      }}
    ></Badge>
  );
};

export default CriticScore;
