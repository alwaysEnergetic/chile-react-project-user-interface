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
      width: "13vw",
      height: "5vh",
      padding: "2px 5px",
      lineHeight: "98%",
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
          <SubTab label="BUZÓN TAREAS" />
          <SubTab label="MATERIAL COMPLEMENTARIO" />
        </AntTabs>

      {value===0 && <div> 111 </div>}
      {value===1 && <div> 222 </div>}

    </div>
  );
}