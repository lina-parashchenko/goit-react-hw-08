import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Box, Typography, Button } from "@mui/material";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 1,
      }}
    >
      <Typography variant="subtitle1" component="p">
        Welcome, <strong>{name}</strong>
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Box>
  );
}
