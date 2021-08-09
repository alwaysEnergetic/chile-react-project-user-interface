import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    padding: "17px 21px 24px 37px",
    fontFamily: "Geller",
    // position: "fixed",
    // bottom: 0 ,
    width: "100%",
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ marginTop: 2 }}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div
            variant="h5"
            className="pr-2 font-sans"
            style={{ color: "#FFF", fontWeight: 900, fontSize: "26px" }}
          >
            Aurora.
          </div>
          <div
            variant="h5"
            className="pl-2 font-sans"
            style={{ color: "#FFF", fontWeight: 600, fontSize: "18px" }}
          >
            © 2021 - Todos los derechos reservados
          </div>
        </div>

        <div
        className="flex items-center font-sans"
          style={{
            color: "#FFF",
            fontWeight: 900,
            fontSize: "18px",
            
          }}
        >
          Política de privacidad y seguridad de datos
        </div>
      </div>
    </div>
  );
};
export default Footer;
