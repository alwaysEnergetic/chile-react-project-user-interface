import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import UserHeader from "../../../components/RolesModel/userHeader"
import Settings from "../../../components/RolesModel/settings"
import PupilContent from "../../../components/Pupils/pupilContent"
import Footer from "../../../components/Footer"


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        padding: "0px",
        fontFamily: "Geller",
        height: "100vh",
        minheight: "800px",
        display:'flex',
        flexDirection:'column'
      },
})); 


const Pupils = () => {
  const classes = useStyles();

  const profileClick = () => {
    console.log('--------------clicked profile-----------')
  }

  const settingClick = () => {
    console.log('--------------clicked setting-----------')
  }

  const logoutClick = () => {
    console.log('--------------clicked logout-----------')
  }
  return (
    <div className={classes.container}>
        <UserHeader/>

        <Settings profileClick={profileClick} settingClick={settingClick} logoutClick={logoutClick}/>
        <PupilContent/> 

        <Footer/> 
    </div>
  );
};

export default Pupils;


