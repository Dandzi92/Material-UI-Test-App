import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/styles";
import {Toolbar} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    width: "80%",
    height: "100%",
    fontWeight: "bold"
  },
}));

const Home = ({userRole}) => {
  const styles = useStyles();
  return <><Toolbar /><Typography className={styles.main} component="div">{`Welcome to the ROOMZ portal, ${userRole}!`}</Typography></>;
};

export default Home;
