import { SwipeableDrawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  hideNavigationMenu,
  showNavigationMenu,
} from "../../store/actions/sidebarActions";
import { sidebarLinks } from "./sidebarLinks";

const NavigationSidebar = () => {
  const dispatch = useDispatch();
  //   const location = useLocation();

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
      <ul>
        {sidebarLinks.map((l) => {
          //   let isCurrent = location?.pathname === l.path;
          return (
            <Link
              onClick={closeDrawer}
              key={l.path}
              style={{ display: "flex", flexDirection: "column" }}
              //   className={
              //     styles.menuLink + " " + (isCurrent && styles.menuLinkSelected)
              //   }
              to={l.path}
            >
              {/* {l.iconClass && (
                <i
                  className={
                    l.iconClass +
                    " " +
                    (isCurrent ? styles.menuIconSelected : styles.menuIcon)
                  }
                  style={{
                    marginRight: "0.5rem",
                  }}
                />
              )} */}
              {l.label}
            </Link>
          );
        })}
      </ul>
    </SwipeableDrawer>
  );
};

export default NavigationSidebar;
