import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Header = ({ onChange }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        onChange(newValue);
        setValue(newValue);
    };

    return (
        <div className="flex justify-between items-end" style={{ padding: "46px" }}>
            <div
                className="w-6/12 text-4xl font-bold" className = {classes.logo}
            >
                Aurora.
            </div>

            <div className="flex w-6/12">
                <label className="font-black text-lg">
                    FECHA
                    <input type="text" className={classes.textbox } value="   27 Julio, 2021" />
                </label>

                <label className="font-black text-lg border-r " style={{
                borderRightWidth: 1, }}>
                    HORA
                    <input type="text" className= {classes.textbox} style = {{marginLeft:12}} value="      10:33:40" />
                </label>
                
                <label style={{width:"5%"}}>
                </label>    

                <label style={{width:"5%"}}>
                </label>    

                <label className="text-1xl">ES-EN</label>
            </div>
        </div>
    );
};

const AntTabs = withStyles({
    indicator: {
        backgroundColor: "black",
    },
})(Tabs);

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    textbox: {
      marginLeft:20, 
      marginRight:12,
      fontSize:16,
      borderRadius:20,
      width:"40%",
      alignItems:"center"
    },
    logo: {
        fontFamily: "Geller",
        fontSize: 50,
        marginLeft: 100
    },
    title: {
        borderRightColor: '#000',
         opacity:0.9, 
         borderRightStyle: 'solid'
    },
});

export default Header;
