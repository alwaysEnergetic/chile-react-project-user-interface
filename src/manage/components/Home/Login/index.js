import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Form , FormGroup, Label, Input } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";

import {
  GoogleLoginButton
} from "react-social-login-buttons";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.third.main,
        padding: "52px",
        borderRadius: "36px",
        marginTop: "90px",
        width: "63%",
        height: "65vh"
      },
      select: {
        '&:after' : {
          borderColor: "red",
        }
      },
      icon: {
        fill:"red"
      }
}));
  

const Login = () => {
  const classes = useStyles();

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/pupils`; 
    history.push(path);
  }



  return (
    <div className={classes.container}>
      
      <div className = "login-form">
        <h1 className = "mt-4 mb-7">
          <span className = "font-bold text-5xl">Inicio sesión</span>
        </h1> 

        <Form className = "mt-7 mb-7">
          <TextField 
            id="outlined-basic" label="Useario" variant="outlined" required autoFocus
            style ={{ width: "100%"}}
            /> 
        </Form>
        
        <Form className = "mt-7 mb-7">
          <TextField 
            type="password" label = "Contraseña" variant="outlined" required
            style ={{ width: "100%"}}
          />
        </Form>

        <Grid container style = {{marginBottom: 18}}>
            <Grid item xs style = {{marginTop: 9}}>
              <Link href="#" variant="body2" style = {{color: "#000", opacity: 0.7,fontSize:16}}>
                olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
              <FormControlLabel
                control={<Checkbox value="remember"  className = {classes.select} />}
                label="Recuérdame"
              />
            </Grid>
          </Grid>



         <Button
            type="submit"
            onClick={routeChange}
            variant="contained"
            style = {{width:"100%",backgroundColor:"#4F73EB ",borderRadius:"32px" , height:"46px", marginBottom:20}}
          >
          iniciar sesión
          </Button>
          <div className = "flex">
            <hr style={{width:"47%"}}>
            </hr>
            <span style ={{marginTop:3,marginBottom:19, opacity:0.7}}> O </span>
            <hr style={{width:"47%"}}>
            </hr>
          </div>

          <Button
            type="submit"
            variant="contained"
            style = {{width:"100%",backgroundColor:"#FFF",borderRadius:"32px" ,borderColor:"lightgrey",borderWidth: "thin" , height:"46px", marginBottom:20}}
          >
          <div className = "flex justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> 
             <span style= {{ color:"#000" , opacity:0.8, marginLeft: 9}}> Iniciar sesión con Google </span>
          </div>
          </Button>

          {/* <GoogleLoginButton buttonText = "Login" className = "mt-3 mb-3" style={{borderRadius:32 , height:46}}/> */}
          {/* <div className = "text-center">
            <a href = "/sign-up"> Sign up</a>
          </div> */}
      </div>    
    </div>
  );
};

export default Login;
