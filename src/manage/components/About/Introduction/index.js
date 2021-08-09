import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.third.main,
        padding: "170px 219px 251px 294px",
        fontFamily: "Geller",
    },
}));

const Introduction = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className="flex">
                <div className="w-4/12 " style={{ marginRight: "15px" }}>
                    <h2 style={Styles.h2Style}>Alumnos</h2>
                    <p style={Styles.pStyle}>
                        Acceder a calificaciones, lista de curso, anotaciones,
                        material complementario y además de foros por clase.
                    </p>
                </div>
                <div className="w-4/12" style={{ margin: "0px 20px" }}>
                    <h2 style={Styles.h2Style}>Apoderados</h2>
                    <p style={Styles.pStyle}>
                        Los tutores podrán acceder a calificaciones,
                        anotaciones, lista de curso, contacto de apoderados y a
                        las comunicaciones.
                    </p>
                </div>
                <div className="w-4/12" style={{ marginLeft: "15px" }}>
                    <h2 style={Styles.h2Style}>Docentes</h2>
                    <p style={Styles.pStyle}>
                        El colegio por este medio tendrá un libro de clases
                        virtual por el cual podrá dar a conocer asistencia,
                        calificaciones, anotaciones y podrá enviar
                        comunicaciones y material complementario.
                    </p>
                </div>
            </div>
        </div>
    );
};

const Styles = {
    h2Style: {
        fontSize: "55px",
        fontWeight: "bold",
        fontFamily: "Geller",
    },
    pStyle: {
        fontSize: "25px",
        color: "#313131",
        fontFamily: "SF Pro",
    },
};

export default Introduction;
