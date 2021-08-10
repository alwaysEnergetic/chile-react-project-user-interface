import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const StudentAlert = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <p className = "text-lg font-bold">  Rasumen semestal</p>
                <div className = {classes.box} >
                    <p> 3 anotaciones </p>
                    <p> 2 trabajos pendientes </p>
                </div>
            </div>
            <div>
                <p className = "text-lg font-bold mt-3">  Comentarios y alertas</p>
                <div className = {classes.box} >
                    <p> Notas sobre el mínimo </p>
                </div>
            </div>

        </div>
    );
};

export default StudentAlert;

const useStyles = makeStyles((theme) => ({
    container: {

        //backgroundColor: theme.palette.primary.main,
        // width: "60%",
        // heigth: "5%",
        fontFamily: "Geller",

    },
    box: {
        backgroundColor: theme.palette.rightBorderColor.main,
        lineHeight: "5px",
        padding: "20px 60px 60px 20px",
        width: "160%",
        height: "25%",
        borderColor: theme.palette.rightBoxBorder.main,
        borderRadius: "20px",
        border: "1px solid"
    }
   
}));
