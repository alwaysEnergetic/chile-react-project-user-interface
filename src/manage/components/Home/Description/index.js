import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Description = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h3" className={classes.textProperty}>
                Aurora.
            </Typography>

            <Typography variant="h4" className={classes.contentProperty}>
                Libro de classes <br></br>digital que lo <br></br>hace todo y
                mas{" "}
            </Typography>
            <div className="flex">
                <div className="character pr-5">
                    <div className="">
                        <Typography variant="h5" className={classes.pProperty}>
                            visulization y gestion <br></br> digital para
                            institutos{" "}
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center test-button pl-5">
                    <button
                        variant="contained"
                        className="borderSolid border-1 bg-lightYellow-t1 p-2 rounded-full "
                    >
                        <span className={classes.spanProperty}>
                            Solicita una Demo
                        </span>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Description;

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        padding: "0px",
        fontFamily: "Geller",
    },
    textProperty: {
        marginTop: "151.29px",
        fontWeight: 900,
        fontSize: "100px",
        fontFamily: "Geller",
    },
    contentProperty: {
        marginTop: "63.71px",
        marginBottom: "48px",
        fontWeight: 900,
        fontSize: "55px",
        fontFamily: "Nunito Sans",
    },
    spanProperty: {
        color: "#FFFFFF",
        fontSize: 19,
        fontFamily: "SF Pro",
        textTransform: "none",
        padding: "5px 15px",
        opacity: "0.9",
    },
    pProperty: {
        fontWeight: 900,
        fontSize: "28px",
        fontFamily: "Nunito Sans",
    },
}));
