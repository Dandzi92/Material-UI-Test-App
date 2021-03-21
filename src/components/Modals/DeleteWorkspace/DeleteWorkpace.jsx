import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: "none",
        display: "flex",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    caption: {
        padding: "0 0 50px 0"
    },
    buttons: {
        display: "flex",
        alignSelf: "flex-end"
    },
    modal: {
        position: "absolute !important",
        '& > div': {
            position: "absolute !important"
        }
    }
}));

export default function SimpleModal({closeRemoveMode, handleRemoveWorkspace, isDeleteMode}) {
    const classes = useStyles();

    const body = (
        <div  className={classes.paper}>
            <Typography className={classes.caption}>
                Do you really want to delete this workspace?
            </Typography>
            <div className={classes.buttons}>
                <Button color="primary" onClick={closeRemoveMode}>
                    Cancel
                </Button>
                <Button color="primary" onClick={handleRemoveWorkspace}>
                    Delete
                </Button>
            </div>

        </div>
    );

    return (
            <Modal
                open={isDeleteMode}
                onClose={closeRemoveMode}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                disablePortal
                className={classes.modal}
            >
                {body}
            </Modal>
    );
}