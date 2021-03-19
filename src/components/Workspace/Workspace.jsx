import { makeStyles } from "@material-ui/styles";
import {Box} from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {workspacesIconsMap} from "../../shared/workSpacesIcons";
import Typography from "@material-ui/core/Typography";
import {useState} from "react";


const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid gray",
        borderTop: "1px solid gray",
        padding: '5px'
    },
    button: {
        cursor: "pointer",
        color: "blue"
    }
}));

const Workspace = ({type, title}) => {
    const classes = useStyles();
    const WorkSpaceIcon = workspacesIconsMap[type]
    const [isEditMode, setEditMode] = useState(false)
    const [isRemoveMode, setRemoveMode] = useState(false)
    const handleEditMode = () => {
        setEditMode((state) => !state)
    }
    const handleRemoveMode = () => {
        setRemoveMode((state) => !state)
    }
    return (
        <Box className={classes.container}>
            <WorkSpaceIcon />
            <Typography component="div">{type}</Typography>
            <Typography component="div">{title}</Typography>
            <EditOutlinedIcon className={classes.button} button="true" onClick={handleEditMode}/>
            <DeleteOutlineOutlinedIcon className={classes.button} button="true" onClick={handleRemoveMode}/>
        </Box >
    );
};

export default Workspace;
