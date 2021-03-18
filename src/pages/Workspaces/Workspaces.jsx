import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  workspaces: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    padding: "20px",
  },
}));

const Workspaces = () => {
  const styles = useStyles();
  return (
    <div className={styles.workspaces}>
      <p>Workspaces</p>
    </div>
  );
};

export default Workspaces;
