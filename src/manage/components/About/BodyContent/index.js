import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        padding: "0px",
        fontFamily: "Geller",
        width: "100%" ,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
}));
  

const BodyContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
            <Typography variant="h3" style = {{marginTop: "151.29px" , fontWeight: 900, fontSize: "100px", fontFamily: "Geller"}}>Aurora. </Typography>
        <div>
            <Typography variant="h4" style = {{marginTop: "63.71px" , marginBottom: "48px" , fontWeight: 900, fontSize: "55px", fontFamily: "Nunito Sans" }} >Calificaciones, asistencia, <br></br>conducta, clases y foros <br></br>de manera online.</Typography>
            <div className = "flex align-start items-center test-button">
                <Button variant="contained" color="secondary" className = "borderSolid border-1 " style={{backgroundColor: '#FE441A ',marginBottom:"80px" ,borderColor:"#E53E26" , borderRadius: "32px" }}>
                    <span style = {{color: "#FFF" , fontSize: 19 , fontFamily: "SF Pro", textTransform: "none"}}>Solicita una Demo</span>
                </Button>
            </div>
        </div>
    </div>
  );
};

export default BodyContent;
