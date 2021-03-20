import { makeStyles } from "@material-ui/styles";
import {Box, FormControl, MenuItem, Select, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import {useState} from "react";
import {createWorkspace} from "../../features/workspaces";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: '50px 0',
        width: "100%",
        maxWidth: "500px"
    },
    button: {
        cursor: "pointer",
        color: "blue"
    }
}));

const CreateWorkspace = ({closeCreateMode}) => {
    const classes = useStyles();
    const [selectValue, setSelectValue] = useState('room')
    const [inputValue, setInputValue] = useState('room')
    const dispatch = useDispatch()
    const handleSelectChange = (e) => {
        setSelectValue(e.target.value)
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleNewWorkspaceAddition = () => {
        const createWorkspaceItem = {
            type: selectValue,
            id: uuidv4(),
            title: inputValue
        }
        dispatch(createWorkspace(createWorkspaceItem))
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
                <MenuItem size="small" value={'room'}>Room</MenuItem>
                <MenuItem size="small" value={'desk'}>Desk</MenuItem>
                <MenuItem  size="small" value={'huddle'}>Huddle</MenuItem>
            </Select>
            </FormControl>
            <TextField id="outlined-basic" variant="outlined" size="small" onChange={handleInputChange}/>
            <CloseIcon className={classes.button} button="true" onClick={closeCreateMode}/>
            <SaveOutlinedIcon className={classes.button} button="true" onClick={handleNewWorkspaceAddition} />
        </Box >
    );
};

export default CreateWorkspace;
