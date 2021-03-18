import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import { Route } from "react-router-dom";
import { mainPagePaths } from "../../shared/paths";
import React from "react";
import Home from "../Home";
import Workspaces from "../Workspaces";
import { Switch } from "react-router";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    display: "flex",
    flex: 1,
  },
}));

const Main = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Switch>
          <Route exact path={mainPagePaths.HOME} component={Home} />
          <Route exact path={mainPagePaths.WORKSPACES} component={Workspaces} />
        </Switch>
      </main>
    </div>
  );
};

export default Main;
