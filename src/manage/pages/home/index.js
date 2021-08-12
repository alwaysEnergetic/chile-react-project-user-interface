import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import BeginingSection from "./begining";
import About from "./about";
import Third from "./third";
import Fourth from "./fourth";

const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: theme.palette.primary.main,
      height: '100vh',
      display: 'flex',
      flexDirection:'column'
         },
}));


const Home = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className={classes.container}>
      <Header onChange = {setTabIndex}/>
        {tabIndex===0 && <BeginingSection/>}
        {tabIndex===1 && <About/>}
        {tabIndex===2 &&  <Third/>}
        {tabIndex===3 &&  <Fourth/>}

      
        <Footer/>
  
    </div>
  );
};

export default Home;
