import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PupilRatings from "./pupilRatings"  

  const AntTabs = withStyles({
    indicator: {
      backgroundColor: "#f2f0ed"
    },

  
  })(Tabs);
  
  const SubTab = withStyles({
    root: {
      fontSize: 18,
      fontWeight: 700,
      textTransform: "none",
      color: '#313131',
      width: "13vw",
      height: "5vh",
      //backgroundColor: "#f2f0ed",
      padding: "0px 5px",
      '&:hover':{
      fontWeight: 900,
  
      }

    },
    selected:{  
      
       fontWeight:900,
       backgroundColor:'#03413f',
       borderTopRightRadius:20,
       borderTopLeftRadius:20,
    }  
  })(Tab);



  export default function Book() {

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);

    };
  
  return (
    <div className="min-w-61">
        <AntTabs
          value={value}
          orientation={'horizontal'}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <SubTab label="CALIFICACIONES" />
          <SubTab label="ANOTACIONES" />
          <SubTab label="ASISTENCIA" />
          <SubTab label="LISTA ALUMNOS" />
          <SubTab label="PROFESORES" />

        </AntTabs>
  



      {value===0 && <PupilRatings/>} 
      {/* {value===1 && <Content2/>}
      {value===2 && <Content3/>}
      {value===3 && <Content4/>}
      {value===4 && <Content5/>} */}

    </div>
  );
}