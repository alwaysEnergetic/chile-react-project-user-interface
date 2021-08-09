import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
      height: "5vh",
      width: "13vw",
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
    <div>

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
 

      {value===0 && <div> 111 </div>}
      {value===1 && <div> 222 </div>}
      {value===2 && <div> 333 </div>}
      {value===3 && <div> 444 </div>}
      {value===4 && <div> 555 </div>}

    </div>
  );
}