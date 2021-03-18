import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { getUsers } from "../../../shared/selectors";
import { useHistory } from "react-router";
import { mainPagePaths, paths } from "../../../shared/paths";
import { logUserIn } from "../../../features/auth";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  input: {
    marginTop: "20px",
  },
  button: {
    marginTop: "20px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const users = useSelector(getUsers);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setError(false);
    }
  }, [login, password]);

  const setPasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const setLoginInput = (e) => {
    setLogin(e.target.value);
  };

  const onSubmit = () => {
    const foundBylogin = users.find((user) => user.email === login);
    if (!foundBylogin) {
      setError(true);
      return;
    }
    if (foundBylogin?.password !== password) {
      setError(true);
      return;
    }

    const storageData = JSON.stringify({
      user: foundBylogin.email,
      role: foundBylogin.role,
      id: foundBylogin.id,
    });

    localStorage.setItem("userData", storageData);
    dispatch(logUserIn(storageData));
    history.push(mainPagePaths.HOME);
  };

  return (
    <Grid className={classes.formContainer}>
      <TextField
        label="Login"
        variant="outlined"
        onInput={setLoginInput}
        className={classes.input}
        value={login}
        error={error}
      />
      <TextField
        label="Password"
        variant="outlined"
        className={classes.input}
        onInput={setPasswordInput}
        value={password}
        error={error}
      />
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default LoginForm;
