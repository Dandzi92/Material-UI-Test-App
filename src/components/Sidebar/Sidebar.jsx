import { makeStyles } from "@material-ui/styles";
import { sidebarItemsMap } from "../../shared/sidebarItemsMap";
import { NavLink } from "react-router-dom";
import {List, ListItem, ListItemIcon, ListItemText, Toolbar} from "@material-ui/core";
import { Drawer } from '@material-ui/core';
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

const useStyles = makeStyles(() => ({
  sidebar: {
    width: "350px",
    '& div': {
      position: "static",
      background: "none"
    }
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  activeLink: {
    background: "gray",
  },
}));

const SideBar = () => {
  const classes = useStyles();
  return (
      <Drawer variant='persistent' className={classes.sidebar} open>
        <Toolbar />
        <List>
          {sidebarItemsMap.map((sidebarItem, index) => {
            return (
                <NavLink
                    to={sidebarItem.path}
                    className={classes.link}
                    key={sidebarItem.title}
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
      </Drawer>
  );
};

export default SideBar;
