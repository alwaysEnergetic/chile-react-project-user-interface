import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const AntTabs = withStyles({
  root: {
    borderBottom: ""
  },
  indicator: {
    backgroundColor: "black"
  }
})(Tabs);


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    tab: {
      fontSize: 25,
      fontWeight: 700,
      textTransform: "none",
      color: "black",
      width: "13vw",
      padding: "0px 5px",
      "&:hover":{
        color: "black",
        fontWeight: 800,
        borderBottom: '1px solid #e8e8e8',
      },
      '&:focus': {
        indicator: {
          backgroundColor: "black"
        }  
      },
    },
  });

const Header = ({onChange}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      onChange(newValue);
      setValue(newValue)
    };

  return (
    <div className="flex flex-wrap" style = {{padding: "15px"}}>
        <div className = "flex w-2/12 justify-center text-4xl font-bold" style = {{fontFamily: "Geller"}}>
            A.
        </div>
            <div className = "flex w-8/12 justify-center font-semibold">
                <AntTabs
                    value={value}
                    onChange={handleChange}
                    centered                    
                >
                    <Tab label="Inicio" className={classes.tab}/>
                    <Tab label="Sobre&nbsp;nosotros" className={classes.tab}/>
                    <Tab label="Recursos" className={classes.tab}/>
                    <Tab label="Contacto" className={classes.tab}/>
                </AntTabs>             
            </div>
        <div className = "flex w-2/12 justify-center items-center text-1xl">
            ES-EN
        </div>
    </div>
  );
};

export default Header;