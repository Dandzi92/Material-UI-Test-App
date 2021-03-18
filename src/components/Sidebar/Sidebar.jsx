import { makeStyles } from "@material-ui/styles";
import { sidebarItems } from "../../shared/sidebarItems";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "20px",
    width: "400px",
    boxShadow: "1px 0px 5px gray",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
  activeLink: {
    background: "gray",
  },
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <aside className={classes.sidebar}>
      <List>
        {sidebarItems.map((sidebarItem, index) => {
          return (
            <NavLink
              to={sidebarItem.path}
              className={classes.link}
              key={sidebarItem.title}
              activeClassName={classes.activeLink}
            >
              <ListItem button>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <HomeOutlinedIcon />
                  ) : (
                    <AssignmentOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={sidebarItem.title} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </aside>
  );
};

export default SideBar;
