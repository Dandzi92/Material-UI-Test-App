import { makeStyles } from "@material-ui/styles";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderUserInfo from "../HeaderUserInfo/HeaderUserInfo";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    backgroundColor: "black",
    padding: "20px 15px",
    boxShadow: "0px 5px 5px  black",
    justifyContent: "space-between",
    alignItems: "center",
    height: "5%",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <HeaderLogo />
      <HeaderUserInfo />
    </header>
  );
};

export default Header;
