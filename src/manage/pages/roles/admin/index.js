import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import UserHeader from "../../../components/RolesModel/userHeader"
import Settings from "../../../components/RolesModel/settings"
import AdminContent from "../../../components/Admin/adminContent"
import Footer from "../../../components/Footer"


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        padding: "0px",
        fontFamily: "Geller",
        height: "100vh",
        minheight: "800px"
      },
}));
  


const Admin = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        {/* <UserHeader/>
        <Settings/>
        <AdminContent/>
        <Footer/>  */}
    </div>
  );
};

export default Admin;
