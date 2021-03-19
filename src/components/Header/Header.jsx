import { makeStyles } from "@material-ui/styles";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderUserInfo from "../HeaderUserInfo/HeaderUserInfo";
import {AppBar, Toolbar} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "black"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "10px"
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar  className={classes.header}>
      <Toolbar>
        <div className={classes.container}>
          <HeaderLogo />
          <HeaderUserInfo {...props}/>
        </div>
        </ Toolbar>

    </AppBar >
  );
};

export default Header;
