import { SwipeableDrawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  hideNavigationMenu,
  showNavigationMenu,
} from "../../store/actions/sidebarActions";
import { sidebarLinks } from "./sidebarLinks";
import "./NavigationSidebar.css";

const NavigationSidebar = () => {
  const dispatch = useDispatch();

  const menuState = useSelector((state) => state.sidebar.sidebarMenu);

  const closeDrawer = () => {
    dispatch(hideNavigationMenu());
  };
  const openDrawer = () => {
    dispatch(showNavigationMenu());
  };

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={menuState}
      onClose={closeDrawer}
      onOpen={openDrawer}
    >
      <ul className="sidebarlink-css">
        {sidebarLinks.map((l) => {
          return (
            <Link
              onClick={closeDrawer}
              key={l.path}
              to={l.path}
              className="menuLink-css"
            >
              {l.label}
            </Link>
          );
        })}
      </ul>
    </SwipeableDrawer>
  );
};

export default NavigationSidebar;
