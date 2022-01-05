import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../../store/actions/authActions";
import { toggleNavigationMenu } from "../../store/actions/sidebarActions";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  const toggleDrawer = () => {
    dispatch(toggleNavigationMenu());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundImage: `linear-gradient(
            218deg,
            rgb(201 25 49 / 75%),
            rgb(0 138 255 / 56%)
          )`,
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <FaBars />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fitness Tracker
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
