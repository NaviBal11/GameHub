import logo from "../assets/logo.webp";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

interface Props {
  handleChange: () => void;
}
const label = { inputProps: { "aria-label": "Switch demo" } };
const NavBAr = ({ handleChange }: Props) => {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Box component="img" src={logo} sx={{ width: 50, height: 50 }} />
        <Switch {...label} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default NavBAr;
