import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  info: {
    color: "white"
  },
}));

const HeaderUserInfo = ({userRole}) => {
  const classes = useStyles();

  return <Typography className={classes.info} component="div">{`${userRole} | ROOMZ`}</Typography>;
};

export default HeaderUserInfo;
