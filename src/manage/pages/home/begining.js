import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Description from "../../components/Home/Description";
import Login from "../../components/Home/Login";

const useStyles = makeStyles((theme) => ({
    container: {},
}));

const BeginingSection = () => {
    const classes = useStyles();
    return (
        <div className="flex flex-wrap flex-1">
            <div className="flex w-6/12 justify-center">
                <Description />
            </div>
            <div className="flex w-6/12 justify-center">
                <Login />
            </div>
        </div>
    );
};

export default BeginingSection;
