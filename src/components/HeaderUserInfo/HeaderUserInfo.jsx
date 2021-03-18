import { makeStyles } from "@material-ui/styles";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  info: {
    color: "white",
    fontFamily: "Raleway",
  },
}));

const HeaderUserInfo = ({userRole}) => {
  const classes = useStyles();

  return <div className={classes.info}>{`${userRole} | ROOMZ`}</div>;
};

export default HeaderUserInfo;
