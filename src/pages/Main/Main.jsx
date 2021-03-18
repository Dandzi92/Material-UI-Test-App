import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import { Route } from "react-router-dom";
import { mainPagePaths } from "../../shared/paths";
import React from "react";
import Home from "../Home";
import Workspaces from "../Workspaces";
import { Switch } from "react-router";
import { makeStyles } from "@material-ui/styles";
import {useSelector} from "react-redux";
import {getLoggedInUser} from "../../shared/selectors";

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
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
  const loggedInUser = useSelector(getLoggedInUser)
  return (
    <div className={styles.container}>
      <Header userRole={loggedInUser?.role}/>
      <main className={styles.main}>
        <SideBar />
        <Switch>
          <Route exact path={mainPagePaths.HOME}  render={() => (
             <Home userRole={loggedInUser?.role} />
          )}/>
          <Route exact path={mainPagePaths.WORKSPACES} component={Workspaces} />
        </Switch>
      </main>
    </div>
  );
};

export default Main;
