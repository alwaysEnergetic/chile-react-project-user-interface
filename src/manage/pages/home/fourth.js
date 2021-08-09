import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Introduction from "../../components/About/Introduction";
import BodyContent from "../../components/About/BodyContent";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
    },
}));

const Fourth = () => {
    const classes = useStyles();

    return (
        <div className="wrap flex-1">
            <div className={classes.container}>
                fourth content
            </div>
            

        </div>
    );
};

export default Fourth;
