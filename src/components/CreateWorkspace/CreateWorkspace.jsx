import { makeStyles } from "@material-ui/styles";
import {Box, FormControl, MenuItem, Select, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import {useState} from "react";
import {createWorkspace} from "../../features/workspaces";
import {useDispatch} from "react-redux";


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

const CreateWorkspace = ({closeCreateMode}) => {
    const classes = useStyles();
    const [selectValue, setSelectValue] = useState('room')
    const dispatch = useDispatch()
    const handleSelectChange = (e) => {
        setSelectValue(e.target.value)
    }
    const handleNewWorkspaceAddition = () => {
        const createWorkspaceItem = {
            type: selectValue,

        }
        dispatch(createWorkspace())
        closeCreateMode()
    }
    return (
        <Box className={classes.container}>
            <AddIcon />
            <FormControl variant="outlined" >
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectValue}
                onChange={handleSelectChange}
                size="small"
            >
                <MenuItem value={'room'}>Room</MenuItem>
                <MenuItem value={'desk'}>Desk</MenuItem>
                <MenuItem value={'huddle'}>Huddle</MenuItem>
            </Select>
            </FormControl>
            <TextField id="outlined-basic" variant="outlined" size="small"/>
            <CloseIcon className={classes.button} button="true" onClick={closeCreateMode}/>
            <SaveOutlinedIcon className={classes.button} button="true" /*onClick={handleRemoveMode}*//>
        </Box >
    );
};

export default CreateWorkspace;
