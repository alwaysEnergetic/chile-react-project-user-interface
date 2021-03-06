import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfessorRatings from "../../../components/Professors/professorRatings";
import ProfessorContent from "../../../components/Professors/professorContent";



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

  export default function Professors() {

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

      {value===0 && <ProfessorRatings/>} 
      {value===1 && <ProfessorContent/>}
      
{/* 
      {value===2 && <Content3/>}
      {value===3 && <Content4/>}
      {value===4 && <Content5/>}  */}

    </div>
  );
}