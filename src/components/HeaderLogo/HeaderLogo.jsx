import { ReactComponent as HeaderLogoImg } from "../../assets/images/logo-icon.svg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  logo: {
    height: "20px",
  },
}));

const HeaderLogo = () => {
  const classes = useStyles();
  return <HeaderLogoImg className={classes.logo} />;
};

export default HeaderLogo;
