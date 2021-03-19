import React, {useState} from "react";
import { makeStyles } from "@material-ui/styles";
import {getWorkspaces} from "../../shared/selectors";
import {useSelector} from "react-redux";
import Workspace from "../../components/Workspace";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import CreateWorkspace from "../../components/CreateWorkspace";

const useStyles = makeStyles(() => ({
  start: {
    display: "flex",
    justifyContent: "center",
    flex: "1",
    marginTop: "150px"
  },
  container: {
    width: "50%"
  },
  // workspaces: {
  //   justifyContent: "space-between",
  //   marginBottom: "30px"
  // },
  addItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "200px"
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
      <div className={styles.container}>
        <div className={styles.addItem}>
          <Typography component="h1">List of workspaces</Typography>
          <Button
              color="primary"
              variant="contained"
              onClick={handleCreateMode}
          >
            {`ADD NEW`}
          </Button>
        </div>
        <div className={styles.workspaces}>
          <CreateWorkspace closeCreateMode={closeCreateMode}/>
          {workspaces.map(workspace => <Workspace key={workspace.type} title={workspace.title} type={workspace.type} />)}
        </div>
      </div>
    </div>

  );
};

export default Workspaces;
