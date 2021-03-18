import React from "react";
import { makeStyles } from "@material-ui/styles";

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
  return <div className={styles.main}>{`Welcome to the ROOMZ portal, ${userRole}!`}</div>;
};

export default Home;
