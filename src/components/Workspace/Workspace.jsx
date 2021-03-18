import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles(() => ({
//     header: {
//         display: "flex",
//         backgroundColor: "black",
//         padding: "20px 15px",
//         boxShadow: "0px 2px 5px  black",
//         justifyContent: "space-between",
//         alignItems: "center",
//         height: "5%",
//     },
// }));

const Workspace = (props) => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <HeaderLogo />
            <HeaderUserInfo {...props}/>
        </header>
    );
};

export default Workspace;
