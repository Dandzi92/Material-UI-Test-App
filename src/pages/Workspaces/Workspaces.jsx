import React, {useState} from "react";
import { makeStyles } from "@material-ui/styles";
import {getWorkspaces} from "../../shared/selectors";
import {useSelector} from "react-redux";
import Workspace from "../../components/Workspace";
import Typography from "@material-ui/core/Typography";
import {Button, Toolbar} from "@material-ui/core";
import CreateWorkspace from "../../components/CreateWorkspace";
import DeleteWorkspaceModal from "../../components/Modals/DeleteWorkspace/DeleteWorkpace";

const useStyles = makeStyles(() => ({
  start: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  container: {
    position: "relative",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:  "center",
    height: "100%"
  },
  workspaces: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "30px",
    width: "100%",
    padding: "100px 0",
    maxWidth: "500px"
  },
  addItem: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "500px"
  }
}));

const Workspaces = () => {
  const styles = useStyles();
  const workspaces = useSelector(getWorkspaces)
  const [isCreateMode, setCreateMode] = useState(false)
  const handleCreateMode = () => {
    setCreateMode(state => !state)
  }
  const closeCreateMode = () => {setCreateMode(false)}
  return (
    <div className={styles.start}>
      <Toolbar />
      <div className={styles.container}>
        <div className={styles.addItem}>
          <Typography component="h1">List of workspaces</Typography>
          <Button disabled={isCreateMode}
              color="primary"
              variant="contained"
              onClick={handleCreateMode}
          >
            {`ADD NEW`}
          </Button>
        </div>
        <div className={styles.workspaces}>
          {isCreateMode && <CreateWorkspace closeCreateMode={closeCreateMode}/>}
          {workspaces.map(workspace => <Workspace key={workspace.type} title={workspace.title} type={workspace.type} />)}
        </div>
        <DeleteWorkspaceModal/>
      </div>
    </div>

  );
};

export default Workspaces;
