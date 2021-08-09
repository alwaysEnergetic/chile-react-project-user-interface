import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const AntTabs = withStyles({
  indicator: {
    backgroundColor: "black"
  },
  
})(Tabs);

const SubTab = withStyles({
  root: {
    fontSize: 25,
    fontWeight: 600,
    textTransform: "none",
    color: "black",
    width: "13vw",
    padding: "0px 5px",
    '&:hover':{
    fontWeight: 900,


    }
  },
  selected:{
    
    // backgroundColor:'red',
    // borderTopLeftRadius:20,
  }  
})(Tab);



const Header = ({onChange}) => {
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
                    fullWidth
                    onChange={handleChange}
                    centered                    
                >
                    <SubTab label="Inicio" />
                    <SubTab label="Sobre&nbsp;nosotros"/>
                    <SubTab label="Recursos" />
                    <SubTab label="Contacto" />
                </AntTabs>  
               
            </div>
        <div className = "flex w-2/12 justify-center items-center text-1xl">
            ES-EN
        </div>
    </div>
  );
};

export default Header;
