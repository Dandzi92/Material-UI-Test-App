import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import LoginForm from "../../components/Forms/Login";
import { useSelector } from "react-redux";
import { checkIsAuthenticated } from "../../shared/selectors";
import { paths } from "../../shared/paths";

const useStyles = makeStyles(() => ({
  authWrapper: {
    "text-align": "center",
  },
  authTitle: {
    marginBottom: "30px",
  },
  authPage: {
    minHeight: "100vh",
  },
}));

const Auth = () => {
  const classes = useStyles();
  const history = useHistory();
  const isUserAuthenticated = useSelector(checkIsAuthenticated);

  if (isUserAuthenticated) {
    history.push(paths.MAIN);
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.authPage}
    >
      <Grid xs={10} className={classes.authWrapper}>
        <h1 className={classes.authTitle}>Login</h1>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Auth;
